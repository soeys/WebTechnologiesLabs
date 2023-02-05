function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

document.querySelector('#add').addEventListener('click', function () {
    let userInput = document.getElementById('text').value;

    if (userInput) {
        let osList = document.querySelector('#os-list');
        let osListELements = osList.children;
        let textField = osListELements[osListELements.length - 1];
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(userInput));
        li.addEventListener('click', function () {
            if (hasClass(li, 'selected')) {
                li.classList.remove('selected');
            } else {
                li.classList.add('selected');
            }
        });

        osList.removeChild(textField);
        osList.appendChild(li);
        osList.appendChild(textField);
    }
})

document.querySelector('#remove').addEventListener('click', function () {
    document.querySelectorAll(".selected").forEach(el => el.remove());
})