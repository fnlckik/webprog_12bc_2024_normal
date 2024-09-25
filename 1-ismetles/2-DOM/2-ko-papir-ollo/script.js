// Ugyanazon eseménykezelő több objektumhoz is
// hozzá van rendelve. A this objektum mondja meg, hogy
// ki váltotta ki az eseményt!
// this: ki váltotta ki az eseményt
function handleChoose() {
    // this.className = "img-height active";
    // this.className += " active";
    this.classList.add("active");
    for (const image of images) {
        image.removeEventListener("click", handleChoose);
    }
}
// classList => vissza adja az elem osztályainak "listáját" (DOMTokenList)
// classList.add("active");
// classList.remove("active");

// Két ciklussal oldottuk meg, hogy 1 képre kattintásra történjen valami!
// Lehetne jobban? (Később...)

const images = document.querySelectorAll("img");
for (const image of images) {
    image.addEventListener("click", handleChoose);
}