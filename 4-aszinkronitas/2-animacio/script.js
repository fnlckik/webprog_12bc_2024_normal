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
const loading = document.querySelector("#loading div");
loading.style.width = "0%";
function updateLoading() {
    let width = parseInt(loading.style.width); // "12%" => 12
    width += randint(0, 5); // 12 => 14
    // if (width > 100) width = 100;
    width = Math.min(width, 100);
    loading.style.width = width + "%"; // "14%"
    if (width < 100) {
        setTimeout(updateLoading, 50);
    }
}
updateLoading();
