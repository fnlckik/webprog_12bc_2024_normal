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
