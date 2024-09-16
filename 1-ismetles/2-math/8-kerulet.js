const points = [
    {x: 1, y: -1},
    {x: 4, y: 0},
    {x: 5, y: 3},
    {x: 3, y: 4},
    {x: -1, y: 2}
];

function perimeter(points) {
    let s = 0;
    for (let i = 0; i < points.length-1; i++) {
        s += distance(points[i], points[i+1]);
    }
    s += distance(points[points.length-1], points[0]);
    return s;
}
