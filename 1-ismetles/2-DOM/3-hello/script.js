function greetOldUser(userName, greeting) {
    const p = document.createElement("p");
    p.innerText = `${greeting} ${userName}!`;
    const oldDiv = document.querySelector("#regi");
    oldDiv.appendChild(p);

    const newDiv = document.querySelector("#uj");
    newDiv.style.display = "none";
}

function handleClick() {
    const input = document.querySelector("input[type=text]");
    
    const select = document.querySelector("select");
    const options = select.options;
    const greeting = options[select.selectedIndex].innerText;

    // Adatok tárolása objektumban ???

    localStorage.setItem("user", input.value);
    localStorage.setItem("greeting", greeting);
    
    greetOldUser(input.value, greeting);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

// Oldal betöltődésekor köszöntsük a felhasználót!
function handleLoad() {
    const user = localStorage.getItem("user");
    const greeting = localStorage.getItem("greeting");
    if (user) {
        greetOldUser(user, greeting);
    }
}
window.addEventListener("load", handleLoad);

// localStorage: helyileg tárolunk benne kulcs-érték pár alapján
// localStorage.setItem("alma", 2);
// localStorage.getItem("alma");
// localStorage.clear();
// localStorage.removeItem("alma");