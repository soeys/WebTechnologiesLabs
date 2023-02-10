let textField = document.getElementById('text');
document.querySelector('#adopt').addEventListener('click', function () {
    let words = textField.value.split(' ');
    textField.value = '';

    for (let index = 0; index < words.length; index++) {
        if (index % 2 == 0)
            words[index] = words[index].toUpperCase();
        textField.value += words[index];
        textField.value += ' ';
    }
})