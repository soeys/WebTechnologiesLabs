let arr = [];

const minSize = 15,
    maxSize = 50;

const block = document.querySelector('#block');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(3);
}

function print() {
    block.innerHTML = '';
    arr.forEach(el => {
        block.innerHTML += el;
        block.innerHTML += '<br>';
    })
}

document.querySelector('#create-array').addEventListener('click', function () {
    arr = [];

    for (let i = 0; i < getRandomInt(minSize, maxSize); i++) {
        arr.push(getRandomArbitrary(-20, 0));
    }
    print();
})

document.querySelector('#add').addEventListener('click', function () {
    let num = document.querySelector('#numInput').value;
    if (num) {
        if (num < arr.length) {
            arr.splice(num, 0, getRandomArbitrary(-20, 0))
        }
    }
    print();
})

document.querySelector('#remove').addEventListener('click', function () {
    let mid = (arr.length / 2 - 1).toFixed();
    arr.splice(mid, 1);
    print();
})

document.querySelector('#replace').addEventListener('click', function () {
    let h = arr[0] / 2;
    arr[0] = h.toFixed(3);

    print()
})