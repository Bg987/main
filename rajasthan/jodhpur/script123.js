document.addEventListener('DOMContentLoaded', () => {
    // Function to update text elements based on the selected language
    function updateText(language) {
        // Define translations for different languages
        const translations = {
            'en': {
                'pageTitle': 'District History - Jodhpur',
                'navHome': 'Home',
                'navBack': 'Back',
                'heroTitle': 'Jodhpur',
                'heroSubtitle': 'A Journey Through Time',
                'introTitle': 'Welcome to Jodhpur',
                'introText': 'Known as the "Blue City" due to its distinctive blue-painted houses, Jodhpur is a city rich in history and culture. Founded in 1459 by Rao Jodha, the city\'s strategic location and vibrant heritage make it a fascinating destination for history enthusiasts and cultural explorers alike.',
                'culinaryLink': 'Explore Culinary Heritage',
                'artLink': 'Discover Art and Craft',
                'timelineTitle': 'Historical Timeline',
                'year1459': '1459',
                'event1459': 'Rao Jodha, the chief of the Rathore clan, founded the city of Jodhpur. The city was strategically located on a rocky hill, which offered a natural defense and control over the trade routes. Rao Jodha\'s decision to build Mehrangarh Fort on this hill ensured the city\'s dominance and security. The fort became the center of administration and power, reflecting the architectural prowess of the Rathore dynasty.',
                'year1473': '1473',
                'event1473': 'Rao Jodha\'s successor, Rao Sardar, completed the construction of the Mehrangarh Fort. During his reign, the fort was expanded to accommodate the growing needs of the city. This period saw significant development in Jodhpur, including the establishment of markets and the enhancement of the city\'s fortifications.',
                'year1679': '1679',
                'event1679': 'The Jaswant Thada, a beautiful marble cenotaph, was completed under the reign of Maharaja Jaswant Singh II. Built as a memorial for his father, Maharaja Jaswant Singh I, the cenotaph is an architectural marvel with intricately carved marble and serene gardens, showcasing the grandeur and craftsmanship of the period.',
                'year1818': '1818',
                'event1818': 'In this year, the British East India Company signed a treaty with the Jodhpur state, establishing Jodhpur as a princely state under British suzerainty. The treaty allowed Jodhpur to retain its autonomy while aligning with British interests, leading to a period of stability and development under the guidance of British advisors.',
                'year1947': '1947',
                'event1947': 'With India\'s independence from British rule, Jodhpur became part of the newly formed Indian state of Rajasthan. Maharaja Hanwant Singh, the then ruler of Jodhpur, played a key role in the integration of princely states into the Indian Union. Jodhpur continued to thrive as a historical and cultural hub, contributing to the rich tapestry of post-independence India.',
                'landmarksTitle': 'Notable Landmarks',
                'landmarkMehrangarh': 'Mehrangarh Fort',
                'landmarkMehrangarhText': 'Mehrangarh Fort, one of India\'s largest forts, was built by Rao Jodha in 1459. Its massive walls, imposing gates, and stunning architecture are a testament to the fort\'s strategic and symbolic significance. The fort houses an extensive collection of artifacts, including royal costumes, weaponry, and paintings. It also offers panoramic views of the city and the surrounding desert landscape, reflecting Jodhpur\'s historical and cultural grandeur.',
                'landmarkJaswantThada': 'Jaswant Thada',
                'landmarkJaswantThadaText': 'Jaswant Thada, built in 1899, serves as a memorial to Maharaja Jaswant Singh II. The cenotaph is renowned for its exquisite white marble construction, intricate carvings, and serene surroundings. The monument features beautifully landscaped gardens and offers a tranquil escape from the bustling city. It also serves as a reminder of the artistic and architectural skills of the period.',
                'landmarkUmaidBhawan': 'Umaid Bhawan Palace',
                'landmarkUmaidBhawanText': 'Umaid Bhawan Palace, completed in 1943, is a grand architectural marvel designed by the British architect Henry Vaughan Lanchester. The palace, built during the reign of Maharaja Umaid Singh, is an example of Indo-Saracenic architecture, combining elements of Indian and European design. It was initially constructed as a famine relief project and later transformed into a luxurious hotel, symbolizing the blend of Jodhpur\'s royal heritage with modern hospitality.',
                'cultureTitle': 'Cultural Significance',
                'cultureBandhej': 'Jodhpuri Bandhej',
                'cultureBandhejText': 'Jodhpuri Bandhej, a traditional tie-dye technique, is an integral part of Jodhpur\'s cultural heritage. This craft involves tying and dyeing fabric to create intricate patterns, often using vibrant colors. Bandhej is commonly used in traditional garments such as sarees, turbans, and dupattas. The art form is passed down through generations and plays a significant role in festivals and ceremonial occasions in Jodhpur.',
                'cultureCuisine': 'Marwari Cuisine',
                'cultureCuisineText': 'Marwari cuisine, the culinary tradition of Jodhpur\'s Marwari community, is known for its rich and spicy flavors. Signature dishes include dal bati churma, a combination of lentil curry, baked wheat balls, and sweet crushed wheat; and gatte ki sabzi, a curry made with gram flour dumplings. Marwari cuisine reflects the region\'s agricultural practices and the rich, diverse flavors that have evolved over centuries.',
                'culturePaintings': 'Rathore Paintings',
                'culturePaintingsText': 'Rathore Paintings are a traditional art form depicting scenes from the royal courts and mythology. Characterized by their vibrant colors and intricate details, these paintings capture the grandeur and cultural narratives of the Rathore dynasty. Often used to adorn royal palaces and temples, Rathore Paintings are a testament to Jodhpur\'s artistic heritage and the skilled craftsmanship of its artists.',
                'footerText': 'Traditional Trekkers'
            },
            'hi': {
                'pageTitle': 'जिला इतिहास - जोधपुर',
                'navHome': 'मुखपृष्ठ',
                'navBack': 'पिछला',
                'heroTitle': 'जोधपुर',
                'heroSubtitle': 'समय की यात्रा',
                'introTitle': 'जोधपुर में आपका स्वागत है',
                'introText': 'जोधपुर, जिसे "नीला शहर" के नाम से जाना जाता है, अपनी विशिष्ट नीली पेंट की गई हवेलियों के लिए प्रसिद्ध है। 1459 में राव जोधा द्वारा स्थापित, यह शहर ऐतिहासिक और सांस्कृतिक दृष्टिकोण से समृद्ध है। राव जोधा द्वारा Mehrangarh किला बनवाए जाने से शहर की सुरक्षा और महत्व बढ़ गया, और यह क्षेत्रीय व्यापार मार्गों पर नियंत्रण रखने में सक्षम हुआ।',
                'culinaryLink': 'खानपान की विरासत खोजें',
                'artLink': 'कला और शिल्प खोजें',
                'timelineTitle': 'ऐतिहासिक समयरेखा',
                'year1459': '1459',
                'event1459': 'राव जोधा, राठौर कबीले के प्रमुख, ने जोधपुर शहर की स्थापना की। यह शहर एक चट्टानी पहाड़ी पर स्थित था, जो एक प्राकृतिक रक्षा और व्यापार मार्गों पर नियंत्रण प्रदान करता था। राव जोधा का Mehrangarh किला इस पहाड़ी पर बनवाना शहर की सुरक्षा और प्रभुत्व सुनिश्चित करता है।',
                'year1473': '1473',
                'event1473': 'राव जोधा के उत्तराधिकारी, राव सदार ने मेहरानगढ़ किले का निर्माण पूरा किया। इस दौरान किले का विस्तार किया गया और शहर की आवश्यकताओं को पूरा किया गया। इस अवधि के दौरान जोधपुर में महत्वपूर्ण विकास हुआ, जिसमें बाजारों की स्थापना और शहर की सुरक्षा को बढ़ाना शामिल था।',
                'year1679': '1679',
                'event1679': 'जसवंत थड़ा, एक सुंदर संगमरमर का स्मारक, महाराजा जसवंत सिंह II के शासनकाल के दौरान पूरा किया गया। यह स्मारक महाराजा जसवंत सिंह I की याद में बनाया गया है और इसकी संगमरमर की कारीगरी और शांत बगीचों की विशेषता है।',
                'year1818': '1818',
                'event1818': 'इस वर्ष, ब्रिटिश ईस्ट इंडिया कंपनी ने जोधपुर राज्य के साथ एक संधि पर हस्ताक्षर किए, जिससे जोधपुर एक ब्रिटिश अधीनता के तहत राजसी राज्य के रूप में स्थापित हुआ। संधि ने जोधपुर को अपनी स्वायत्तता बनाए रखने की अनुमति दी और ब्रिटिश हितों के साथ संरेखित किया।',
                'year1947': '1947',
                'event1947': 'ब्रिटिश शासन से भारत की स्वतंत्रता के साथ, जोधपुर राजस्थान के नवगठित भारतीय राज्य का हिस्सा बन गया। महाराजा हनवंत सिंह, जोधपुर के तत्कालीन शासक, ने राजसी राज्यों को भारतीय संघ में शामिल करने में महत्वपूर्ण भूमिका निभाई। जोधपुर स्वतंत्रता के बाद के भारत की समृद्ध परंपराओं में योगदान देता रहा।',
                'landmarksTitle': 'प्रमुख स्थल',
                'landmarkMehrangarh': 'मेहरानगढ़ किला',
                'landmarkMehrangarhText': 'मेहरानगढ़ किला, जोधपुर के सबसे बड़े किलों में से एक है, जिसे राव जोधा ने 1459 में बनवाया। इसके विशाल दीवारें, प्रभावशाली दरवाजे और शानदार वास्तुकला किले की सामरिक और प्रतीकात्मक महत्वता को दर्शाते हैं। किले में शाही वस्त्र, हथियार और चित्रों का एक विस्तृत संग्रह है। यह शहर और आसपास के रेगिस्तानी परिदृश्य का पैनोरमिक दृश्य भी प्रस्तुत करता है।',
                'landmarkJaswantThada': 'जसवंत थड़ा',
                'landmarkJaswantThadaText': 'जसवंत थड़ा, 1899 में निर्मित, महाराजा जसवंत सिंह II की स्मृति में एक स्मारक के रूप में कार्य करता है। यह स्मारक अपनी उत्कृष्ट सफेद संगमरमर की निर्माण, जटिल कारीगरी, और शांत वातावरण के लिए प्रसिद्ध है। स्मारक सुंदर रूप से सुसज्जित बगीचों और शहर की हलचल से एक शांतिपूर्ण पलायन प्रदान करता है।',
                'landmarkUmaidBhawan': 'उमाid भवन पैलेस',
                'landmarkUmaidBhawanText': 'उमाid भवन पैलेस, 1943 में पूरा हुआ, ब्रिटिश वास्तुकार हेनरी वॉघन लांचेस्टर द्वारा डिज़ाइन किया गया एक भव्य वास्तुशिल्प चमत्कार है। यह महल, महाराजा उमाid सिंह के शासनकाल के दौरान बनाया गया, इंडो-सरसेनिक वास्तुकला का एक उदाहरण है, जो भारतीय और यूरोपीय डिज़ाइन के तत्वों को मिलाता है। इसे प्रारंभ में एक अकाल राहत परियोजना के रूप में बनाया गया था और बाद में एक शानदार होटल में बदल दिया गया, जो जोधपुर की शाही धरोहर और आधुनिक आतिथ्य का मिश्रण प्रतीक है।',
                'cultureTitle': 'सांस्कृतिक महत्व',
                'cultureBandhej': 'जोधपुरी बंधेज',
                'cultureBandhejText': 'जोधपुरी बंधेज, एक पारंपरिक टाई-डाई तकनीक, जोधपुर की सांस्कृतिक धरोहर का एक अभिन्न हिस्सा है। इस शिल्प में कपड़े को बांधना और रंगना शामिल है ताकि जटिल पैटर्न तैयार किया जा सके, अक्सर जीवंत रंगों का उपयोग किया जाता है। बंधेज पारंपरिक वस्त्र जैसे साड़ियों, पगड़ियों और दुपट्टों में सामान्य रूप से उपयोग किया जाता है। यह कला रूप पीढ़ियों से चली आ रही है और जोधपुर में त्योहारों और समारोहों में महत्वपूर्ण भूमिका निभाता है।',
                'cultureCuisine': 'मारवाड़ी भोजन',
                'cultureCuisineText': 'मारवाड़ी भोजन, जोधपुर के मारवाड़ी समुदाय की पाक परंपरा, अपने समृद्ध और मसालेदार स्वादों के लिए जाना जाता है। प्रमुख व्यंजनों में दाल बाटी चूरमा, दाल करी, बेक्ड गेहूं की गेंदें, और मीठा कुचला गेहूं; और गट्टे की सब्जी, बेसन के पकौड़े के साथ एक करी शामिल है। मारवाड़ी भोजन क्षेत्रीय कृषि प्रथाओं और समृद्ध, विविध स्वादों को दर्शाता है जो सदियों से विकसित हुए हैं।',
                'culturePaintings': 'राठौर चित्रकला',
                'culturePaintingsText': 'राठौर चित्रकला एक पारंपरिक कला रूप है जो शाही दरबारों और पौराणिक कथाओं के दृश्यों को चित्रित करता है। अपने जीवंत रंगों और जटिल विवरणों के लिए प्रसिद्ध, ये चित्रकला राठौर वंश की भव्यता और सांस्कृतिक कथाओं को पकड़ती है। अक्सर शाही महलों और मंदिरों को सजाने के लिए उपयोग किया जाता है, राठौर चित्रकला जोधपुर की कला धरोहर और इसके कलाकारों की कुशलता का प्रमाण है।',
                'footerText': 'पारंपरिक ट्रेकर्स'
            }
        };

        // Update text content of elements based on the selected language
        document.querySelector('title').textContent = translations[language].pageTitle;
        document.getElementById('nav-home').textContent = translations[language].navHome;
        document.getElementById('nav-back').textContent = translations[language].navBack;
        document.getElementById('hero-title').textContent = translations[language].heroTitle;
        document.getElementById('hero-subtitle').textContent = translations[language].heroSubtitle;
        document.getElementById('intro-title').textContent = translations[language].introTitle;
        document.getElementById('intro-text').textContent = translations[language].introText;
        document.getElementById('culinary-link').textContent = translations[language].culinaryLink;
        document.getElementById('art-link').textContent = translations[language].artLink;
        document.getElementById('timeline-title').textContent = translations[language].timelineTitle;
        document.getElementById('year-1459').textContent = translations[language].year1459;
        document.getElementById('event-1459').textContent = translations[language].event1459;
        document.getElementById('year-1473').textContent = translations[language].year1473;
        document.getElementById('event-1473').textContent = translations[language].event1473;
        document.getElementById('year-1679').textContent = translations[language].year1679;
        document.getElementById('event-1679').textContent = translations[language].event1679;
        document.getElementById('year-1818').textContent = translations[language].year1818;
        document.getElementById('event-1818').textContent = translations[language].event1818;
        document.getElementById('year-1947').textContent = translations[language].year1947;
        document.getElementById('event-1947').textContent = translations[language].event1947;
        document.getElementById('landmarks-title').textContent = translations[language].landmarksTitle;
        document.getElementById('landmark-mehrangarh').textContent = translations[language].landmarkMehrangarh;
        document.getElementById('landmark-mehrangarh-text').textContent = translations[language].landmarkMehrangarhText;
        document.getElementById('landmark-jaswant-thada').textContent = translations[language].landmarkJaswantThada;
        document.getElementById('landmark-jaswant-thada-text').textContent = translations[language].landmarkJaswantThadaText;
        document.getElementById('landmark-umaid-bhawan').textContent = translations[language].landmarkUmaidBhawan;
        document.getElementById('landmark-umaid-bhawan-text').textContent = translations[language].landmarkUmaidBhawanText;
        document.getElementById('culture-title').textContent = translations[language].cultureTitle;
        document.getElementById('culture-bandhej').textContent = translations[language].cultureBandhej;
        document.getElementById('culture-bandhej-text').textContent = translations[language].cultureBandhejText;
        document.getElementById('culture-cuisine').textContent = translations[language].cultureCuisine;
        document.getElementById('culture-cuisine-text').textContent = translations[language].cultureCuisineText;
        document.getElementById('culture-paintings').textContent = translations[language].culturePaintings;
        document.getElementById('culture-paintings-text').textContent = translations[language].culturePaintingsText;
        document.getElementById('footer-text').textContent = translations[language].footerText;
    }

    // Event listener for language switch
    document.getElementById('language-select').addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateText(selectedLanguage);
    });

    // Initialize the page with default language (e.g., English)
    updateText('en');
});
