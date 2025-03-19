// Adatok kérése
function showData(data) {
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const table = document.querySelector("table");
    table.innerHTML = `<tr>
        <th>Dátum</th>
        <th>Osztály</th>
        <th>Tömeg</th>
    </tr>`;
    // element = {date: '2025-03-12', class: '11.A', weight: 73}
    for (const element of data) {
        // const tr = document.createElement("tr");
        // for (const key in element) {
        //     const td = document.createElement("td");
        //     td.innerText = element[key];
        //     tr.appendChild(td);
        // }
        // table.appendChild(tr);
        table.innerHTML += `<tr>
            <td>${element.date}</td>
            <td>${element.class}</td>
            <td>${element.weight}</td>
        </tr>`;
        // const row = document.createElement("tr");
        // const tdDate = document.createElement("td");
        // const tdClass = document.createElement("td");
        // const tdWeight = document.createElement("td");
        // tdDate.innerText = element.date;
        // tdClass.innerText = element.class;
        // tdWeight.innerText = element.weight;
        // row.appendChild(tdDate);
        // row.appendChild(tdClass);
        // row.appendChild(tdWeight);
        // table.appendChild(row);
    }
}

const keresButton = document.querySelector("#keres");
async function getData() {
    const osztaly = document.querySelector("select").value;
    const response = await fetch(`http://localhost/papir/?osztaly=${osztaly}`);
    const data = await response.json();
    // console.log(data);
    showData(data);
}
keresButton.addEventListener("click", getData);

// -----------------------------------------------------
// Adatok küldése
// fetch("http://localhost/papir/create/index.php")
// const adat = { osztaly, tomeg }
const kuldesButton = document.querySelector("#kuldes");
async function sendDataFetch() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
    const adat = {
        osztaly: osztaly,
        tomeg: tomeg
    };
    const OPTIONS = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(adat)
    };
    const response = await fetch("http://localhost/papir/create/", OPTIONS);
    const data = await response.json();
    console.log(data);
}

function sendDataXHR() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
    const adat = {
        osztaly: osztaly,
        tomeg: tomeg
    };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/papir/create/");
    xhr.onload = () => {
        const data = JSON.parse(xhr.response); // JS objektumot ad vissza
        console.log(data);
    };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(adat));
}
kuldesButton.addEventListener("click", sendDataXHR);
