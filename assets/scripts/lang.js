const langs = {
    welcome: {
        "pl": "Witamy na naszej stronie!",
        "en": "Welcome to our page!",
        "es": "¡Bienvenidos a nuestro sitio!"
    },
    start: {
        "pl": "Rozpocznij",
        "en": "Start",
        "es": "Comienzo"
    }
}

function lang(language) {
    const welcome = document.getElementById('welcome');
    const welcomeText = document.querySelector("#welcome p");
    const startButton = document.querySelector("#welcome button")
    welcome.style.display = "flex";
    welcome.style.animation = "opac 2s"
    welcomeText.innerHTML = langs.welcome[language] || langs.welcome["en"];
    startButton.innerHTML = langs.start[language] || langs.start["en"];
    welcome.scrollIntoView();
}