const A = {x: 0, y: 0};
const B = {x: 3, y: 4};
const C = {x: 11, y: 10};
const D = {x: -9, y: -1};

function distance(A, B) {
    const elso = Math.pow((A.x - B.x), 2);
    const masodik = Math.pow((A.y - B.y), 2)
    const gyokalatti = elso + masodik;
    return Math.sqrt(gyokalatti);
}
