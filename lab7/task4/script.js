let id = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('create').addEventListener('click', function () {
    const d = document.createElement("div");
    d.id = "box" + id;

    d.style.height = getRandomInt(100, 500).toString() + "px";
    d.style.width = getRandomInt(100, 500).toString() + "px";
    d.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);

    d.style.position = "absolute";
    d.style.display = "inline-block";
    d.style.left = getRandomInt(50, 1000).toString() + "px";
    d.style.top = getRandomInt(50, 300).toString() + "px";
    // d.style.fontStyle = 
    document.getElementById('block-area').appendChild(d);
    id += 1;
});

document.getElementById('remove').addEventListener('click', function () {
    const area = document.getElementById("block-area");
    area.removeChild(area.children[getRandomInt(0, id - 1)]);
    id -= 1;
}); 