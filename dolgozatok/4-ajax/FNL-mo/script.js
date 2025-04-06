// F1
// author, title + price, href=store, classList - 4p
function showBook(book) {
    const div = document.querySelector("div");
    div.innerHTML = `
        <h2>${book.author}</h2>
        <p>
            <a target="_blank" href=${book.store}>${book.title}</a>
            (${book.price} Ft)
        </p>
    `;
    div.classList.add("book");
}

// fetch async-await (2), .json(), throw, catch - 5p
const searchButton = document.querySelector("#search");
async function searchBook() {
    const title = document.querySelector("input").value;
    try {
        const response = await fetch(`http://localhost/books/?title=${title}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.hiba);
        }
        showBook(data);
    } catch (error) {
        console.log(error.message);
    }
}
searchButton.addEventListener("click", searchBook);



// F2
// for li (2), hu (2) - 4p
function showBooks(books) {
    const ul = document.querySelector("ul");
    for (const book of books) {
        const hu = book.lang.some(x => x === "hu");
        ul.innerHTML += `
            <li>
                ${book.author}: ${book.title}
                ${hu ? "💖" : ""}
            </li>
        `;
    }
}

// new + send, open, onload - 3p
const allButton = document.querySelector("#all");
function getBooks() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/books/");
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        showBooks(data);
    };
    xhr.send();
}
allButton.addEventListener("click", getBooks);



// F3
// book object body-nak, method, fetch OPTIONS param, .json() + log - 4p
const sendButton = document.querySelector("#insert");
async function sendBook() {
    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value;
    const book = { author, title };
    const OPTIONS = {
        method: "POST",
        body: JSON.stringify(book)
    };
    const response = await fetch("http://localhost/books/insert/", OPTIONS);
    const data = await response.json();
    console.log(data);
}
sendButton.addEventListener("click", sendBook);
