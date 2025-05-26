function toggleLyrics(id) {
    var lyricsDiv = document.getElementById(id);
    lyricsDiv.style.display = lyricsDiv.style.display === 'none' ? 'block' : 'none';
}/*
document.addEventListener('DOMContentLoaded', () => {
    let x;
    const loadingAnimation = document.getElementById("loading-animation");
    const loadingText = document.getElementById("loading-text");

    // Show loading animation
    loadingAnimation.classList.remove("hidden");
    loadingText.textContent = "Translating text...";

    localStorage.setItem('preferredLanguage', "hi")
    if (localStorage.getItem('preferredLanguage') === "en") {
        x = "hi";
        localStorage.setItem('preferredLanguage', "en");
    } else if (localStorage.getItem('preferredLanguage') === "hi") {
        x = "en";
        localStorage.setItem('preferredLanguage', "hi");
    }

    const data = JSON.stringify({
        q: [
            document.getElementById('header-title').textContent,
            document.getElementById('nav-home').textContent,
            document.getElementById('nav-culinary').textContent,
            document.getElementById('nav-art').textContent,
            document.getElementById('nav-folk-dance').textContent,
            document.getElementById('nav-back').textContent,
            document.getElementById('intro-title').textContent,
            document.getElementById('intro-text').textContent,
            document.getElementById('moomal-title').textContent,
            document.getElementById('moomal-history-title').textContent,
            document.getElementById('moomal-history').textContent,
            document.getElementById('moomal-description-title').textContent,
            document.getElementById('moomal-description').textContent,
            document.getElementById('show-lyrics-button').textContent,
            document.getElementById('moomal-lyrics').textContent,
        ],
        source: x,
        target: localStorage.getItem('preferredLanguage')
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            loadingAnimation.classList.add("hidden");
            loadingText.textContent = "Translation complete.";

            document.getElementById('header-title').innerText = response.data.translations.translatedText[0];
            document.getElementById('nav-home').innerText = response.data.translations.translatedText[1];
            document.getElementById('nav-culinary').innerText = response.data.translations.translatedText[2];
            document.getElementById('nav-art').innerText = response.data.translations.translatedText[3];
            document.getElementById('nav-folk-dance').innerText = response.data.translations.translatedText[4];
            document.getElementById('nav-back').innerText = response.data.translations.translatedText[5];
            document.getElementById('intro-title').innerText = response.data.translations.translatedText[6];
            document.getElementById('intro-text').innerText = response.data.translations.translatedText[7];
            document.getElementById('moomal-title').innerText = response.data.translations.translatedText[8];
            document.getElementById('moomal-history-title').innerText = response.data.translations.translatedText[9];
            document.getElementById('moomal-history').innerText = response.data.translations.translatedText[10];
            document.getElementById('moomal-description-title').innerText = response.data.translations.translatedText[11];
            document.getElementById('moomal-description').innerText = response.data.translations.translatedText[12];
            document.getElementById('show-lyrics-button').innerText = response.data.translations.translatedText[13];
            document.getElementById('moomal-lyrics').textContent = response.data.translations.translatedText[14]
        }
    });

    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
});
*/
