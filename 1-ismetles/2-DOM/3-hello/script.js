function greetOldUser(userName) {
    const p = document.createElement("p");
    p.innerText = `Szia ${userName}!`; // "Szia FNL!"
    const oldDiv = document.querySelector("#regi");
    oldDiv.appendChild(p);

    const newDiv = document.querySelector("#uj");
    newDiv.style.display = "none";
}

function handleClick() {
    const input = document.querySelector("input[type=text]");
    localStorage.setItem("user", input.value);
    greetOldUser(input.value);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

// Oldal betöltődésekor köszöntsük a felhasználót!
function handleLoad() {
    // console.log("Betöltött az oldal!");
    const user = localStorage.getItem("user");
    // user !== null
    if (user) {
        greetOldUser(user);
    }
}
window.addEventListener("load", handleLoad);

// localStorage: helyileg tárolunk benne kulcs-érték pár alapján
// localStorage.setItem("alma", 2);
// localStorage.getItem("alma");
// localStorage.clear();
// localStorage.removeItem("alma");