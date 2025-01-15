let data = JSON.parse(localStorage.getItem("data"));
if (!data) {
    data = [
        [6, 7, 1],
        [7, 2, 43],
        [11, 2, -1],
        [1, 1, 6]
    ];
}

const table = document.querySelector("table");
function showTable(data) {
    table.innerHTML = "";
    for (const row of data) {
        const tr = document.createElement("tr");
        for (const cell of row) {
            const td = document.createElement("td");
            td.innerText = cell;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
showTable(data);

const concerts = [
    { location: "Budapest", audience: 5000 },
    { location: "Debrecen", audience: 4000 },
    { location: "Szeged", audience: 3500 },
    { location: "Miskolc", audience: 3200 },
    { location: "Pécs", audience: 4500 },
    { location: "Győr", audience: 2900 },
    { location: "Monor", audience: 2800 },
    { location: "Pilis", audience: 2900 },
    { location: "Kaposvár", audience: 2900 },
    { location: "Eger", audience: 2700 },
    { location: "Sopron", audience: 2400 },
    { location: "Cegléd", audience: 2700 },
    { location: "Veszprém", audience: 2500 },
];

const ol = document.querySelector("ol");
function showConcerts(concerts) {
    ol.innerHTML = "";
    concerts.forEach(concert => {
        ol.innerHTML += `<li>${concert.location} - ${concert.audience} fő</li>`;
    });
}
showConcerts(concerts);

// -------------------------------------------

// F1
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// early return
function handleMatrix(e) {
    if (e.key !== "r") return;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            data[i][j] = randint(10, 99);
        }
    }
    showTable(data);
}
window.addEventListener("keyup", handleMatrix);


// F2
function handleClick(e) {
    const element = e.target;
    if (!element.matches("td")) return;
    const j = element.cellIndex;
    const i = element.parentNode.rowIndex;
    element.innerText = (i+1)*(j+1);
    element.classList.add("chosen");
}
table.addEventListener("click", handleClick);


// F3
const span = document.querySelector("#average");
const sum = concerts.reduce((s, concert) => s + concert.audience, 0);
span.innerText = (sum / concerts.length).toFixed(0);
span.style.fontWeight = "bold";

// F4
function compare(a, b) {
    if (a.audience > b.audience) {
        return 1;
    } else if (a.audience < b.audience) {
        return -1;
    } else if (a.location > b.location) { // innentől a közönség ugyanannyi
        return 1;
    } else if (a.location < b.location) {
        return -1;
    } else {
        return 0;
    }
}

const button = document.querySelector("#menu button");
function handleSort() {
    const sortedConcerts = concerts.toSorted(compare);
    // const sortedConcerts = concerts.toSorted((a, b) => a.audience - b.audience);
    showConcerts(sortedConcerts);
}
button.addEventListener("click", handleSort);


// F5
const input = document.querySelector("#menu input");
function filterConcerts() {
    const value = parseInt(input.value);
    const x = concerts.filter(concert => concert.audience >= value);
    const locations = x.map(concert => concert.location);
    console.log(locations);
}
input.addEventListener("change", filterConcerts);

