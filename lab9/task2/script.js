let textField = document.getElementById('text');
let text = document.getElementById('text').value;

textField.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque explicabo est ad necessitatibus a dignissimos rem quisquam labore assumenda autem ipsam, quod, doloremque recusandae fugit odio quam quidem consectetur quo."

window.addEventListener('load', function () {
    
})

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

document.querySelector('#sort').addEventListener('click', function () {
    let words = textField.value.split(' ');
    textField.value = '';

    function isVowel(ch) {
        ch = ch.toUpperCase();
        return (ch == 'A' || ch == 'E'
            || ch == 'I' || ch == 'O'
            || ch == 'U');
    }

    function countVowels(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (isVowel(str[i])) {

            } else {
                ++count;
            }
        }

        return count;
    }

    function sortArr(arr) {
        let n = arr.length;
        let vp = [];

        for (let i = 0; i < n; i++) {
            vp.push([countVowels(arr[i]), arr[i]]);
        }
        vp.sort();
        for (let i = 0; i < vp.length; i++)
            textField.value += vp[i][1] + " ";
    }

    sortArr(words);
})