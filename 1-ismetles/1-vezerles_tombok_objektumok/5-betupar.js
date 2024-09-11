// String.fromCharCode(65) === "A"
// "a".charCodeAt() === 97
// "á".charCodeAt() === 97
// "b".charCodeAt() === 97

// Ötlet:
// abc = ["a", "á", "b", "c" ...]

// Hosszadalmas lenne... most nem kódoljuk le...
function hasonlit(a, b) {
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
}

function hasonlit2(a, b) {
    return a.localeCompare(b);
}