const icon = document.getElementById('icon');
const logo = document.getElementById('logo');

let lightMode = localStorage.getItem('lightMode');

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');

    if (src !== null && logo !== null) {
        icon.src = 'img/moon.webp';
        logo.src = 'img/bugzonegames_logo.webp';
    }
};

const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', null);

    if (icon !== null && logo !== null) {
        icon.src = 'img/sun.webp';
        logo.src = 'img/bugzonegames_white.webp';
    }
};

if (icon !== null) {
    icon.addEventListener('click', () => {
        lightMode = localStorage.getItem('lightMode');

        if (lightMode !== 'enabled') {
            enableLightMode();
        } else {
            disableLightMode();
        }
    });
}

if (lightMode === 'enabled') {
    enableLightMode();
}
