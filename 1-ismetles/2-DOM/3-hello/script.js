function handleClick() {
    const input = document.querySelector("input[type=text]");
    
    const p = document.createElement("p");
    p.innerText = `Szia ${input.value}!`; // "Szia FNL!"
    const oldDiv = document.querySelector("#regi");
    oldDiv.appendChild(p);
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);