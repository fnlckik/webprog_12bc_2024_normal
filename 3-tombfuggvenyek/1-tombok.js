const a = [5, 2, 3];

a.pop(); // Kiveszi az utolsót (visszatér vele) - [5, 2]
a.push(7); // Végére teszi - [5, 2, 7]

a.shift(); // Kiveszi az elsőt (visszatér vele) - [2, 7]
a.unshift(11); // Elejére teszi - [11, 2, 7]

console.log("Módosítások:", a);

// 1. Egyesítsük a tömböket!
const b = [3, 4, 5];
/*
const c = []; // [11, 2, 7, 3, 4, 5]
for (const e of a) {
    c.push(e);
}
for (const e of b) {
    c.push(e);
}
*/
const c = a.concat(b); // [11, 2, 7, 3, 4, 5]
const d = [...a, ...b]; // spread operator
console.log("Összefésülve:", c, d);

// 2. Résztömb: 2. elemtől 4. elemig (1. indextől 3. indexig)
/*
const e = [];
for (let i = 1; i < 4; i++) {
    e.push(c[i]);
}
*/
// slice(a, b) esetén [a, b)
const e = c.slice(1, 4); // [2, 7, 3]
console.log("Résztömb:", e);

// 3. Szöveggé alakítás: elválasztó szóköz legyen
const f = c.join(" ");
console.log("Szöveggé:", f);
