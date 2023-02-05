let table = document.querySelector('#table-body');

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

document.querySelector('#add').addEventListener('click', function () {
    let userInput = document.getElementById('additonal-os').value;
    if (userInput) {
        let inputRow = document.querySelector('#additonal-os').parentElement.parentElement;
        let newTR = document.createElement('tr');

        userInput += " ";
        while (userInput.search(" ") > 0) {
            let td = document.createElement('td');
            let data = userInput.slice(0, userInput.search(" "));
            td.appendChild(document.createTextNode(data));
            userInput = userInput.slice(userInput.search(" ") + 1, userInput.length);

            newTR.appendChild(td);
        }

        newTR.addEventListener('click', function () {
            if (hasClass(newTR, 'selected')) {
                newTR.classList.remove('selected');
            } else {
                newTR.classList.add('selected');
            }
        })

        table.removeChild(inputRow);
        table.appendChild(newTR);
        table.appendChild(inputRow);
    }
})

document.querySelector('#remove').addEventListener('click', function () {
    document.querySelectorAll(".selected").forEach(el => el.remove());
})