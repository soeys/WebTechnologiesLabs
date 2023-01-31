
document.getElementById('submit').addEventListener('click', function () {
    document.getElementById('result').innerHTML = "Результат<br>";

    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let n = document.getElementById('n').value;

    if (a >= 0 && b >= 0) {
        if (document.querySelector('input[name="user-option"]:checked').value == "square") {
            let square = a * b * Math.PI;
            document.getElementById('result').innerHTML += square.toFixed(n);
        } else {
            let l = a * (2.28 * Math.pow(b / a, 1.44) + 4);
            document.getElementById('result').innerHTML += l.toFixed(n);
        }
    } else {
        document.getElementById('result').innerHTML += "Невірні значення";
    }
})