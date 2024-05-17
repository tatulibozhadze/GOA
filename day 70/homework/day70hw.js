const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');
const button = document.querySelector('button');

button.onclick = function() {
    heading.textContent = 'შეიცვალა დიზაინი';
    paragraph.textContent = 'ეს დიზაინი შეიცვალა მხოლოდ ჯავასკრიპტის დახმარებით';
};

