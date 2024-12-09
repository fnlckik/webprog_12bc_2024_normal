const x = [2, 6, 5, 1, 6, -2, 12, -1, 12, 6, -5, 7]; // 12 elem
console.log("Eredeti:", x);

// Anonymous function
/*
    function (e) {
        return e * e;
    }
*/

// Arrow function (nyíl függvény)
// (e) => e * e;

// Egy paraméter esetén
// e => e * e;
function square(e) {
    return e * e;
}

// e => e < 0;
function isNegative(e) {
    return e < 0;
}



// ------------------------------------------------------
// 2015 - ES6

// 1. Másolás - Adjuk meg a számok négyzeteit!
// const squares = x.map(square);
const squares = x.map(e => e * e);
console.log("Négyzetek:", squares);

// 2. Kiválogatás - Adjuk meg a negatív elemeket!
// const negatives = x.filter(isNegative);
// const evens = x.filter(e => e % 2 === 0);
const negatives = x.filter(e => e < 0);
console.log("Negatívak:", negatives);

// 3. Megszámolás - Negatívak száma
const negativeCount = x.filter(e => e < 0).length;
console.log("Negatívak száma:", negativeCount);

// 4. Eldöntés - Van-e páros?
const anyEven = x.some(e => e % 2 === 0);
console.log("Van-e páros:", anyEven);

// 5. Eldöntés (optimista) - Mindegyik páros?
const everyEven = x.every(e => e % 2 === 0);
console.log("Mindegyik páros:", everyEven);

// 6. Keresés
// a) Hol van az első negatív? Ha nincs, akkor a -1 helyen van.
// b) Mennyi az értéke? Ha nincs, akkor undefined.
const firstNegative = x.find(isNegative);
const firstNegativeIndex = x.findIndex(isNegative);
const lastNegative = x.findLast(isNegative); // !!! 2022 !!!
const lastNegativeIndex = x.findLastIndex(isNegative);
console.log("Első negatív (hely, érték):", firstNegativeIndex+1, firstNegative);
console.log("Utolsó negatív (hely, érték):", lastNegativeIndex+1, lastNegative);



// ------------------------------------------------------
function compare(a, b) {
    if (a < b) {
        return -1; // -911
    } else if (a > b) {
        return 1; // 112
    } else {
        return 0;
    }
}

function compare2(a, b) {
    /*
    if (a < b) {
        return a-b; // negativ < 0
    } else if (a > b) {
        return a-b; // pozitiv > 0
    } else {
        return a-b; // 0
    }
    */
    return a - b;
}

// 7. Rendezzük az elemeket növekvő sorrendbe:
const sorted = x.toSorted((a, b) => a - b); // !!! 2023 !!!
console.log("Növekvő sorrend:", sorted);

// Párosak előre!
function compare3(a, b) {
    if (a % 2 === 0) {
        return -1; // a < b
    } else {
        return 1; // a > b
    }
}

// Comparer function: (a, b)-ről képez le -, 0, + elemekre
// -1, ha a < b
// 0, ha a === b
// 1, ha a > b
const evens = x.filter(e => e % 2 === 0).toSorted((a, b) => a - b);
const odds = x.filter(e => e % 2 !== 0).toSorted((a, b) => a - b);
// const evensFirst = evens.concat(odds);
const evensFirst = [...evens, ...odds];
console.log("Párosak előre sorrend:", evensFirst);



// ------------------------------------------------------
// 8. Összegzés - Mennyi az elemek összege?
const sum = x.reduce((s, e) => s + e, 0);
console.log("Összeg:", sum);

// 9. Maximum kiválasztás
// a) Mennyi a legnagyobb elem?
// b) Hol van a legnagyobb?
// x.reverse(): megfordítja a tömböt
const maxValue = x.reduce((m, e) => e > m ? e : m, x[0]);
const maxIndex = x.findIndex(e => e === maxValue);
const maxIndex2 = x.findLastIndex(e => e === maxValue);
console.log("Maximum (első, utolsó, érték):", maxIndex+1, maxIndex2+1, maxValue);



// ------------------------------------------------------
// Kiterjesztés (indexek)
// 10. Kiválogatás - Minden második elemet (páros indexűeket)
const evenPositions = x.filter((e, i) => i % 2 === 0);
console.log("Páros sorszámúak:", evenPositions);

// 11. Keresés - Adjuk meg az elsőt, aminek az értéke nagyobb az indexénél
const firstBig = x.find((e, i) => e > i);
console.log("Értéke nagyobb, mint az indexe:", firstBig);

// 12. Írjuk ki a sorszámokat és az értékeket egymás mellé!
console.log("Elemek sorszámokkal:");

/*
for (let i = 0; i < x.length; i++) {
    console.log(`${i+1}. ${x[i]}`);
}
*/

/*
let i = 0;
for (const e of x) {
    console.log(`${i+1}. ${e}`);
    i++;
}
*/

x.forEach((e, i) => {
    console.log(`${i+1}. ${e}`);
});

