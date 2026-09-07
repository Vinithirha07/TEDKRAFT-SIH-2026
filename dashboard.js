/* =========================================================
   TEDKRAFT DASHBOARD JAVASCRIPT
========================================================= */


/* =========================================================
   GO TO PRODUCT STUDIO
========================================================= */

function goToProductStudio() {

    window.location.href = "index.html#studio";

}


/* =========================================================
   DASHBOARD TRANSLATIONS
========================================================= */

const dashboardTranslations = {

    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        navHome: "Home",
        navProblem: "The Problem",
        navFeatures: "AI Features",
        navWorks: "How It Works",
        navMarket: "Market Linkage",
        navDashboard: "Dashboard",

        language: "LANGUAGE",
        tryTedkraft: "TRY TEDKRAFT →",

        dashboardEyebrow:
            "06 — ARTISAN DASHBOARD",

        heroCraft:
            "Your craft.",

        heroBusiness:
            "Your business.",

        heroDescription:
            "A simple view of your products, market activity and TEDKRAFT AI recommendations.",

        addProduct:
            "+ ADD PRODUCT",

        artisanLabel:
            "TEDKRAFT ARTISAN",

        artisanDescription:
            "Traditional Bamboo Artisan • Tamil Nadu",

        verified:
            "✓ VERIFIED ARTISAN",

        products:
            "PRODUCTS UPLOADED",

        views:
            "MARKET VIEWS",

        buyers:
            "POTENTIAL BUYERS",

        sales:
            "ESTIMATED SALES",

        productsGrowth:
            "+3 this month",

        viewsGrowth:
            "+24% this month",

        buyersGrowth:
            "8 new opportunities",

        salesTime:
            "This month",

        myProducts:
            "MY PRODUCTS",

        uploadedProducts:
            "Uploaded Products",

        add:
            "+ ADD",

        homeDecor:
            "HOME DÉCOR",

        basket:
            "Handwoven Bamboo Basket",

        bambooCraft:
            "BAMBOO CRAFT",

        storage:
            "Natural Bamboo Storage Set",

        terracotta:
            "TERRACOTTA",

        clayPot:
            "Traditional Clay Pot",

        handloom:
            "HANDLOOM",

        cottonWeave:
            "Traditional Cotton Weave",

        aiCatalogue:
            "AI Catalogue ✓",

        tedkraftAI:
            "TEDKRAFT AI",

        businessInsights:
            "Business Insights",

        highDemand:
            "HIGH DEMAND DETECTED",

        highDemandText:
            "Bamboo home décor is receiving increased interest this month.",

        priceOpportunity:
            "PRICE OPPORTUNITY",

        priceOpportunityText:
            "Your bamboo basket may support a selling range of ₹750–₹850.",

        buyerOpportunity:
            "BUYER OPPORTUNITY",

        buyerOpportunityText:
            "8 potential buyers are looking for products in your category.",

        marketPerformance:
            "MARKET PERFORMANCE",

        productInterest:
            "Product Interest",

        aiActivity:
            "AI ACTIVITY",

        recentActions:
            "Recent Actions",

        photoEnhanced:
            "Product photograph enhanced",

        justNow:
            "Just now",

        catalogueGenerated:
            "English catalogue generated",

        fiveMinutes:
            "5 min ago",

        priceCalculated:
            "Fair price range calculated",

        twelveMinutes:
            "12 min ago",

        buyersDiscovered:
            "3 buyer matches discovered",

        twentyFiveMinutes:
            "25 min ago",

        recommendation:
            "TEDKRAFT RECOMMENDS",

        recommendationTitle:
            "Consider producing more bamboo home décor products.",

        recommendationText:
            "Similar products are receiving increased market interest.",

        createProduct:
            "CREATE PRODUCT →"

    },


    /* =====================================================
       TAMIL
    ===================================================== */

    ta: {

        navHome:
            "முகப்பு",

        navProblem:
            "சிக்கல்",

        navFeatures:
            "AI அம்சங்கள்",

        navWorks:
            "எப்படி செயல்படுகிறது",

        navMarket:
            "சந்தை இணைப்பு",

        navDashboard:
            "டாஷ்போர்டு",

        language:
            "மொழி",

        tryTedkraft:
            "TEDKRAFT முயற்சி →",

        dashboardEyebrow:
            "06 — கைவினைஞர் டாஷ்போர்டு",

        heroCraft:
            "உங்கள் கைவினை.",

        heroBusiness:
            "உங்கள் வணிகம்.",

        heroDescription:
            "உங்கள் தயாரிப்புகள், சந்தை செயல்பாடுகள் மற்றும் TEDKRAFT AI பரிந்துரைகளின் எளிய பார்வை.",

        addProduct:
            "+ தயாரிப்பு சேர்க்க",

        artisanLabel:
            "TEDKRAFT கைவினைஞர்",

        artisanDescription:
            "பாரம்பரிய மூங்கில் கைவினைஞர் • தமிழ்நாடு",

        verified:
            "✓ சரிபார்க்கப்பட்ட கைவினைஞர்",

        products:
            "பதிவேற்றிய தயாரிப்புகள்",

        views:
            "சந்தை பார்வைகள்",

        buyers:
            "சாத்தியமான வாங்குபவர்கள்",

        sales:
            "மதிப்பிடப்பட்ட விற்பனை",

        productsGrowth:
            "இந்த மாதம் +3",

        viewsGrowth:
            "இந்த மாதம் +24%",

        buyersGrowth:
            "8 புதிய வாய்ப்புகள்",

        salesTime:
            "இந்த மாதம்",

        myProducts:
            "எனது தயாரிப்புகள்",

        uploadedProducts:
            "பதிவேற்றிய தயாரிப்புகள்",

        add:
            "+ சேர்",

        homeDecor:
            "வீட்டு அலங்காரம்",

        basket:
            "கையால் நெய்யப்பட்ட மூங்கில் கூடை",

        bambooCraft:
            "மூங்கில் கைவினை",

        storage:
            "இயற்கை மூங்கில் சேமிப்பு தொகுப்பு",

        terracotta:
            "சுடுமண்",

        clayPot:
            "பாரம்பரிய மண்பானை",

        handloom:
            "கைத்தறி",

        cottonWeave:
            "பாரம்பரிய பருத்தி நெசவு",

        aiCatalogue:
            "AI பட்டியல் ✓",

        tedkraftAI:
            "TEDKRAFT AI",

        businessInsights:
            "வணிக நுண்ணறிவுகள்",

        highDemand:
            "அதிக தேவை கண்டறியப்பட்டது",

        highDemandText:
            "மூங்கில் வீட்டு அலங்காரப் பொருட்களுக்கு இந்த மாதம் அதிக ஆர்வம் உள்ளது.",

        priceOpportunity:
            "விலை வாய்ப்பு",

        priceOpportunityText:
            "உங்கள் மூங்கில் கூடைக்கு ₹750–₹850 விலை வரம்பு பொருத்தமாக இருக்கலாம்.",

        buyerOpportunity:
            "வாங்குபவர் வாய்ப்பு",

        buyerOpportunityText:
            "உங்கள் பிரிவில் 8 சாத்தியமான வாங்குபவர்கள் உள்ளனர்.",

        marketPerformance:
            "சந்தை செயல்திறன்",

        productInterest:
            "தயாரிப்பு ஆர்வம்",

        aiActivity:
            "AI செயல்பாடு",

        recentActions:
            "சமீபத்திய செயல்கள்",

        photoEnhanced:
            "தயாரிப்பு புகைப்படம் மேம்படுத்தப்பட்டது",

        justNow:
            "இப்போதுதான்",

        catalogueGenerated:
            "ஆங்கில பட்டியல் உருவாக்கப்பட்டது",

        fiveMinutes:
            "5 நிமிடங்களுக்கு முன்",

        priceCalculated:
            "நியாயமான விலை வரம்பு கணக்கிடப்பட்டது",

        twelveMinutes:
            "12 நிமிடங்களுக்கு முன்",

        buyersDiscovered:
            "3 வாங்குபவர் பொருத்தங்கள் கண்டறியப்பட்டன",

        twentyFiveMinutes:
            "25 நிமிடங்களுக்கு முன்",

        recommendation:
            "TEDKRAFT பரிந்துரை",

        recommendationTitle:
            "மேலும் மூங்கில் வீட்டு அலங்காரப் பொருட்களை உருவாக்குங்கள்.",

        recommendationText:
            "இதே போன்ற தயாரிப்புகளுக்கு சந்தையில் அதிக ஆர்வம் காணப்படுகிறது.",

        createProduct:
            "தயாரிப்பு உருவாக்கு →"

    },


    /* =====================================================
       HINDI
    ===================================================== */

    hi: {

        navHome: "होम",
        navProblem: "समस्या",
        navFeatures: "AI सुविधाएँ",
        navWorks: "यह कैसे काम करता है",
        navMarket: "मार्केट लिंक",
        navDashboard: "डैशबोर्ड",

        language: "भाषा",
        tryTedkraft: "TEDKRAFT आज़माएँ →",

        dashboardEyebrow:
            "06 — कारीगर डैशबोर्ड",

        heroCraft:
            "आपका शिल्प.",

        heroBusiness:
            "आपका व्यवसाय.",

        heroDescription:
            "आपके उत्पादों, बाज़ार गतिविधि और TEDKRAFT AI सुझावों का सरल अवलोकन।",

        addProduct:
            "+ उत्पाद जोड़ें",

        artisanLabel:
            "TEDKRAFT कारीगर",

        artisanDescription:
            "पारंपरिक बाँस कारीगर • तमिलनाडु",

        verified:
            "✓ सत्यापित कारीगर",

        products:
            "अपलोड किए गए उत्पाद",

        views:
            "बाज़ार दृश्य",

        buyers:
            "संभावित खरीदार",

        sales:
            "अनुमानित बिक्री",

        productsGrowth:
            "इस महीने +3",

        viewsGrowth:
            "इस महीने +24%",

        buyersGrowth:
            "8 नए अवसर",

        salesTime:
            "इस महीने",

        myProducts:
            "मेरे उत्पाद",

        uploadedProducts:
            "अपलोड किए गए उत्पाद",

        add:
            "+ जोड़ें",

        homeDecor:
            "गृह सज्जा",

        basket:
            "हाथ से बुनी बाँस की टोकरी",

        bambooCraft:
            "बाँस शिल्प",

        storage:
            "प्राकृतिक बाँस भंडारण सेट",

        terracotta:
            "टेराकोटा",

        clayPot:
            "पारंपरिक मिट्टी का बर्तन",

        handloom:
            "हथकरघा",

        cottonWeave:
            "पारंपरिक सूती बुनाई",

        aiCatalogue:
            "AI कैटलॉग ✓",

        tedkraftAI:
            "TEDKRAFT AI",

        businessInsights:
            "व्यवसाय अंतर्दृष्टि",

        highDemand:
            "उच्च मांग का पता चला",

        highDemandText:
            "इस महीने बाँस की गृह सज्जा में रुचि बढ़ रही है।",

        priceOpportunity:
            "मूल्य अवसर",

        priceOpportunityText:
            "आपकी बाँस की टोकरी के लिए ₹750–₹850 की कीमत उपयुक्त हो सकती है।",

        buyerOpportunity:
            "खरीदार अवसर",

        buyerOpportunityText:
            "आपकी श्रेणी में 8 संभावित खरीदार हैं।",

        marketPerformance:
            "बाज़ार प्रदर्शन",

        productInterest:
            "उत्पाद रुचि",

        aiActivity:
            "AI गतिविधि",

        recentActions:
            "हाल की गतिविधियाँ",

        photoEnhanced:
            "उत्पाद फोटो बेहतर की गई",

        justNow:
            "अभी",

        catalogueGenerated:
            "अंग्रेज़ी कैटलॉग बनाया गया",

        fiveMinutes:
            "5 मिनट पहले",

        priceCalculated:
            "उचित मूल्य सीमा की गणना की गई",

        twelveMinutes:
            "12 मिनट पहले",

        buyersDiscovered:
            "3 खरीदार मैच मिले",

        twentyFiveMinutes:
            "25 मिनट पहले",

        recommendation:
            "TEDKRAFT सुझाव",

        recommendationTitle:
            "अधिक बाँस की गृह सज्जा के उत्पाद बनाने पर विचार करें।",

        recommendationText:
            "समान उत्पादों में बाज़ार की रुचि बढ़ रही है।",

        createProduct:
            "उत्पाद बनाएँ →"

    },


    /* =====================================================
       KANNADA
    ===================================================== */

    kn: {

        navHome: "ಮುಖಪುಟ",
        navProblem: "ಸಮಸ್ಯೆ",
        navFeatures: "AI ವೈಶಿಷ್ಟ್ಯಗಳು",
        navWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        navMarket: "ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕ",
        navDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

        language: "ಭಾಷೆ",
        tryTedkraft: "TEDKRAFT ಪ್ರಯತ್ನಿಸಿ →",

        dashboardEyebrow:
            "06 — ಕರಕುಶಲಗಾರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

        heroCraft:
            "ನಿಮ್ಮ ಕಲೆ.",

        heroBusiness:
            "ನಿಮ್ಮ ವ್ಯವಹಾರ.",

        heroDescription:
            "ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳು, ಮಾರುಕಟ್ಟೆ ಚಟುವಟಿಕೆ ಮತ್ತು TEDKRAFT AI ಸಲಹೆಗಳ ಸರಳ ನೋಟ.",

        addProduct:
            "+ ಉತ್ಪನ್ನ ಸೇರಿಸಿ",

        artisanLabel:
            "TEDKRAFT ಕರಕುಶಲಗಾರ",

        artisanDescription:
            "ಸಾಂಪ್ರದಾಯಿಕ ಬಿದಿರು ಕರಕುಶಲಗಾರ • ತಮಿಳುನಾಡು",

        verified:
            "✓ ಪರಿಶೀಲಿಸಿದ ಕರಕುಶಲಗಾರ",

        products:
            "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಉತ್ಪನ್ನಗಳು",

        views:
            "ಮಾರುಕಟ್ಟೆ ವೀಕ್ಷಣೆಗಳು",

        buyers:
            "ಸಂಭಾವ್ಯ ಖರೀದಿದಾರರು",

        sales:
            "ಅಂದಾಜು ಮಾರಾಟ",

        productsGrowth:
            "ಈ ತಿಂಗಳು +3",

        viewsGrowth:
            "ಈ ತಿಂಗಳು +24%",

        buyersGrowth:
            "8 ಹೊಸ ಅವಕಾಶಗಳು",

        salesTime:
            "ಈ ತಿಂಗಳು",

        myProducts:
            "ನನ್ನ ಉತ್ಪನ್ನಗಳು",

        uploadedProducts:
            "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಉತ್ಪನ್ನಗಳು",

        add:
            "+ ಸೇರಿಸಿ",

        homeDecor:
            "ಮನೆ ಅಲಂಕಾರ",

        basket:
            "ಕೈಯಿಂದ ನೇಯ್ದ ಬಿದಿರು ಬುಟ್ಟಿ",

        bambooCraft:
            "ಬಿದಿರು ಕರಕುಶಲ",

        storage:
            "ನೈಸರ್ಗಿಕ ಬಿದಿರು ಸಂಗ್ರಹ ಸೆಟ್",

        terracotta:
            "ಟೆರಾಕೋಟಾ",

        clayPot:
            "ಸಾಂಪ್ರದಾಯಿಕ ಮಣ್ಣಿನ ಮಡಕೆ",

        handloom:
            "ಕೈಮಗ್ಗ",

        cottonWeave:
            "ಸಾಂಪ್ರದಾಯಿಕ ಹತ್ತಿ ನೇಯ್ಗೆ",

        aiCatalogue:
            "AI ಕ್ಯಾಟಲಾಗ್ ✓",

        tedkraftAI:
            "TEDKRAFT AI",

        businessInsights:
            "ವ್ಯವಹಾರ ಒಳನೋಟಗಳು",

        highDemand:
            "ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ ಕಂಡುಬಂದಿದೆ",

        highDemandText:
            "ಈ ತಿಂಗಳು ಬಿದಿರು ಮನೆ ಅಲಂಕಾರ ಉತ್ಪನ್ನಗಳಿಗೆ ಹೆಚ್ಚಿನ ಆಸಕ್ತಿ ಇದೆ.",

        priceOpportunity:
            "ಬೆಲೆ ಅವಕಾಶ",

        priceOpportunityText:
            "ನಿಮ್ಮ ಬಿದಿರು ಬುಟ್ಟಿಗೆ ₹750–₹850 ಬೆಲೆ ಸೂಕ್ತವಾಗಿರಬಹುದು.",

        buyerOpportunity:
            "ಖರೀದಿದಾರರ ಅವಕಾಶ",

        buyerOpportunityText:
            "ನಿಮ್ಮ ವರ್ಗದಲ್ಲಿ 8 ಸಂಭಾವ್ಯ ಖರೀದಿದಾರರಿದ್ದಾರೆ.",

        marketPerformance:
            "ಮಾರುಕಟ್ಟೆ ಕಾರ್ಯಕ್ಷಮತೆ",

        productInterest:
            "ಉತ್ಪನ್ನ ಆಸಕ್ತಿ",

        aiActivity:
            "AI ಚಟುವಟಿಕೆ",

        recentActions:
            "ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆಗಳು",

        photoEnhanced:
            "ಉತ್ಪನ್ನ ಛಾಯಾಚಿತ್ರವನ್ನು ಸುಧಾರಿಸಲಾಗಿದೆ",

        justNow:
            "ಈಗಷ್ಟೇ",

        catalogueGenerated:
            "ಇಂಗ್ಲಿಷ್ ಕ್ಯಾಟಲಾಗ್ ರಚಿಸಲಾಗಿದೆ",

        fiveMinutes:
            "5 ನಿಮಿಷಗಳ ಹಿಂದೆ",

        priceCalculated:
            "ನ್ಯಾಯಯುತ ಬೆಲೆ ಶ್ರೇಣಿಯನ್ನು ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ",

        twelveMinutes:
            "12 ನಿಮಿಷಗಳ ಹಿಂದೆ",

        buyersDiscovered:
            "3 ಖರೀದಿದಾರರ ಹೊಂದಾಣಿಕೆಗಳು ಕಂಡುಬಂದಿವೆ",

        twentyFiveMinutes:
            "25 ನಿಮಿಷಗಳ ಹಿಂದೆ",

        recommendation:
            "TEDKRAFT ಶಿಫಾರಸು",

        recommendationTitle:
            "ಹೆಚ್ಚಿನ ಬಿದಿರು ಮನೆ ಅಲಂಕಾರ ಉತ್ಪನ್ನಗಳನ್ನು ತಯಾರಿಸುವುದನ್ನು ಪರಿಗಣಿಸಿ.",

        recommendationText:
            "ಇದೇ ರೀತಿಯ ಉತ್ಪನ್ನಗಳಿಗೆ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಹೆಚ್ಚಿನ ಆಸಕ್ತಿ ಇದೆ.",

        createProduct:
            "ಉತ್ಪನ್ನ ರಚಿಸಿ →"

    },


    /* =====================================================
       TELUGU
    ===================================================== */

    te: {

        navHome: "హోమ్",
        navProblem: "సమస్య",
        navFeatures: "AI ఫీచర్లు",
        navWorks: "ఇది ఎలా పనిచేస్తుంది",
        navMarket: "మార్కెట్ లింకేజ్",
        navDashboard: "డ్యాష్‌బోర్డ్",

        language: "భాష",
        tryTedkraft: "TEDKRAFT ప్రయత్నించండి →",

        dashboardEyebrow:
            "06 — కళాకారుల డ్యాష్‌బోర్డ్",

        heroCraft:
            "మీ కళ.",

        heroBusiness:
            "మీ వ్యాపారం.",

        heroDescription:
            "మీ ఉత్పత్తులు, మార్కెట్ కార్యకలాపాలు మరియు TEDKRAFT AI సిఫార్సుల సరళమైన వీక్షణ.",

        addProduct:
            "+ ఉత్పత్తిని జోడించండి",

        artisanLabel:
            "TEDKRAFT కళాకారుడు",

        artisanDescription:
            "సాంప్రదాయ వెదురు కళాకారుడు • తమిళనాడు",

        verified:
            "✓ ధృవీకరించబడిన కళాకారుడు",

        products:
            "అప్‌లోడ్ చేసిన ఉత్పత్తులు",

        views:
            "మార్కెట్ వీక్షణలు",

        buyers:
            "సంభావ్య కొనుగోలుదారులు",

        sales:
            "అంచనా అమ్మకాలు",

        productsGrowth:
            "ఈ నెల +3",

        viewsGrowth:
            "ఈ నెల +24%",

        buyersGrowth:
            "8 కొత్త అవకాశాలు",

        salesTime:
            "ఈ నెల",

        myProducts:
            "నా ఉత్పత్తులు",

        uploadedProducts:
            "అప్‌లోడ్ చేసిన ఉత్పత్తులు",

        add:
            "+ జోడించండి",

        homeDecor:
            "ఇంటి అలంకరణ",

        basket:
            "చేతితో నేసిన వెదురు బుట్ట",

        bambooCraft:
            "వెదురు కళ",

        storage:
            "సహజ వెదురు నిల్వ సెట్",

        terracotta:
            "టెర్రకోట",

        clayPot:
            "సాంప్రదాయ మట్టి కుండ",

        handloom:
            "చేనేత",

        cottonWeave:
            "సాంప్రదాయ పత్తి నేత",

        aiCatalogue:
            "AI క్యాటలాగ్ ✓",

        tedkraftAI:
            "TEDKRAFT AI",

        businessInsights:
            "వ్యాపార అంతర్దృష్టులు",

        highDemand:
            "అధిక డిమాండ్ గుర్తించబడింది",

        highDemandText:
            "ఈ నెల వెదురు ఇంటి అలంకరణ ఉత్పత్తులపై ఆసక్తి పెరిగింది.",

        priceOpportunity:
            "ధర అవకాశం",

        priceOpportunityText:
            "మీ వెదురు బుట్టకు ₹750–₹850 ధర అనుకూలంగా ఉండవచ్చు.",

        buyerOpportunity:
            "కొనుగోలుదారు అవకాశం",

        buyerOpportunityText:
            "మీ విభాగంలో 8 సంభావ్య కొనుగోలుదారులు ఉన్నారు.",

        marketPerformance:
            "మార్కెట్ పనితీరు",

        productInterest:
            "ఉత్పత్తి ఆసక్తి",

        aiActivity:
            "AI కార్యకలాపం",

        recentActions:
            "ఇటీవలి చర్యలు",

        photoEnhanced:
            "ఉత్పత్తి ఫోటో మెరుగుపరచబడింది",

        justNow:
            "ఇప్పుడే",

        catalogueGenerated:
            "ఇంగ్లీష్ క్యాటలాగ్ రూపొందించబడింది",

        fiveMinutes:
            "5 నిమిషాల క్రితం",

        priceCalculated:
            "సరైన ధర పరిధి లెక్కించబడింది",

        twelveMinutes:
            "12 నిమిషాల క్రితం",

        buyersDiscovered:
            "3 కొనుగోలుదారుల మ్యాచ్‌లు కనుగొనబడ్డాయి",

        twentyFiveMinutes:
            "25 నిమిషాల క్రితం",

        recommendation:
            "TEDKRAFT సిఫార్సు",

        recommendationTitle:
            "మరిన్ని వెదురు ఇంటి అలంకరణ ఉత్పత్తులను తయారు చేయడాన్ని పరిగణించండి.",

        recommendationText:
            "ఇలాంటి ఉత్పత్తులకు మార్కెట్‌లో ఆసక్తి పెరుగుతోంది.",

        createProduct:
            "ఉత్పత్తిని సృష్టించండి →"

    }

};


