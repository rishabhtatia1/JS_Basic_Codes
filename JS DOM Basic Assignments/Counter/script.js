let counter = document.querySelector('.counter'),
    count = 0;
const addCount = document.querySelector('#addCntBtn'),
      decCount = document.querySelector('#lowerCntBtn');
addCount.addEventListener('click', incrementCount);
decCount.addEventListener('click', decrementCount);
function incrementCount() {
    count++;
    counter.innerHTML = count;
    (counter.innerHTML > '0') ? counter.style.color = 'green': counter.style.color = 'white';
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
    (counter.innerHTML < '0') ? counter.style.color = 'red': counter.style.color = 'white';
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    });
}
