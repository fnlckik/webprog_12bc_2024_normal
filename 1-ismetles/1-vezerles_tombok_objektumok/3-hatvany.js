function hatvany(a, k) {
    const eredetiKitevo = k;
    if (k < 0) k = k * (-1);

    let hatvany = 1; 
    for (let i = 0; i < k; i++) {
        hatvany = hatvany * a;
    }

    if (eredetiKitevo < 0) {
        hatvany = 1 / hatvany;
    }
    
    return hatvany;
}