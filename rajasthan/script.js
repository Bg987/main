function tts() {
    let voice = "Hindi Female";
    responsiveVoice.speak("1010 AD "+document.getElementById('one').textContent, voice, { rate: 1 });
    responsiveVoice.speak("1303 AD "+document.getElementById('two').textContent, voice, { rate: 1 });
    responsiveVoice.speak("1527 AD "+document.getElementById('three').textContent, voice, { rate: 1 });
    responsiveVoice.speak("1568 AD "+document.getElementById('four').textContent, voice, { rate: 1 });
    responsiveVoice.speak("1750 AD "+document.getElementById('five').textContent, voice, { rate: 1 });
    responsiveVoice.speak("1770 AD "+document.getElementById('six').textContent, voice, { rate: 1 });
}
const svg = document.querySelector('svg');
svg.querySelectorAll("path").forEach((path) => {
    path.addEventListener('click', (event) => {
        const stateId = event.target.id;
        if (stateId === 'path8') {
            window.location.href = 'jodhpur/jodhpur.html';
        } else {
            alert("not jodhpur");
        }
    });
});
//console.log(document.querySelector(".timeline").textContent);
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
        q: [document.getElementById('headerTitle').textContent, 
            document.getElementById('navBack').textContent, 
            document.getElementById('one').textContent,
            document.getElementById('two').textContent,
            document.getElementById('three').textContent,
            document.getElementById('four').textContent,
            document.getElementById('five').textContent,
            document.getElementById('six').textContent,
            document.getElementById('x').textContent],
        source: x,
        target: localStorage.getItem('preferredLanguage')
    });
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById('headerTitle').innerText = response.data.translations.translatedText[0];
            document.getElementById('navBack').innerText = response.data.translations.translatedText[1];
            document.getElementById('one').innerText = response.data.translations.translatedText[2];
            document.getElementById('two').innerText = response.data.translations.translatedText[3];
            document.getElementById('three').innerText = response.data.translations.translatedText[4];
            document.getElementById('four').innerHTML = response.data.translations.translatedText[5];
            document.getElementById('five').innerText = response.data.translations.translatedText[6];
            document.getElementById('six').innerText = response.data.translations.translatedText[7];
            document.getElementById('x').innerText = response.data.translations.translatedText[8];

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
        localStorage.setItem('preferredLanguage', "en");
    }
    else if (localStorage.getItem('preferredLanguage') == "hi") {
        x = "en";
        localStorage.setItem('preferredLanguage', "hi");
    }
    const data = JSON.stringify({
        q: [document.getElementById('headerTitle').textContent, 
            document.getElementById('navBack').textContent, 
            document.getElementById('one').textContent,
            document.getElementById('two').textContent,
            document.getElementById('three').textContent,
            document.getElementById('four').textContent,
            document.getElementById('five').textContent,
            document.getElementById('six').textContent,
            document.getElementById('x').textContent],
        source: x,
        target: localStorage.getItem('preferredLanguage')
    });
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById('headerTitle').innerText = response.data.translations.translatedText[0];
            document.getElementById('navBack').innerText = response.data.translations.translatedText[1];
            document.getElementById('one').innerText = response.data.translations.translatedText[2];
            document.getElementById('two').innerText = response.data.translations.translatedText[3];
            document.getElementById('three').innerText = response.data.translations.translatedText[4];
            document.getElementById('four').innerHTML = response.data.translations.translatedText[5];
            document.getElementById('five').innerText = response.data.translations.translatedText[6];
            document.getElementById('six').innerText = response.data.translations.translatedText[7];
            document.getElementById('x').innerText = response.data.translations.translatedText[8];
        }
    });

    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
})*/
