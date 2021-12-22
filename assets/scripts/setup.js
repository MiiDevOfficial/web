const cookieLang = getLang()

if (cookieLang) {
    const welcome = document.getElementById('welcome');
    const welcomeText = document.querySelector("#welcome p");
    const startButton = document.querySelector("#welcome button")
    welcome.style.display = "flex";
    welcome.style.animation = "opac 2s"
    welcomeText.innerHTML = langs.welcome[cookieLang] || langs.welcome["en"];
    startButton.innerHTML = langs.start[cookieLang] || langs.start["en"];
    welcome.scrollIntoView();
}