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
/* =========================================================
   TEDKRAFT AI ARTISAN INTERVIEWER
========================================================= */

app.post(
    "/api/interview",
    async (req, res) => {

        try {

            const ai = getGeminiAIClient();

            if (!ai) {
                return res.status(500).json({
                    error: "GEMINI_API_KEY environment variable is missing on the server."
                });
            }

            const productProfile =
                req.body.productProfile &&
                typeof req.body.productProfile === "object"
                    ? req.body.productProfile
                    : {};

            const conversation =
                Array.isArray(req.body.conversation)
                    ? req.body.conversation
                    : [];

            const answer =
                String(req.body.answer || "").trim();


            /* =================================================
               HARD INTERVIEW RULES
            ================================================= */

            const interviewRules = `
You are TEDKRAFT AI Artisan Interviewer.

Your job is to complete a structured product profile for an artisan.

IMPORTANT RULE:
NEVER ask for information that is already known.

Before asking anything, inspect ALL of:
1. CURRENT PRODUCT PROFILE
2. PREVIOUS INTERVIEW QUESTIONS
3. PREVIOUS INTERVIEW ANSWERS
4. LATEST ARTISAN ANSWER

If information is already present in any of those sources,
DO NOT ask for it again.

If one artisan answer contains multiple facts, extract ALL
of those facts before deciding the next question.

Ask ONLY ONE question at a time.

Maximum 3 follow-up questions per interview.

Do not invent facts.

Do not ask questions that are already answered.

Do not ask the same question using slightly different wording.

If enough important information is available, set complete=true
and return an empty question.

PRIORITY:

ESSENTIAL:
- product_name
- material
- craft
- workDays

USEFUL:
- size
- colour
- customization

OPTIONAL / B2B:
- monthlyCapacity
- differentiator

The interview should normally stop once the essential fields
are complete.

Only ask a useful optional field when it would materially
improve the product listing.

Questions must be:
- simple
- short
- natural
- suitable for a low-digital-literacy artisan

Use the language of the existing conversation when clear.

Examples:

If material is known:
DO NOT ask "What material is this?"

If workDays is known:
DO NOT ask "How many days does it take?"

If monthlyCapacity is already known:
DO NOT ask "How many can you make per month?"

If multiple facts are supplied in one answer, update all
corresponding fields before choosing the next question.

MOST IMPORTANT:
Never repeat an already answered question.
`;


            /* =================================================
               LATEST ANSWER
            ================================================= */

            const latestAnswer =
                answer
                    ? `
LATEST ARTISAN ANSWER:
"${answer}"

Extract every useful fact from this answer and merge it
into the existing product profile.
`
                    : `
No new artisan answer has been provided.
`;


            /* =================================================
               GEMINI PROMPT
            ================================================= */

            const prompt = `
${interviewRules}

CURRENT PRODUCT PROFILE:
${JSON.stringify(productProfile, null, 2)}

PREVIOUS INTERVIEW:
${JSON.stringify(conversation, null, 2)}

${latestAnswer}

Now determine the updated product profile.

Then decide:

A. Is another important question actually needed?
OR
B. Is the product profile complete enough?

If another question is needed:
- ask exactly ONE question
- set "complete": false
- set "field" to the field being requested

If no important question is needed:
- set "complete": true
- set "question": ""
- set "field": ""

Return ONLY JSON.
`;


            /* =================================================
               STRUCTURED RESPONSE SCHEMA
            ================================================= */

            const responseSchema = {
                type: "object",

                properties: {

                    question: {
                        type: "string"
                    },

                    field: {
                        type: "string"
                    },

                    complete: {
                        type: "boolean"
                    },

                    updatedProduct: {

                        type: "object",

                        properties: {

                            product_name: {
                                type: "string"
                            },

                            material: {
                                type: "string"
                            },

                            craft: {
                                type: "string"
                            },

                            workDays: {
                                type: "integer"
                            },

                            size: {
                                type: "string"
                            },

                            colour: {
                                type: "string"
                            },

                            customization: {
                                type: "string"
                            },

                            monthlyCapacity: {
                                type: "integer"
                            },

                            differentiator: {
                                type: "string"
                            }

                        },

                        required: [
                            "product_name",
                            "material",
                            "craft",
                            "workDays",
                            "size",
                            "colour",
                            "customization",
                            "monthlyCapacity",
                            "differentiator"
                        ]
                    }
                },

                required: [
                    "question",
                    "field",
                    "complete",
                    "updatedProduct"
                ]
            };


            /* =================================================
               CALL GEMINI
            ================================================= */

            const { result, modelUsed } =
                await generateContentWithRetryAndFallback(
                    ai,
                    prompt,
                    {
                        responseMimeType: "application/json",
                        responseSchema: responseSchema
                    }
                );


            /* =================================================
               PARSE RESPONSE
            ================================================= */

            let interviewData;

            try {

                interviewData =
                    JSON.parse(result.text);

            } catch (jsonError) {

                console.error(
                    "TEDKRAFT interview JSON parse error:",
                    result.text
                );

                return res.status(500).json({
                    error: "Gemini returned invalid interview JSON."
                });
            }


            /* =================================================
               SAFETY CHECK
            ================================================= */

            if (
                !interviewData.complete &&
                !String(
                    interviewData.question || ""
                ).trim()
            ) {

                return res.status(500).json({
                    error: "Interviewer failed to generate a question."
                });
            }


            /* =================================================
               RESPONSE
            ================================================= */

            res.json({

                success: true,

                question:
                    interviewData.question || "",

                field:
                    interviewData.field || "",

                complete:
                    Boolean(
                        interviewData.complete
                    ),

                updatedProduct:
                    interviewData.updatedProduct ||
                    productProfile,

                modelUsed:
                    modelUsed

            });


        } catch (error) {

            console.error(
                "TEDKRAFT AI INTERVIEW ERROR:",
                error
            );

            res.status(500).json({
                error:
                    error.message ||
                    "Failed to generate AI interview question."
            });
        }
    }
);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`TEDKRAFT running at http://localhost:${PORT}`);
});