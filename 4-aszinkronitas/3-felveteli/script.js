function result() {
    setTimeout(() => {
        return 76;
    }, 1000);
}

// Miért nem látjuk itt a 76-ot?
const p = result();
console.log(p);
