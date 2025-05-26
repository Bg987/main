const langSelect = document.querySelector(".lang");

langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    let a = document.getElementById("welcome-heading").textContent;
    let b = document.getElementById("welcome-message").textContent;
    const data = {
        lang,
        a,
        b,
    };
    console.log(data)
    fetch('http://localhost:8000/indexTr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Send the data as JSON
    })
        .then(response => response.json())
        .then(responseData => {
            //console.log('Response:', responseData);
            let n = responseData;
            //console.log(n);
            document.getElementById("welcome-heading").textContent = n[0].translations[0].text;
            document.getElementById("welcome-message").textContent = n[1].translations[0].text;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
document.addEventListener('DOMContentLoaded', () => {
    // Load visitor count
    fetch('http://localhost:3000/visitor-counter')
        .then(response => response.text())
        .then(data => {
            document.getElementById('visitor-count').innerText = `Visitor count: ${data}`;
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
        });

    // Load saved language preference
    //document.getElementById('lang-select').value = savedLanguage;
    //changeLanguage();
});
function tts() {
    let voice = "Hindi Female";
    responsiveVoice.speak(document.getElementById('welcome-heading').textContent, voice, { rate: 1 });
    responsiveVoice.speak(document.getElementById('welcome-message').textContent, voice, { rate: 1 });
}
/*document.getElementById('lang-select').addEventListener('change', translateText);
function translateText() {
    if (document.getElementById('lang-select').value == "en") {
        x = "hi";
        localStorage.setItem('preferredLanguage', "en");
    }
    else if (document.getElementById('lang-select').value == "hi") {
        x = "en";
        localStorage.setItem('preferredLanguage', "hi");
    }
    const data = JSON.stringify({
        q: [document.getElementById('welcome-heading').textContent, document.getElementById('welcome-message').textContent, document.getElementById('explore-btn').textContent],
        source: x,
        target: localStorage.getItem('preferredLanguage')
    });
    const savedLanguage = localStorage.getItem('preferredLanguage');
    console.log(document.getElementById('welcome-heading').textContent, "  ", document.getElementById('welcome-message').textContent);
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById('welcome-heading').textContent = response.data.translations.translatedText[0];
            document.getElementById('welcome-message').textContent = response.data.translations.translatedText[1];
            document.getElementById('explore-btn').textContent = response.data.translations.translatedText[2];
        }
    });

    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("domload");
    if (localStorage.getItem('preferredLanguage') == "en") {
        x = "hi";
        //localStorage.setItem('preferredLanguage', "en");
    }
    else if (localStorage.getItem('preferredLanguage') == "hi") {
        x = "en";
        localStorage.setItem('preferredLanguage', "hi");
    }
    const data = JSON.stringify({
        q: [document.getElementById('welcome-heading').textContent, document.getElementById('welcome-message').textContent, document.getElementById('explore-btn').textContent],
        source: x,
        target: localStorage.getItem('preferredLanguage')
    });
    const savedLanguage = localStorage.getItem('preferredLanguage');
    console.log(document.getElementById('welcome-heading').textContent, "  ", document.getElementById('welcome-message').textContent);
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById('welcome-heading').textContent = response.data.translations.translatedText[0];
            document.getElementById('welcome-message').textContent = response.data.translations.translatedText[1];
            document.getElementById('explore-btn').textContent = response.data.translations.translatedText[2];
        }
    });

    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', '67c5e9496dmsh99749891628e0a2p17f661jsn2aecb0b6294e');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
})
document.getElementById('lang-select').addEventListener('change', translateText);
*/

