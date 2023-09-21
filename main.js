
if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches) {
    switchColorScheme(true);
}

window.matchMedia('prefers-color-scheme: dark').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    switchColorScheme(newColorScheme);
});

function switchColorScheme(dark) {
    if (dark) {
        console.log("it's dark");
    }
    else {
        console.log("it's so bright");
    }
}