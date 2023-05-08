let baseSize = 16;
function resize() {
    let scale = document.documentElement.clientWidth / 1920;
    document.documentElement.style.fontSize = Math.max(scale, 2) * baseSize + 'px';
}

re