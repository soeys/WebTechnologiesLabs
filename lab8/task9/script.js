let myArray = [];

const minSize = 15, maxSize = 50;

const block = document.querySelector('#block');
const copyBlock = document.querySelector('#copy-block');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArbitrary(min, max) {
    return (Math.ceil(((Math.random() * (max - min) + min)) * 1000) / 1000);
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

function print(block, myArray = []) {
    block.innerHTML = '';
    myArray.forEach(el => {
        block.innerHTML += el;
        block.innerHTML += '<br>';
    })
}

document.querySelector('#create-array').addEventListener('click', function () {
    myArray = [];

    for (let i = 0; i < getRandomInt(minSize, maxSize); i++) {
        myArray.push(getRandomArbitrary(-20, 0));
    }
    print(block, myArray);
})

document.querySelector('#add').addEventListener('click', function () {
    let userInput = document.querySelector('#numInput').value;
    if (userInput) {
        if (userInput < myArray.length) {
            myArray.splice(userInput, 0, getRandomArbitrary(-20, 0))
        }
    }
    print(block, myArray);
})

document.querySelector('#remove').addEventListener('click', function () {
    myArray.splice(myArray.length / 2, 1);
    print(block, myArray);
})

document.querySelector('#replace').addEventListener('click', function () {
    myArray[0] /= 2;
    print(block, myArray);
})

document.querySelector('#sort').addEventListener('click', function () {
    let slicedArray = myArray.splice(myArray.length / 2, myArray.length);
    slicedArray = bubbleSort(slicedArray);
    if (document.querySelector('input[name="sorting"]:checked').value == 'ascending') {
        slicedArray.reverse();
    }
    myArray = myArray.concat(slicedArray);
    print(block, myArray);
})

document.querySelector('#copy').addEventListener('click', function () {
    let firstHalf = myArray.slice(0, myArray.length / 2);
    let secondHalf = myArray.slice(myArray.length / 2, myArray.length);

    secondHalf.reverse();

    let copy = secondHalf.concat(firstHalf);
    print(copyBlock, copy);
})

document.querySelector('#filter').addEventListener('click', function () {
    const filter = myArray.filter(num => num < -15); // зроблено меньш ніж -15 тому що -20 це мінімальне значення)
    print(copyBlock, filter);
})


document.querySelector('#stat').addEventListener('click', function () {
    const stat = myArray.reduce((total, item) => {
        if (item > 0) {
            total += item;
        }
        return total;
    }, 0);
    copyBlock.innerHTML = stat;
})

document.querySelector('#mod').addEventListener('click', function () {

})

document.querySelector('#check').addEventListener('click', function () {
    const even = (element) => (element * 1000) % 2 === 0;

    copyBlock.innerHTML = `Кожний елемент є парним: ${myArray.every(even)}`
        + '<br>'
        + `Хоча б один елемент є парним: ${myArray.some(even)}`;
})

document.querySelector('#search').addEventListener('click', function () {

    const desired = (element) => ((element * 1000) % 3 === 0) && ((element * 1000) % 7 === 0)
    const found = myArray.find(desired);

    copyBlock.innerHTML = found;
})