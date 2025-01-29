// Promise: egy ígéret, hogy később adok egy értéket
// resolve: beteljesedik, feloldódik
function result() {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            const p = Math.floor(Math.random() * 101); // [0, 100]
            resolve(p);
        }, 1000);
    });
    return promise;
}

const promise = result();
promise.then(point => {
    console.log(point);
});