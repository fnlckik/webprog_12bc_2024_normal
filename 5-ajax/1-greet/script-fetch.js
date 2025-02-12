const start = Date.now();
const time = document.querySelector("#time");
setInterval(() => {
    const current = Date.now();
    time.innerText = parseInt((current - start) / 1000) + " mp";
}, 1000);

// -----------------------------------------------

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const table = document.querySelector("table");
for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
        const td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

setInterval(() => {
    const i = randint(0, 2);
    const j = randint(0, 3);
    table.rows[i].cells[j].style.backgroundColor = `rgba(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)}, 0.5)`;
}, 1000);

// {name: 'Farkas Norbert', friends: 314}
function show(data) {
    document.querySelector("form").classList.add("hidden");
    const div = document.querySelector("#adatok");
    div.classList.remove("hidden");
    div.innerHTML = `
        <p>Név: ${data.name}</p>
        <p>Ismerősök száma: ${data.friends}</p>
        `;
}

// JSON: JavaScript Object Notation
const button = document.querySelector("form button");
function handleClick(e) {
    e.preventDefault();
    const input = document.querySelector("form input");
    
    fetch(`http://localhost/greet-ajax/?username=${input.value}`)
    .then(response => {
        // response.status !== 200
        if (!response.ok) {
            throw new Error("Nincs ilyen felhasználó!");
        }
        return response.json();
    })
    .then(data => show(data))
    .catch(error => console.log(error.message));
    // Mi lehet hiba?
    // 1. Nem fut a szerver
    // 2. Nem jó típusú adatot ad a szerver
    // 3. Nincs ilyen felhasználó...
}
button.addEventListener("click", handleClick);