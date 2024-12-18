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
dateSpan.innerText = `${year}-${month}-${day}`;
