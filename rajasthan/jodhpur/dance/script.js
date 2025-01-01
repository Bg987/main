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
        document.getElementById('header-title').textContent,
        document.getElementById('header').textContent,
        document.getElementById('nav-home').textContent,
        document.getElementById('nav-culinary').textContent,
        document.getElementById('nav-art').textContent,
        document.getElementById('nav-folk-song').textContent,
        document.getElementById('nav-back').textContent,
        document.getElementById('intro-title').textContent,
        document.getElementById('intro-text').textContent,
        document.getElementById('ghoomar-title').textContent,
        document.getElementById('ghoomar-history').textContent,
        document.getElementById('ghoomar-description').textContent,
        document.getElementById('kalbeliya-title').textContent,
        document.getElementById('kalbeliya-history').textContent,
        document.getElementById('kalbeliya-description').textContent,
        document.getElementById('chari-title').textContent,
        document.getElementById('chari-history').textContent,
        document.getElementById('chari-description').textContent,
        document.getElementById('kachchhi-title').textContent,
        document.getElementById('kachchhi-history').textContent,
        document.getElementById('kachchhi-description').textContent,
        document.getElementById('footer-text').textContent
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
        document.getElementById('header-title').innerText = response.data.translations.translatedText[0];
        document.getElementById('header').innerText = response.data.translations.translatedText[1];
        document.getElementById('nav-home').innerText = response.data.translations.translatedText[2];
        document.getElementById('nav-culinary').innerText = response.data.translations.translatedText[3];
        document.getElementById('nav-art').innerText = response.data.translations.translatedText[4];
        document.getElementById('nav-folk-song').innerText = response.data.translations.translatedText[5];
        document.getElementById('nav-back').innerText = response.data.translations.translatedText[6];
        document.getElementById('intro-title').innerText = response.data.translations.translatedText[7];
        document.getElementById('intro-text').innerText = response.data.translations.translatedText[8];
        document.getElementById('ghoomar-title').innerText = response.data.translations.translatedText[9];
        document.getElementById('ghoomar-history').innerText = response.data.translations.translatedText[10];
        document.getElementById('ghoomar-description').innerText = response.data.translations.translatedText[11];
        document.getElementById('kalbeliya-title').innerText = response.data.translations.translatedText[12];
        document.getElementById('kalbeliya-history').innerText = response.data.translations.translatedText[13];
        document.getElementById('kalbeliya-description').innerText = response.data.translations.translatedText[14];
        document.getElementById('chari-title').innerText = response.data.translations.translatedText[15];
        document.getElementById('chari-history').innerText = response.data.translations.translatedText[16];
        document.getElementById('chari-description').innerText = response.data.translations.translatedText[17];
        document.getElementById('kachchhi-title').innerText = response.data.translations.translatedText[18];
        document.getElementById('kachchhi-history').innerText = response.data.translations.translatedText[19];
        document.getElementById('kachchhi-description').innerText = response.data.translations.translatedText[20];
        document.getElementById('footer-text').innerText = response.data.translations.translatedText[21];
      }
    });
  
    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
  });