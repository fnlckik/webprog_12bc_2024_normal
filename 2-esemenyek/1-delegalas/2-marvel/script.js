/*
function handleClick() {
    console.log(this.innerText);
}
const movies = document.querySelectorAll("li");
for (const movie of movies) {
    movie.addEventListener("click", handleClick);
}
*/

// Delegálás
// this: akihez az eseménykezelő tartozik (addEventListener) => <ul>
// e.target: akivel az esemény történt! => <li>
function handleClick(e) {
    // console.log(this.innerText);
    console.log(e.target);
}
const ul = document.querySelector("ul");
ul.addEventListener("click", handleClick);
