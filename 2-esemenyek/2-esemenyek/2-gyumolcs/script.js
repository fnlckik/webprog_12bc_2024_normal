const table = document.querySelector("table");

// Állapottér!
// field = {fruit: 🍎, value: 7}
const n = 9, m = 5;
let board = [];
const pos = { x: null, y: null }; // x: oszlop, y: sor
let remainingSteps = 12;
let points = 0;

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function createField() {

}

function createBoard() {
    board = [];
    for (let i = 0; i < n; i++) {
        row = [];
        for (let j = 0; j < m; j++) {
            const field = createField();
            row.push(field);
        }
        board.push(row);
    }
}

function showBoard() {
    table.innerHTML = "";
    for (const row of board) {
        const tr = document.createElement("tr");
        for (const field of row) {
            const td = document.createElement("td");
            // td.innerText = ???
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function collectPoints(i, j) {

}

function move(dx, dy) {
    
}

// e.key, e.code
// e.key => ArrowUp, ArrowDown, ArrowLeft, ArrowRight
function handleMove(e) {
    if (e.key === "ArrowUp" && pos.y > 0) {
        const previousTd = table.rows[pos.y].cells[pos.x];
        previousTd.classList.remove("current-position");
        pos.y--;
        const currentTd = table.rows[pos.y].cells[pos.x];
        currentTd.classList.add("current-position");
    }
}

function usePower(e) {

}

// keydown, keyup
// keydown: folyamatosan kiváltódik amíg nyomva tartjuk a billentyűt
// keyup: egyszer váltódik ki
function choosePosition(e) {
    const td = e.target;
    if (!td.matches("td")) return;
    pos.x = td.cellIndex;
    pos.y = td.parentNode.rowIndex;
    td.classList.add("current-position");
    table.removeEventListener("click", choosePosition);
    window.addEventListener("keyup", handleMove);
}

function startGame() {
    createBoard();
    showBoard();
    button.removeEventListener("click", startGame);
    table.addEventListener("click", choosePosition);
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);