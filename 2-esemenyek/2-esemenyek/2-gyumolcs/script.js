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
    const field = {
        fruit: "",
        value: 0
    };
    r = randint(1, 100);
    if (r <= 10) { // 10%
        field.fruit = "🍎";
        field.value = 7;
    } else if (10 < r && r <= 40) { // 30%
        field.fruit = "🍇";
        field.value = 5;
    }
    return field;
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
            td.innerText = field.fruit;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function collectPoints(i, j) {
    const field = board[i][j];
    points += field.value;
    field.fruit = "";
    field.value = 0;
    table.rows[i].cells[j].innerText = "";
    const span = document.querySelector("#points span");
    span.innerText = points;
}

// e.key (karakter), e.code (billentyűzet kód)
// e.key => ArrowUp, ArrowDown, ArrowLeft, ArrowRight
function handleMove(e) {
    // console.clear();
    // console.log("Karakter:", e.key);
    // console.log("Billentyű kód:", e.code);
    let correctMove = true;
    const previousTd = table.rows[pos.y].cells[pos.x];
    if (e.key === "ArrowUp" && pos.y > 0) {
        pos.y--;
    } else if (e.key === "ArrowDown" && pos.y < n-1) {
        pos.y++;
    } else if (e.key === "ArrowLeft" && pos.x > 0) {
        pos.x--;
    } else if (e.key === "ArrowRight" && pos.x < m-1) {
        pos.x++;
    } else {
        correctMove = false;
    }
    if (correctMove) {
        const currentTd = table.rows[pos.y].cells[pos.x];
        currentTd.classList.add("current-position");
        previousTd.classList.remove("current-position");
        collectPoints(pos.y, pos.x);
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