// User interface: felhasználói felület
// interface: felület
// API: Application Programming Interface

// https://www.weatherapi.com/docs/

const APIKEY = "c75e43014d424a7a92a231046251802";

// http://api.weatherapi.com/v1/current.json?key=c75e43014d424a7a92a231046251802&q=Paris

const URL = "http://api.weatherapi.com/v1";

function show(data) {
    const div = document.querySelector("div");
    div.innerHTML = `
        <p>Város: ${data.location.name}</p>
        <p>Ország: ${data.location.country}</p>
        <p>Hőmérséklet: ${data.current.temp_c} °C</p>
        <p>Csapadék: ${data.current.precip_mm} mm</p>
    `;
}

const button = document.querySelector("button");
async function handleClick() {
    const input = document.querySelector("input");
    const city = input.value;
    try {
        const response = await fetch(`${URL}/current.json?q=${city}&key=${APIKEY}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Nincs ilyen város!");
        }
        show(data);
    } catch (error) {
        console.log(error.message);
    }
}
button.addEventListener("click", handleClick);