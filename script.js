function tts() {
    let voice = "Hindi Female";
    responsiveVoice.speak(document.getElementById('history-heading').textContent, voice, { rate: 1 });
    responsiveVoice.speak(document.getElementById('history-text').textContent, voice, { rate: 1 });
}
// localStorage.setItem('preferredLanguage', "en");
const svg = document.querySelector('svg');

// Add an event listener to each path element (i.e., each state)
svg.querySelectorAll("path").forEach((path) => {
    // Add a click event listener to each path
    path.addEventListener('click', (event) => {
        // Get the ID of the path (i.e., the state name)
        const stateId = event.target.id;

        // Check if the clicked state is 'IN-GJ' (Gujarat)
        if (stateId === 'IN-RJ') {
            // Redirect to MyGujrat.html page
            window.location.href = 'rajasthan/RajasthanMap.html';
        }
        else if (stateId === 'IN-TN') {
            window.location.href = 'tamilnadu/TamilnaduMap.html'
        }
        else {
            // Optionally handle other states or alert the state name
            alert(stateId);
        }
    });
});

/*document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('preferredLanguage') == "en") {
        x = "hi";
        localStorage.setItem('preferredLanguage', "en");
    }
    else if (localStorage.getItem('preferredLanguage') == "hi") {
        x = "en";
        localStorage.setItem('preferredLanguage', "hi");
    }
    const data = JSON.stringify({
        q: [document.getElementById('main-heading').textContent, document.getElementById('home-link').textContent, document.getElementById('about-link').textContent, document.getElementById('history-heading').textContent, document.getElementById('history-text').textContent],
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
            document.getElementById('main-heading').innerText = response.data.translations.translatedText[0];
            document.getElementById('home-link').innerText = response.data.translations.translatedText[1];
            document.getElementById('about-link').innerText = response.data.translations.translatedText[2];
            document.getElementById('history-heading').innerText = response.data.translations.translatedText[3];
            document.getElementById('history-text').innerText = response.data.translations.translatedText[4];
        }
    });

    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('x-rapidapi-key', 'a41503b1cdmshbd564e5672bca82p13d692jsn688aa506c49f');
    xhr.setRequestHeader('x-rapidapi-host', 'deep-translate1.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
})*/