/* =========================================================
   CHANGE DASHBOARD LANGUAGE
========================================================= */

function changeDashboardLanguage(language) {

    /* Safety check */

    if (!dashboardTranslations[language]) {
        language = "en";
    }


    const data =
        dashboardTranslations[language];


    /* =====================================================
       TRANSLATE ALL ELEMENTS WITH data-dash
    ===================================================== */

    const elements =
        document.querySelectorAll("[data-dash]");


    elements.forEach(function(element) {

        const key =
            element.getAttribute("data-dash");


        if (
            Object.prototype.hasOwnProperty.call(
                data,
                key
            )
        ) {

            element.textContent =
                data[key];

        }

    });


    /* =====================================================
       LANGUAGE HEADING
    ===================================================== */

    const languageHeading =
        document.querySelector(
            ".dashboard-language p"
        );


    if (languageHeading) {

        languageHeading.textContent =
            data.language;

    }


    /* =====================================================
       TRY TEDKRAFT BUTTON
    ===================================================== */

    const tryButton =
        document.querySelector(
            ".dashboard-sidebar-bottom .sidebar-button"
        );


    if (tryButton) {

        tryButton.textContent =
            data.tryTedkraft;

    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".dashboard-language .language-buttons button"
        );


    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    const activeButton =
        document.querySelector(
            '.dashboard-language .language-buttons button[data-language="' +
            language +
            '"]'
        );


    if (activeButton) {

        activeButton.classList.add("active");

    }


    /* =====================================================
       HTML LANGUAGE
    ===================================================== */

    document.documentElement.lang =
        language;


    /* =====================================================
       SAVE LANGUAGE
    ===================================================== */

    localStorage.setItem(
        "tedkraftLanguage",
        language
    );

}


