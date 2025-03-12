// https://omdbapi.com/

const APIKEY = "14051e6b";

const URL = "http://www.omdbapi.com/";

// http://www.omdbapi.com/?apikey=14051e6b&t=Dune

function show(data) {
    const div = document.querySelector("div");
    div.innerHTML = `
        <p>Cím: ${data.Title}</p>
        <p>Értékelés (imdb): ${data.imdbRating}</p>
    `;
}

async function getMoviesAsync() {
    const input = document.querySelector("input");
    const movie = input.value;
    const response = await fetch(`${URL}?apikey=${APIKEY}&t=${movie}`);
    const data = await response.json();
    console.log(data);
    show(data);
}

// function getMoviesXHR() {
//     const input = document.querySelector("input");
//     const movie = input.value;
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", `http://www.omdbapi.com/?apikey=f85a5e67&t=${movie}`)
//     xhr.onload = () => {
//         const data = JSON.parse(xhr.response)
//         show(data);
//     }
//     xhr.send();
// }

const button = document.querySelector("button");
button.addEventListener("click", getMoviesAsync);