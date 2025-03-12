// https://omdbapi.com/

const APIKEY = "14051e6b";

const URL = "http://www.omdbapi.com/";

// http://www.omdbapi.com/?apikey=14051e6b&t=Dune

function show(data) {
    const div = document.querySelector("div");
    div.innerHTML = `
        <h1>${data.Title}</h1>
        <img src="${data.Poster}">
        <p>Értékelés (imdb): ${data.imdbRating}</p>
    `;
    div.classList.add("show");
}

async function getMoviesAsync() {
    const input = document.querySelector("input");
    const movie = input.value;
    try {
        const response = await fetch(`${URL}?apikey=${APIKEY}&t=${movie}`);
        const data = await response.json();
        // if (!response.ok)
        if (data.Response === "False") {
            // throw new Error(data.Error);
            throw new Error("Nincs ilyen film!");
        }
        console.log(data);
        show(data);
    } catch (error) {
        console.log(error.message);
    }
}

function getMoviesXHR() {
    const input = document.querySelector("input");
    const movie = input.value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${URL}?apikey=${APIKEY}&t=${movie}`);
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        if (data.Response !== "False") {
            show(data);
        } else {
            console.log(data.Error);
        }
    };
    xhr.send();
}

const button = document.querySelector("button");
button.addEventListener("click", getMoviesXHR);