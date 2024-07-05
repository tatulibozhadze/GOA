const btn = document.getElementById('btn');
const numberDisplay = document.getElementById('number');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    numberDisplay.textContent = `Random Number: ${randomNumber}`;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1; 
}
