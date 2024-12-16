const games = [
    { title: "Baldur's Gate III", price: 59.99, multiplayer: true },
    { title: "Starfield", price: 59.99, multiplayer: false },
    { title: "Cyberpunk 2077", price: 34.99, multiplayer: false },
    { title: "The Sims 4", price: 0.00, multiplayer: false },
    { title: "Fortnite", price: 0.00, multiplayer: true },
    { title: "Counter-Strike 2", price: 0.00, multiplayer: true },
    { title: "League of Legends", price: 0.00, multiplayer: true },
    { title: "Hades II", price: 24.99, multiplayer: false },
    { title: "Diablo IV", price: 69.99, multiplayer: true },
    { title: "Apex Legends", price: 0.00, multiplayer: true },
    { title: "Call of Duty: Modern Warfare III", price: 69.99, multiplayer: true },
    { title: "Assassin's Creed Mirage", price: 49.99, multiplayer: false },
    { title: "Rainbow Six Siege", price: 19.99, multiplayer: true },
    { title: "Far Cry 6", price: 29.99, multiplayer: true },
    { title: "The Elder Scrolls V: Skyrim", price: 39.99, multiplayer: false },
    { title: "Fallout 76", price: 39.99, multiplayer: true },
    { title: "Overwatch 2", price: 0.00, multiplayer: true },
    { title: "Hogwarts Legacy", price: 59.99, multiplayer: false },
    { title: "World of Warcraft: Dragonflight", price: 49.99, multiplayer: true },
    { title: "Tom Clancy's Ghost Recon Breakpoint", price: 19.99, multiplayer: true }
];

// F9
function compare(g1, g2) {
    if (g1.multiplayer) {
        return -1; // g1 < g2
    } else if (g2.multiplayer) {
        return 1; // g1 > g2
    } else {
        return 0;
    }
}
console.log("F9:", games.toSorted(compare).map(g => ({title: g.title, price: g.price})));

