let myArray = [];

const minSize = 15, maxSize = 50;

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
    print(document.querySelector('#block'), myArray);
})

document.querySelector('#add').addEventListener('click', function () {
    let userInput = document.querySelector('#numInput').value;
    if (userInput) {
        if (userInput < myArray.length) {
            myArray.splice(userInput, 0, getRandomArbitrary(-20, 0))
        }
    }
    print(document.querySelector('#block'), myArray);
})

document.querySelector('#remove').addEventListener('click', function () {
    myArray.splice(myArray.length / 2, 1);
    print(document.querySelector('#block'), myArray);
})

document.querySelector('#replace').addEventListener('click', function () {
    myArray[0] /= 2;
    print(document.querySelector('#block'), myArray);
})

document.querySelector('#sort').addEventListener('click', function () {
    let slicedArray = myArray.splice(myArray.length / 2, myArray.length);
    slicedArray = bubbleSort(slicedArray);
    if (document.querySelector('input[name="sorting"]:checked').value == 'ascending') {
        slicedArray.reverse();
    }
    myArray = myArray.concat(slicedArray);
    print(document.querySelector('#block'), myArray);
})

document.querySelector('#copy').addEventListener('click', function () {
    let firstHalf = myArray.slice(0, myArray.length / 2);
    let secondHalf = myArray.slice(myArray.length / 2, myArray.length);

    secondHalf.reverse();

    let copy = secondHalf.concat(firstHalf);
    print(document.querySelector('#copy-block'), copy);
})

document.querySelector('#filter').addEventListener('click', function () {
    const filter = myArray.filter(num => num < -15); // зроблено меньш ніж -15 тому що -20 це мінімальне значення)
    print(document.querySelector('#copy-block'), filter);
})


document.querySelector('#stat').addEventListener('click', function () {
    const filter = myArray.filter(num => num < -15); // зроблено меньш ніж -15 тому що -20 це мінімальне значення)
    print(document.querySelector('#copy-block'), filter);
})