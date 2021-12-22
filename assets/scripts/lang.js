function lang(language) {
    document.cookie = `lang=${language}; Secure`;
    const welcome = document.getElementById('welcome');
    const welcomeText = document.querySelector("#welcome p");
    const startButton = document.querySelector("#welcome button")
    welcome.style.display = "flex";
    welcome.style.animation = "opac 2s"
    welcomeText.innerHTML = langs.welcome[language] || langs.welcome["en"];
    startButton.innerHTML = langs.start[language] || langs.start["en"];
    welcome.scrollIntoView();
}

function getLang() {
    let cname = "lang";
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
}