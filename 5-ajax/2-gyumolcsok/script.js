// https://hur.webmania.cc/products.json

function createCard(product) {
    const div = document.createElement("div"); // Kártya!
    
    const img = document.createElement("img");
    img.src = product.picture;
    div.appendChild(img);

    const pNev = document.createElement("p");
    pNev.innerText = `Név: ${product.name}`;
    div.appendChild(pNev);

    const pAr = document.createElement("p");
    pAr.innerText = `Ár: ${product.price} Ft`
    div.appendChild(pAr);

    return div;
}

function show(data) {
    const ul = document.querySelector("ul");
    const products = data.products;
    products.forEach(product => {
        const li = document.createElement("li");
        const div = createCard(product);
        li.appendChild(div);
        ul.appendChild(li);
    });
}

let data;
const button = document.querySelector("button");
async function getFruits() {
    const response = await fetch("https://hur.webmania.cc/products.json");
    data = await response.json();
    console.log(data);
    show(data);
}
button.addEventListener("click", getFruits);
