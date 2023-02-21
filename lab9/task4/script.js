let box1 = this.document.querySelector('#box-1');


window.addEventListener('load', function () {
    let words = box1.innerHTML.split(' ');
    box1.innerHTML = '';
    words.forEach(word => {
        box1.innerHTML += `<span>${word}</span>`
    });
})

document.querySelector('#text').addEventListener('keyup', function () {
    let words = document.querySelectorAll('#box-1 span');
    let userInput = document.querySelector('#text').value;

    words.forEach(word => {
        if (userInput == word.textContent)
            word.classList.add('match');
        else
            word.classList.remove('match');
    });
})

document.querySelector('#stats').addEventListener('click', function () {
    let words = []

    document.querySelectorAll('#box-1 span').forEach(el => {
        words.push(el.textContent);
    })

    let str = words.toString();
    let d = str.match(/\./g).length;
    let q = str.match(/\!/g).length;
    let e = str.match(/\?/g).length;


    let s = words.length / d + q + e;
    document.querySelector('#text').value = s;
})