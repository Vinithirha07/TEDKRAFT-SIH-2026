const express = require("express");
const multer = require("multer");
const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const path = require("path");

const app = express();

// Configure multer for temporary file uploads
const upload = multer({
    dest: "uploads/"
});

// Helper function to safely get Gemini AI client
function getGeminiAIClient() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return null;
    }
    return new GoogleGenAI({ apiKey });
}

/**
 * Resilient helper to execute content generation with retry + Flash model fallback.
 * Flow:
 * Try gemini-3.6-flash -> (if failed/503) wait ~1s -> retry gemini-3.6-flash -> (if failed/503 again) fallback to gemini-2.5-flash / gemini-2.0-flash / gemini-1.5-flash
 */
async function generateContentWithRetryAndFallback(ai, contents, config) {
    const modelsToTry = [
    "gemini-3.8-flash",
    "gemini-3.7-flash",
    "gemini-3.6-flash"
];

    let lastError = null;

    for (const modelName of modelsToTry) {
        console.log(`[TEDKRAFT AI] Attempting generation with model: ${modelName}`);

        // Initial attempt for current model
        try {
            const result = await ai.models.generateContent({
                model: modelName,
                contents: contents,
                config: config
            });
            console.log(`[TEDKRAFT AI] Success using model: ${modelName}`);
            return { result, modelUsed: modelName };
        } catch (err1) {
            console.warn(`[TEDKRAFT AI] Model ${modelName} initial call failed: ${err1.message || err1}`);
            lastError = err1;

            // Wait ~1 second before retrying the same model (or if service overloaded / 503)
            console.log(`[TEDKRAFT AI] Waiting ~1s before retrying...`);
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Retry attempt for current model
            try {
                const resultRetry = await ai.models.generateContent({
                    model: modelName,
                    contents: contents,
                    config: config
                });
                console.log(`[TEDKRAFT AI] Retry succeeded using model: ${modelName}`);
                return { result: resultRetry, modelUsed: modelName };
            } catch (err2) {
                console.warn(`[TEDKRAFT AI] Model ${modelName} retry failed: ${err2.message || err2}. Trying next Flash model fallback...`);
                lastError = err2;
            }
        }
    }

    throw lastError || new Error("All Flash models failed to generate catalogue.");
}

app.use(express.json());
app.use(express.static("."));

/* =========================================================
   GENERATE CATALOGUE API USING GEMINI MULTIMODAL MODEL
========================================================= */

app.post(
    "/api/generate-catalogue",
    upload.single("image"),
    async (req, res) => {
        let imagePath = null;

        try {
            const productText = req.body.productText || "";
            let imageContent = null;

            if (req.file) {
                imagePath = req.file.path;
                const imageBuffer = fs.readFileSync(imagePath);
                const base64Image = imageBuffer.toString("base64");
                const mimeType = req.file.mimetype || "image/jpeg";
                imageContent = {
                    inlineData: {
                        mimeType: mimeType,
                        data: base64Image
                    }
                };
            }

            if (!productText.trim() && !imageContent) {
                return res.status(400).json({
                    error: "Please upload a product photo or provide product description text."
                });
            }

            const ai = getGeminiAIClient();
            if (!ai) {
                return res.status(500).json({
                    error: "GEMINI_API_KEY environment variable is missing on the server. Please configure GEMINI_API_KEY."
                });
            }

            const systemPrompt = `You are TEDKRAFT AI, an expert e-commerce cataloguing assistant for Indian artisans.
Analyze the product photo (if provided) and the artisan's spoken/written description. Perform visual and textual understanding to generate a grounded e-commerce catalogue.

STRICT GROUNDING & TRUTHFULNESS RULES:
1. Never invent facts.
2. Do not invent dimensions, certifications, eco-friendly claims, organic claims, cultural/history claims, or unsupported production details.
3. Use ONLY information directly supported by the artisan text and visible in the image.
4. If a field or detail is missing or unavailable, use null or "Not provided".

Return ONLY valid JSON matching this exact structure:
{
  "title": "Clean professional marketplace title",
  "category": "E-commerce category in uppercase (e.g. HOME DÉCOR, POTTERY, HANDLOOM, WOOD CRAFT, FURNITURE, JEWELLERY, etc.)",
  "material": "Primary material identified or 'Not provided'",
  "craft": "Specific craft/making technique or 'Not provided'",
  "workDays": null,
  "description": "Rich, accurate e-commerce marketplace product description grounded strictly in facts from the text and image",
  "keyFeatures": ["Feature 1", "Feature 2"],
  "suitableUses": ["Suitable use 1"]
}

(Note: workDays should be an integer number of days if specified in text, or null if unknown).`;

            const contents = [];
            
            const userPromptText = `System Instructions:\n${systemPrompt}\n\nArtisan Description:\n"${productText.trim() || 'No description provided.'}"`;
            contents.push(userPromptText);

            if (imageContent) {
                contents.push(imageContent);
            }

            const { result, modelUsed } = await generateContentWithRetryAndFallback(ai, contents, {
                responseMimeType: "application/json"
            });

            const rawText = result.text;
            let catalogueData;

            try {
                catalogueData = JSON.parse(rawText);
            } catch (jsonErr) {
                console.error("Failed to parse Gemini JSON:", rawText);
                return res.status(500).json({
                    error: "Gemini returned invalid JSON structure."
                });
            }

            res.json({
                success: true,
                catalogue: catalogueData,
                modelUsed: modelUsed
            });

        } catch (error) {
            console.error("TEDKRAFT GEMINI CATALOGUE ERROR:", error);
            res.status(500).json({
                error: error.message || "Failed to generate catalogue with Gemini AI."
            });
        } finally {
            if (imagePath && fs.existsSync(imagePath)) {
                try {
                    fs.unlinkSync(imagePath);
                } catch (e) {
                    console.error("Error deleting temp upload file:", e);
                }
            }
        }
    }
);

/* =========================================================
   START SERVER
========================================================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`TEDKRAFT running at http://localhost:${PORT}`);
});