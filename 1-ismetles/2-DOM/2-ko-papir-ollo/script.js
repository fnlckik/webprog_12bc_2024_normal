/*
function randomItem() {
    const r = Math.floor(Math.random() * 3); // 0, 1, 2
    if (r === 0) {
        return "ko";
    } else if (r === 1) {
        return "papir";
    } else {
        return "ollo";
    }
}
*/

// a-tól b-ig ad random egészet
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function randomItem() {
    const items = ["ko", "papir", "ollo"];
    const r = randint(0, 2); // 0, 1, 2
    return items[r];
}

function decideWinner(human, computer) {
    if (human === computer) {
        return "Döntetlen!";
    } else if (human === "ko" && computer === "ollo") {
        return "Játékos nyert!";
    } else if (human === "ollo" && computer === "papir") {
        return "Játékos nyert!";
    } else if (human === "papir" && computer === "ko") {
        return "Játékos nyert!";
    } else {
        return "Számítógép nyert!";
    }
}

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

    const computer = randomItem();
    const img = document.createElement("img");
    img.src = `images/${computer}.png`;
    img.classList.add("img-height");
    
    const body = document.querySelector("body");
    const p = document.querySelector("#eredmeny");
    body.insertBefore(img, p); // szulo.insertBefore(gyerek, testver)

    const winner = decideWinner(this.alt, computer);
    p.innerText = `Eredmény: ${winner}`;
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