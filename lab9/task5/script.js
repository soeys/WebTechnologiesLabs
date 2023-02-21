let block1 = document.querySelector('#block1');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;

block1.addEventListener('mouseover', function () {
    interval = setInterval(() => {
        block1.style.borderColor = getRandomColor();
    }, 500)
})

block1.addEventListener('mouseout', function () {
    clearInterval(interval);
    block1.style.borderColor = 'black';
})