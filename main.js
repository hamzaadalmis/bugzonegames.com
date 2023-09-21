const icon = document.getElementById('icon');

let toggle = true;

icon.onclick = switchColorScheme(!toggle);

if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches) {
    switchColorScheme(true);
}

window.matchMedia('prefers-color-scheme: dark').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    switchColorScheme(newColorScheme);
});

function switchColorScheme(dark) {
    if (dark) {
        document.body.classList.toggle('dark-theme');
        console.log("it's dark");
    }
    else {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            icon.src = "img/moon.png"
        }

        console.log("it's so bright");
    }
}