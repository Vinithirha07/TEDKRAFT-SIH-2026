const API_BASE_URL = "https://tedkraft-sih-2026-ub30.onrender.com";

/* =========================================================
   TEDKRAFT JAVASCRIPT
   ORIGINAL FUNCTIONS + LANGUAGE SWITCHING ONLY
========================================================= */


/* =========================================================
   LANGUAGE SWITCHING
========================================================= */

const translations = {

    en: {
        navHome: "Home",
        navProblem: "The Problem",
        navFeatures: "AI Features",
        navWorks: "How It Works",
        navMarket: "Market Linkage",

        ready: "READY TO GROW?",
        tryTedkraft: "TRY TEDKRAFT →",

        eyebrow: "AI-DRIVEN ARTISAN COMMERCE",
        heroLine1: "Your craft.",
        heroLine2: "Your story.",
        heroLine3: "Your market.",
        heroText:
            "TEDKRAFT is an AI-powered virtual business manager designed to help marginalized artisans transform traditional craftsmanship into professional digital businesses.",
        startCreating: "START CREATING →",
        exploreProcess: "EXPLORE THE PROCESS",

        voiceFirst: "VOICE FIRST",
        aiPhotography: "AI PHOTOGRAPHY",
        multilingual: "MULTILINGUAL",
        smartPricing: "SMART PRICING",

        problemTitle: "THE PROBLEM",
        problemIntro:
            "Many artisans have exceptional skills but struggle with key challenges in entering the digital marketplace.",

        poorPhotography: "Poor Product Photography",
        poorPhotographyText:
            "Artisans often struggle to create professional e-commerce photographs.",

        difficultCataloguing: "Difficult Cataloguing",
        difficultCataloguingText:
            "Creating descriptions, categories and product information can be complicated.",

        languageBarriers: "Language Barriers",
        languageBarriersText:
            "Regional-language artisans face difficulties reaching wider markets.",

        pricingUncertainty: "Pricing Uncertainty",
        pricingUncertaintyText:
            "Lack of market information leads to uncertain pricing decisions.",

        limitedMarket: "Limited Market Access",
        limitedMarketText:
            "Dependence on fairs, exhibitions and intermediaries limits year-round opportunities.",

        lowDigital: "Low Digital Literacy",
        lowDigitalText:
            "Existing platforms can be confusing for first-time digital sellers.",

        aiTitle: "TEDKRAFT AI",
        aiIntro:
            "Simple tools that turn traditional craftsmanship into digital opportunity.",

        productStudio: "AI Product Studio",
        productStudioText:
            "Enhance lighting, remove distracting backgrounds and prepare professional product images.",
        tryProductStudio: "TRY PRODUCT STUDIO →",

        voiceCatalogue: "Voice → Catalogue",
        voiceCatalogueText:
            "Speak naturally and let AI extract product information automatically.",

        multilingualAI: "Multilingual AI",
        multilingualAIText:
            "Generate professional listings across regional languages, English and Hindi.",

        fairPrice: "Fair Price Advisor",
        fairPriceText:
            "Understand material cost, labour, market range and demand before deciding your price.",

        demand: "Demand Intelligence",
        demandText:
            "Discover products and categories that are receiving increased market interest.",

        buyerMatching: "AI Buyer Matching",
        buyerMatchingText:
            "Connect artisans with retailers, hotels, corporate buyers and wholesalers.",

        workflowTitle: "HOW IT WORKS",
        workflowIntro:
            "One simple journey from artisan voice to digital market.",

        speak: "SPEAK",
        speakText:
            '"This is a handmade bamboo basket. It took two days."',

        aiUnderstands: "AI UNDERSTANDS",

        catalogue: "CATALOGUE",

        productData: "Product → Basket",
        materialData: "Material → Bamboo",
        timeData: "Time → 2 Days",
        costData: "Cost → ₹300",

        basketTitle: "Handwoven Bamboo Basket",
        basketDescription:
            "Traditional handcrafted product...",
        basketPrice: "₹750 – ₹850",

        marketTitle1: "From craft",
        marketTitle2: "to market.",

        marketText:
            "TEDKRAFT helps artisans discover relevant customers, retailers, hotels, corporate buyers and bulk opportunities.",

        findBuyers: "FIND BUYERS →",

        marketLinkage: "✦ MARKET LINKAGE",

        artisan: "ARTISAN",
        tedkraftAI: "TEDKRAFT AI",
        cataloguePricingMatching:
            "Catalogue • Pricing • Matching",

        hotels: "Hotels",
        corporate: "Corporate",
        retailers: "Retailers",

        finalTitle1: "Traditional skill deserves",
        finalTitle2: "modern opportunity.",

        finalText:
            "AI-powered digital commerce for India's artisans.",

        finalButton: "TRY TEDKRAFT →",

        footerTitle: "TEDKRAFT",

        footerText:
            "AI-Driven Market Linkage and Smart Cataloging for Marginalized Artisans",

        sih: "SIH Problem Statement 26090",

        modalEngine: "TEDKRAFT AI ENGINE",
        createProduct: "CREATE YOUR PRODUCT",

        modalDescription:
            "Speak about your product and upload a photograph.",

        stepVoice: "STEP 01 — VOICE",
        tapSpeak: "TAP TO SPEAK",

        voiceLanguages:
            "Tamil • Hindi • English",

        voiceExample:
            'Example: "This is a handmade bamboo basket..."',

        stepPhoto: "STEP 02 — PHOTO",
        uploadProduct: "UPLOAD PRODUCT",
        imageTypes: "JPG / PNG",

        generatedCatalogue:
            "✦ AI GENERATED CATALOGUE",

        waiting: "WAITING",

        homeDecor: "HOME DÉCOR",

        catalogueProduct:
            "Handwoven Natural Bamboo Storage Basket",

        catalogueDescription:
            "A handcrafted bamboo basket made using traditional weaving techniques.",

        material: "MATERIAL",
        bamboo: "Bamboo",
        craft: "CRAFT",
        handWeaving: "Hand Weaving",
        time: "TIME",
        twoDays: "2 Days",

        generateCatalogue:
            "GENERATE CATALOGUE",

        fairPriceButton:
            "₹ FAIR PRICE",

        fairPriceRange:
            "AI FAIR PRICE RANGE",

        fairPriceExplanation:
            "Based on material cost, labour, comparable products and demand signals."
    },


    ta: {

        navHome: "முகப்பு",
        navProblem: "பிரச்சனை",
        navFeatures: "AI அம்சங்கள்",
        navWorks: "எப்படி செயல்படுகிறது",
        navMarket: "சந்தை இணைப்பு",

        ready: "வளர தயாரா?",
        tryTedkraft: "TEDKRAFT முயற்சிக்கவும் →",

        eyebrow:
            "AI அடிப்படையிலான கைவினை வணிகம்",

        heroLine1: "உங்கள் கலை.",
        heroLine2: "உங்கள் கதை.",
        heroLine3: "உங்கள் சந்தை.",

        heroText:
            "TEDKRAFT என்பது கைவினைஞர்கள் தங்கள் பாரம்பரிய கைவினையை தொழில்முறை டிஜிட்டல் வணிகமாக மாற்ற உதவும் AI அடிப்படையிலான மெய்நிகர் வணிக மேலாளர்.",

        startCreating:
            "உருவாக்கத் தொடங்குங்கள் →",

        exploreProcess:
            "செயல்முறையைப் பார்க்கவும்",

        voiceFirst: "குரல் மூலம்",
        aiPhotography: "AI புகைப்படம்",
        multilingual: "பல மொழிகள்",
        smartPricing: "ஸ்மார்ட் விலை",

        problemTitle: "பிரச்சனை",

        problemIntro:
            "பல கைவினைஞர்களுக்கு சிறந்த திறன்கள் இருந்தாலும் டிஜிட்டல் சந்தையில் நுழைவதில் பல சவால்கள் உள்ளன.",

        poorPhotography:
            "மோசமான தயாரிப்பு புகைப்படம்",

        poorPhotographyText:
            "தொழில்முறை இ-காமர்ஸ் புகைப்படங்களை உருவாக்குவது கடினமாக உள்ளது.",

        difficultCataloguing:
            "கடினமான பட்டியலிடல்",

        difficultCataloguingText:
            "விளக்கங்கள், வகைகள் மற்றும் தயாரிப்பு தகவல்களை உருவாக்குவது சிக்கலாக இருக்கலாம்.",

        languageBarriers:
            "மொழித் தடைகள்",

        languageBarriersText:
            "பிராந்திய மொழி பேசும் கைவினைஞர்கள் பரந்த சந்தைகளை அடைவதில் சிரமப்படுகின்றனர்.",

        pricingUncertainty:
            "விலை நிர்ணய நிச்சயமின்மை",

        pricingUncertaintyText:
            "சந்தை தகவல் இல்லாததால் விலை நிர்ணய முடிவுகள் நிச்சயமற்றதாகின்றன.",

        limitedMarket:
            "குறைந்த சந்தை அணுகல்",

        limitedMarketText:
            "கண்காட்சிகள் மற்றும் இடைத்தரகர்களை சார்ந்திருப்பது ஆண்டு முழுவதும் கிடைக்கும் வாய்ப்புகளை குறைக்கிறது.",

        lowDigital:
            "குறைந்த டிஜிட்டல் அறிவு",

        lowDigitalText:
            "முதல் முறையாக டிஜிட்டல் விற்பனை செய்பவர்களுக்கு தற்போதைய தளங்கள் குழப்பமாக இருக்கலாம்.",

        aiTitle: "TEDKRAFT AI",

        aiIntro:
            "பாரம்பரிய கைவினையை டிஜிட்டல் வாய்ப்பாக மாற்றும் எளிய கருவிகள்.",

        productStudio:
            "AI தயாரிப்பு ஸ்டுடியோ",

        productStudioText:
            "ஒளியை மேம்படுத்தி, தேவையற்ற பின்னணியை அகற்றி, தொழில்முறை தயாரிப்பு புகைப்படங்களை உருவாக்குங்கள்.",

        tryProductStudio:
            "தயாரிப்பு ஸ்டுடியோவை முயற்சிக்கவும் →",

        voiceCatalogue:
            "குரல் → பட்டியல்",

        voiceCatalogueText:
            "இயல்பாகப் பேசுங்கள்; AI தயாரிப்பு தகவல்களை தானாகப் பிரித்தெடுக்கும்.",

        multilingualAI:
            "பலமொழி AI",

        multilingualAIText:
            "பிராந்திய மொழிகள், ஆங்கிலம் மற்றும் இந்தியில் தொழில்முறை பட்டியல்களை உருவாக்குங்கள்.",

        fairPrice:
            "நியாயமான விலை ஆலோசகர்",

        fairPriceText:
            "விலையை நிர்ணயிப்பதற்கு முன் பொருள் செலவு, உழைப்பு, சந்தை வரம்பு மற்றும் தேவையைப் புரிந்துகொள்ளுங்கள்.",

        demand:
            "தேவை நுண்ணறிவு",

        demandText:
            "சந்தையில் அதிகரித்து வரும் ஆர்வம் கொண்ட தயாரிப்புகள் மற்றும் வகைகளை கண்டறியுங்கள்.",

        buyerMatching:
            "AI வாங்குபவர் பொருத்தம்",

        buyerMatchingText:
            "கைவினைஞர்களை சில்லறை விற்பனையாளர்கள், ஹோட்டல்கள், நிறுவன வாங்குபவர்கள் மற்றும் மொத்த விற்பனையாளர்களுடன் இணைக்கவும்.",

        workflowTitle:
            "எப்படி செயல்படுகிறது",

        workflowIntro:
            "கைவினைஞரின் குரலில் இருந்து டிஜிட்டல் சந்தை வரை ஒரு எளிய பயணம்.",

        speak:
            "பேசுங்கள்",

        speakText:
            '"இது கையால் செய்யப்பட்ட மூங்கில் கூடை. இதை செய்ய இரண்டு நாட்கள் ஆனது."',

        aiUnderstands:
            "AI புரிந்துகொள்கிறது",

        catalogue:
            "பட்டியல்",

        productData:
            "தயாரிப்பு → கூடை",

        materialData:
            "பொருள் → மூங்கில்",

        timeData:
            "நேரம் → 2 நாட்கள்",

        costData:
            "செலவு → ₹300",

        basketTitle:
            "கையால் நெய்யப்பட்ட மூங்கில் கூடை",

        basketDescription:
            "பாரம்பரியமாக கையால் செய்யப்பட்ட தயாரிப்பு...",

        basketPrice:
            "₹750 – ₹850",

        marketTitle1:
            "கைவினையிலிருந்து",

        marketTitle2:
            "சந்தைக்கு.",

        marketText:
            "TEDKRAFT கைவினைஞர்கள் தொடர்புடைய வாடிக்கையாளர்கள், சில்லறை விற்பனையாளர்கள், ஹோட்டல்கள், நிறுவன வாங்குபவர்கள் மற்றும் மொத்த வாய்ப்புகளை கண்டறிய உதவுகிறது.",

        findBuyers:
            "வாங்குபவர்களைக் கண்டறியவும் →",

        marketLinkage:
            "✦ சந்தை இணைப்பு",

        artisan:
            "கைவினைஞர்",

        tedkraftAI:
            "TEDKRAFT AI",

        cataloguePricingMatching:
            "பட்டியல் • விலை • பொருத்தம்",

        hotels:
            "ஹோட்டல்கள்",

        corporate:
            "நிறுவனங்கள்",

        retailers:
            "சில்லறை விற்பனையாளர்கள்",

        finalTitle1:
            "பாரம்பரிய திறமைக்கு",

        finalTitle2:
            "நவீன வாய்ப்பு தேவை.",

        finalText:
            "இந்திய கைவினைஞர்களுக்கான AI அடிப்படையிலான டிஜிட்டல் வணிகம்.",

        finalButton:
            "TEDKRAFT முயற்சிக்கவும் →",

        footerTitle:
            "TEDKRAFT",

        footerText:
            "கைவினைஞர்களுக்கான AI அடிப்படையிலான சந்தை இணைப்பு மற்றும் ஸ்மார்ட் பட்டியலிடல்",

        sih:
            "SIH பிரச்சனை அறிக்கை 26090",

        modalEngine:
            "TEDKRAFT AI ENGINE",

        createProduct:
            "உங்கள் தயாரிப்பை உருவாக்குங்கள்",

        modalDescription:
            "உங்கள் தயாரிப்பைப் பற்றி பேசுங்கள் மற்றும் புகைப்படத்தைப் பதிவேற்றுங்கள்.",

        stepVoice:
            "படி 01 — குரல்",

        tapSpeak:
            "பேச தட்டவும்",

        voiceLanguages:
            "தமிழ் • இந்தி • ஆங்கிலம்",

        voiceExample:
            'உதாரணம்: "இது கையால் செய்யப்பட்ட மூங்கில் கூடை..."',

        stepPhoto:
            "படி 02 — புகைப்படம்",

        uploadProduct:
            "தயாரிப்பைப் பதிவேற்றவும்",

        imageTypes:
            "JPG / PNG",

        generatedCatalogue:
            "✦ AI உருவாக்கிய பட்டியல்",

        waiting:
            "காத்திருக்கிறது",

        homeDecor:
            "வீட்டு அலங்காரம்",

        catalogueProduct:
            "கையால் நெய்யப்பட்ட இயற்கை மூங்கில் சேமிப்பு கூடை",

        catalogueDescription:
            "பாரம்பரிய நெசவு முறைகளைப் பயன்படுத்தி கையால் செய்யப்பட்ட மூங்கில் கூடை.",

        material:
            "பொருள்",

        bamboo:
            "மூங்கில்",

        craft:
            "கைவினை",

        handWeaving:
            "கையால் நெய்தல்",

        time:
            "நேரம்",

        twoDays:
            "2 நாட்கள்",

        generateCatalogue:
            "பட்டியலை உருவாக்கவும்",

        fairPriceButton:
            "₹ நியாயமான விலை",

        fairPriceRange:
            "AI நியாயமான விலை வரம்பு",

        fairPriceExplanation:
            "பொருள் செலவு, உழைப்பு, ஒப்பிடக்கூடிய தயாரிப்புகள் மற்றும் தேவை அடிப்படையில்."
    },


    hi: {

        navHome: "होम",
        navProblem: "समस्या",
        navFeatures: "AI सुविधाएँ",
        navWorks: "यह कैसे काम करता है",
        navMarket: "बाज़ार संपर्क",

        ready: "बढ़ने के लिए तैयार?",
        tryTedkraft: "TEDKRAFT आज़माएँ →",

        eyebrow:
            "AI आधारित कारीगर वाणिज्य",

        heroLine1:
            "आपकी कला।",

        heroLine2:
            "आपकी कहानी।",

        heroLine3:
            "आपका बाज़ार।",

        heroText:
            "TEDKRAFT एक AI आधारित वर्चुअल बिज़नेस मैनेजर है जो कारीगरों को पारंपरिक कारीगरी को पेशेवर डिजिटल व्यवसाय में बदलने में मदद करता है।",

        startCreating:
            "बनाना शुरू करें →",

        exploreProcess:
            "प्रक्रिया देखें",

        voiceFirst:
            "वॉइस फर्स्ट",

        aiPhotography:
            "AI फोटोग्राफी",

        multilingual:
            "बहुभाषी",

        smartPricing:
            "स्मार्ट मूल्य",

        problemTitle:
            "समस्या",

        problemIntro:
            "कई कारीगरों के पास शानदार कौशल है, लेकिन डिजिटल बाज़ार में प्रवेश करने में उन्हें कई चुनौतियों का सामना करना पड़ता है।",

        poorPhotography:
            "खराब उत्पाद फोटोग्राफी",

        poorPhotographyText:
            "कारीगरों के लिए पेशेवर ई-कॉमर्स तस्वीरें बनाना कठिन होता है।",

        difficultCataloguing:
            "मुश्किल कैटलॉगिंग",

        difficultCataloguingText:
            "विवरण, श्रेणियाँ और उत्पाद जानकारी बनाना जटिल हो सकता है।",

        languageBarriers:
            "भाषा की बाधाएँ",

        languageBarriersText:
            "क्षेत्रीय भाषा बोलने वाले कारीगर बड़े बाज़ारों तक पहुँचने में कठिनाई महसूस करते हैं।",

        pricingUncertainty:
            "मूल्य निर्धारण की अनिश्चितता",

        pricingUncertaintyText:
            "बाज़ार की जानकारी की कमी से मूल्य निर्धारण के निर्णय अनिश्चित हो जाते हैं।",

        limitedMarket:
            "सीमित बाज़ार पहुँच",

        limitedMarketText:
            "मेलों, प्रदर्शनियों और बिचौलियों पर निर्भरता साल भर के अवसरों को सीमित करती है।",

        lowDigital:
            "कम डिजिटल साक्षरता",

        lowDigitalText:
            "पहली बार डिजिटल बिक्री करने वालों के लिए मौजूदा प्लेटफॉर्म भ्रमित करने वाले हो सकते हैं।",

        aiTitle:
            "TEDKRAFT AI",

        aiIntro:
            "पारंपरिक कारीगरी को डिजिटल अवसर में बदलने वाले सरल उपकरण।",

        productStudio:
            "AI प्रोडक्ट स्टूडियो",

        productStudioText:
            "रोशनी बेहतर करें, अनचाहे बैकग्राउंड हटाएँ और पेशेवर उत्पाद तस्वीरें तैयार करें।",

        tryProductStudio:
            "प्रोडक्ट स्टूडियो आज़माएँ →",

        voiceCatalogue:
            "वॉइस → कैटलॉग",

        voiceCatalogueText:
            "स्वाभाविक रूप से बोलें और AI को उत्पाद की जानकारी अपने आप निकालने दें।",

        multilingualAI:
            "बहुभाषी AI",

        multilingualAIText:
            "क्षेत्रीय भाषाओं, अंग्रेज़ी और हिंदी में पेशेवर लिस्टिंग बनाएँ।",

        fairPrice:
            "उचित मूल्य सलाहकार",

        fairPriceText:
            "कीमत तय करने से पहले सामग्री लागत, श्रम, बाज़ार सीमा और मांग को समझें।",

        demand:
            "डिमांड इंटेलिजेंस",

        demandText:
            "उन उत्पादों और श्रेणियों को खोजें जिनमें बाज़ार की रुचि बढ़ रही है।",

        buyerMatching:
            "AI खरीदार मिलान",

        buyerMatchingText:
            "कारीगरों को रिटेलर, होटल, कॉर्पोरेट खरीदार और थोक विक्रेताओं से जोड़ें.",

        workflowTitle:
            "यह कैसे काम करता है",

        workflowIntro:
            "कारीगर की आवाज़ से डिजिटल बाज़ार तक एक सरल यात्रा।",

        speak:
            "बोलें",

        speakText:
            '"यह हाथ से बनी बाँस की टोकरी है। इसे बनाने में दो दिन लगे।"',

        aiUnderstands:
            "AI समझता है",

        catalogue:
            "कैटलॉग",

        productData:
            "उत्पाद → टोकरी",

        materialData:
            "सामग्री → बाँस",

        timeData:
            "समय → 2 दिन",

        costData:
            "लागत → ₹300",

        basketTitle:
            "हाथ से बुनी बाँस की टोकरी",

        basketDescription:
            "पारंपरिक तरीके से बनाया गया हस्तनिर्मित उत्पाद...",

        basketPrice:
            "₹750 – ₹850",

        marketTitle1:
            "कारीगरी से",

        marketTitle2:
            "बाज़ार तक।",

        marketText:
            "TEDKRAFT कारीगरों को संबंधित ग्राहक, रिटेलर, होटल, कॉर्पोरेट खरीदार और थोक अवसर खोजने में मदद करता है।",

        findBuyers:
            "खरीदार खोजें →",

        marketLinkage:
            "✦ बाज़ार संपर्क",

        artisan:
            "कारीगर",

        tedkraftAI:
            "TEDKRAFT AI",

        cataloguePricingMatching:
            "कैटलॉग • मूल्य • मिलान",

        hotels:
            "होटल",

        corporate:
            "कॉर्पोरेट",

        retailers:
            "रिटेलर",

        finalTitle1:
            "पारंपरिक कौशल को",

        finalTitle2:
            "आधुनिक अवसर मिलना चाहिए।",

        finalText:
            "भारत के कारीगरों के लिए AI आधारित डिजिटल कॉमर्स।",

        finalButton:
            "TEDKRAFT आज़माएँ →",

        footerTitle:
            "TEDKRAFT",

        footerText:
            "कारीगरों के लिए AI आधारित बाज़ार संपर्क और स्मार्ट कैटलॉगिंग",

        sih:
            "SIH समस्या विवरण 26090",

        modalEngine:
            "TEDKRAFT AI ENGINE",

        createProduct:
            "अपना उत्पाद बनाएँ",

        modalDescription:
            "अपने उत्पाद के बारे में बोलें और एक फोटो अपलोड करें।",

        stepVoice:
            "चरण 01 — वॉइस",

        tapSpeak:
            "बोलने के लिए टैप करें",

        voiceLanguages:
            "तमिल • हिंदी • अंग्रेज़ी",

        voiceExample:
            'उदाहरण: "यह हाथ से बनी बाँस की टोकरी है..."',

        stepPhoto:
            "चरण 02 — फोटो",

        uploadProduct:
            "उत्पाद अपलोड करें",

        imageTypes:
            "JPG / PNG",

        generatedCatalogue:
            "✦ AI द्वारा बनाया गया कैटलॉग",

        waiting:
            "प्रतीक्षा",

        homeDecor:
            "होम डेकोर",

        catalogueProduct:
            "हाथ से बुनी प्राकृतिक बाँस की स्टोरेज टोकरी",

        catalogueDescription:
            "पारंपरिक बुनाई तकनीकों से बनाई गई हाथ से तैयार बाँस की टोकरी।",

        material:
            "सामग्री",

        bamboo:
            "बाँस",

        craft:
            "कारीगरी",

        handWeaving:
            "हाथ से बुनाई",

        time:
            "समय",

        twoDays:
            "2 दिन",

        generateCatalogue:
            "कैटलॉग बनाएँ",

        fairPriceButton:
            "₹ उचित मूल्य",

        fairPriceRange:
            "AI उचित मूल्य सीमा",

        fairPriceExplanation:
            "सामग्री लागत, श्रम, समान उत्पादों और मांग के आधार पर।"
    },


    kn: {

        navHome: "ಮುಖಪುಟ",
        navProblem: "ಸಮಸ್ಯೆ",
        navFeatures: "AI ವೈಶಿಷ್ಟ್ಯಗಳು",
        navWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        navMarket: "ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕ",

        ready: "ಬೆಳೆಯಲು ಸಿದ್ಧವೇ?",
        tryTedkraft: "TEDKRAFT ಪ್ರಯತ್ನಿಸಿ →",

        eyebrow:
            "AI ಆಧಾರಿತ ಕರಕುಶಲ ವಾಣಿಜ್ಯ",

        heroLine1:
            "ನಿಮ್ಮ ಕಲೆ.",

        heroLine2:
            "ನಿಮ್ಮ ಕಥೆ.",

        heroLine3:
            "ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆ.",

        heroText:
            "TEDKRAFT ಕರಕುಶಲಗಾರರು ತಮ್ಮ ಸಾಂಪ್ರದಾಯಿಕ ಕೌಶಲ್ಯವನ್ನು ವೃತ್ತಿಪರ ಡಿಜಿಟಲ್ ವ್ಯವಹಾರವಾಗಿ ಪರಿವರ್ತಿಸಲು ಸಹಾಯ ಮಾಡುವ AI ಆಧಾರಿತ ವರ್ಚುವಲ್ ಬಿಸಿನೆಸ್ ಮ್ಯಾನೇಜರ್.",

        startCreating:
            "ರಚಿಸಲು ಪ್ರಾರಂಭಿಸಿ →",

        exploreProcess:
            "ಪ್ರಕ್ರಿಯೆಯನ್ನು ನೋಡಿ",

        voiceFirst:
            "ಧ್ವನಿ ಮೊದಲು",

        aiPhotography:
            "AI ಛಾಯಾಗ್ರಹಣ",

        multilingual:
            "ಬಹುಭಾಷಾ",

        smartPricing:
            "ಸ್ಮಾರ್ಟ್ ಬೆಲೆ",

        problemTitle:
            "ಸಮಸ್ಯೆ",

        problemIntro:
            "ಅನೇಕ ಕರಕುಶಲಗಾರರು ಅತ್ಯುತ್ತಮ ಕೌಶಲ್ಯ ಹೊಂದಿದ್ದರೂ ಡಿಜಿಟಲ್ ಮಾರುಕಟ್ಟೆಗೆ ಪ್ರವೇಶಿಸುವಲ್ಲಿ ಹಲವಾರು ಸವಾಲುಗಳನ್ನು ಎದುರಿಸುತ್ತಾರೆ.",

        poorPhotography:
            "ಕಳಪೆ ಉತ್ಪನ್ನ ಛಾಯಾಗ್ರಹಣ",

        poorPhotographyText:
            "ವೃತ್ತಿಪರ ಇ-ಕಾಮರ್ಸ್ ಚಿತ್ರಗಳನ್ನು ರಚಿಸುವುದು ಕಷ್ಟವಾಗಬಹುದು.",

        difficultCataloguing:
            "ಕಷ್ಟಕರ ಕ್ಯಾಟಲಾಗಿಂಗ್",

        difficultCataloguingText:
            "ವಿವರಣೆಗಳು, ವರ್ಗಗಳು ಮತ್ತು ಉತ್ಪನ್ನ ಮಾಹಿತಿಯನ್ನು ರಚಿಸುವುದು ಸಂಕೀರ್ಣವಾಗಬಹುದು.",

        languageBarriers:
            "ಭಾಷಾ ಅಡೆತಡೆಗಳು",

        languageBarriersText:
            "ಪ್ರಾದೇಶಿಕ ಭಾಷೆಯ ಕರಕುಶಲಗಾರರು ವಿಶಾಲ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ತಲುಪಲು ಕಷ್ಟಪಡುತ್ತಾರೆ.",

        pricingUncertainty:
            "ಬೆಲೆ ನಿಗದಿಯ ಅನಿಶ್ಚಿತತೆ",

        pricingUncertaintyText:
            "ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿಯ ಕೊರತೆಯಿಂದ ಬೆಲೆ ನಿರ್ಧಾರಗಳು ಅನಿಶ್ಚಿತವಾಗುತ್ತವೆ.",

        limitedMarket:
            "ಸೀಮಿತ ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶ",

        limitedMarketText:
            "ಮೇಳಗಳು, ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಮಧ್ಯವರ್ತಿಗಳ ಮೇಲಿನ ಅವಲಂಬನೆ ವರ್ಷಪೂರ್ತಿ ಅವಕಾಶಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",

        lowDigital:
            "ಕಡಿಮೆ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ",

        lowDigitalText:
            "ಮೊದಲ ಬಾರಿಗೆ ಡಿಜಿಟಲ್ ಮಾರಾಟ ಮಾಡುವವರಿಗೆ ಪ್ರಸ್ತುತ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ಗೊಂದಲಕಾರಿಯಾಗಬಹುದು.",

        aiTitle:
            "TEDKRAFT AI",

        aiIntro:
            "ಸಾಂಪ್ರದಾಯಿಕ ಕರಕುಶಲತೆಯನ್ನು ಡಿಜಿಟಲ್ ಅವಕಾಶವಾಗಿ ಪರಿವರ್ತಿಸುವ ಸರಳ ಸಾಧನಗಳು.",

        productStudio:
            "AI ಉತ್ಪನ್ನ ಸ್ಟುಡಿಯೋ",

        productStudioText:
            "ಬೆಳಕನ್ನು ಸುಧಾರಿಸಿ, ಅನಗತ್ಯ ಹಿನ್ನೆಲೆಯನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ವೃತ್ತಿಪರ ಉತ್ಪನ್ನ ಚಿತ್ರಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ.",

        tryProductStudio:
            "ಉತ್ಪನ್ನ ಸ್ಟುಡಿಯೋ ಪ್ರಯತ್ನಿಸಿ →",

        voiceCatalogue:
            "ಧ್ವನಿ → ಕ್ಯಾಟಲಾಗ್",

        voiceCatalogueText:
            "ಸಹಜವಾಗಿ ಮಾತನಾಡಿ ಮತ್ತು AI ಉತ್ಪನ್ನ ಮಾಹಿತಿಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹೊರತೆಗೆಯಲಿ.",

        multilingualAI:
            "ಬಹುಭಾಷಾ AI",

        multilingualAIText:
            "ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಹಿಂದಿಯಲ್ಲಿ ವೃತ್ತಿಪರ ಪಟ್ಟಿಗಳನ್ನು ರಚಿಸಿ.",

        fairPrice:
            "ನ್ಯಾಯಯುತ ಬೆಲೆ ಸಲಹೆಗಾರ",

        fairPriceText:
            "ಬೆಲೆ ನಿರ್ಧರಿಸುವ ಮೊದಲು ವಸ್ತು ವೆಚ್ಚ, ಕಾರ್ಮಿಕ ವೆಚ್ಚ, ಮಾರುಕಟ್ಟೆ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಬೇಡಿಕೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",

        demand:
            "ಬೇಡಿಕೆ ನುಡಿಜ್ಞಾನ",

        demandText:
            "ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಹೆಚ್ಚುತ್ತಿರುವ ಆಸಕ್ತಿ ಇರುವ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ವರ್ಗಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",

        buyerMatching:
            "AI ಖರೀದಿದಾರ ಹೊಂದಾಣಿಕೆ",

        buyerMatchingText:
            "ಕರಕುಶಲಗಾರರನ್ನು ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು, ಹೋಟೆಲ್‌ಗಳು, ಕಾರ್ಪೊರೇಟ್ ಖರೀದಿದಾರರು ಮತ್ತು ಸಗಟು ವ್ಯಾಪಾರಿಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ.",

        workflowTitle:
            "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",

        workflowIntro:
            "ಕರಕುಶಲಗಾರರ ಧ್ವನಿಯಿಂದ ಡಿಜಿಟಲ್ ಮಾರುಕಟ್ಟೆಯವರೆಗೆ ಒಂದು ಸರಳ ಪ್ರಯಾಣ.",

        speak:
            "ಮಾತನಾಡಿ",

        speakText:
            '"ಇದು ಕೈಯಿಂದ ಮಾಡಿದ ಬಿದಿರಿನ ಬುಟ್ಟಿ. ಇದನ್ನು ಮಾಡಲು ಎರಡು ದಿನಗಳು ಬೇಕಾಯಿತು."',

        aiUnderstands:
            "AI ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ",

        catalogue:
            "ಕ್ಯಾಟಲಾಗ್",

        productData:
            "ಉತ್ಪನ್ನ → ಬುಟ್ಟಿ",

        materialData:
            "ವಸ್ತು → ಬಿದಿರು",

        timeData:
            "ಸಮಯ → 2 ದಿನಗಳು",

        costData:
            "ವೆಚ್ಚ → ₹300",

        basketTitle:
            "ಕೈಯಿಂದ ನೇಯ್ದ ಬಿದಿರಿನ ಬುಟ್ಟಿ",

        basketDescription:
            "ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಉತ್ಪನ್ನ...",

        basketPrice:
            "₹750 – ₹850",

        marketTitle1:
            "ಕರಕುಶಲತೆಯಿಂದ",

        marketTitle2:
            "ಮಾರುಕಟ್ಟೆಗೆ.",

        marketText:
            "TEDKRAFT ಕರಕುಶಲಗಾರರಿಗೆ ಸಂಬಂಧಿತ ಗ್ರಾಹಕರು, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು, ಹೋಟೆಲ್‌ಗಳು, ಕಾರ್ಪೊರೇಟ್ ಖರೀದಿದಾರರು ಮತ್ತು ಸಗಟು ಅವಕಾಶಗಳನ್ನು ಕಂಡುಹಿಡಿಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",

        findBuyers:
            "ಖರೀದಿದಾರರನ್ನು ಹುಡುಕಿ →",

        marketLinkage:
            "✦ ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕ",

        artisan:
            "ಕರಕುಶಲಗಾರ",

        tedkraftAI:
            "TEDKRAFT AI",

        cataloguePricingMatching:
            "ಕ್ಯಾಟಲಾಗ್ • ಬೆಲೆ • ಹೊಂದಾಣಿಕೆ",

        hotels:
            "ಹೋಟೆಲ್‌ಗಳು",

        corporate:
            "ಕಾರ್ಪೊರೇಟ್",

        retailers:
            "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು",

        finalTitle1:
            "ಸಾಂಪ್ರದಾಯಿಕ ಕೌಶಲ್ಯಕ್ಕೆ",

        finalTitle2:
            "ಆಧುನಿಕ ಅವಕಾಶ ಸಿಗಬೇಕು.",

        finalText:
            "ಭಾರತದ ಕರಕುಶಲಗಾರರಿಗಾಗಿ AI ಆಧಾರಿತ ಡಿಜಿಟಲ್ ವಾಣಿಜ್ಯ.",

        finalButton:
            "TEDKRAFT ಪ್ರಯತ್ನಿಸಿ →",

        footerTitle:
            "TEDKRAFT",

        footerText:
            "ಕರಕುಶಲಗಾರರಿಗಾಗಿ AI ಆಧಾರಿತ ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಕ್ಯಾಟಲಾಗಿಂಗ್",

        sih:
            "SIH ಸಮಸ್ಯೆ ಹೇಳಿಕೆ 26090",

        modalEngine:
            "TEDKRAFT AI ENGINE",

        createProduct:
            "ನಿಮ್ಮ ಉತ್ಪನ್ನವನ್ನು ರಚಿಸಿ",

        modalDescription:
            "ನಿಮ್ಮ ಉತ್ಪನ್ನದ ಬಗ್ಗೆ ಮಾತನಾಡಿ ಮತ್ತು ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",

        stepVoice:
            "ಹಂತ 01 — ಧ್ವನಿ",

        tapSpeak:
            "ಮಾತನಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ",

        voiceLanguages:
            "ತಮಿಳು • ಹಿಂದಿ • ಇಂಗ್ಲಿಷ್",

        voiceExample:
            'ಉದಾಹರಣೆ: "ಇದು ಕೈಯಿಂದ ಮಾಡಿದ ಬಿದಿರಿನ ಬುಟ್ಟಿ..."',

        stepPhoto:
            "ಹಂತ 02 — ಫೋಟೋ",

        uploadProduct:
            "ಉತ್ಪನ್ನ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",

        imageTypes:
            "JPG / PNG",

        generatedCatalogue:
            "✦ AI ರಚಿಸಿದ ಕ್ಯಾಟಲಾಗ್",

        waiting:
            "ಕಾಯುತ್ತಿದೆ",

        homeDecor:
            "ಮನೆ ಅಲಂಕಾರ",

        catalogueProduct:
            "ಕೈಯಿಂದ ನೇಯ್ದ ನೈಸರ್ಗಿಕ ಬಿದಿರಿನ ಸಂಗ್ರಹ ಬುಟ್ಟಿ",

        catalogueDescription:
            "ಸಾಂಪ್ರದಾಯಿಕ ನೇಯ್ಗೆ ತಂತ್ರಗಳನ್ನು ಬಳಸಿ ಕೈಯಿಂದ ತಯಾರಿಸಿದ ಬಿದಿರಿನ ಬುಟ್ಟಿ.",

        material:
            "ವಸ್ತು",

        bamboo:
            "ಬಿದಿರು",

        craft:
            "ಕರಕುಶಲ",

        handWeaving:
            "ಕೈ ನೇಯ್ಗೆ",

        time:
            "ಸಮಯ",

        twoDays:
            "2 ದಿನಗಳು",

        generateCatalogue:
            "ಕ್ಯಾಟಲಾಗ್ ರಚಿಸಿ",

        fairPriceButton:
            "₹ ನ್ಯಾಯಯುತ ಬೆಲೆ",

        fairPriceRange:
            "AI ನ್ಯಾಯಯುತ ಬೆಲೆ ಶ್ರೇಣಿ",

        fairPriceExplanation:
            "ವಸ್ತು ವೆಚ್ಚ, ಕಾರ್ಮಿಕ ವೆಚ್ಚ, ಹೋಲಿಸಬಹುದಾದ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಬೇಡಿಕೆಯ ಆಧಾರದ ಮೇಲೆ."
    },


    te: {

        navHome: "హోమ్",
        navProblem: "సమస్య",
        navFeatures: "AI ఫీచర్లు",
        navWorks: "ఎలా పనిచేస్తుంది",
        navMarket: "మార్కెట్ కనెక్షన్",

        ready: "వృద్ధికి సిద్ధమా?",
        tryTedkraft: "TEDKRAFT ప్రయత్నించండి →",

        eyebrow:
            "AI ఆధారిత కళాకారుల వాణిజ్యం",

        heroLine1:
            "మీ కళ.",

        heroLine2:
            "మీ కథ.",

        heroLine3:
            "మీ మార్కెట్.",

        heroText:
            "TEDKRAFT అనేది కళాకారులు తమ సంప్రదాయ నైపుణ్యాన్ని ప్రొఫెషనల్ డిజిటల్ వ్యాపారంగా మార్చడానికి సహాయపడే AI ఆధారిత వర్చువల్ బిజినెస్ మేనేజర్.",

        startCreating:
            "సృష్టించడం ప్రారంభించండి →",

        exploreProcess:
            "ప్రక్రియను చూడండి",

        voiceFirst:
            "వాయిస్ ఫస్ట్",

        aiPhotography:
            "AI ఫోటోగ్రఫీ",

        multilingual:
            "బహుభాషా",

        smartPricing:
            "స్మార్ట్ ధర",

        problemTitle:
            "సమస్య",

        problemIntro:
            "చాలా మంది కళాకారులకు అద్భుతమైన నైపుణ్యాలు ఉన్నప్పటికీ డిజిటల్ మార్కెట్‌లోకి ప్రవేశించడంలో అనేక సవాళ్లు ఉన్నాయి.",

        poorPhotography:
            "తక్కువ నాణ్యత ఉత్పత్తి ఫోటోగ్రఫీ",

        poorPhotographyText:
            "ప్రొఫెషనల్ ఈ-కామర్స్ ఫోటోలను రూపొందించడం కళాకారులకు కష్టంగా ఉంటుంది.",

        difficultCataloguing:
            "కష్టమైన క్యాటలాగింగ్",

        difficultCataloguingText:
            "వివరణలు, వర్గాలు మరియు ఉత్పత్తి సమాచారాన్ని సృష్టించడం క్లిష్టంగా ఉంటుంది.",

        languageBarriers:
            "భాషా అడ్డంకులు",

        languageBarriersText:
            "ప్రాంతీయ భాష మాట్లాడే కళాకారులు విస్తృత మార్కెట్లను చేరుకోవడంలో ఇబ్బంది పడతారు.",

        pricingUncertainty:
            "ధర నిర్ణయ అనిశ్చితి",

        pricingUncertaintyText:
            "మార్కెట్ సమాచారం లేకపోవడం వల్ల ధర నిర్ణయాలు అనిశ్చితంగా మారుతాయి.",

        limitedMarket:
            "పరిమిత మార్కెట్ ప్రాప్యత",

        limitedMarketText:
            "మేళాలు, ప్రదర్శనలు మరియు మధ్యవర్తులపై ఆధారపడటం ఏడాది పొడవునా అవకాశాలను పరిమితం చేస్తుంది.",

        lowDigital:
            "తక్కువ డిజిటల్ అక్షరాస్యత",

        lowDigitalText:
            "మొదటిసారి డిజిటల్‌గా అమ్మేవారికి ప్రస్తుత ప్లాట్‌ఫారమ్‌లు గందరగోళంగా ఉండవచ్చు.",

        aiTitle:
            "TEDKRAFT AI",

        aiIntro:
            "సంప్రదాయ హస్తకళను డిజిటల్ అవకాశంగా మార్చే సరళమైన సాధనాలు.",

        productStudio:
            "AI ప్రొడక్ట్ స్టూడియో",

        productStudioText:
            "లైటింగ్‌ను మెరుగుపరచండి, అవసరం లేని బ్యాక్‌గ్రౌండ్‌ను తొలగించండి మరియు ప్రొఫెషనల్ ఉత్పత్తి ఫోటోలను సిద్ధం చేయండి.",

        tryProductStudio:
            "ప్రొడక్ట్ స్టూడియో ప్రయత్నించండి →",

        voiceCatalogue:
            "వాయిస్ → క్యాటలాగ్",

        voiceCatalogueText:
            "సహజంగా మాట్లాడండి మరియు AI ఉత్పత్తి సమాచారాన్ని స్వయంచాలకంగా తీసుకోనివ్వండి.",

        multilingualAI:
            "బహుభాషా AI",

        multilingualAIText:
            "ప్రాంతీయ భాషలు, ఇంగ్లీష్ మరియు హిందీలో ప్రొఫెషనల్ లిస్టింగ్‌లను రూపొందించండి.",

        fairPrice:
            "న్యాయమైన ధర సలహాదారు",

        fairPriceText:
            "ధర నిర్ణయించే ముందు మెటీరియల్ ఖర్చు, శ్రమ, మార్కెట్ పరిధి మరియు డిమాండ్‌ను అర్థం చేసుకోండి.",

        demand:
            "డిమాండ్ ఇంటెలిజెన్స్",

        demandText:
            "మార్కెట్ ఆసక్తి పెరుగుతున్న ఉత్పత్తులు మరియు కేటగిరీలను కనుగొనండి.",

        buyerMatching:
            "AI కొనుగోలుదారు మ్యాచ్",

        buyerMatchingText:
            "కళాకారులను రిటైలర్లు, హోటళ్లు, కార్పొరేట్ కొనుగోలుదారులు మరియు హోల్‌సేలర్లతో కలపండి.",

        workflowTitle:
            "ఎలా పనిచేస్తుంది",

        workflowIntro:
            "కళాకారుడి వాయిస్ నుండి డిజిటల్ మార్కెట్ వరకు ఒక సులభమైన ప్రయాణం.",

        speak:
            "మాట్లాడండి",

        speakText:
            '"ఇది చేతితో తయారు చేసిన వెదురు బుట్ట. దీనిని తయారు చేయడానికి రెండు రోజులు పట్టింది."',

        aiUnderstands:
            "AI అర్థం చేసుకుంటుంది",

        catalogue:
            "క్యాటలాగ్",

        productData:
            "ఉత్పత్తి → బుట్ట",

        materialData:
            "మెటీరియల్ → వెదురు",

        timeData:
            "సమయం → 2 రోజులు",

        costData:
            "ఖర్చు → ₹300",

        basketTitle:
            "చేతితో నేసిన వెదురు బుట్ట",

        basketDescription:
            "సంప్రదాయంగా చేతితో తయారు చేసిన ఉత్పత్తి...",

        basketPrice:
            "₹750 – ₹850",

        marketTitle1:
            "కళ నుండి",

        marketTitle2:
            "మార్కెట్‌కు.",

        marketText:
            "TEDKRAFT కళాకారులు సంబంధిత కస్టమర్లు, రిటైలర్లు, హోటళ్లు, కార్పొరేట్ కొనుగోలుదారులు మరియు బల్క్ అవకాశాలను కనుగొనడంలో సహాయపడుతుంది.",

        findBuyers:
            "కొనుగోలుదారులను కనుగొనండి →",

        marketLinkage:
            "✦ మార్కెట్ కనెక్షన్",

        artisan:
            "కళాకారుడు",

        tedkraftAI:
            "TEDKRAFT AI",

        cataloguePricingMatching:
            "క్యాటలాగ్ • ధర • మ్యాచ్",

        hotels:
            "హోటళ్లు",

        corporate:
            "కార్పొరేట్",

        retailers:
            "రిటైలర్లు",

        finalTitle1:
            "సంప్రదాయ నైపుణ్యానికి",

        finalTitle2:
            "ఆధునిక అవకాశం దక్కాలి.",

        finalText:
            "భారతదేశ కళాకారుల కోసం AI ఆధారిత డిజిటల్ కామర్స్.",

        finalButton:
            "TEDKRAFT ప్రయత్నించండి →",

        footerTitle:
            "TEDKRAFT",

        footerText:
            "కళాకారుల కోసం AI ఆధారిత మార్కెట్ కనెక్షన్ మరియు స్మార్ట్ క్యాటలాగింగ్",

        sih:
            "SIH సమస్య ప్రకటన 26090",

        modalEngine:
            "TEDKRAFT AI ENGINE",

        createProduct:
            "మీ ఉత్పత్తిని సృష్టించండి",

        modalDescription:
            "మీ ఉత్పత్తి గురించి మాట్లాడండి మరియు ఫోటోను అప్‌లోడ్ చేయండి.",

        stepVoice:
            "దశ 01 — వాయిస్",

        tapSpeak:
            "మాట్లాడటానికి ట్యాప్ చేయండి",

        voiceLanguages:
            "తమిళం • హిందీ • ఇంగ్లీష్",

        voiceExample:
            'ఉదాహరణ: "ఇది చేతితో తయారు చేసిన వెదురు బుట్ట..."',

        stepPhoto:
            "దశ 02 — ఫోటో",

        uploadProduct:
            "ఉత్పత్తిని అప్‌లోడ్ చేయండి",

        imageTypes:
            "JPG / PNG",

        generatedCatalogue:
            "✦ AI రూపొందించిన క్యాటలాగ్",

        waiting:
            "వేచి ఉంది",

        homeDecor:
            "హోమ్ డెకార్",

        catalogueProduct:
            "చేతితో నేసిన సహజ వెదురు నిల్వ బుట్ట",

        catalogueDescription:
            "సాంప్రదాయ నేసే పద్ధతులను ఉపయోగించి చేతితో తయారు చేసిన వెదురు బుట్ట.",

        material:
            "మెటీరియల్",

        bamboo:
            "వెదురు",

        craft:
            "హస్తకళ",

        handWeaving:
            "చేతితో నేసిన పని",

        time:
            "సమయం",

        twoDays:
            "2 రోజులు",

        generateCatalogue:
            "క్యాటలాగ్ రూపొందించండి",

        fairPriceButton:
            "₹ న్యాయమైన ధర",

        fairPriceRange:
            "AI న్యాయమైన ధర పరిధి",

        fairPriceExplanation:
            "మెటీరియల్ ఖర్చు, శ్రమ, పోల్చదగిన ఉత్పత్తులు మరియు డిమాండ్ ఆధారంగా."
    }
};


