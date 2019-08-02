const colorBtn = document.querySelector('.colorBtn');
const bodyBkg = document.querySelector('body');
const colors = ['blue', 'red', 'yellow', 'brown', '#3b5998', 'orange'];
colorBtn.addEventListener('click', changeColor);
function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bodyBkg.style.backgroundColor = colors[random];
}
