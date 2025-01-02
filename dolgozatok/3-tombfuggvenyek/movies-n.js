const movies = [
    { title: "A sötét lovag", duration: 152, rating: 9.0 },
    { title: "Forrest Gump", duration: 142, rating: 8.8 },
    { title: "Harcosok klubja", duration: 139, rating: 8.8 },
    { title: "Deadpool & Rozsomák", duration: 127, rating: 7.6 },
    { title: "Eredet", duration: 148, rating: 8.8 },
    { title: "Bosszúállók: Végjáték", duration: 181, rating: 8.4 },
    { title: "A keresztapa", duration: 175, rating: 9.2 },
    { title: "Schindler listája", duration: 195, rating: 8.9 },
    { title: "A zöld mérföld", duration: 189, rating: 8.6 },
    { title: "Gladiátor", duration: 155, rating: 8.5 },
    { title: "A Grincs", duration: 104, rating: 6.3 },
    { title: "Életrevalók", duration: 112, rating: 8.5 },
    { title: "A király beszéde", duration: 118, rating: 8.0 },
    { title: "A nagy dobás", duration: 130, rating: 7.8 },
    { title: "A bolygó neve: Halál", duration: 137, rating: 8.4 },
    { title: "A remény rabjai", duration: 142, rating: 9.3 },
    { title: "Viharsziget", duration: 138, rating: 8.2 },
    { title: "A bárányok hallgatnak", duration: 118, rating: 8.6 },
    { title: "Dűne", duration: 155, rating: 8.3 }
];

console.log("F1:", movies.filter(m => 8.5 < m.rating && m.rating < 9));

console.log("F2:", movies.find(m => m.duration > 180).title);

console.log("F3:", movies.filter(m => m.title[0] !== "A").length);

function compare(m1, m2) {
    if (m1.rating > m2.rating) {
        return -1;
    } else if (m1.rating < m2.rating) {
        return 1;
    } else {
        return 0;
    }
}
console.log("F4:", movies.toSorted(compare));

console.log("F5:", movies.reduce((s, m) => s + m.duration, 0) / 60);

console.log("F6:", movies.filter(m => m.duration <= 120).map(m => m.title));

// Bónusz!
function hasPair(m) {
    return movies.some(m2 => m.duration === m2.duration && m !== m2);
}
console.log("F7:", movies.filter(m => hasPair(m)).map(m => ({title: m.title, duration: m.duration})));
