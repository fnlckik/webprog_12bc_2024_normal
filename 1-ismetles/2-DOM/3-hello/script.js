function showGreeting(user) {
    const p = document.createElement("p");
    p.innerText = `${user.greeting} ${user.name}!`;
    const oldDiv = document.querySelector("#regi");
    oldDiv.appendChild(p);
}

function greetUser(user) {
    showGreeting(user);
    const newDiv = document.querySelector("#uj");
    newDiv.style.display = "none";
}

function getUser() {
    const name = document.querySelector("input[type=text]").value;
    const select = document.querySelector("select");
    const options = select.options;
    const greeting = options[select.selectedIndex].innerText;
    return { name, greeting };
}

function handleClick() {
    const user = getUser();
    localStorage.setItem("user", JSON.stringify(user));
    greetUser(user);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

// Oldal betöltődésekor köszöntsük a felhasználót!
function handleLoad() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        greetUser(user);
    }
}
window.addEventListener("load", handleLoad);

// localStorage: helyileg tárolunk benne kulcs-érték pár alapján
// localStorage.setItem("alma", 2);
// localStorage.getItem("alma");
// localStorage.clear();
// localStorage.removeItem("alma");