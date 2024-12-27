document.addEventListener('DOMContentLoaded', () => {
    // Function to update the SVG text elements based on the selected language
    function changeLanguage(newLanguage) {
        localStorage.setItem('preferredlanguage', newLanguage); // Update localStorage with the new language
        updateSvgText(newLanguage); // Update SVG text elements
    }

    function updateSvgText(language) {
        // Define translations for different languages
        const translations = {
            'en': {
                'text3': 'Jammu',
                'text4': 'and',
                'text7': 'Kashmir',
                'text10': 'Himachal',
                'text13': 'Pradesh',
                'text14': 'Punjab',
                'text18': 'Haryana',
                'text19': 'Rajasthan',
                'text20': 'Gujarat',
                'text21': 'Madhyapradesh',
                'text23': 'Maharashtra',
                'text25': 'Karnataka',
                'text26': 'Tamil Nadu',
                'text27': 'Telangana',
                'text28': 'Odissa',
                'text30': 'Uttar Pradesh',
                'text31': 'Bihar',
                'text32': 'Assam',
                'text34': 'Arunachal',
                'text35': 'Pradesh',
                'text36': 'JharKhand',
                'text39': 'West',
                'text40': 'Bengal',
                'text42': 'Andhra',
                'text43': 'Pradesh',
                'text44': 'Goa',
                'text48': 'Kerala',
                'text50': 'Sikkim',
                'text52': 'Meghalaya',
                'text53': 'Nagaland',
                'text55': 'Manipur',
                'text57': 'Mizoram',
                'text58': 'Tripura',
                'text60': 'Goa',
                'text62': 'Delhi',
                'text64': 'UttaraKhand',
                'text66': 'ChhattisGadh'
            },
            'hi': {
                'text3': 'जम्मू',
                'text4': 'और',
                'text7': 'कश्मीर',
                'text10': 'हिमाचल',
                'text13': 'प्रदेश',
                'text14': 'पंजाब',
                'text18': 'हरियाणा',
                'text19': 'राजस्थान',
                'text20': 'गुजरात',
                'text21': 'मध्यप्रदेश',
                'text23': 'महाराष्ट्र',
                'text25': 'कर्नाटका',
                'text26': 'तमिल नाडू',
                'text27': 'तेलंगाना',
                'text28': 'उड़ीसा',
                'text30': 'उत्तर प्रदेश',
                'text31': 'बिहार',
                'text32': 'असम',
                'text34': 'अरुणाचल',
                'text35': 'प्रदेश',
                'text36': 'झारखंड',
                'text39': 'पश्चिम',
                'text40': 'बंगाल',
                'text42': 'आंध्र',
                'text43': 'प्रदेश',
                'text44': 'गोवा',
                'text48': 'केरल',
                'text50': 'सिक्किम',
                'text52': 'मेघालय',
                'text53': 'नागालैंड',
                'text55': 'मणिपुर',
                'text57': 'मिजोरम',
                'text58': 'त्रिपुरा',
                'text60': 'गोवा',
                'text62': 'दिल्ली',
                'text64': 'उत्तराखंड',
                'text66': 'छत्तीसगढ़'
            },
           // Add more languages and translations as needed
        };

        // Get the translations for the selected language
        const currentTranslations = translations[language];

        // Update the SVG text elements
        Object.keys(currentTranslations).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = currentTranslations[id];
            }
        });
    }

    // Retrieve language from localStorage
    const language = localStorage.getItem('preferredlanguage'); // Default to English if no language is set

    // Update SVG based on the selected language
//    updateSvgText(language);

    // Example usage of changeLanguage function
    changeLanguage(language); // Switch to Hindi
});