/* =========================================================
   CURRENT LANGUAGE
========================================================= */

let currentLanguage = "en";


/* =========================================================
   CHANGE LANGUAGE
========================================================= */

function changeArtisanLanguage(language) {

    const t = translations[language];

    if (!t) {
        return;
    }

    currentLanguage = language;

    /* Navigation */

    const navItems =
        document.querySelectorAll(".nav-item,.nav-link");

    if (navItems.length >= 5) {

        navItems[0].lastChild.textContent =
            " " + t.navHome;

        navItems[1].lastChild.textContent =
            " " + t.navProblem;

        navItems[2].lastChild.textContent =
            " " + t.navFeatures;

        navItems[3].lastChild.textContent =
            " " + t.navWorks;

        navItems[4].lastChild.textContent =
            " " + t.navMarket;
    }


    /* Sidebar */

    const sidebarText =
        document.querySelector(".sidebar-bottom p");

    if (sidebarText) {
        sidebarText.textContent =
            t.ready;
    }


    /* Hero */

    const heroEyebrow =
        document.querySelector(".hero .eyebrow");

    if (heroEyebrow) {
        heroEyebrow.textContent =
            t.eyebrow;
    }


    const heroTitle =
        document.querySelector(".hero h3");

    if (heroTitle) {

        heroTitle.innerHTML = `
            ${t.heroLine1}<br>
            ${t.heroLine2}<br>
            <span>${t.heroLine3}</span>
        `;

    }


    const heroText =
        document.querySelector(".hero-text");

    if (heroText) {
        heroText.textContent =
            t.heroText;
    }


    const heroButtons =
        document.querySelectorAll(
            ".hero .primary-btn, .hero .outline-btn"
        );

    if (heroButtons.length >= 2) {

        heroButtons[0].textContent =
            t.startCreating;

        heroButtons[1].textContent =
            t.exploreProcess;
    }


    /* Feature strip */

    const featureStrip =
        document.querySelectorAll(
            ".feature-strip span"
        );

    if (featureStrip.length >= 4) {

        featureStrip[0].textContent =
            t.voiceFirst;

        featureStrip[1].textContent =
            t.aiPhotography;

        featureStrip[2].textContent =
            t.multilingual;

        featureStrip[3].textContent =
            t.smartPricing;
    }


    /* Problem section */

    const problemTitle =
        document.querySelector(
            "#problem .section-title h2"
        );

    if (problemTitle) {
        problemTitle.textContent =
            t.problemTitle;
    }


    const problemIntro =
        document.querySelector(
            "#problem .section-title p"
        );

    if (problemIntro) {
        problemIntro.textContent =
            t.problemIntro;
    }


    const problemCards =
        document.querySelectorAll(
            "#problem .problem-card"
        );

    if (problemCards.length >= 6) {

        problemCards[0]
            .querySelector("h3").textContent =
            t.poorPhotography;

        problemCards[0]
            .querySelector("p").textContent =
            t.poorPhotographyText;


        problemCards[1]
            .querySelector("h3").textContent =
            t.difficultCataloguing;

        problemCards[1]
            .querySelector("p").textContent =
            t.difficultCataloguingText;


        problemCards[2]
            .querySelector("h3").textContent =
            t.languageBarriers;

        problemCards[2]
            .querySelector("p").textContent =
            t.languageBarriersText;


        problemCards[3]
            .querySelector("h3").textContent =
            t.pricingUncertainty;

        problemCards[3]
            .querySelector("p").textContent =
            t.pricingUncertaintyText;


        problemCards[4]
            .querySelector("h3").textContent =
            t.limitedMarket;

        problemCards[4]
            .querySelector("p").textContent =
            t.limitedMarketText;


        problemCards[5]
            .querySelector("h3").textContent =
            t.lowDigital;

        problemCards[5]
            .querySelector("p").textContent =
            t.lowDigitalText;
    }


    /* AI Features */

    const aiTitle =
        document.querySelector(
            "#features .section-title h2"
        );

    if (aiTitle) {
        aiTitle.textContent =
            t.aiTitle;
    }


    const aiIntro =
        document.querySelector(
            "#features .section-title p"
        );

    if (aiIntro) {
        aiIntro.textContent =
            t.aiIntro;
    }


    const featureCards =
        document.querySelectorAll(
            "#features .feature-card"
        );

    if (featureCards.length >= 6) {

        featureCards[0]
            .querySelector("h3").textContent =
            t.productStudio;

        featureCards[0]
            .querySelector("p").textContent =
            t.productStudioText;


        featureCards[1]
            .querySelector("h3").textContent =
            t.voiceCatalogue;

        featureCards[1]
            .querySelector("p").textContent =
            t.voiceCatalogueText;


        featureCards[2]
            .querySelector("h3").textContent =
            t.multilingualAI;

        featureCards[2]
            .querySelector("p").textContent =
            t.multilingualAIText;


        featureCards[3]
            .querySelector("h3").textContent =
            t.fairPrice;

        featureCards[3]
            .querySelector("p").textContent =
            t.fairPriceText;


        featureCards[4]
            .querySelector("h3").textContent =
            t.demand;

        featureCards[4]
            .querySelector("p").textContent =
            t.demandText;


        featureCards[5]
            .querySelector("h3").textContent =
            t.buyerMatching;

        featureCards[5]
            .querySelector("p").textContent =
            t.buyerMatchingText;
    }


    /* Workflow */

    const workflowTitle =
        document.querySelector(
            "#workflow .section-title h2"
        );

    if (workflowTitle) {
        workflowTitle.textContent =
            t.workflowTitle;
    }


    const workflowIntro =
        document.querySelector(
            "#workflow .section-title p"
        );

    if (workflowIntro) {
        workflowIntro.textContent =
            t.workflowIntro;
    }


    const workflowCards =
        document.querySelectorAll(
            "#workflow .workflow-card"
        );

    if (workflowCards.length >= 3) {

        workflowCards[0]
            .querySelector("h3").textContent =
            t.speak;

        workflowCards[0]
            .querySelector("p").textContent =
            t.speakText;


        workflowCards[1]
            .querySelector("h3").textContent =
            t.aiUnderstands;


        workflowCards[2]
            .querySelector("h3").textContent =
            t.catalogue;
    }


    /* Market */

    const marketContent =
        document.querySelector(
            "#market .market-content"
        );

    if (marketContent) {

        const marketSpan =
            marketContent.querySelector("span");

        const marketHeading =
            marketContent.querySelector("h2");

        const marketParagraph =
            marketContent.querySelector("p");

        const marketButton =
            marketContent.querySelector("button");


        if (marketSpan) {
            marketSpan.textContent =
                t.marketLinkage;
        }


        if (marketHeading) {

            marketHeading.innerHTML =
                `${t.marketTitle1}<br>
                 <strong>${t.marketTitle2}</strong>`;

        }


        if (marketParagraph) {
            marketParagraph.textContent =
                t.marketText;
        }


        if (marketButton) {
            marketButton.textContent =
                t.findBuyers;
        }
    }


    /* Final section */

    const finalSection =
        document.querySelector(".final");

    if (finalSection) {

        const finalHeading =
            finalSection.querySelector("h2");

        const finalParagraph =
            finalSection.querySelector("p");

        const finalButton =
            finalSection.querySelector("button");


        if (finalHeading) {

            finalHeading.innerHTML =
                `${t.finalTitle1}
                 <strong>${t.finalTitle2}</strong>`;

        }


        if (finalParagraph) {
            finalParagraph.textContent =
                t.finalText;
        }


        if (finalButton) {
            finalButton.textContent =
                t.finalButton;
        }
    }


    /* Footer */

    const footer =
        document.querySelector("footer");

    if (footer) {

        const footerStrong =
            footer.querySelector("strong");

        const footerParagraph =
            footer.querySelector("p");

        const footerSmall =
            footer.querySelector("small");


        if (footerStrong) {
            footerStrong.textContent =
                t.footerTitle;
        }


        if (footerParagraph) {
            footerParagraph.textContent =
                t.footerText;
        }


        if (footerSmall) {
            footerSmall.textContent =
                t.sih;
        }
    }


    /* Modal */

    const modalTitle =
        document.querySelector(".modal-title");

    if (modalTitle) {

        const titleSpan =
            modalTitle.querySelector("span");

        const titleH2 =
            modalTitle.querySelector("h2");

        const titleP =
            modalTitle.querySelector("p");


        if (titleSpan) {
            titleSpan.textContent =
                t.modalEngine;
        }


        if (titleH2) {
            titleH2.textContent =
                t.createProduct;
        }


        if (titleP) {
            titleP.textContent =
                t.modalDescription;
        }
    }


    /* Voice section */

    const voiceButton =
        document.getElementById("voiceBtn");

    if (
        voiceButton &&
        !voiceButton.dataset.listening
    ) {

        const strong =
            voiceButton.querySelector("strong");

        const small =
            voiceButton.querySelector("small");


        if (strong) {
            strong.textContent =
                t.tapSpeak;
        }


        if (small) {
            small.textContent =
                t.voiceLanguages;
        }
    }


    const voiceOutput =
        document.getElementById("voiceOutput");

    if (
        voiceOutput &&
        voiceOutput.textContent.trim() === ""
    ) {

        voiceOutput.textContent =
            t.voiceExample;
    }


    /* Product details labels - preserve IDs and b contents */
    const detailSpans = document.querySelectorAll(".catalogue .details span");
    if (detailSpans.length >= 3) {
        if (detailSpans[0].firstChild && detailSpans[0].firstChild.nodeType === Node.TEXT_NODE) {
            detailSpans[0].firstChild.nodeValue = t.material + " ";
        }
        if (detailSpans[1].firstChild && detailSpans[1].firstChild.nodeType === Node.TEXT_NODE) {
            detailSpans[1].firstChild.nodeValue = t.craft + " ";
        }
        if (detailSpans[2].firstChild && detailSpans[2].firstChild.nodeType === Node.TEXT_NODE) {
            detailSpans[2].firstChild.nodeValue = t.time + " ";
        }
    }


    /* Language button active state */

    const languageButtons =
        document.querySelectorAll(
            "[data-language]"
        );

    languageButtons.forEach(
        function(button) {

            if (
                button.getAttribute(
                    "data-language"
                ) === language
            ) {

                button.style.opacity =
                    "1";

            } else {

                button.style.opacity =
                    "0.65";

            }

        }
    );


    /* Keep TEDKRAFT unchanged */

    document.documentElement.lang =
        language;
}


