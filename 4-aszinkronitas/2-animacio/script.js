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
    width += randint(1, 5); // 12 => 14
    // if (width > 100) width = 100;
    width = Math.min(width, 100);
    loading.style.width = width + "%"; // "14%"
    if (width < 100) {
        setTimeout(updateLoading, randint(10, 500));
    }
}
// updateLoading();

const id = setInterval(() => {
    let width = parseInt(loading.style.width); // "12%" => 12
    width += randint(1, 5); // 12 => 14
    width = Math.min(width, 100);
    loading.style.width = width + "%"; // "14%"
    // console.log("Fut az időzítő!");
    if (width === 100) {
        clearInterval(id);
    }
}, 50);

// F3
// 5000 => 05:00
// 4500 => 04:50
function getTime(remaining) {
    // ???
}

// if (remaining < 0) remaining = 0;
// const remaining = eltelt > 5000 ? 0 : 5000 - eltelt;
// const remaining = Math.max(5000 - eltelt, 0);
const timeSpan = document.querySelector("#time");
const start = Date.now();
function updateTime() {
    const eltelt = Date.now() - start; // Mennyi idő telt el az oldal betöltése óta?
    let remaining = 5000 - eltelt;
    if (remaining < 0) remaining = 0;
    timeSpan.innerText = getTime(remaining);
    if (remaining > 0 && button.disabled === false) {
        setTimeout(updateTime, 1);
    } else {
        handleCheck();
    }
}

function handleCheck() {
    button.removeEventListener("click", handleCheck);
    button.disabled = true;
    const input = document.querySelector("input");
    input.disabled = true;
    const resultSpan = document.querySelector("#result");
    if (input.value === "cat") {
        resultSpan.innerText = "😺";
    } else {
        resultSpan.innerText = "😿";
    }
}
const button = document.querySelector("button");
button.addEventListener("click", handleCheck);

updateTime();

// Vigyázat! A setTimeout() nem pontos ezredmásodpercre!
function precision() {
    const kezdes = Date.now();
    setTimeout(() => {
        console.log(Date.now() - kezdes);
    }, 1);
}
