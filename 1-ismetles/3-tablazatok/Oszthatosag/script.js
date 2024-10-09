/*
    [
        [97, 55, 90, 80],
        [47, 54, 98, 73],
        [44, 98, 36, 91]
    ]
*/
let m = [];

// randint(10, 99)
function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function showTable() {
    const table = document.querySelector("table");
    let data = ""; // <tr><td>3</td><td>6</td>...</tr>
    for (let i = 0; i < 10; i++) {
        data += "<tr>";
        for (let j = 0; j < 10; j++) {
            data += `<td>${m[i][j]}</td>`;
        }
        data += "</tr>";
    }
    table.innerHTML = data;
}

function generate() {
    m = [];
    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            const r = randint(10, 99);
            row.push(r);
        }
        m.push(row);
    }
    localStorage.setItem("numbers", JSON.stringify(m));
    showTable();
}
const button = document.querySelector("button");
button.addEventListener("click", generate);

function handleLoad() {
    m = JSON.parse(localStorage.getItem("numbers"));
    if (!m) {
        generate();
    }
    showTable();
}
window.addEventListener("load", handleLoad);