/* =========================================================
   DEMO MODAL
========================================================= */

const demo =
    document.getElementById("demo");


function openDemo() {

    demo.classList.add("active");

    document.body.style.overflow =
        "hidden";
}


function closeDemo() {

    demo.classList.remove("active");

    document.body.style.overflow =
        "auto";
}


/* Close when clicking outside */

if (demo) {

    demo.addEventListener(
        "click",
        function(event) {

            if (event.target === demo) {

                closeDemo();

            }

        }
    );

}


/* =========================================================
   VOICE DEMO
========================================================= */

function startVoice() {

    const button = document.getElementById("voiceBtn");
    const output = document.getElementById("voiceOutput");
    const transcriptStatus = document.getElementById("voiceTranscriptStatus");

    // Check browser support
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        output.textContent =
            "Speech recognition is not supported in this browser.";
        if (transcriptStatus) transcriptStatus.textContent = "UNSUPPORTED";

        return;
    }


    const recognition =
        new SpeechRecognition();


    recognition.continuous = false;
    recognition.interimResults = true;


    // Change language based on selected language
    const speechLanguages = {

        en: "en-IN",
        ta: "ta-IN",
        hi: "hi-IN",
        kn: "kn-IN",
        te: "te-IN"

    };


    recognition.lang =
        speechLanguages[currentLanguage] || "en-IN";


    recognition.onstart = function () {

        button.dataset.listening = "true";
        if (transcriptStatus) transcriptStatus.textContent = "LISTENING";


        button.innerHTML = `
            <span class="voice-symbol">
                🎙️
            </span>

            <strong>
                LISTENING...
            </strong>

            <small>
                Speak about your product
            </small>
        `;

    };