/* =========================================================
   COUNTER ANIMATION
========================================================= */

function animateCounter(element) {

    const target =
        Number(
            element.getAttribute("data-target")
        );


    if (Number.isNaN(target)) {
        return;
    }


    const duration = 1200;

    const start =
        performance.now();


    function update(time) {

        const progress =
            Math.min(
                (time - start) /
                duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const value =
            Math.floor(
                target * eased
            );


        element.textContent =
            value.toLocaleString("en-IN");


        if (progress < 1) {

            requestAnimationFrame(update);

        }

    }


    requestAnimationFrame(update);

}


/* =========================================================
   START COUNTERS
========================================================= */

function startCounters() {

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    counters.forEach(
        function(counter, index) {

            setTimeout(
                function() {

                    animateCounter(
                        counter
                    );

                },
                index * 150
            );

        }
    );

}


/* =========================================================
   LANGUAGE BUTTON SETUP
========================================================= */

function setupLanguageButtons() {

    const buttons =
        document.querySelectorAll(
            ".dashboard-language .language-buttons button"
        );


    buttons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();

                    const language =
                        this.getAttribute(
                            "data-language"
                        );


                    changeDashboardLanguage(
                        language
                    );

                }
            );

        }
    );

}


/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

function loadSavedLanguage() {

    let language =
        localStorage.getItem(
            "tedkraftLanguage"
        );


    if (!dashboardTranslations[language]) {

        language = "en";

    }


    changeDashboardLanguage(
        language
    );

}


