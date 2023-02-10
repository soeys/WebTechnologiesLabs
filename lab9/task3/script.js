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
    let subStr = document.querySelector('#text').value;

    words.forEach(word => {
        if (subStr == word.textContent)
            word.classList.add('match');
        else
            word.classList.remove('match');
    });
})