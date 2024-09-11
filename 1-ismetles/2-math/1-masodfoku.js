function solveQuadratic(a, b, c) {
    const D = b*b - 4*a*c;
    if (D < 0) {
        return 0;
    } else if (D === 0) {
        return 1;
    } else {
        return 2;
    }
}
