const icon = document.getElementById('icon');
const logo = document.getElementById('logo');

let savedTheme = localStorage.getItem('theme');

if (icon != null) {
    icon.onclick = () => {
        switchTheme();
        console.log(savedTheme)
    }
}

function switchTheme () {
    if (savedTheme === 'dark') {
        document.body.classList.toggle('light-mode');
        icon.src = "img/moon.png";
        logo.src = 'img/bugzonegames_logo.png';
        localStorage.setItem('theme', 'light');
    }
    else {
        document.body.classList.toggle('light-mode');
        logo.src = 'img/bugzonegames_white.png';
        icon.src = 'img/sun.png';
        localStorage.setItem('theme', 'dark');
    }
}