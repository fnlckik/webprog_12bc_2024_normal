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
function randint(a, b) {
    
}
