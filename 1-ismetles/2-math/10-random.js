// a [0, 1[ intervallumon ad random valós számot
// Math.random()

// [0, 1[ * 5 => [0, 5[
// parseInt([0, 5[) => 0, 1, 2, 3, 4

// rand(5) => 1, 2, 3, 4, 5
// parseInt(Math.random()*5) + 1

// rand(n): 1-tól n-ig ad egy random egészet
function rand(n) {
    return parseInt(Math.random()*n)+1
}

// 0, 1, 2, 3, 4 => 3, 4, 5, 6, 7
// [a..b] intervallumon random egész

// [4..8] => 4, 5, 6, 7, 8
// [0..4] => 0, 1, 2, 3, 4
// parseInt(Math.random()*5) + 4
// parseInt(Math.random()*HANYFELE) + MINERT
// MINERT: a
// HANYFELE: b-a+1
function randint(a, b) {
    return Math.floor(Math.random()*(b-a+1)) + a;
}

// 1. Math.random()
// 2. Felszorozzuk az intervallum hosszával (b-a+1)
// 3. Alsó egészrész: parseInt()
// 4. Alsó határ: + a
