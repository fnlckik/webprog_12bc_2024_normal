// callback: olyan függvény, amit paraméterként adunk egy másik függvénynek
function result(callback) {
    setTimeout(() => {
        const p = Math.floor(Math.random() * 101); // [0, 100]
        callback(p);
    }, 1000);
}

// Mit kezdünk a kapott eredménnyel?
function print(p) {
    console.log(p);
}

// function dom(point) {
//     const p = document.createElement("p");
//     p.innerText = point;
//     document.body.appendChild(p);
// }

// Miért nem látjuk itt a 76-ot?
result(p => {
    console.log(p);
});