/* =========================================================
   INITIALIZE DASHBOARD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupLanguageButtons();

        loadSavedLanguage();

        startCounters();

    }
);
/* =========================================================
   TEDKRAFT — AI BUYER MATCHING
   PHASE 2
========================================================= */


/* =========================================================
   BUYER DATA
========================================================= */

const buyerMatches = {

    southern: {

        icon: "🏪",

        type: "RETAIL BUYER",

        name: "Southern Home Collective",

        location: "Chennai, Tamil Nadu",

        score: 94,

        order: "50–100 units",

        reasons: [

            "✓ Interested in bamboo products",

            "✓ Accepts handmade products",

            "✓ Home décor category",

            "✓ Your price range fits"

        ]

    },


    crafted: {

        icon: "🛍",

        type: "MARKETPLACE",

        name: "Crafted Living Market",

        location: "Bengaluru, Karnataka",

        score: 89,

        order: "25–50 units",

        reasons: [

            "✓ Bamboo and sustainable products",

            "✓ Handmade products accepted",

            "✓ Strong home-living category",

            "✓ Your product fits their range"

        ]

    },


    heritage: {

        icon: "🏠",

        type: "HOME DÉCOR",

        name: "Heritage Home Stores",

        location: "Hyderabad, Telangana",

        score: 84,

        order: "20–40 units",

        reasons: [

            "✓ Home décor products",

            "✓ Natural fibre products",

            "✓ Artisan-made products",

            "✓ Suitable regional market"

        ]

    }

};


