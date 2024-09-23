// MO1:
/*
const elso = randint(-50, 50);
const masodik = randint(-50, 50);
const point = {
    x: elso,
    y: masodik
};
*/

function generatePoints() {
    const points = [];
    for (let i = 0; i < 1000; i++) {
        const x = randint(-50, 50);
        const y = randint(-50, 50);
        const point = {x, y};
        points.push(point);
    }
    return points;
}

// a) Kiválogatás
function a(points) {
    const posCoords = [];
    for (const point of points) {
        if (point.x > 0 && point.y > 0) {
            posCoords.push(point);
        }
    }
    return posCoords;
}

// Tesztelés
// a(generatePoints())

// b) Megszámolás
function b(points) {
    let db = 0;
    const origo = {x: 0, y: 0};
    for (const point of points) {
        if (distance(point, origo) <= 50) {
            db++;
        }
    }
    const szazalek = db / points.length * 100;
    return szazalek;
}

// c) Minimum kiválasztás
function c(points) {
    const origo = {x: 0, y: 0};
    let closest = points[0];
    for (const point of points) {
        if (distance(point, origo) < distance(closest, origo)) {
            closest = point;
        }
    }
    return closest;
}

// d) Eldöntés tétel => Keresés tétel
function d(points) {
    let i = 0;
    while (i < points.length && !(points[i].x + points[i].y === 42)) {
        i++;
    }
    if (i < points.length) {
        return points[i];
    } else {
        return {};
    }
}
