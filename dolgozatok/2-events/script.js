const n = 8;
let m = [];
let increment = 1;
const table = document.querySelector("table");

function createMatrix(value) {
    m = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(value);
        }
        m.push(row);
    }
}
createMatrix(5);

function isBlack(i, j) {
    return (i + j) % 2 === 0;
}

// -------------------------------------

// F1
function showTable() {
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            td.innerText = m[i][j];
            td.classList.toggle("black", isBlack(i, j))
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
showTable();

// F2
function incrementCell(e) {
    const td = e.target;
    if (!td.matches("td")) return;
    const j = td.cellIndex;
    const i = td.parentNode.rowIndex;
    m[i][j] += increment;
    showTable();
}
table.addEventListener("click", incrementCell);

// F3
function incrementCol(e) {
    e.preventDefault();
    const td = e.target;
    const j = td.cellIndex;
    for (let i = 0; i < n; i++) {
        m[i][j] += increment;
    }
    showTable();
}
table.addEventListener("contextmenu", incrementCol);

// F4
// e.key === "r" || e.key === "R"
function randomize(e) {
    if (e.code === "KeyR") {
        increment = Math.floor(Math.random() * 6) + 3;
        console.log(increment);
    }
}
window.addEventListener("keyup", randomize);

