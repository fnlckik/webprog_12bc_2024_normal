// Kutya -> Mosogatás -> Szemét

function walkDog(callback) {
    setTimeout(() => {
        callback("Kutya!");
    }, 2500);
}

function washDishes(callback) {
    setTimeout(() => {
        callback("Mosogatás!");
    }, 1000);
}

function takeTrash(callback) {
    setTimeout(() => {
        callback("Szemét!")
    }, 100);
}

// callback hell (pyramid of doom)
function chores() {
    walkDog(message => {
        console.log(message);
        washDishes(message => {
            console.log(message);
            takeTrash(message => {
                console.log(message);
                console.log("Kész!");
            })
        })
    });
}
chores();