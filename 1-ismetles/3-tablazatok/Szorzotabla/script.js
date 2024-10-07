// Klasszikus - createElement, appendChild
// for (let i = 0; i < n; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < n; j++) {
//         const td = document.createElement("td");
//         td.innerText = (i+1)*(j+1);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

function generateTable() {
    const n = parseInt(input.value);

    const table = document.querySelector("table");
    table.innerHTML = "";
    let data = "";
    for (let i = 0; i < n; i++) {
        data += "<tr>";
        for (let j = 0; j < n; j++) {
            data += `<td>${(i+1)*(j+1)}</td>`;
        }
        data += "</tr>";
    }
    table.innerHTML = data;

    const span = document.querySelector("h2 span");
    span.innerText = n;
}
const input = document.querySelector("input");
input.addEventListener("input", generateTable);