recognition.onresult = function (event) {

    let transcript = "";

    for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
    ) {

        transcript +=
            event.results[i][0].transcript;

    }

    output.textContent =
        transcript;

    if (transcriptStatus) {

        transcriptStatus.textContent =
            transcript.trim()
                ? "LIVE TRANSCRIPT"
                : "LISTENING";

    }

    /* Transcript stored in output. User generates AI catalogue by clicking GENERATE CATALOGUE button. */

};


    recognition.onend = function () {

        delete button.dataset.listening;
        if (transcriptStatus) transcriptStatus.textContent = output.textContent.trim() ? "CAPTURED" : "NO SPEECH";


        button.innerHTML = `
            <span class="voice-symbol">
                ✓
            </span>

            <strong>
                VOICE CAPTURED
            </strong>

            <small>
                Click again to speak
            </small>
        `;

    };


    recognition.onerror = function (event) {

        delete button.dataset.listening;


        output.textContent =
            "Voice recognition error: " +
            event.error;
        if (transcriptStatus) transcriptStatus.textContent = "ERROR";

    };


    recognition.start();

}


/* =========================================================
   IMAGE UPLOAD
========================================================= */

const imageInput =
    document.getElementById(
        "imageInput"
    );


if (imageInput) {

    imageInput.addEventListener(
        "change",
        function() {

            const file =
                this.files[0];


            if (!file) {

                return;

            }


            const imageURL =
                URL.createObjectURL(
                    file
                );


            const photoStatus = document.getElementById("photoStatus");
            if (photoStatus) photoStatus.textContent = "PHOTO READY ✓";

         document.getElementById(
    "imagePreview"
).innerHTML = `

    <img
        src="${imageURL}"
        alt="Uploaded artisan product"
    >

`;


/* Also update catalogue image */

const catalogueImage =
    document.getElementById(
        "catalogueImage"
    );

if (catalogueImage) {

    catalogueImage.src =
        imageURL;

    catalogueImage.alt =
        "Uploaded product";

}

        }
    );

}

/* =========================================================
   CATALOGUE GENERATION
========================================================= */

/* =========================================================
   FINAL CATALOGUE GENERATION
========================================================= */

/* =========================================================
   TEDKRAFT — FINAL CATALOGUE GENERATION
========================================================= */

/* =========================================================
   TEDKRAFT — FINAL DYNAMIC CATALOGUE GENERATION
========================================================= */

