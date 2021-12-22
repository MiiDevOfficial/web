if (storageAvailable('localStorage') && localStorage.lang) {
    const welcome = document.getElementById('welcome');
    const welcomeText = document.querySelector("#welcome p");
    const startButton = document.querySelector("#welcome button")
    welcome.style.display = "flex";
    welcome.style.animation = "opac 2s"
    welcomeText.innerHTML = langs.welcome[localStorage.lang] || langs.welcome["en"];
    startButton.innerHTML = langs.start[localStorage.lang] || langs.start["en"];
    welcome.scrollIntoView();
}