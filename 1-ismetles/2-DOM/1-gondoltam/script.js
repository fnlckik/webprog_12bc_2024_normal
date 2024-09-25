// Math.floor(Math.random() * 100) + 1
function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

const n = randint(1, 100);

// Csalás - fejlesztés miatt magunknak
// console.log("Kitalálandó:", n);

function handleGuess() {
    const input = document.querySelector("input");
    const guess = input.value;

    const ol = document.querySelector("ol");
    const li = document.createElement("li");
    if (guess > n) {
        li.innerText = `A szám kisebb, mint ${guess}!`;
    } else if (guess < n) {
        li.innerText = `A szám nagyobb, mint ${guess}!`;
    } else {
        li.innerText = "Kitaláltad!";
        button.removeEventListener("click", handleGuess);
        input.disabled = true;
    }
    ol.appendChild(li);
}
const button = document.querySelector("button");
button.addEventListener("click", handleGuess);
