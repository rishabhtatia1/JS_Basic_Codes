const hexNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'],
      hexBtn = document.querySelector('.hexBtn'),
      bodyBck = document.querySelector('body'),
      hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexClr = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexClr += hexNumbers[random];
    }
    bodyBck.style.backgroundColor = hexClr;
    hex.innerHTML = hexClr;
}
