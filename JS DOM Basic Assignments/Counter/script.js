let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCntBtn');
const decCount = document.querySelector('#lowerCntBtn');
let count = 0;
addCount.addEventListener('click', incrementCount);
decCount.addEventListener('click', decrementCount);

function incrementCount() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > '0') {
        counter.style.color = 'green';
    } else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    });
}

function decrementCount() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'red';
    } else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    });
}
