// Adatok kérése
function showData(data) {
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const table = document.querySelector("table");
    table.innerHTML = `<tr>
        <th>Dátum</th>
        <th>Osztály</th>
        <th>Tömeg</th>
    </tr>`;
}

const keresButton = document.querySelector("#keres");
function getData() {

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
