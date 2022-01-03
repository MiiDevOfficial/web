function lang(language) {
    if (storageAvailable('localStorage')) localStorage.setItem("lang", language);
    const welcome = document.getElementById('welcome');
    const welcomeText = document.querySelector("#welcome p");
    const startButton = document.querySelector("#welcome button")
    welcome.style.display = "flex";
    welcome.style.animation = "opac 2s"
    welcomeText.innerHTML = langs.welcome[language] || langs.welcome["en"];
    startButton.innerHTML = langs.start[language] || langs.start["en"];
    welcome.scrollIntoView(true);
}

// MDN Web Docss
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
