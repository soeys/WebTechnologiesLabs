let interval;
let on = false;

id = 0;
let array = [0, 1, 3, 2];

function hop() {
    document.getElementById("box" + array[id % array.length]).style.backgroundColor = "red";
    for (let index = 0; index < array.length; index++) {
        if (index == array[id % array.length]) {
            continue;
        }
        document.getElementById("box" + index).style.backgroundColor = "white";
    }
    id++;
}

document.querySelector('#start').addEventListener('click', function () {
    on = !on;
    console.log(on);
    if (on) {
        interval = setInterval(hop, 500);
    } else {
        clearInterval(interval);
    }
})