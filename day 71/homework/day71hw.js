let count = 0;

document.querySelector('.plus').onclick = () => {
    count++;
    document.querySelector('.count').textContent = count;
};

document.querySelector('.reset').onclick = () => {
    count = 0;
    document.querySelector('.count').textContent = count;
};

document.querySelector('.minus').onclick = () => {
    count--;
    document.querySelector('.count').textContent = count;
};
