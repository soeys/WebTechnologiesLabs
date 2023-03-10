let addBtn = document.querySelector('#add');
let removeBtn = document.querySelector('#remove');
addBtn.setAttribute("disabled", "true");
removeBtn.setAttribute("disabled", "true");

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

document.querySelectorAll('input').forEach(el => el.addEventListener('keyup', function () {
    addBtn.removeAttribute("disabled");
}))

addBtn.addEventListener('click', function () {
    let userInput = document.getElementById('text').value;

    if (userInput) {
        let osList = document.querySelector('#os-list');
        let osListELements = osList.children;
        let textField = osListELements[osListELements.length - 1];
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(userInput));
        li.addEventListener('click', function () {
            if (hasClass(li, 'selected')) {
                removeBtn.setAttribute("disabled", "true");
                li.classList.remove('selected');
            } else {
                li.classList.add('selected');
                removeBtn.removeAttribute("disabled");
            }
        });

        osList.removeChild(textField);
        osList.appendChild(li);
        osList.appendChild(textField);
    }
})

removeBtn.addEventListener('click', function () {
    let selected = document.querySelectorAll(".selected");
    selected.forEach(el => el.remove());
})