document.addEventListener('DOMContentLoaded', () => {
    let sourceLanguage = 'en';
    let targetLanguage = localStorage.getItem('preferredLanguage');
    if (targetLanguage === 'en') {
        sourceLanguage = 'hi';
    } else if (targetLanguage === 'hi') {
        sourceLanguage = 'en';
    }
    const data = JSON.stringify({
        q: [
            document.getElementById('pageTitle').textContent,
            document.getElementById('navHome').textContent,
            document.getElementById('navBack').textContent,
            document.getElementById('heroTitle').textContent,
            document.getElementById('heroSubtitle').textContent,
            document.getElementById('introTitle').textContent,
            document.getElementById('introText').textContent,
            document.getElementById('culinaryLink').textContent,
            document.getElementById('artLink').textContent,
            document.getElementById('dance').textContent,
            document.getElementById('song').textContent,
            document.getElementById('timelineTitle').textContent,
            document.getElementById('year1459').textContent,
            document.getElementById('event1459').textContent,
            document.getElementById('year1473').textContent,
            document.getElementById('event1473').textContent,
            document.getElementById('year1679').textContent,
            document.getElementById('event1679').textContent,
            document.getElementById('year1818').textContent,
            document.getElementById('event1818').textContent,
            document.getElementById('year1947').textContent,
            document.getElementById('event1947').textContent,
            document.getElementById('landmarksTitle').textContent,
            document.getElementById('landmarkMehrangarh').textContent,
            document.getElementById('landmarkMehrangarhText').textContent,
            document.getElementById('landmarkJaswantThada').textContent,
            document.getElementById('landmarkJaswantThadaText').textContent,
            document.getElementById('landmarkUmaidBhawan').textContent,
            document.getElementById('landmarkUmaidBhawanText').textContent,
            document.getElementById('cultureTitle').textContent,
            document.getElementById('cultureBandhej').textContent,
            document.getElementById('cultureBandhejText').textContent,
            document.getElementById('cultureCuisine').textContent,
            document.getElementById('cultureCuisineText').textContent,
            document.getElementById('culturePaintings').textContent,
            document.getElementById('culturePaintingsText').textContent,
        ],
        source: sourceLanguage,
        target: targetLanguage,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById('pageTitle').textContent = response.data.translations.translatedText[0];
            document.getElementById('navHome').textContent = response.data.translations.translatedText[1];
            document.getElementById('navBack').textContent = response.data.translations.translatedText[2];
            document.getElementById('heroTitle').textContent = response.data.translations.translatedText[3];
            document.getElementById('heroSubtitle').textContent = response.data.translations.translatedText[4];
            document.getElementById('introTitle').textContent = response.data.translations.translatedText[5];
            document.getElementById('introText').textContent = response.data.translations.translatedText[6];
            document.getElementById('culinaryLink').textContent = response.data.translations.translatedText[7];
            document.getElementById('artLink').textContent = response.data.translations.translatedText[8];
            document.getElementById('dance').textContent = response.data.translations.translatedText[9];
            document.getElementById('song').textContent = response.data.translations.translatedText[10];
            document.getElementById('timelineTitle').textContent = response.data.translations.translatedText[11];
            document.getElementById('year1459').textContent = response.data.translations.translatedText[12];
            document.getElementById('event1459').textContent = response.data.translations.translatedText[13];
            document.getElementById('year1473').textContent = response.data.translations.translatedText[14];
            document.getElementById('event1473').textContent = response.data.translations.translatedText[15];
            document.getElementById('year1679').textContent = response.data.translations.translatedText[16];
            document.getElementById('event1679').textContent = response.data.translations.translatedText[17];
            document.getElementById('year1818').textContent = response.data.translations.translatedText[18];
            document.getElementById('event1818').textContent = response.data.translations.translatedText[19];
            document.getElementById('year1947').textContent = response.data.translations.translatedText[20];
            document.getElementById('event1947').textContent = response.data.translations.translatedText[21];
            document.getElementById('landmarksTitle').textContent = response.data.translations.translatedText[22];
            document.getElementById('landmarkMehrangarh').textContent = response.data.translations.translatedText[23];
            document.getElementById('landmarkMehrangarhText').textContent = response.data.translations.translatedText[24];
            document.getElementById('landmarkJaswantThada').textContent = response.data.translations.translatedText[25];
            document.getElementById('landmarkJaswantThadaText').textContent = response.data.translations.translatedText[26];
            document.getElementById('landmarkUmaidBhawan').textContent = response.data.translations.translatedText[27];
            document.getElementById('landmarkUmaidBhawanText').textContent = response.data.translations.translatedText[28];
            document.getElementById('cultureTitle').textContent = response.data.translations.translatedText[29];
            document.getElementById('cultureBandhej').textContent = response.data.translations.translatedText[30];
            document.getElementById('cultureBandhejText').textContent = response.data.translations.translatedText[31];
            document.getElementById('cultureCuisine').textContent = response.data.translations.translatedText[32];
            document.getElementById('cultureCuisineText').textContent = response.data.translations.translatedText[33];
            document.getElementById('culturePaintings').textContent = response.data.translations.translatedText[34];
            document.getElementById('culturePaintingsText').textContent = response.data.translations.translatedText[35];
        }
    });

    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
});