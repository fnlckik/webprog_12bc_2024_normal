function countABpairs(szoveg) {
    let count = 0;
    for (let i = 0; i < szoveg.length-1; i++) {
        if (szoveg[i] === "a" && szoveg[i+1] === "b") {
            count++;
        }
    }
    return count;
}