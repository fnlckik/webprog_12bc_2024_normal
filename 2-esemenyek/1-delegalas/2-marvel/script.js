/*
function handleClick() {
    console.log(this.innerText);
}
const movies = document.querySelectorAll("li");
for (const movie of movies) {
    movie.addEventListener("click", handleClick);
}
*/

let first = null;

function swapMovies(li1, li2) {
    const firstNumber = li1.innerText.split(". ")[0]; // "1"
    const firstName = li1.innerText.split(". ")[1]; // "Vasember"

    const secondNumber = li2.innerText.split(". ")[0]; // "2"
    const secondName = li2.innerText.split(". ")[1]; // "Thor"
    
    li1.innerText = `${firstNumber}. ${secondName}`;
    li2.innerText = `${secondNumber}. ${firstName}`;

    li1.classList.add("swap");
    li2.classList.add("swap");
}

// Delegálás
// this: akihez az eseménykezelő tartozik (addEventListener) => <ul>
// e.target: akivel az esemény történt! => <li>
function handleClick(e) {
    const li = e.target;
    if (li.matches("ul li")) {
        // console.log(li);
        if (!first) {
            first = li;
            first.classList.add("selected");
        } else {
            swapMovies(first, li);
            first = null;
        }
    }
}
const ul = document.querySelector("ul");
ul.addEventListener("click", handleClick);
// elem.matches(selector): igaz, ha az elem illeszkedik a szelektorra

function afterAnimation(e) {
    console.log(e.animationName);
    const li = e.target;
    li.classList.remove("swap", "selected");
}
ul.addEventListener("animationend", afterAnimation)