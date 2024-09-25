// Math.floor(Math.random() * 100) + 1
function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

const n = randint(1, 100);

// Csalás - fejlesztés miatt
console.log("Kitalálandó:", n);

function handleGuess() {
    const input = document.querySelector("input");
    const guess = input.value;
    if (guess > n) {
        console.log(`A szám kisebb, mint ${guess}`);
    } else if (guess < n) {
        console.log(`A szám nagyobb, mint ${guess}`);
    } else {
        console.log("Kitaláltad!");
        button.removeEventListener("click", handleGuess);
        input.disabled = true;
    }
}
const button = document.querySelector("button");
button.addEventListener("click", handleGuess);
