// https://hur.webmania.cc/products.json

/*
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
*/

function createCard(product) {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src=${product.picture}>
        <p>Név: ${product.name}</p>
        <p>Ár: ${product.price} Ft</p>
    `;
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

async function getFruitsAsync() {
    const response = await fetch("https://hur.webmania.cc/products.json");
    const data = await response.json();
    // console.log(data);
    show(data);
}

function getFruitsXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://hur.webmania.cc/products.json");
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        show(data);
    }
    xhr.send();
}

// Promise-os megoldás then-ekkel!
function getFruitsFetch() {
    fetch("https://hur.webmania.cc/products.json")
    .then(response => response.json())
    .then(data => show(data));
}

const button = document.querySelector("button");
button.addEventListener("click", getFruitsXHR);
