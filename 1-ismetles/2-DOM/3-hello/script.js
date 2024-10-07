function greetOldUser(user) {
    const p = document.createElement("p");
    p.innerText = `${user.greeting} ${user.name}!`;
    const oldDiv = document.querySelector("#regi");
    oldDiv.appendChild(p);

    const newDiv = document.querySelector("#uj");
    newDiv.style.display = "none";
}

function handleClick() {
    const name = document.querySelector("input[type=text]").value;
    
    const select = document.querySelector("select");
    const options = select.options;
    const greeting = options[select.selectedIndex].innerText;
    
    const user = { name, greeting };

    localStorage.setItem("user", JSON.stringify(user));
    
    greetOldUser(user);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

// Oldal betöltődésekor köszöntsük a felhasználót!
function handleLoad() {
    const user = JSON.parse(localStorage.getItem("user"));
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