function atvalt(n) {
    let maradek = "";
    while (n != 0) {
        m = n % 2;
        n = parseInt(n / 2);
        maradek = m + maradek;
    }
    return parseInt(maradek);
}