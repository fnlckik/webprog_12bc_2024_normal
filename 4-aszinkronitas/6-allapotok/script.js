// Promise állapotai:
// - pending: folyamatban
// - fullfilled: beteljesült (elfogadó állapot)
// - rejected: elutasítva (elutasító állapot)
function check(jegy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (1 <= jegy && jegy <= 5) {
                resolve("OK");
            } else {
                reject("ERROR");
            }
        }, 1000);
    });
}

check(3)
.then(result => {
    console.log(3 + " " + result);
})
.catch(error => {
    console.log(error);
});

check(17)
.then(result => {
    console.log(result);
})
.catch(result => {
    console.log(17 + " " + result);
});
