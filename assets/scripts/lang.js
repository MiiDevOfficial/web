const welcomeTexts = {
    "pl": "Witamy na naszej stronie!",
    "en": "Welcome to our page!",
    "es": "¡Bienvenidos a nuestro sitio!"
}

function lang(language) {
    const welcome = document.getElementById('welcome');
    const welcomeText = document.querySelector("#welcome p")
    welcome.style.display = "flex";
    welcomeText.innerHTML = welcomeTexts[language] || welcomeTexts["en"];
    welcome.scrollIntoView();
}