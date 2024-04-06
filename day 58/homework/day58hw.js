let clickCount = 0;


document.body.onclick = () => {
    clickCount++;
  
    alert("Button clicked " + clickCount + " times!");
};
