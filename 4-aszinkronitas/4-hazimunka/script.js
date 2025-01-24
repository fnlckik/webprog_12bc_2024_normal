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

function takeTrash() {
    setTimeout(() => {
        // ???
    }, 100);
}

walkDog(message => {
    console.log(message);
    washDishes(message => {
        console.log(message);
    })
});
