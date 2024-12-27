
document.addEventListener('DOMContentLoaded', () => {
    let x;
    if (localStorage.getItem('preferredLanguage') === "en") {
        x = "hi";
        localStorage.setItem('preferredLanguage', "en");
    } else if (localStorage.getItem('preferredLanguage') === "hi") {
        x = "en";
        localStorage.setItem('preferredLanguage', "hi");
    }
    const data = JSON.stringify({
        q: [
            document.getElementById('pageTitle').textContent,
            document.getElementById('headerTitle').textContent,
            document.getElementById('introTitle').textContent,
            document.getElementById('introText').textContent,
            document.getElementById('mawaKachoriTitle').textContent,
            document.getElementById('mawaKachoriHistoryTitle').textContent,
            document.getElementById('mawaKachoriHistoryText').textContent,
            document.getElementById('mawaKachoriRecipeTitle').textContent,
            document.getElementById('mawaKachoriRecipe').textContent,
            document.getElementById('mirchiBadaTitle').textContent,
            document.getElementById('mirchiBadaHistoryTitle').textContent,
            document.getElementById('mirchiBadaHistoryText').textContent,
            document.getElementById('mirchiBadaRecipeTitle').textContent,
            document.getElementById('mirchiBadaRecipe').textContent,
            document.getElementById('gatteKiSabjiTitle').textContent,
            document.getElementById('gatteKiSabjiHistoryTitle').textContent,
            document.getElementById('gatteKiSabjiHistoryText').textContent,
            document.getElementById('gatteKiSabjiRecipeTitle').textContent,
            document.getElementById('gatteKiSabjiRecipe').textContent,
            document.getElementById('malaiGhewarTitle').textContent,
            document.getElementById('malaiGhewarHistoryTitle').textContent,
            document.getElementById('malaiGhewarHistoryText').textContent,
            document.getElementById('malaiGhewarRecipeTitle').textContent,
            document.getElementById('malaiGhewarRecipe').textContent,
            document.getElementById('navHome').textContent,
            document.getElementById('navArtCraft').textContent,
            document.getElementById('dance').textContent,
            document.getElementById('song').textContent,
            document.getElementById('navBack').textContent,
            document.getElementById('mawaKachoriDesc').textContent,
            document.getElementById('mirchiBadaDesc').textContent,
            document.getElementById('gatteKiSabjiDesc').textContent,
            document.getElementById('malaiGhewarDesc').textContent,
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
            document.getElementById('pageTitle').innerText = response.data.translations.translatedText[0];
            document.getElementById('headerTitle').innerText = response.data.translations.translatedText[1];
            document.getElementById('introTitle').innerText = response.data.translations.translatedText[2];
            document.getElementById('introText').innerText = response.data.translations.translatedText[3];
            document.getElementById('mawaKachoriTitle').innerText = response.data.translations.translatedText[4];
            document.getElementById('mawaKachoriHistoryTitle').innerText = response.data.translations.translatedText[5];
            document.getElementById('mawaKachoriHistoryText').innerText = response.data.translations.translatedText[6];
            document.getElementById('mawaKachoriRecipeTitle').innerText = response.data.translations.translatedText[7];
            document.getElementById('mawaKachoriRecipe').innerText = response.data.translations.translatedText[8];
            document.getElementById('mirchiBadaTitle').innerText = response.data.translations.translatedText[9];
            document.getElementById('mirchiBadaHistoryTitle').innerText = response.data.translations.translatedText[10];
            document.getElementById('mirchiBadaHistoryText').innerText = response.data.translations.translatedText[11];
            document.getElementById('mirchiBadaRecipeTitle').innerText = response.data.translations.translatedText[12];
            document.getElementById('mirchiBadaRecipe').innerText = response.data.translations.translatedText[13];
            document.getElementById('gatteKiSabjiTitle').innerText = response.data.translations.translatedText[14];
            document.getElementById('gatteKiSabjiHistoryTitle').innerText = response.data.translations.translatedText[15];
            document.getElementById('gatteKiSabjiHistoryText').innerText = response.data.translations.translatedText[16];
            document.getElementById('gatteKiSabjiRecipeTitle').innerText = response.data.translations.translatedText[17];
            document.getElementById('gatteKiSabjiRecipe').innerText = response.data.translations.translatedText[18];
            document.getElementById('malaiGhewarTitle').innerText = response.data.translations.translatedText[19];
            document.getElementById('malaiGhewarHistoryTitle').innerText = response.data.translations.translatedText[20];
            document.getElementById('malaiGhewarHistoryText').innerText = response.data.translations.translatedText[21];
            document.getElementById('malaiGhewarRecipeTitle').innerText = response.data.translations.translatedText[22];
            document.getElementById('malaiGhewarRecipe').innerText = response.data.translations.translatedText[23];
            document.getElementById('navHome').textContent = response.data.translations.translatedText[24];
            document.getElementById('navArtCraft').textContent = response.data.translations.translatedText[25];
            document.getElementById('dance').textContent = response.data.translations.translatedText[26];
            document.getElementById('song').textContent = response.data.translations.translatedText[27];
            document.getElementById('navBack').textContent = response.data.translations.translatedText[28];
            document.getElementById('mawaKachoriDesc').textContent = response.data.translations.translatedText[29];
            document.getElementById('mirchiBadaDesc').textContent = response.data.translations.translatedText[30];
            document.getElementById('gatteKiSabjiDesc').textContent = response.data.translations.translatedText[31];
            document.getElementById('malaiGhewarDesc').textContent = response.data.translations.translatedText[32];
        }
    });
    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
});