/* =========================================================
   OPEN BUYER MODAL
========================================================= */

function openBuyerModal(buyerId) {

    const buyer = buyerMatches[buyerId];

    if (!buyer) {

        console.warn(
            "TEDKRAFT: Buyer not found:",
            buyerId
        );

        return;

    }


    const modal =
        document.getElementById("buyerModal");

    const icon =
        document.getElementById("buyerModalIcon");

    const type =
        document.getElementById("buyerModalType");

    const name =
        document.getElementById("buyerModalName");

    const location =
        document.getElementById("buyerModalLocation");

    const score =
        document.getElementById("buyerModalScore");

    const bar =
        document.getElementById("buyerModalBar");

    const order =
        document.getElementById("buyerModalOrder");

    const reasons =
        document.getElementById("buyerModalReasons");

    const contactMessage =
        document.getElementById(
            "buyerContactMessage"
        );


    if (!modal) return;


    /* UPDATE CONTENT */

    icon.textContent = buyer.icon;

    type.textContent = buyer.type;

    name.textContent = buyer.name;

    location.textContent = buyer.location;

    score.textContent = buyer.score + "%";

    bar.style.width = buyer.score + "%";

    order.textContent = buyer.order;


    /* UPDATE REASONS */

    reasons.innerHTML = "";


    buyer.reasons.forEach(function(reason) {

        const li =
            document.createElement("li");

        li.textContent = reason;

        reasons.appendChild(li);

    });


    /* RESET CONTACT MESSAGE */

    contactMessage.classList.remove(
        "active"
    );


    /* STORE CURRENT BUYER */

    window.currentTEDKraftBuyer =
        buyer;


    /* SHOW MODAL */

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE BUYER MODAL
========================================================= */

function closeBuyerModal() {

    const modal =
        document.getElementById("buyerModal");

    if (!modal) return;


    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";

}


/* =========================================================
   CONTACT BUYER
========================================================= */

function contactBuyer() {

    const buyer =
        window.currentTEDKraftBuyer;

    const message =
        document.getElementById(
            "buyerContactMessage"
        );


    if (!buyer || !message) return;


    message.textContent =
        "✦ Buyer enquiry prepared for " +
        buyer.name +
        ". TEDKRAFT can connect you with this buyer.";


    message.classList.add("active");

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeBuyerModal();

        }

    }
);
