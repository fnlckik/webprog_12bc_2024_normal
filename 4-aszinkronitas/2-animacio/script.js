// F1
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// const buek = document.getElementById("buek");
const buek = document.querySelector("#buek");
// setInterval(() => {
//     buek.style.color = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
//     buek.style.backgroundColor = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
// }, 1000);

function updateBuek() {
    buek.style.color = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
    buek.style.backgroundColor = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
    setTimeout(updateBuek, 1000);
}
updateBuek();

// F2
