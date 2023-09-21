const icon = document.getElementById('icon');
const logo = document.getElementById('logo');

icon.onclick = () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        icon.src = "img/moon.png";
        logo.src = "img/bugzonegames_logo.png";

    }
    else {
        icon.src = "img/sun.png";
        logo.src = "img/bugzonegames_white.png"
    }
}