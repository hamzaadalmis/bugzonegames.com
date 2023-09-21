const icon = document.getElementById('icon');
const logo = document.getElementById('logo');

let lightMode = localStorage.getItem('lightMode');

if (icon != null) {
    icon.addEventListener('click', () => {
        lightMode = localStorage.getItem('lightMode');

        if (lightMode !== 'enabled') {
            enableLightMode();
        }
        else {
            disableLightMode();
        }
    });
}

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
    icon.src = 'img/moon.png';
    logo.src = 'img/bugzonegames_logo.png';
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', null);
    icon.src = 'img/sun.png';
    logo.src = 'img/bugzonegames_white.png';
}

if (lightMode === 'enabled') {
    enableLightMode();
}