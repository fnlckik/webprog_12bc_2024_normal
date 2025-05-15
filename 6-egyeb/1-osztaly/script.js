class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Nincs konstruktor túlterhelés JS-ben!
    // Csak egyfajta konstruktor lehet!
    // constructor() { }
}

// Osztályok használata
const adel = new Person("Adél", 17);
console.log(adel);

const bela = new Person(); // undefined adattagok