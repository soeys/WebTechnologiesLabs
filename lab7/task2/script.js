let city = document.getElementById('cities').addEventListener('change', getValue);

let lastZIndex = 1

function getValue() {
    let select = document.getElementById('cities').value;
    console.log(select);

    document.getElementById(select).style.zIndex = lastZIndex;
    lastZIndex+= 1;
}