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

function generateMines() {
    let db = 0;
    while (db < mineCount) {
        const sor = randint(0, n-1); // x. sor
        const oszlop = randint(0, n-1); // y. cella
        if (!board[sor][oszlop].isMine) {            
            board[sor][oszlop].isMine = true;
            for (let i = sor-1; i <= sor+1; i++) {
                for (let j = oszlop-1; j <= oszlop+1; j++) {
                    if (0 <= i && i < n && 0 <= j && j < n && !(i === sor && j === oszlop)) {
                        board[i][j].value++;
                    }
                }
            }
            db++;
        }
    }
}

// Készítse el a kezdeti mátrixomat!
// field = {isMine: ???, value: ???}
function createBoard() {
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const field = {
                isMine: false,
                value: 0,
                isRevealed: false
            };
            row.push(field);
        }
        board.push(row);
    }
    generateMines();
}

function getText(i, j) {
    if (!board[i][j].isRevealed) return "";
    else if (board[i][j].isMine) return "💣";
    else if (board[i][j].value === 0) return "";
    else return board[i][j].value;
}

// A mátrix alapján jelenítse meg a táblázatot!
// Nem board[i, j]
function showBoard() {
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            td.innerText = getText(i, j);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function handleClick(e) {
    const cell = e.target; // i. sor j. cellája
    board[i][j].isRevealed = true;
    showBoard();
}

function startGame() {
    createBoard();
    showBoard();
    table.addEventListener("click", handleClick);
}
const button = document.querySelector("button");
button.addEventListener("click", startGame);