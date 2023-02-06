const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove')

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

document.querySelectorAll('#os-list li').forEach(li => li.addEventListener('dblclick', function () {
    addBtn.setAttribute('disabled', 'true');
    removeBtn.setAttribute('disabled', 'true');

    const newTextfield = document.createElement('input');
    newTextfield.setAttribute('type', 'text');
    newTextfield.value = li.innerHTML;
    li.parentNode.replaceChild(newTextfield, li);

    document.querySelector('#save').addEventListener('click', function () {
        li.innerHTML = newTextfield.value;
        newTextfield.parentNode.replaceChild(li, newTextfield);
        newTextfield.remove();

        addBtn.removeAttribute('disabled');
        removeBtn.removeAttribute('disabled');
    })
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