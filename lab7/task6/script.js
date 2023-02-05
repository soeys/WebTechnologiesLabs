let table = document.querySelector('#table-body');

document.querySelector('#add').addEventListener('click', function () {
    let userInput = document.getElementById('additonal-os').value;
    if (userInput) {
        userInput += " ";
        let tr = document.createElement('tr');

        while (userInput.search(" ") > 0) {
            let td = document.createElement('td');

            td.appendChild(document.createTextNode(userInput.slice(0, userInput.search(" "))));
            userInput = userInput.slice(userInput.search(" ") + 1, userInput.length);

            tr.appendChild(td);
        }
        table.insertBefore(tr, table.children[document.querySelectorAll('#table-body tr').length - 1]);
    }
})

document.querySelector('#remove').addEventListener('click', function () {
    table.removeChild(table.children[0]);
})