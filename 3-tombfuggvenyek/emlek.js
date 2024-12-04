// Összegzés VS Minimax => Ezek ugyanazok!
// reduce()

const x = [6, 2, -3, 7];

function sum(x, k) {
    let s = k;
    for (const e of x) {
        s = s + e; // e: aktulis elem, s: végeredmény
    }
    return s;
}

function max(x, k) {
    let m = k;
    for (const e of x) {
        m = e > m ? e : m; // e: aktuális elem, m: végeredmény
    }
    return m;
}

console.log("Összeg:", sum(x, 0));
console.log("Max:", max(x, x[0]));

/*
if (e > m) {
    m = e;
} else {
    m = m;
}
*/