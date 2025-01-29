function round(callback) {
    setTimeout(() => {
        const p = Math.floor(Math.random() * 301); // 0..300
        callback(p);
    }, 1000);
}

// Továbbjutás 200 ponttól!
function competition() {
    round(point => {
        console.log(point);
        if (point >= 200) {
            round(point => {
                console.log(point);
                if (point >= 200) {
                    round(point => {
                        console.log(point);
                        console.log("Vége a versenynek!");
                    })
                } else {
                    console.log("Kiestél!");
                }
            })
        } else {
            console.log("Kiestél!");
        }
    });
}
competition();