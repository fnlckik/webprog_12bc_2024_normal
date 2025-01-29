function round(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p = Math.floor(Math.random() * 301); // 0..300
            if (p >= 20 || n === 3) {
                resolve(p);
            } else {
                reject(p);
            }
        }, 1000);
    })
}

// Továbbjutás 200 ponttól!
function competition() {
    round(1)
    .then(p => {
        console.log(p);
        return round(2);
    })
    .then(p => {
        console.log(p);
        return round(3);
    })
    .then(p => {
        console.log(p);
        console.log("Verseny vége!");
    })
    .catch(p => {
        console.log(p);
        console.log("Kiestél!");
    })
    .finally(() => {
        console.log("Köszönöm a részvételt!");
    });
}
competition();