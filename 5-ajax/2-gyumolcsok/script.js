// https://hur.webmania.cc/products.json

const button = document.querySelector("button");
async function getFruits() {
    const response = await fetch("https://hur.webmania.cc/products.json");
    const data = await response.json();
    console.log(data);
}
button.addEventListener("click", getFruits);
