const icon = document.getElementById('icon');

icon.onclick = () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        icon.src = "img/moon.png"
    }
    else {
        icon.src = "img/sun.png"
    }
}