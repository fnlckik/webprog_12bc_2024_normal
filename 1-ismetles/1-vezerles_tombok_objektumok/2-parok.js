function countABPairs(szoveg) {
    let count = 0;
    for (let i = 0; i < szoveg.length-1; i++) {
        if (szoveg[i] === "a" && szoveg[i+1] === "b") {
            count++;
        }
    }
    return count;
}

function countABPairs2(szoveg) {
    return szoveg.split("ab").length - 1;
}