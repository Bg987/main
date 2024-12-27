
document.addEventListener('DOMContentLoaded', () => {
  let x;
  if (localStorage.getItem('preferredLanguage') === "en") {
    x = "hi";
    localStorage.setItem('preferredLanguage', "en");
  } else if (localStorage.getItem('preferredLanguage') === "hi") {
    x = "en";
    localStorage.setItem('preferredLanguage', "hi");
  }
  console.log(localStorage.getItem('preferredLanguage'));
  const data = JSON.stringify({
    q: [
      document.getElementById('pageTitle').textContent,
      document.getElementById('headerTitle').textContent,
      document.getElementById('introTitle').textContent,
      document.getElementById('introText').textContent,
      document.getElementById('bandhaniTitle').textContent,
      document.getElementById('bandhaniHistoryTitle').textContent,
      document.getElementById('bandhaniHistoryText').textContent,
      document.getElementById('bandhaniDescriptionTitle').textContent,
      document.getElementById('bandhaniDescriptionText').textContent,
      document.getElementById('mojrisTitle').textContent,
      document.getElementById('mojrisHistoryTitle').textContent,
      document.getElementById('mojrisHistoryText').textContent,
      document.getElementById('mojrisDescriptionTitle').textContent,
      document.getElementById('mojrisDescriptionText').textContent,
      document.getElementById('handicraftsTitle').textContent,
      document.getElementById('handicraftsHistoryTitle').textContent,
      document.getElementById('handicraftsHistoryText').textContent,
      document.getElementById('handicraftsDescriptionTitle').textContent,
      document.getElementById('handicraftsDescriptionText').textContent,
      document.getElementById('leatherTitle').textContent,
      document.getElementById('leatherHistoryTitle').textContent,
      document.getElementById('leatherHistoryText').textContent,
      document.getElementById('leatherDescriptionTitle').textContent,
      document.getElementById('leatherDescriptionText').textContent,
      document.getElementById('navHome').textContent,
      document.getElementById('navCulinary').textContent,
      document.getElementById('dance').textContent,
      document.getElementById('song').textContent,
      document.getElementById('navback').textContent,

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
      document.getElementById('bandhaniTitle').innerText = response.data.translations.translatedText[4];
      document.getElementById('bandhaniHistoryTitle').innerText = response.data.translations.translatedText[5];
      document.getElementById('bandhaniHistoryText').innerText = response.data.translations.translatedText[6];
      document.getElementById('bandhaniDescriptionTitle').innerText = response.data.translations.translatedText[7];
      document.getElementById('bandhaniDescriptionText').innerText = response.data.translations.translatedText[8];
      document.getElementById('mojrisTitle').innerText = response.data.translations.translatedText[9];
      document.getElementById('mojrisHistoryTitle').innerText = response.data.translations.translatedText[10];
      document.getElementById('mojrisHistoryText').innerText = response.data.translations.translatedText[11];
      document.getElementById('mojrisDescriptionTitle').innerText = response.data.translations.translatedText[12];
      document.getElementById('mojrisDescriptionText').innerText = response.data.translations.translatedText[13];
      document.getElementById('handicraftsTitle').innerText = response.data.translations.translatedText[14];
      document.getElementById('handicraftsHistoryTitle').innerText = response.data.translations.translatedText[15];
      document.getElementById('handicraftsHistoryText').innerText = response.data.translations.translatedText[16];
      document.getElementById('handicraftsDescriptionTitle').innerText = response.data.translations.translatedText[17];
      document.getElementById('handicraftsDescriptionText').innerText = response.data.translations.translatedText[18];
      document.getElementById('leatherTitle').innerText = response.data.translations.translatedText[19];
      document.getElementById('leatherHistoryTitle').innerText = response.data.translations.translatedText[20];
      document.getElementById('leatherHistoryText').innerText = response.data.translations.translatedText[21];
      document.getElementById('leatherDescriptionTitle').innerText = response.data.translations.translatedText[22];
      document.getElementById('leatherDescriptionText').innerText = response.data.translations.translatedText[23];
      document.getElementById('navHome').textContent = response.data.translations.translatedText[24];
      document.getElementById('navCulinary').textContent = response.data.translations.translatedText[25];
      document.getElementById('dance').textContent = response.data.translations.translatedText[26];
      document.getElementById('song').textContent = response.data.translations.translatedText[27];
      document.getElementById('navback').textContent = response.data.translations.translatedText[28];
    }
  });
  xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
  xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
  xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(data);
})