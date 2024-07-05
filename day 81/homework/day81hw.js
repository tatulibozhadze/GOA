const btn = document.getElementById('btn');
const colorDisplay = document.getElementById('color');

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDisplay.textContent = `Background Color: ${randomColor}`;
});

function getRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
