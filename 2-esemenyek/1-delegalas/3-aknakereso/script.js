// GLOBÁLIS VÁLTOZÓK, KONSTANSOK
const n = 12; // 12x12
const mineCount = 10;
let board = []; // mátrix - játék állapottér, mezőket tartalmaz
let revealedCount = 0;

const table = document.querySelector("table");

// --------------------------------------------

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

// --------------------------------------------

// Készítse el a kezdeti mátrixomat!
// field = {isMine: ???, value: ???}
function createBoard() {
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const field = {
                isMine: false,
                value: 0
            };
            row.push(field);
        }
        board.push(row);
    }
}

// A mátrix alapján jelenítse meg a táblázatot!
function showBoard() {
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            td.innerText = board[i][j].value; // Nem board[i, j]
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function startGame() {
    createBoard();
    showBoard();
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);