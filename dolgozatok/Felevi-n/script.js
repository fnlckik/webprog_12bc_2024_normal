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



// F2



// F3



// F4



// F5


