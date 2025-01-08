function increase() {
    const span = document.querySelector("#number");
    span.innerText = parseInt(span.innerText) + 1;
}
const button = document.querySelector("button");
button.addEventListener("click", increase);

// ----------------------------------

// Hány ms (ezredmásodperc) telt el 1970-01-01 óta?
const timestamp = Date.now(); // number, ~ statikus metódus
const today = new Date(); // object, ~ példányosítás (kb. Date osztály)
const ww2 = new Date(1939, 8, 1); // hónap: 0-tól 11-ig
const christmas = new Date("2024-12-24");
const UNIX = new Date(0);
const time = new Date("2024-12-18 12:08:37");

// today.getDay(): A hét hanyadik napja?
const year = today.getFullYear();
const month = today.getMonth() + 1; // 0-tól 11-ig számoljuk
const day = today.getDate();

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

const dateSpan = document.querySelector("#datum");
// dateSpan.innerText = `${year}. ${month < 10 ? "0" + month : month}. ${day < 10 ? "0" + day : day}.`; // 2025. 01. 08.
// dateSpan.innerText = `${year}. ${month.toString().padStart(2, "0")}. ${day.toString().padStart(2, "0")}.`; // 2025. 01. 08.
dateSpan.innerText = today.toLocaleDateString(); // 2025. 01. 08.

const timeSpan = document.querySelector("#ido");
// timeSpan.innerText = `${hour}:${minute}:${second}`;
timeSpan.innerText = today.toLocaleTimeString();

// -----------------------------------------------------

// Szinkron végrehajtás!
function print() {
    for (let i = 0; i < 7; i++) {
        console.log(i);
        sleep(1000);
    }
}

function sleep(ms) {
    const start = Date.now();
    let current = Date.now();
    while (current - start < ms) {
        current = Date.now();
    }
    // console.log("Várakozás vége!");
}

// Aszinkron végrehajtás!
