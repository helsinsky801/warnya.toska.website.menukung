// Simple DOM Animation
function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const timer = setInterval(() => {
        if (opacity >= 1) clearInterval(timer);
        element.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
}

function slideDown(element) {
    element.style.height = '0px';
    let height = 0;
    const timer = setInterval(() => {
        if (height >= 100) clearInterval(timer);
        element.style.height = height + 'px';
        height += 5;
    }, 20);
}

console.log('Animation module loaded');
