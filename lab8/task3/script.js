let myArray = [];

const minSize = 15,
    maxSize = 50;

const block = document.querySelector('#block');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min);
}

function print() {
    block.innerHTML = '';
    myArray.forEach(el => {
        block.innerHTML += el;
        block.innerHTML += '<br>';
    })
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

document.querySelector('#create-array').addEventListener('click', function () {
    myArray = [];

    for (let i = 0; i < getRandomInt(minSize, maxSize); i++) {
        myArray.push(getRandomArbitrary(-20, 0));
    }
    print();
})

document.querySelector('#add').addEventListener('click', function () {
    let userInput = document.querySelector('#numInput').value;
    if (userInput) {
        if (userInput < myArray.length) {
            myArray.splice(userInput, 0, getRandomArbitrary(-20, 0))
        }
    }
    print();
})

document.querySelector('#remove').addEventListener('click', function () {
    myArray.splice(myArray.length / 2, 1);
    print();
})

document.querySelector('#replace').addEventListener('click', function () {
    myArray[0] /= 2;
    myArray[0] = myArray[0];
    print();
})

document.querySelector('#sort').addEventListener('click', function () {
    let slicedArray = myArray.splice(myArray.length / 2, myArray.length);
    slicedArray = bubbleSort(slicedArray);

    // slicedArray.reverse();

    myArray = myArray.concat(slicedArray);
    print();
})