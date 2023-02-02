document.querySelector('#add').addEventListener('click', function () {
    let userInput = document.getElementById('additonal-os').value;
    userInput += " ";

    let userInputRow = document.getElementById('additonal-os').parentElement.parentElement;

    console.log(userInputRow);
    let a = [];

    while (userInput.search(" ") > 0) {
        a.push(userInput.slice(0, userInput.search(" ")));
        userInput = userInput.slice(userInput.search(" ") + 1, userInput.length);
    }
    userInputRow.removeChild(userInputRow.children[0]);

    a.forEach(element => {
        td = document.createElement('td');
        td.appendChild(document.createTextNode(element));
        userInputRow.appendChild(td);
    });

})