async function generateCatalogue() {

    const status =
        document.getElementById("status");

    const voiceOutput =
        document.getElementById("voiceOutput");

    const catalogueImage =
        document.getElementById("catalogueImage");

    const catalogueTitle =
        document.getElementById("catalogueTitle");

    const catalogueDescription =
        document.getElementById("catalogueDescription");

    const catalogueMaterial =
        document.getElementById("catalogueMaterial");

    const catalogueCraft =
        document.getElementById("catalogueCraft");

    const catalogueTime =
        document.getElementById("catalogueTime");

    const catalogueCategory =
        document.getElementById("catalogueCategory");

    const imageInput =
        document.getElementById("imageInput");


    if (!voiceOutput) {
        console.error("voiceOutput element not found.");
        return;
    }

    const spokenText =
        voiceOutput.textContent.trim();

    const hasValidText =
        spokenText && !spokenText.startsWith("Example:");

    const hasValidImage =
        imageInput && imageInput.files && imageInput.files[0];

    if (!hasValidText && !hasValidImage) {
        alert("Please speak/enter product description or upload a product photo first.");
        return;
    }

    if (status) {
        status.textContent = "ANALYSING WITH AI...";
        status.style.color = "#c58a24";
    }

    const formData = new FormData();

    if (hasValidText) {
        formData.append("productText", spokenText);
    }

    if (hasValidImage) {
        formData.append("image", imageInput.files[0]);
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/generate-catalogue`, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.error || "AI server error");
        }

        const cat = data.catalogue || {};

        if (catalogueTitle) {
            catalogueTitle.textContent =
                cat.title || "Handcrafted Product";
        }

        if (catalogueCategory) {
            catalogueCategory.textContent =
                (cat.category || "HANDCRAFT").toUpperCase();
        }

        if (catalogueMaterial) {
            catalogueMaterial.textContent =
                cat.material || "Not provided";
        }

        if (catalogueCraft) {
            catalogueCraft.textContent =
                cat.craft || "Not provided";
        }

        if (catalogueTime) {
            catalogueTime.textContent =
                cat.workDays ? `${cat.workDays} ${cat.workDays === 1 ? "Day" : "Days"}` : "Not provided";
        }

        if (catalogueDescription) {
            catalogueDescription.textContent =
                cat.description || "Professional product catalogue generated.";
        }

        if (hasValidImage) {
            const imageURL = URL.createObjectURL(imageInput.files[0]);
            if (catalogueImage) {
                catalogueImage.src = imageURL;
                catalogueImage.alt = cat.title || "Uploaded product";
            }
        }

        const productData = {
            title: cat.title,
            category: cat.category,
            description: cat.description,
            material: cat.material,
            craft: cat.craft,
            workDays: cat.workDays,
            keyFeatures: cat.keyFeatures,
            suitableUses: cat.suitableUses,
            voiceTranscript: spokenText,
            createdAt: new Date().toISOString()
        };

        localStorage.setItem("tedkraftProduct", JSON.stringify(productData));

        if (status) {
            status.textContent = "READY";
            status.style.color = "#155b59";
        }

    } catch (error) {
        console.error("TEDKRAFT GEMINI CATALOGUE ERROR:", error);
        if (status) {
            status.textContent = "ERROR";
            status.style.color = "#a82424";
        }
        alert("Failed to generate AI Catalogue: " + error.message);
    }
}

/* =========================================================
   FAIR PRICE
========================================================= */

function showPrice() {

    const price =
        document.getElementById(
            "price"
        );


    price.classList.add(
        "active"
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


navItems.forEach(function(item) {

    item.addEventListener(
        "click",
        function() {

            navItems.forEach(
                function(nav) {

                    nav.classList.remove(
                        "active"
                    );

                }
            );


            this.classList.add(
                "active"
            );

        }
    );

});


/* =========================================================
   CLOSE MODAL WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            demo &&
            demo.classList.contains(
                "active"
            )
        ) {

            closeDemo();

        }

    }
);


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    if (document.body.classList.contains("customer-page")) {
        saveOriginalCustomerText();
        changeCustomerLanguage("en");
    } else {
        changeArtisanLanguage("en");
    }

});
/* =========================================
   CUSTOMER PORTAL LANGUAGE TRANSLATION
========================================= */

const customerTranslations = {

    ta: {
        "Home": "முகப்பு",
        "The Problem": "பிரச்சனை",
        "AI Features": "AI அம்சங்கள்",
        "How It Works": "எப்படி செயல்படுகிறது",
        "Market Linkage": "சந்தை இணைப்பு",
        "Dashboard": "டாஷ்போர்டு",
        "READY TO GROW?": "வளர தயாரா?",
        "HOME →": "முகப்பு →",
        "DISCOVER INDIA'S HANDMADE HERITAGE": "இந்தியாவின் கைவினைப் பாரம்பரியத்தை கண்டறியுங்கள்",
        "Discover the story": "கதையை கண்டறியுங்கள்",
        "behind every craft.": "ஒவ்வொரு கைவினைக்கும் பின்னால்.",
        "Explore authentic handmade products created by skilled artisans and discover the stories, traditions and craftsmanship behind every creation.": "திறமையான கைவினைஞர்களால் உருவாக்கப்பட்ட உண்மையான கைவினைப் பொருட்களைப் பார்வையிட்டு, ஒவ்வொரு படைப்பிற்கும் பின்னால் உள்ள கதைகள், பாரம்பரியங்கள் மற்றும் கைவினைத்திறனை கண்டறியுங்கள்.",
        "Search for handmade crafts...": "கைவினைப் பொருட்களை தேடுங்கள்...",
        "SEARCH →": "தேடுங்கள் →",
        "EXPLORE": "ஆராயுங்கள்",
        "Shop by Craft": "கைவினை வகை மூலம் வாங்குங்கள்",
        "Handmade bamboo products crafted with tradition.": "பாரம்பரிய முறையில் உருவாக்கப்பட்ட கைவினை மூங்கில் பொருட்கள்.",
        "Traditional handmade pottery and ceramic crafts.": "பாரம்பரிய கையால் செய்யப்பட்ட மண்பாண்டங்கள் மற்றும் செராமிக் கைவினைகள்.",
        "Traditional fabrics and handwoven creations.": "பாரம்பரிய துணிகள் மற்றும் கையால் நெய்யப்பட்ட படைப்புகள்.",
        "Beautiful handmade wooden products and artwork.": "அழகான கைவினை மரப் பொருட்கள் மற்றும் கலைப்பொருட்கள்.",
        "Bamboo Crafts": "மூங்கில் கைவினைகள்",
        "Pottery": "மண்பாண்டங்கள்",
        "Handloom": "கைத்தறி",
        "Wood Crafts": "மரக் கைவினைகள்",
        "FEATURED CRAFTS": "சிறப்பு கைவினைகள்",
        "Discover Unique Creations": "தனித்துவமான படைப்புகளைக் கண்டறியுங்கள்",
        "BAMBOO CRAFT": "மூங்கில் கைவினை",
        "Traditional Bamboo Basket": "பாரம்பரிய மூங்கில் கூடை",
        "Handwoven by skilled artisans using traditional bamboo techniques.": "பாரம்பரிய மூங்கில் நுட்பங்களைப் பயன்படுத்தி திறமையான கைவினைஞர்களால் கையால் நெய்யப்பட்டது.",
        "ADD TO CART": "கார்ட்டில் சேர்க்கவும்",
        "POTTERY": "மண்பாண்டம்",
        "Handmade Terracotta Pot": "கைவினை டெரகோட்டா பானை",
        "A traditional handcrafted piece made using natural clay.": "இயற்கை களிமண்ணைப் பயன்படுத்தி செய்யப்பட்ட பாரம்பரிய கைவினைப் பொருள்.",
        "HANDLOOM": "கைத்தறி",
        "Traditional Cotton Weave": "பாரம்பரிய பருத்தி நெசவு",
        "Handwoven using traditional techniques and natural fibres.": "பாரம்பரிய நுட்பங்கள் மற்றும் இயற்கை நார்களைப் பயன்படுத்தி கையால் நெய்யப்பட்டது.",
        "MEET THE MAKERS": "கைவினைஞர்களை சந்தியுங்கள்",
        "Stories Behind the Craft": "கைவினைக்குப் பின்னால் உள்ள கதைகள்",
        "FEATURED ARTISAN": "சிறப்பு கைவினைஞர்",
        "Meet the Creator": "படைப்பாளரை சந்தியுங்கள்",
        "Every handmade product carries the knowledge, culture and story of the artisan who created it.": "ஒவ்வொரு கைவினைப் பொருளும் அதை உருவாக்கிய கைவினைஞரின் அறிவு, கலாசாரம் மற்றும் கதையை தாங்குகிறது.",
        "VIEW ARTISAN STORY →": "கைவினைஞரின் கதையைப் பார்க்கவும் →",
        "MY PURCHASES": "எனது வாங்குதல்கள்",
        "Orders": "ஆர்டர்கள்",
        "No orders yet": "இன்னும் ஆர்டர்கள் இல்லை",
        "Start exploring handmade products and support talented artisans.": "கைவினைப் பொருட்களை ஆராய்ந்து திறமையான கைவினைஞர்களை ஆதரிக்கத் தொடங்குங்கள்.",
        "MY ACCOUNT": "எனது கணக்கு",
        "Customer Profile": "வாடிக்கையாளர் சுயவிவரம்",
        "Customer": "வாடிக்கையாளர்",
        "Discover • Support • Preserve Craft": "கண்டறியுங்கள் • ஆதரியுங்கள் • கைவினையைப் பாதுகாப்போம்",
        "EDIT PROFILE": "சுயவிவரத்தைத் திருத்தவும்"
    },

    hi: {
        "Home": "होम",
        "The Problem": "समस्या",
        "AI Features": "AI सुविधाएँ",
        "How It Works": "यह कैसे काम करता है",
        "Market Linkage": "बाज़ार संपर्क",
        "Dashboard": "डैशबोर्ड",
        "READY TO GROW?": "बढ़ने के लिए तैयार?",
        "HOME →": "होम →",
        "DISCOVER INDIA'S HANDMADE HERITAGE": "भारत की हस्तनिर्मित विरासत खोजें",
        "Discover the story": "कहानी खोजें",
        "behind every craft.": "हर कारीगरी के पीछे।",
        "Explore authentic handmade products created by skilled artisans and discover the stories, traditions and craftsmanship behind every creation.": "कुशल कारीगरों द्वारा बनाए गए प्रामाणिक हस्तनिर्मित उत्पादों को देखें और हर रचना के पीछे की कहानियों, परंपराओं और कारीगरी को जानें।",
        "Search for handmade crafts...": "हस्तनिर्मित उत्पाद खोजें...",
        "SEARCH →": "खोजें →",
        "EXPLORE": "अन्वेषण करें",
        "Shop by Craft": "कारीगरी के अनुसार खरीदें",
        "Handmade bamboo products crafted with tradition.": "परंपरा से बनाए गए हस्तनिर्मित बाँस के उत्पाद।",
        "Traditional handmade pottery and ceramic crafts.": "पारंपरिक हस्तनिर्मित मिट्टी और सिरेमिक कारीगरी।",
        "Traditional fabrics and handwoven creations.": "पारंपरिक कपड़े और हाथ से बुनी रचनाएँ।",
        "Beautiful handmade wooden products and artwork.": "सुंदर हस्तनिर्मित लकड़ी के उत्पाद और कलाकृतियाँ।",
        "Bamboo Crafts": "बाँस की कारीगरी",
        "Pottery": "मिट्टी के बर्तन",
        "Handloom": "हथकरघा",
        "Wood Crafts": "लकड़ी की कारीगरी",
        "FEATURED CRAFTS": "विशेष कारीगरी",
        "Discover Unique Creations": "अनूठी रचनाएँ खोजें",
        "BAMBOO CRAFT": "बाँस की कारीगरी",
        "Traditional Bamboo Basket": "पारंपरिक बाँस की टोकरी",
        "Handwoven by skilled artisans using traditional bamboo techniques.": "पारंपरिक बाँस तकनीकों से कुशल कारीगरों द्वारा हाथ से बुनी गई।",
        "ADD TO CART": "कार्ट में जोड़ें",
        "POTTERY": "मिट्टी की कारीगरी",
        "Handmade Terracotta Pot": "हस्तनिर्मित टेराकोटा गमला",
        "A traditional handcrafted piece made using natural clay.": "प्राकृतिक मिट्टी से बनाया गया पारंपरिक हस्तनिर्मित उत्पाद।",
        "HANDLOOM": "हथकरघा",
        "Traditional Cotton Weave": "पारंपरिक सूती बुनाई",
        "Handwoven using traditional techniques and natural fibres.": "पारंपरिक तकनीकों और प्राकृतिक रेशों से हाथ से बुना गया।",
        "MEET THE MAKERS": "कारीगरों से मिलें",
        "Stories Behind the Craft": "कारीगरी के पीछे की कहानियाँ",
        "FEATURED ARTISAN": "विशेष कारीगर",
        "Meet the Creator": "रचनाकार से मिलें",
        "Every handmade product carries the knowledge, culture and story of the artisan who created it.": "हर हस्तनिर्मित उत्पाद उसे बनाने वाले कारीगर के ज्ञान, संस्कृति और कहानी को समेटे होता है।",
        "VIEW ARTISAN STORY →": "कारीगर की कहानी देखें →",
        "MY PURCHASES": "मेरी खरीदारी",
        "Orders": "ऑर्डर",
        "No orders yet": "अभी कोई ऑर्डर नहीं",
        "Start exploring handmade products and support talented artisans.": "हस्तनिर्मित उत्पादों को देखना शुरू करें और प्रतिभाशाली कारीगरों का समर्थन करें।",
        "MY ACCOUNT": "मेरा खाता",
        "Customer Profile": "ग्राहक प्रोफ़ाइल",
        "Customer": "ग्राहक",
        "Discover • Support • Preserve Craft": "खोजें • समर्थन करें • कारीगरी बचाएँ",
        "EDIT PROFILE": "प्रोफ़ाइल संपादित करें"
    },

    kn: {
        "Home": "ಮುಖಪುಟ",
        "The Problem": "ಸಮಸ್ಯೆ",
        "AI Features": "AI ವೈಶಿಷ್ಟ್ಯಗಳು",
        "How It Works": "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        "Market Linkage": "ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕ",
        "Dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "READY TO GROW?": "ಬೆಳೆಯಲು ಸಿದ್ಧವೇ?",
        "HOME →": "ಮುಖಪುಟ →",
        "DISCOVER INDIA'S HANDMADE HERITAGE": "ಭಾರತದ ಕೈತಯಾರಿಕಾ ಪರಂಪರೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ",
        "Discover the story": "ಕಥೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ",
        "behind every craft.": "ಪ್ರತಿ ಕರಕುಶಲದ ಹಿಂದೆ.",
        "Explore authentic handmade products created by skilled artisans and discover the stories, traditions and craftsmanship behind every creation.": "ನುರಿತ ಕರಕುಶಲಗಾರರು ತಯಾರಿಸಿದ ನೈಜ ಕೈತಯಾರಿಕಾ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಸೃಷ್ಟಿಯ ಹಿಂದಿನ ಕಥೆಗಳು, ಸಂಪ್ರದಾಯಗಳು ಹಾಗೂ ಕರಕುಶಲತೆಯನ್ನು ತಿಳಿಯಿರಿ.",
        "Search for handmade crafts...": "ಕೈಯಿಂದ ಮಾಡಿದ ವಸ್ತುಗಳನ್ನು ಹುಡುಕಿ...",
        "SEARCH →": "ಹುಡುಕಿ →",
        "EXPLORE": "ಅನ್ವೇಷಿಸಿ",
        "Shop by Craft": "ಕರಕುಶಲದ ಪ್ರಕಾರ ಖರೀದಿಸಿ",
        "Handmade bamboo products crafted with tradition.": "ಸಂಪ್ರದಾಯದೊಂದಿಗೆ ತಯಾರಿಸಿದ ಕೈತಯಾರಿಕಾ ಬಿದಿರು ಉತ್ಪನ್ನಗಳು.",
        "Traditional handmade pottery and ceramic crafts.": "ಸಾಂಪ್ರದಾಯಿಕ ಕೈತಯಾರಿಕಾ ಮಣ್ಣಿನ ಮತ್ತು ಸೆರಾಮಿಕ್ ಕರಕುಶಲಗಳು.",
        "Traditional fabrics and handwoven creations.": "ಸಾಂಪ್ರದಾಯಿಕ ಬಟ್ಟೆಗಳು ಮತ್ತು ಕೈಯಿಂದ ನೇಯ್ದ ಸೃಷ್ಟಿಗಳು.",
        "Beautiful handmade wooden products and artwork.": "ಸುಂದರ ಕೈತಯಾರಿಕಾ ಮರದ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಕಲಾಕೃತಿಗಳು.",
        "Bamboo Crafts": "ಬಿದಿರಿನ ಕರಕುಶಲ",
        "Pottery": "ಮಣ್ಣಿನ ಪಾತ್ರೆಗಳು",
        "Handloom": "ಕೈಮಗ್ಗ",
        "Wood Crafts": "ಮರದ ಕರಕುಶಲ",
        "FEATURED CRAFTS": "ವಿಶೇಷ ಕರಕುಶಲಗಳು",
        "Discover Unique Creations": "ವಿಶಿಷ್ಟ ಸೃಷ್ಟಿಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ",
        "BAMBOO CRAFT": "ಬಿದಿರಿನ ಕರಕುಶಲ",
        "Traditional Bamboo Basket": "ಸಾಂಪ್ರದಾಯಿಕ ಬಿದಿರಿನ ಬುಟ್ಟಿ",
        "Handwoven by skilled artisans using traditional bamboo techniques.": "ಸಾಂಪ್ರದಾಯಿಕ ಬಿದಿರು ತಂತ್ರಗಳನ್ನು ಬಳಸಿ ನುರಿತ ಕರಕುಶಲಗಾರರಿಂದ ಕೈಯಿಂದ ನೇಯಲಾಗಿದೆ.",
        "ADD TO CART": "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
        "POTTERY": "ಮಣ್ಣಿನ ಕರಕುಶಲ",
        "Handmade Terracotta Pot": "ಕೈತಯಾರಿಕಾ ಟೆರಾಕೋಟಾ ಮಡಿಕೆ",
        "A traditional handcrafted piece made using natural clay.": "ನೈಸರ್ಗಿಕ ಮಣ್ಣಿನಿಂದ ತಯಾರಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ ಕೈತಯಾರಿಕಾ ವಸ್ತು.",
        "HANDLOOM": "ಕೈಮಗ್ಗ",
        "Traditional Cotton Weave": "ಸಾಂಪ್ರದಾಯಿಕ ಹತ್ತಿ ನೇಯ್ಗೆ",
        "Handwoven using traditional techniques and natural fibres.": "ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರಗಳು ಮತ್ತು ನೈಸರ್ಗಿಕ ನಾರುಗಳಿಂದ ಕೈಯಿಂದ ನೇಯಲಾಗಿದೆ.",
        "MEET THE MAKERS": "ತಯಾರಕರನ್ನು ಭೇಟಿ ಮಾಡಿ",
        "Stories Behind the Craft": "ಕರಕುಶಲದ ಹಿಂದಿನ ಕಥೆಗಳು",
        "FEATURED ARTISAN": "ವಿಶೇಷ ಕರಕುಶಲಗಾರ",
        "Meet the Creator": "ಸೃಷ್ಟಿಕರ್ತರನ್ನು ಭೇಟಿ ಮಾಡಿ",
        "Every handmade product carries the knowledge, culture and story of the artisan who created it.": "ಪ್ರತಿಯೊಂದು ಕೈತಯಾರಿಕಾ ಉತ್ಪನ್ನವೂ ಅದನ್ನು ಸೃಷ್ಟಿಸಿದ ಕರಕುಶಲಗಾರರ ಜ್ಞಾನ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕಥೆಯನ್ನು ಹೊಂದಿದೆ.",
        "VIEW ARTISAN STORY →": "ಕರಕುಶಲಗಾರರ ಕಥೆಯನ್ನು ನೋಡಿ →",
        "MY PURCHASES": "ನನ್ನ ಖರೀದಿಗಳು",
        "Orders": "ಆರ್ಡರ್‌ಗಳು",
        "No orders yet": "ಇನ್ನೂ ಯಾವುದೇ ಆರ್ಡರ್‌ಗಳಿಲ್ಲ",
        "Start exploring handmade products and support talented artisans.": "ಕೈತಯಾರಿಕಾ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಲು ಪ್ರಾರಂಭಿಸಿ ಮತ್ತು ಪ್ರತಿಭಾವಂತ ಕರಕುಶಲಗಾರರನ್ನು ಬೆಂಬಲಿಸಿ.",
        "MY ACCOUNT": "ನನ್ನ ಖಾತೆ",
        "Customer Profile": "ಗ್ರಾಹಕ ಪ್ರೊಫೈಲ್",
        "Customer": "ಗ್ರಾಹಕ",
        "Discover • Support • Preserve Craft": "ಕಂಡುಹಿಡಿಯಿರಿ • ಬೆಂಬಲಿಸಿ • ಕರಕುಶಲವನ್ನು ಉಳಿಸಿ",
        "EDIT PROFILE": "ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ"
    },

    te: {
        "Home": "హోమ్",
        "The Problem": "సమస్య",
        "AI Features": "AI ఫీచర్లు",
        "How It Works": "ఎలా పనిచేస్తుంది",
        "Market Linkage": "మార్కెట్ కనెక్షన్",
        "Dashboard": "డాష్‌బోర్డ్",
        "READY TO GROW?": "వృద్ధికి సిద్ధమా?",
        "HOME →": "హోమ్ →",
        "DISCOVER INDIA'S HANDMADE HERITAGE": "భారతదేశ హస్తకళా వారసత్వాన్ని కనుగొనండి",
        "Discover the story": "కథను కనుగొనండి",
        "behind every craft.": "ప్రతి హస్తకళ వెనుక.",
        "Explore authentic handmade products created by skilled artisans and discover the stories, traditions and craftsmanship behind every creation.": "నైపుణ్యం కలిగిన కళాకారులు రూపొందించిన అసలైన హస్తకళా ఉత్పత్తులను అన్వేషించి, ప్రతి సృష్టి వెనుక ఉన్న కథలు, సంప్రదాయాలు మరియు నైపుణ్యాన్ని తెలుసుకోండి.",
        "Search for handmade crafts...": "హస్తకళలను వెతకండి...",
        "SEARCH →": "వెతకండి →",
        "EXPLORE": "అన్వేషించండి",
        "Shop by Craft": "హస్తకళ ప్రకారం కొనండి",
        "Handmade bamboo products crafted with tradition.": "సంప్రదాయ పద్ధతులతో తయారు చేసిన హస్తకళ వెదురు ఉత్పత్తులు.",
        "Traditional handmade pottery and ceramic crafts.": "సాంప్రదాయ హస్తకళ మట్టి మరియు సిరామిక్ వస్తువులు.",
        "Traditional fabrics and handwoven creations.": "సాంప్రదాయ వస్త్రాలు మరియు చేతితో నేసిన సృష్టులు.",
        "Beautiful handmade wooden products and artwork.": "అందమైన హస్తకళ చెక్క ఉత్పత్తులు మరియు కళాకృతులు.",
        "Bamboo Crafts": "వెదురు హస్తకళ",
        "Pottery": "మట్టి పాత్రలు",
        "Handloom": "చేనేత",
        "Wood Crafts": "చెక్క హస్తకళ",
        "FEATURED CRAFTS": "ప్రత్యేక హస్తకళలు",
        "Discover Unique Creations": "ప్రత్యేక సృష్టులను కనుగొనండి",
        "BAMBOO CRAFT": "వెదురు హస్తకళ",
        "Traditional Bamboo Basket": "సాంప్రదాయ వెదురు బుట్ట",
        "Handwoven by skilled artisans using traditional bamboo techniques.": "సాంప్రదాయ వెదురు పద్ధతులతో నైపుణ్యం కలిగిన కళాకారులు చేతితో నేసినది.",
        "ADD TO CART": "కార్ట్‌కు జోడించండి",
        "POTTERY": "మట్టి హస్తకళ",
        "Handmade Terracotta Pot": "హస్తకళ టెర్రకోటా కుండ",
        "A traditional handcrafted piece made using natural clay.": "సహజ మట్టితో తయారు చేసిన సాంప్రదాయ హస్తకళ వస్తువు.",
        "HANDLOOM": "చేనేత",
        "Traditional Cotton Weave": "సాంప్రదాయ పత్తి నేసిన వస్త్రం",
        "Handwoven using traditional techniques and natural fibres.": "సాంప్రదాయ పద్ధతులు మరియు సహజ నారలతో చేతితో నేసినది.",
        "MEET THE MAKERS": "తయారీదారులను కలవండి",
        "Stories Behind the Craft": "హస్తకళ వెనుక కథలు",
        "FEATURED ARTISAN": "ప్రత్యేక కళాకారుడు",
        "Meet the Creator": "సృష్టికర్తను కలవండి",
        "Every handmade product carries the knowledge, culture and story of the artisan who created it.": "ప్రతి హస్తకళా ఉత్పత్తి దాన్ని రూపొందించిన కళాకారుడి జ్ఞానం, సంస్కృతి మరియు కథను కలిగి ఉంటుంది.",
        "VIEW ARTISAN STORY →": "కళాకారుడి కథను చూడండి →",
        "MY PURCHASES": "నా కొనుగోళ్లు",
        "Orders": "ఆర్డర్లు",
        "No orders yet": "ఇంకా ఆర్డర్లు లేవు",
        "Start exploring handmade products and support talented artisans.": "హస్తకళా ఉత్పత్తులను అన్వేషించడం ప్రారంభించి ప్రతిభావంతులైన కళాకారులను ప్రోత్సహించండి.",
        "MY ACCOUNT": "నా ఖాతా",
        "Customer Profile": "కస్టమర్ ప్రొఫైల్",
        "Customer": "కస్టమర్",
        "Discover • Support • Preserve Craft": "కనుగొనండి • మద్దతు ఇవ్వండి • హస్తకళను కాపాడండి",
        "EDIT PROFILE": "ప్రొఫైల్‌ను సవరించండి"
    }
};

let originalCustomerTexts = new Map();
let originalCustomerTextNodes = new Map();

function normalizeCustomerText(text) {
    return text.replace(/\s+/g, " ").trim();
}

function saveOriginalCustomerText() {

    originalCustomerTexts.clear();
    originalCustomerTextNodes.clear();

    const elements = document.querySelectorAll(
        ".customer-main h1, " +
        ".customer-main h2, " +
        ".customer-main h3, " +
        ".customer-main p, " +
        ".customer-main button, " +
        ".customer-main a, " +
        ".side-nav a, " +
        ".sidebar-bottom p, " +
        ".sidebar-bottom > button"
    );

    elements.forEach(function(element) {

        if (
            element.closest(".language-selector") ||
            element.hasAttribute("data-no-translate")
        ) {
            return;
        }

        originalCustomerTexts.set(
            element,
            element.innerHTML
        );

        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    if (!node.nodeValue.trim()) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (node.parentElement &&
                        node.parentElement.closest(".language-selector")) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let node;

        while (node = walker.nextNode()) {
            originalCustomerTextNodes.set(
                node,
                node.nodeValue
            );
        }
    });
}

function translateCustomerTextNodes(language) {

    const selectedTranslations =
        language === "en" ? null : customerTranslations[language];

    if (language !== "en" && !selectedTranslations) {
        return;
    }

    originalCustomerTextNodes.forEach(function(originalText, node) {

        if (!node || !node.parentNode) {
            return;
        }

        const original = normalizeCustomerText(originalText);

        if (!original) {
            return;
        }

        let translated = original;

        if (language !== "en") {
            translated = selectedTranslations[original];

            if (translated === undefined) {
                const matchingKey = Object.keys(selectedTranslations).find(
                    function(key) {
                        return normalizeCustomerText(key) === original;
                    }
                );

                if (matchingKey) {
                    translated = selectedTranslations[matchingKey];
                }
            }

            if (translated === undefined) {
                return;
            }
        }

        /* Preserve indentation/line breaks around the actual text. */
        const leading = originalText.match(/^\s*/)?.[0] || "";
        const trailing = originalText.match(/\s*$/)?.[0] || "";

        node.nodeValue =
            leading + translated + trailing;
    });
}

function changeLanguage(language) {

    /* One language button works on both portals. */
    if (document.body.classList.contains("customer-page")) {
        changeCustomerLanguage(language);
    } else {
        changeArtisanLanguage(language);
    }
}

function changeCustomerLanguage(language) {

    if (!document.body.classList.contains("customer-page")) {
        return;
    }

    if (originalCustomerTextNodes.size === 0) {
        saveOriginalCustomerText();
    }

    if (language === "en") {
        originalCustomerTextNodes.forEach(function(originalText, node) {
            if (node && node.parentNode) {
                node.nodeValue = originalText;
            }
        });
    } else {
        translateCustomerTextNodes(language);
    }

    const searchInput =
        document.getElementById("productSearch");

    const placeholders = {
        en: "Search for handmade crafts...",
        ta: "கைவினைப் பொருட்களை தேடுங்கள்...",
        hi: "हस्तनिर्मित उत्पाद खोजें...",
        kn: "ಕೈಯಿಂದ ಮಾಡಿದ ವಸ್ತುಗಳನ್ನು ಹುಡುಕಿ...",
        te: "హస్తకళలను వెతకండి..."
    };

    if (searchInput) {
        searchInput.placeholder =
            placeholders[language] || placeholders.en;
    }

    document.querySelectorAll("[data-language]").forEach(function(button) {
        button.style.opacity =
            button.getAttribute("data-language") === language
                ? "1"
                : "0.65";
    });

    document.documentElement.lang = language;
}

function searchProducts() {
    const input = document.getElementById("productSearch");
    if (!input) return;

    const query = input.value.trim();

    if (!query) {
        alert("Please enter a craft or product to search.");
        return;
    }

    alert("Searching for: " + query);
}

function addToCart(productName) {
    alert(productName + " added to cart!");
}

/* =========================================================
   TEDKRAFT — PRODUCT IMAGE PREVIEW
========================================================= */

/* =========================================================
   PRODUCT IMAGE PREVIEW
========================================================= */


/* =========================================================
   TEDKRAFT LOCAL PRODUCT UNDERSTANDING
========================================================= */

function understandProduct(text) {

    if (!text) {

        return {
            product: "Handcrafted Product",
            category: "HANDCRAFT",
            material: "Not specified",
            craft: "Traditional Craft",
            time: "Not specified"
        };

    }


    const lowerText =
        text.toLowerCase();


    /* =====================================================
       MUD POT / CLAY POT
    ===================================================== */

    if (
        lowerText.includes("pot") ||
        lowerText.includes("clay") ||
        lowerText.includes("mud pot") ||
        lowerText.includes("mud")
    ) {

        return {

            product:
                "Traditional Handcrafted Mud Pot",

            category:
                "POTTERY",

            material:
                "Clay",

            craft:
                "Pottery",

            time:
                extractTime(text) ||
                "Not specified"

        };

    }


    /* =====================================================
       BAMBOO BASKET
    ===================================================== */

    if (
        lowerText.includes("basket") ||
        lowerText.includes("bamboo")
    ) {

        return {

            product:
                "Handwoven Natural Bamboo Basket",

            category:
                "HOME DÉCOR",

            material:
                "Bamboo",

            craft:
                "Hand Weaving",

            time:
                extractTime(text) ||
                "Not specified"

        };

    }


    /* =====================================================
       CHAIR
    ===================================================== */

    if (
        lowerText.includes("chair")
    ) {

        return {

            product:
                "Handcrafted Traditional Chair",

            category:
                "FURNITURE",

            material:
                detectMaterial(lowerText),

            craft:
                "Handcrafted",

            time:
                extractTime(text) ||
                "Not specified"

        };

    }


    /* =====================================================
       LAMP
    ===================================================== */

    if (
        lowerText.includes("lamp") ||
        lowerText.includes("lantern")
    ) {

        return {

            product:
                "Handcrafted Decorative Lamp",

            category:
                "HOME DÉCOR",

            material:
                detectMaterial(lowerText),

            craft:
                "Handcrafted",

            time:
                extractTime(text) ||
                "Not specified"

        };

    }


    /* =====================================================
       SAREE / CLOTH
    ===================================================== */

    if (
        lowerText.includes("saree") ||
        lowerText.includes("sari") ||
        lowerText.includes("cotton")
    ) {

        return {

            product:
                "Traditional Handwoven Cotton Saree",

            category:
                "HANDLOOM",

            material:
                "Cotton",

            craft:
                "Hand Weaving",

            time:
                extractTime(text) ||
                "Not specified"

        };

    }


    /* =====================================================
       JEWELLERY
    ===================================================== */

    if (
        lowerText.includes("jewellery") ||
        lowerText.includes("jewelry") ||
        lowerText.includes("necklace") ||
        lowerText.includes("earring")
    ) {

        return {

            product:
                "Traditional Handcrafted Jewellery",

            category:
                "JEWELLERY",

            material:
                detectMaterial(lowerText),

            craft:
                "Handcrafted",

            time:
                extractTime(text) ||
                "Not specified"

        };

    }


    /* =====================================================
       DEFAULT
    ===================================================== */

    return {

        product:
            "Handcrafted Traditional Product",

        category:
            "HANDCRAFT",

        material:
            detectMaterial(lowerText),

        craft:
            "Traditional Craft",

        time:
            extractTime(text) ||
            "Not specified"

    };

}
/* =========================================================
   MATERIAL DETECTION
========================================================= */

function detectMaterial(text) {

    if (
        text.includes("bamboo")
    ) {

        return "Bamboo";

    }


    if (
        text.includes("clay") ||
        text.includes("mud")
    ) {

        return "Clay";

    }


    if (
        text.includes("cotton")
    ) {

        return "Cotton";

    }


    if (
        text.includes("wood") ||
        text.includes("wooden")
    ) {

        return "Wood";

    }


    if (
        text.includes("jute")
    ) {

        return "Jute";

    }


    if (
        text.includes("silk")
    ) {

        return "Silk";

    }


    if (
        text.includes("leather")
    ) {

        return "Leather";

    }


    if (
        text.includes("metal")
    ) {

        return "Metal";

    }


    return "Not specified";

}
/* =========================================================
   TIME EXTRACTION
========================================================= */

/* =========================================================
   TIME EXTRACTION
========================================================= */

/* =========================================================
   TIME EXTRACTION
========================================================= */

function extractTime(text) {

    if (!text) {

        return null;

    }


    const lowerText =
        text.toLowerCase();


    /* =====================================================
       NUMERIC TIME
    ===================================================== */

    const numericMatch =
        lowerText.match(
            /(\d+(?:\.\d+)?)\s*(day|days|hour|hours|week|weeks)/i
        );


    if (numericMatch) {

        const number =
            numericMatch[1];

        const unit =
            numericMatch[2]
                .toLowerCase();


        if (
            unit === "day" ||
            unit === "days"
        ) {

            return (
                number +
                (
                    number === "1"
                        ? " Day"
                        : " Days"
                )
            );

        }


        if (
            unit === "hour" ||
            unit === "hours"
        ) {

            return (
                number +
                (
                    number === "1"
                        ? " Hour"
                        : " Hours"
                )
            );

        }


        if (
            unit === "week" ||
            unit === "weeks"
        ) {

            return (
                number +
                (
                    number === "1"
                        ? " Week"
                        : " Weeks"
                )
            );

        }

    }


    /* =====================================================
       WRITTEN NUMBERS
    ===================================================== */

    const writtenNumbers = {

        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10

    };


    for (
        const word in writtenNumbers
    ) {

        const pattern =
            new RegExp(
                "\\b" +
                word +
                "\\s+(day|days|hour|hours|week|weeks)\\b",
                "i"
            );


        const match =
            lowerText.match(
                pattern
            );


        if (match) {

            const number =
                writtenNumbers[word];

            const unit =
                match[1]
                    .toLowerCase();


            if (
                unit === "day" ||
                unit === "days"
            ) {

                return (
                    number +
                    (
                        number === 1
                            ? " Day"
                            : " Days"
                    )
                );

            }


            if (
                unit === "hour" ||
                unit === "hours"
            ) {

                return (
                    number +
                    (
                        number === 1
                            ? " Hour"
                            : " Hours"
                    )
                );

            }


            if (
                unit === "week" ||
                unit === "weeks"
            ) {

                return (
                    number +
                    (
                        number === 1
                            ? " Week"
                            : " Weeks"
                    )
                );

            }

        }

    }


    return null;

}
/* =========================================================
   UPDATE CATALOGUE FROM VOICE
========================================================= */

/* =========================================================
   UPDATE CATALOGUE FROM VOICE
========================================================= */

function updateCatalogueFromVoice(text) {

    if (!text) {
        return;
    }


    console.log(
        "Updating catalogue from:",
        text
    );


    const product =
        understandProduct(text);


    console.log(
        "Detected product:",
        product
    );


    /* -----------------------------------------------------
       TITLE
    ----------------------------------------------------- */

    const title =
        document.getElementById(
            "catalogueTitle"
        );

    if (title) {

        title.textContent =
            product.product;

    }


    /* -----------------------------------------------------
       CATEGORY
    ----------------------------------------------------- */

    const category =
        document.getElementById(
            "catalogueCategory"
        );

    if (category) {

        category.textContent =
            product.category;

    }


    /* -----------------------------------------------------
       MATERIAL
    ----------------------------------------------------- */

    const material =
        document.getElementById(
            "catalogueMaterial"
        );

    if (material) {

        material.textContent =
            product.material;

    }


    /* -----------------------------------------------------
       CRAFT
    ----------------------------------------------------- */

    const craft =
        document.getElementById(
            "catalogueCraft"
        );

    if (craft) {

        craft.textContent =
            product.craft;

    }


    /* -----------------------------------------------------
       TIME
    ----------------------------------------------------- */

    const time =
        document.getElementById(
            "catalogueTime"
        );

    if (time) {

        time.textContent =
            product.time;

    }


    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    const description =
        document.getElementById(
            "catalogueDescription"
        );

    if (description) {

        description.textContent =
            createProductDescription(
                product,
                text
            );

    }


    /* -----------------------------------------------------
       STATUS
    ----------------------------------------------------- */

    const status =
        document.getElementById(
            "status"
        );

    if (status) {

        status.textContent =
            "READY";

    }


    console.log(
        "Catalogue successfully updated."
    );

}
/* =========================================================
   CREATE PRODUCT DESCRIPTION
========================================================= */

/* =========================================================
   CREATE PRODUCT DESCRIPTION
========================================================= */

function createProductDescription(
    product,
    originalText
) {

    let description = "";


    /* PRODUCT */

    description +=
        "A traditionally handcrafted " +
        product.product.toLowerCase();


    /* MATERIAL */

    if (
        product.material &&
        product.material !== "Not specified"
    ) {

        description +=
            " made using " +
            product.material.toLowerCase();

    }


    /* CRAFT */

    if (
        product.craft &&
        product.craft !== "Traditional Craft" &&
        product.craft !== "Handcrafted"
    ) {

        description +=
            " using " +
            product.craft.toLowerCase();

    }


    description +=
        ".";


    /* TIME */

    if (
        product.time &&
        product.time !== "Not specified"
    ) {

        description +=
            " It takes " +
            product.time.toLowerCase() +
            " to complete.";

    }


    return description;

}
/* =========================================================
   TEDKRAFT — DYNAMIC PRODUCT CATALOGUE
========================================================= */


/* =========================================================
   PRODUCT IMAGE PREVIEW
========================================================= */

/* =========================================================
   PRODUCT IMAGE PREVIEW
========================================================= */

function previewProductImage(event) {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }


    const imageURL =
        URL.createObjectURL(file);


    /* PHOTO PREVIEW */

    const preview =
        document.getElementById(
            "imagePreview"
        );

    if (preview) {

        preview.innerHTML = `
            <img
                src="${imageURL}"
                alt="Uploaded product"
            >
        `;

    }


    /* CATALOGUE IMAGE */

    const catalogueImage =
        document.getElementById(
            "catalogueImage"
        );

    if (catalogueImage) {

        catalogueImage.src =
            imageURL;

        catalogueImage.alt =
            "Uploaded product";

    }


    /* PHOTO STATUS */

    const photoStatus =
        document.getElementById(
            "photoStatus"
        );

    if (photoStatus) {

        photoStatus.textContent =
            "PHOTO READY ✓";

    }

}
/* =========================================================
   TEDKRAFT FAIR PRICE ENGINE
========================================================= */

/* =========================================================
   TEDKRAFT FAIR PRICE ADVISOR
========================================================= */

function showPrice() {

    const savedProduct =
        localStorage.getItem("tedkraftProduct");

    if (!savedProduct) {

        alert(
            "Please generate the catalogue first."
        );

        return;
    }

    const priceBox =
        document.getElementById("price");

    if (!priceBox) {

        console.error(
            "Fair price section not found."
        );

        return;
    }

    priceBox.classList.add("active");

    const calculator =
        document.getElementById(
            "fairPriceCalculator"
        );

    if (calculator) {

        calculator.style.display =
            "grid";
    }

    const result =
        document.getElementById(
            "fairPriceResult"
        );

    if (result) {

        result.style.display =
            "none";
    }

    priceBox.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================================================
   CALCULATE + SHOW FAIR PRICE
========================================================= */

function calculateAndShowFairPrice() {

    const savedProduct =
        localStorage.getItem(
            "tedkraftProduct"
        );

    if (!savedProduct) {

        alert(
            "Please generate the catalogue first."
        );

        return;
    }

    let product;

    try {

        product =
            JSON.parse(savedProduct);

    } catch (error) {

        console.error(
            "Could not read saved product:",
            error
        );

        alert(
            "Please generate the catalogue again."
        );

        return;
    }


    /* -----------------------------------------
       READ COSTS
    ----------------------------------------- */

    const materialCost =
        Number(
            document.getElementById(
                "materialCostInput"
            )?.value
        ) || 0;

    const labourCost =
        Number(
            document.getElementById(
                "labourCostInput"
            )?.value
        ) || 0;

    const utilityCost =
        Number(
            document.getElementById(
                "utilityCostInput"
            )?.value
        ) || 0;

    const transportCost =
        Number(
            document.getElementById(
                "transportCostInput"
            )?.value
        ) || 0;

    const packagingCost =
        Number(
            document.getElementById(
                "packagingCostInput"
            )?.value
        ) || 0;

    const otherCost =
        Number(
            document.getElementById(
                "otherCostInput"
            )?.value
        ) || 0;


    /* -----------------------------------------
       VALIDATION
    ----------------------------------------- */

    const totalProductionCost =
        materialCost +
        labourCost +
        utilityCost +
        transportCost +
        packagingCost +
        otherCost;

    if (totalProductionCost <= 0) {

        alert(
            "Please enter your production costs."
        );

        return;
    }


    /* -----------------------------------------
       CALCULATE FAIR PRICE
    ----------------------------------------- */

    const pricing =
        calculateFairPrice(
            product,
            {
                materialCost,
                labourCost,
                utilityCost,
                transportCost,
                packagingCost,
                otherCost
            }
        );


    /* -----------------------------------------
       DISPLAY SUMMARY
    ----------------------------------------- */

    const totalElement =
        document.getElementById(
            "totalProductionCost"
        );

    if (totalElement) {

        totalElement.textContent =
            `₹${pricing.totalProductionCost}`;
    }


    const profitElement =
        document.getElementById(
            "artisanProfit"
        );

    if (profitElement) {

        profitElement.textContent =
            `₹${pricing.artisanProfit}`;
    }


    const craftElement =
        document.getElementById(
            "craftsmanshipValue"
        );

    if (craftElement) {

        craftElement.textContent =
            `₹${pricing.craftsmanshipValue}`;
    }


    const demandElement =
        document.getElementById(
            "demandValue"
        );

    if (demandElement) {

        demandElement.textContent =
            pricing.demand;
    }


    const rangeElement =
        document.getElementById(
            "fairPriceRange"
        );

    if (rangeElement) {

        rangeElement.textContent =
            `₹${pricing.lowerPrice} — ₹${pricing.upperPrice}`;
    }


    const recommendedElement =
        document.getElementById(
            "recommendedPrice"
        );

    if (recommendedElement) {

        recommendedElement.textContent =
            `₹${pricing.recommendedPrice}`;
    }


    const floorElement =
        document.getElementById(
            "negotiationFloor"
        );

    if (floorElement) {

        floorElement.textContent =
            `₹${pricing.negotiationFloor}`;
    }


    const explanationElement =
        document.getElementById(
            "fairPriceExplanation"
        );

    if (explanationElement) {

        explanationElement.textContent =
            `Production cost is ₹${pricing.totalProductionCost}. ` +
            `TEDKRAFT adds a ${Math.round(
                pricing.profitRate * 100
            )}% artisan profit margin and craftsmanship value, ` +
            `then checks the result against the prototype market reference range.`;
    }


    /* -----------------------------------------
       SHOW RESULT
    ----------------------------------------- */

    const result =
        document.getElementById(
            "fairPriceResult"
        );

    if (result) {

        result.style.display =
            "block";
    }


    /* -----------------------------------------
       SAVE
    ----------------------------------------- */

    product.costBreakdown = {

        material: materialCost,
        labour: labourCost,
        utilities: utilityCost,
        transport: transportCost,
        packaging: packagingCost,
        other: otherCost

    };

    product.totalProductionCost =
        pricing.totalProductionCost;

    product.artisanProfit =
        pricing.artisanProfit;

    product.craftsmanshipValue =
        pricing.craftsmanshipValue;

    product.demand =
        pricing.demand;

    product.fairPrice =
        pricing.recommendedPrice;

    product.priceRange =
        `${pricing.lowerPrice} — ${pricing.upperPrice}`;

    localStorage.setItem(
        "tedkraftProduct",
        JSON.stringify(product)
    );
}


/* =========================================================
   FAIR PRICE CALCULATION ENGINE
========================================================= */

function calculateFairPrice(
    product,
    costs
) {

    const totalProductionCost =
        costs.materialCost +
        costs.labourCost +
        costs.utilityCost +
        costs.transportCost +
        costs.packagingCost +
        costs.otherCost;


    /* -----------------------------------------
       PROTOTYPE MARKET BENCHMARKS
    ----------------------------------------- */

    const marketBenchmarks = {

        "POTTERY": {
            minimum: 250,
            maximum: 800
        },

        "HOME DÉCOR": {
            minimum: 300,
            maximum: 900
        },

        "FURNITURE": {
            minimum: 1200,
            maximum: 5000
        },

        "HANDLOOM": {
            minimum: 1500,
            maximum: 5000
        },

        "JEWELLERY": {
            minimum: 500,
            maximum: 2500
        },

        "HANDCRAFT": {
            minimum: 300,
            maximum: 1000
        }

    };


    const category =
        String(
            product?.category ||
            "HANDCRAFT"
        ).toUpperCase();


    const benchmark =
        marketBenchmarks[category] ||
        marketBenchmarks["HANDCRAFT"];


    /* -----------------------------------------
       ARTISAN PROFIT
    ----------------------------------------- */

    const profitRate =
        0.20;

    const artisanProfit =
        totalProductionCost *
        profitRate;


    const sustainablePrice =
        totalProductionCost +
        artisanProfit;


    /* -----------------------------------------
       CRAFTSMANSHIP VALUE
    ----------------------------------------- */

    const craft =
        String(
            product?.craft || ""
        ).toLowerCase();


    let craftsmanshipRate =
        0.05;


    if (
        craft.includes("weaving") ||
        craft.includes("handloom")
    ) {

        craftsmanshipRate =
            0.08;
    }


    const craftsmanshipValue =
        totalProductionCost *
        craftsmanshipRate;


    let calculatedPrice =
        sustainablePrice +
        craftsmanshipValue;


    /* -----------------------------------------
       MARKET CHECK
    ----------------------------------------- */

    if (
        calculatedPrice <
        benchmark.minimum
    ) {

        calculatedPrice =
            (
                calculatedPrice +
                benchmark.minimum
            ) / 2;
    }


    if (
        calculatedPrice >
        benchmark.maximum
    ) {

        calculatedPrice =
            Math.max(
                totalProductionCost * 1.20,
                benchmark.maximum
            );
    }


    /* -----------------------------------------
       PROTOTYPE DEMAND ADJUSTMENT
    ----------------------------------------- */

    let demand =
        "MEDIUM";

    let demandMultiplier =
        1.00;


    if (
        category === "HANDLOOM" ||
        category === "JEWELLERY"
    ) {

        demand =
            "HIGH";

        demandMultiplier =
            1.05;
    }


    calculatedPrice =
        calculatedPrice *
        demandMultiplier;


    /* -----------------------------------------
       FINAL PRICE
    ----------------------------------------- */

    const recommendedPrice =
        Math.round(
            calculatedPrice / 10
        ) * 10;


    const lowerPrice =
        Math.round(
            (recommendedPrice * 0.95) / 10
        ) * 10;


    const upperPrice =
        Math.round(
            (recommendedPrice * 1.05) / 10
        ) * 10;


    /* -----------------------------------------
       NEGOTIATION FLOOR
    ----------------------------------------- */

    const negotiationFloor =
        Math.round(
            totalProductionCost / 10
        ) * 10;


    return {

        totalProductionCost:
            Math.round(
                totalProductionCost
            ),

        profitRate:
            profitRate,

        artisanProfit:
            Math.round(
                artisanProfit
            ),

        craftsmanshipRate:
            craftsmanshipRate,

        craftsmanshipValue:
            Math.round(
                craftsmanshipValue
            ),

        sustainablePrice:
            Math.round(
                sustainablePrice
            ),

        marketMinimum:
            benchmark.minimum,

        marketMaximum:
            benchmark.maximum,

        demand:
            demand,

        demandMultiplier:
            demandMultiplier,

        recommendedPrice:
            recommendedPrice,

        lowerPrice:
            Math.max(
                lowerPrice,
                negotiationFloor
            ),

        upperPrice:
            Math.max(
                upperPrice,
                recommendedPrice
            ),

        negotiationFloor:
            negotiationFloor
    };
}
/* =========================================================
   TEDKRAFT AI ARTISAN INTERVIEWER — FRONTEND
========================================================= */

const tedkraftInterviewState = {
    productProfile: {},
    conversation: [],
    currentQuestion: "",
    currentField: "",
    questionCount: 0,
    maxQuestions: 3,
    recognition: null,
    active: false
};


/* =========================================================
   GET CURRENT LANGUAGE
========================================================= */

function getInterviewLanguage() {

    const activeButton =
        document.querySelector(
            ".language-buttons button.active"
        );

    const language =
        activeButton?.dataset?.language || "en";

    const locales = {
        en: "en-IN",
        ta: "ta-IN",
        hi: "hi-IN",
        kn: "kn-IN",
        te: "te-IN"
    };

    return locales[language] || "en-IN";
}


/* =========================================================
   GET CURRENT PRODUCT INFORMATION
========================================================= */

function getCurrentProductProfile() {

    const title =
        document.getElementById(
            "catalogueTitle"
        )?.textContent.trim() || null;

    const material =
        document.getElementById(
            "catalogueMaterial"
        )?.textContent.trim() || null;

    const craft =
        document.getElementById(
            "catalogueCraft"
        )?.textContent.trim() || null;

    const timeText =
        document.getElementById(
            "catalogueTime"
        )?.textContent.trim() || "";

    const workDaysMatch =
        timeText.match(/\d+(?:\.\d+)?/);

    const workDays =
        workDaysMatch
            ? Number(workDaysMatch[0])
            : null;

    const artisanDescription =
        document.getElementById(
            "voiceOutput"
        )?.textContent.trim() || "";


    return {

        product_name:
            title || null,

        material:
            material || null,

        craft:
            craft || null,

        workDays:
            workDays,

        size:
            null,

        colour:
            null,

        customization:
            null,

        monthlyCapacity:
            null,

        differentiator:
            null,

        artisanDescription:
            artisanDescription

    };
}


/* =========================================================
   SHOW INTERVIEW SECTION AFTER CATALOGUE IS READY
========================================================= */

function setupInterviewVisibility() {

    const status =
        document.getElementById("status");

    const interview =
        document.getElementById("aiInterview");

    if (!status || !interview) {
        return;
    }

    function updateVisibility() {

        const currentStatus =
            status.textContent.trim().toUpperCase();

        if (currentStatus === "READY") {

            interview.style.display = "block";

        } else {

            interview.style.display = "none";

        }
    }

    // Set the correct initial state
    updateVisibility();

    const observer =
        new MutationObserver(updateVisibility);

    observer.observe(
        status,
        {
            childList: true,
            characterData: true,
            subtree: true
        }
    );
}

/* =========================================================
   START AI INTERVIEW
========================================================= */

async function startArtisanInterview() {

    const interview =
        document.getElementById(
            "aiInterview"
        );

    const status =
        document.getElementById(
            "interviewStatus"
        );

    const startButton =
        document.getElementById(
            "startInterviewBtn"
        );

    const answerButton =
        document.getElementById(
            "answerInterviewBtn"
        );

    const nextButton =
        document.getElementById(
            "nextInterviewBtn"
        );


    if (!interview) {
        return;
    }


    tedkraftInterviewState.productProfile =
        getCurrentProductProfile();

    tedkraftInterviewState.conversation = [];

    tedkraftInterviewState.currentQuestion = "";

    tedkraftInterviewState.currentField = "";

    tedkraftInterviewState.questionCount = 0;

    tedkraftInterviewState.active = true;


    interview.style.display =
        "block";


    status.textContent =
        "THINKING...";


    startButton.style.display =
        "none";

    answerButton.style.display =
        "none";

    nextButton.style.display =
        "none";


    await requestNextInterviewQuestion("");
}


/* =========================================================
   REQUEST NEXT QUESTION
========================================================= */

async function requestNextInterviewQuestion(
    answer
) {

    const questionElement =
        document.getElementById(
            "interviewQuestion"
        );

    const questionStatus =
        document.getElementById(
            "interviewStatus"
        );

    const answerStatus =
        document.getElementById(
            "interviewAnswerStatus"
        );

    const answerElement =
        document.getElementById(
            "interviewAnswer"
        );

    const answerButton =
        document.getElementById(
            "answerInterviewBtn"
        );

    const nextButton =
        document.getElementById(
            "nextInterviewBtn"
        );

    const progress =
        document.getElementById(
            "interviewProgress"
        );

    try {

        questionStatus.textContent =
            "THINKING...";


        answerStatus.textContent =
            "WAITING";


        const response =
           await fetch(
    `${API_BASE_URL}/api/interview`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        productProfile:
                            tedkraftInterviewState.productProfile,

                        conversation:
                            tedkraftInterviewState.conversation,

                        answer:
                            answer

                    })
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.error ||
                "Interview request failed."
            );
        }


        /* =============================================
           UPDATE PRODUCT PROFILE
        ============================================= */

        if (
            data.updatedProduct &&
            typeof data.updatedProduct === "object"
        ) {

            tedkraftInterviewState.productProfile =
                {
                    ...tedkraftInterviewState.productProfile,
                    ...data.updatedProduct
                };
        }


        /* =============================================
           INTERVIEW COMPLETE
        ============================================= */

        if (data.complete) {

            tedkraftInterviewState.active =
                false;


            questionStatus.textContent =
                "COMPLETE";


            questionElement.textContent =
                "Your product information is complete.";


            answerStatus.textContent =
                "DONE";


            answerButton.style.display =
                "none";


            nextButton.style.display =
                "none";


            progress.textContent =
                "✓ Product information complete. You can now use the catalogue and Fair Price Advisor.";


            const complete =
                document.getElementById(
                    "interviewComplete"
                );

            if (complete) {

                complete.style.display =
                    "block";
            }


            return;
        }


        /* =============================================
           NEW QUESTION
        ============================================= */

        tedkraftInterviewState.currentQuestion =
            data.question || "";

        tedkraftInterviewState.currentField =
            data.field || "";

        tedkraftInterviewState.questionCount++;


        questionStatus.textContent =
            "ASKING";


        questionElement.textContent =
            data.question;


        answerElement.textContent =
            "Tap ANSWER BY VOICE or type your answer here...";


        answerButton.style.display =
            "inline-flex";


        nextButton.style.display =
            "inline-flex";


        progress.textContent =
            `Question ${tedkraftInterviewState.questionCount} of ${tedkraftInterviewState.maxQuestions}`;


        /* =============================================
           READ QUESTION ALOUD
        ============================================= */

        speakInterviewQuestion(
            data.question
        );


        /* =============================================
           MAX QUESTION SAFETY
        ============================================= */

        if (
            tedkraftInterviewState.questionCount >=
            tedkraftInterviewState.maxQuestions
        ) {

            progress.textContent =
                `Question ${tedkraftInterviewState.questionCount} of ${tedkraftInterviewState.maxQuestions}`;
        }


    } catch (error) {

        console.error(
            "TEDKRAFT INTERVIEW ERROR:",
            error
        );


        questionStatus.textContent =
            "ERROR";


        questionElement.textContent =
            "Unable to generate the next question. Please try again.";


        answerButton.style.display =
            "none";


        nextButton.style.display =
            "none";


        alert(
            `AI Interview failed: ${error.message}`
        );
    }
}


/* =========================================================
   TEXT-TO-SPEECH
========================================================= */

function speakInterviewQuestion(
    question
) {

    if (
        !question ||
        !("speechSynthesis" in window)
    ) {
        return;
    }


    window.speechSynthesis.cancel();


    const utterance =
        new SpeechSynthesisUtterance(
            question
        );


    utterance.lang =
        getInterviewLanguage();


    utterance.rate =
        0.9;


    utterance.pitch =
        1;


    window.speechSynthesis.speak(
        utterance
    );
}


/* =========================================================
   VOICE ANSWER
========================================================= */

function answerInterviewByVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported in this browser. Please type the answer."
        );

        return;
    }


    /* Stop previous interview recognition */
    if (
        tedkraftInterviewState.recognition
    ) {

        try {
            tedkraftInterviewState.recognition.stop();
        } catch (e) {}
    }


    const recognition =
        new SpeechRecognition();


    tedkraftInterviewState.recognition =
        recognition;


    recognition.lang =
        getInterviewLanguage();


    recognition.interimResults =
        false;


    recognition.continuous =
        false;


    const answerElement =
        document.getElementById(
            "interviewAnswer"
        );

    const answerStatus =
        document.getElementById(
            "interviewAnswerStatus"
        );


    answerStatus.textContent =
        "LISTENING...";


    answerElement.textContent =
        "Listening...";


    recognition.start();


    recognition.onresult =
        function (event) {

            const transcript =
                event.results[0][0].transcript.trim();


            answerElement.textContent =
                transcript;


            answerStatus.textContent =
                "CAPTURED";

        };


    recognition.onerror =
        function (event) {

            console.error(
                "Interview speech recognition error:",
                event.error
            );


            answerStatus.textContent =
                "ERROR";


            answerElement.textContent =
                "Please type your answer or try the microphone again.";
        };


    recognition.onend =
        function () {

            if (
                answerStatus.textContent ===
                "LISTENING..."
            ) {

                answerStatus.textContent =
                    "WAITING";
            }
        };
}


/* =========================================================
   SUBMIT ANSWER
========================================================= */

async function submitInterviewAnswer() {

    if (
        !tedkraftInterviewState.active
    ) {
        return;
    }


    const answerElement =
        document.getElementById(
            "interviewAnswer"
        );

    const answerStatus =
        document.getElementById(
            "interviewAnswerStatus"
        );


    const answer =
        answerElement?.textContent
            ?.trim() || "";


    if (
        !answer ||
        answer ===
        "Tap ANSWER BY VOICE or type your answer here..."
    ) {

        alert(
            "Please provide an answer first."
        );

        return;
    }


    answerStatus.textContent =
        "PROCESSING...";


    /* =============================================
       SAVE THIS Q&A
    ============================================= */

    tedkraftInterviewState.conversation.push({

        question:
            tedkraftInterviewState.currentQuestion,

        field:
            tedkraftInterviewState.currentField,

        answer:
            answer

    });


    /* =============================================
       CHECK MAX QUESTIONS
    ============================================= */

    if (
        tedkraftInterviewState.questionCount >=
        tedkraftInterviewState.maxQuestions
    ) {

        /*
           We still send the answer to Gemini so
           the latest facts are extracted. Gemini
           can then mark the interview complete.
        */
    }


    answerElement.textContent =
        "Processing your answer...";


    const nextButton =
        document.getElementById(
            "nextInterviewBtn"
        );

    if (nextButton) {

        nextButton.disabled =
            true;
    }


    await requestNextInterviewQuestion(
        answer
    );


    if (nextButton) {

        nextButton.disabled =
            false;
    }
}


/* =========================================================
   INITIALISE INTERVIEWER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupInterviewVisibility();

    }
);

/* =========================================================
   TEDKRAFT 4-STEP PRODUCT STUDIO NAVIGATION
========================================================= */

let currentStudioStep = 1;


/* =========================================================
   SHOW ONLY THE CURRENT STUDIO STEP
========================================================= */

function showStudioStep(step) {

    currentStudioStep = step;

    const voicePanel =
        document.getElementById("productVoicePanel");

    const photoPanel =
        document.getElementById("productPhotoPanel");

    const aiWorkspace =
        document.getElementById("aiWorkspace");

    const interview =
        document.getElementById("aiInterview");

    const catalogue =
        document.getElementById("cataloguePanel");

    const price =
        document.getElementById("price");

    const nextButton =
        document.getElementById("studioNextBtn");

    const backButton =
        document.getElementById("studioBackBtn");

    const stepStatus =
        document.getElementById("studioStepStatus");

    const catalogueHeader =
        document.getElementById("catalogueHeader");


    /* =========================================
       RESET VISIBILITY
    ========================================= */

    if (voicePanel) {
        voicePanel.style.display = "none";
    }

    if (photoPanel) {
        photoPanel.style.display = "none";
    }

    if (aiWorkspace) {
        aiWorkspace.style.display = "none";
    }

    if (interview) {
        interview.style.display = "none";
    }

    if (catalogue) {
        catalogue.style.display = "none";
    }

    if (price) {
        price.style.display = "none";
    }

    if (catalogueHeader) {
        catalogueHeader.style.display = "none";
    }


    /* =========================================
       STEP 1 — PRODUCT INPUT
       VOICE + PHOTO TOGETHER
    ========================================= */

    if (step === 1) {

        if (voicePanel) {
            voicePanel.style.display = "block";
        }

        if (photoPanel) {
            photoPanel.style.display = "block";
        }

        if (nextButton) {
            nextButton.style.display = "inline-flex";
            nextButton.disabled = false;
            nextButton.textContent =
                "ANALYSE PRODUCT →";
        }

        if (backButton) {
            backButton.style.display = "none";
        }

        if (stepStatus) {
            stepStatus.textContent =
                "STEP 1 OF 4";
        }
    }


    /* =========================================
       STEP 2 — AI INTERVIEW
    ========================================= */

    if (step === 2) {

        if (aiWorkspace) {
            aiWorkspace.style.display = "block";
        }

        if (interview) {
            interview.style.display = "block";
        }

        if (nextButton) {
            nextButton.style.display = "inline-flex";
            nextButton.disabled = false;
            nextButton.textContent =
                "CONTINUE TO CATALOGUE →";
        }

        if (backButton) {
            backButton.style.display = "inline-flex";
        }

        if (stepStatus) {
            stepStatus.textContent =
                "STEP 2 OF 4";
        }
    }


    /* =========================================
       STEP 3 — CATALOGUE
    ========================================= */

    if (step === 3) {

        if (aiWorkspace) {
            aiWorkspace.style.display = "block";
        }

        if (catalogue) {
            catalogue.style.display = "grid";
        }

        if (catalogueHeader) {
            catalogueHeader.style.display = "flex";
        }

        if (nextButton) {
            nextButton.style.display = "inline-flex";
            nextButton.disabled = false;
            nextButton.textContent =
                "CONTINUE TO FAIR PRICE →";
        }

        if (backButton) {
            backButton.style.display = "inline-flex";
        }

        if (stepStatus) {
            stepStatus.textContent =
                "STEP 3 OF 4";
        }
    }


    /* =========================================
       STEP 4 — FAIR PRICE
    ========================================= */

    if (step === 4) {

        if (aiWorkspace) {
            aiWorkspace.style.display = "block";
        }

        if (price) {
            price.style.display = "block";
        }

        if (nextButton) {
            nextButton.style.display = "inline-flex";
            nextButton.disabled = false;
            nextButton.textContent =
                "FINISH";
        }

        if (backButton) {
            backButton.style.display = "inline-flex";
        }

        if (stepStatus) {
            stepStatus.textContent =
                "STEP 4 OF 4";
        }

        /*
           Use the existing Fair Price function
           to prepare the calculator.
        */
        if (typeof showPrice === "function") {
            showPrice();
        }
    }


    /* =========================================
       UPDATE TOP PROGRESS BAR
    ========================================= */

    const progressSteps =
        document.querySelectorAll(
            ".studio-step[data-step]"
        );

    progressSteps.forEach(
        stepElement => {

            const stepNumber =
                Number(
                    stepElement.dataset.step
                );

            stepElement.classList.toggle(
                "active",
                stepNumber === step
            );
        }
    );
}


/* =========================================================
   NEXT BUTTON
========================================================= */

async function handleStudioNext() {

    /* =========================================
       STEP 1 → GENERATE CATALOGUE
    ========================================= */

    if (currentStudioStep === 1) {

        const voiceOutput =
            document.getElementById(
                "voiceOutput"
            );

        const imageInput =
            document.getElementById(
                "imageInput"
            );


        const spokenText =
            voiceOutput?.textContent
                ?.trim() || "";


        const hasImage =
            imageInput &&
            imageInput.files &&
            imageInput.files.length > 0;


        if (
            !spokenText &&
            !hasImage
        ) {

            alert(
                "Please describe your product or add a photo first."
            );

            return;
        }


        const nextButton =
            document.getElementById(
                "studioNextBtn"
            );


        if (nextButton) {

            nextButton.disabled = true;

            nextButton.textContent =
                "ANALYSING...";
        }


        try {

            /*
               Use your EXISTING working
               Gemini catalogue function.
            */

            await generateCatalogue();


            const status =
                document.getElementById(
                    "status"
                )?.textContent
                    ?.trim()
                    .toUpperCase() || "";


            if (status === "READY") {

                showStudioStep(2);

            } else {

                if (nextButton) {

                    nextButton.disabled = false;

                    nextButton.textContent =
                        "ANALYSE PRODUCT →";
                }
            }

        } catch (error) {

            console.error(
                "Studio catalogue generation error:",
                error
            );


            if (nextButton) {

                nextButton.disabled = false;

                nextButton.textContent =
                    "ANALYSE PRODUCT →";
            }
        }


        return;
    }


    /* =========================================
       STEP 2 → CATALOGUE
    ========================================= */

    if (currentStudioStep === 2) {

        const interviewStatus =
            document.getElementById(
                "interviewStatus"
            )?.textContent
                ?.trim()
                .toUpperCase() || "";


        const interviewComplete =
            document.getElementById(
                "interviewComplete"
            );


        const completeVisible =
            interviewComplete &&
            interviewComplete.style.display !==
                "none";


        if (
            interviewStatus !== "COMPLETE" &&
            !completeVisible
        ) {

            alert(
                "Please complete the AI Interview first."
            );

            return;
        }


        showStudioStep(3);

        return;
    }


    /* =========================================
       STEP 3 → FAIR PRICE
    ========================================= */

    if (currentStudioStep === 3) {

        showStudioStep(4);

        return;
    }


    /* =========================================
       STEP 4 → FINISH
    ========================================= */

    if (currentStudioStep === 4) {

        alert(
            "Product creation completed."
        );

        return;
    }
}


/* =========================================================
   BACK BUTTON
========================================================= */

function handleStudioBack() {

    if (currentStudioStep <= 1) {
        return;
    }

    showStudioStep(
        currentStudioStep - 1
    );
}


/* =========================================================
   INITIALISE 4-STEP STUDIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const nextButton =
            document.getElementById(
                "studioNextBtn"
            );

        const backButton =
            document.getElementById(
                "studioBackBtn"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                handleStudioNext
            );
        }


        if (backButton) {

            backButton.addEventListener(
                "click",
                handleStudioBack
            );
        }


        /*
           Always start a new page load
           at Product Input.
        */

        showStudioStep(1);
    }
);
