let image = document.getElementById("pic");

let img_array = [];
for (let index = 1; index <= 10; index++) {
    img_array.push("img/" + index + ".jpg");
}

let index = 0;
function slide() {
    image.src = img_array[index++ % img_array.length];
}

let on = false;
let interval;
document.querySelector('#btn').addEventListener('click', function () {
    on = !on;
    if (on) {
        interval = setInterval(slide, 500);
    } else {
        clearInterval(interval);
    }
})