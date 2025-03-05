// User interface: felhasználói felület
// interface: felület
// API: Application Programming Interface

// https://www.weatherapi.com/docs/

const APIKEY = "c75e43014d424a7a92a231046251802";

// http://api.weatherapi.com/v1/current.json?key=c75e43014d424a7a92a231046251802&q=Paris

const URL = "http://api.weatherapi.com/v1";

function showCurrent(data) {
    const div = document.querySelector("div");
    div.innerHTML = `
        <p>Város: ${data.location.name}</p>
        <p>Ország: ${data.location.country}</p>
        <p>Hőmérséklet: ${data.current.temp_c} °C</p>
        <p>Csapadék: ${data.current.precip_mm} mm</p>
        <p>Páratartalom: ${data.current.humidity}%</p>
        <p id="egbolt">
            <span>Égbolt: ${data.current.condition.text}</span>
            <img src="https:${data.current.condition.icon}">
        </p>
    `;
}

const buttonCurrent = document.querySelector("#aktualis");
async function handleCurrent() {
    const input = document.querySelector("input");
    const city = input.value;
    try {
        const response = await fetch(`${URL}/current.json?q=${city}&key=${APIKEY}&lang=hu`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Nincs ilyen város!");
        }
        showCurrent(data);
    } catch (error) {
        console.log(error.message);
    }
}
buttonCurrent.addEventListener("click", handleCurrent);

// -------------------------------------

const buttonForecast = document.querySelector("#aktualis");
function handleForecast() {
    const input = document.querySelector("input");
    const city = input.value;
    fetch(`${URL}/foreacast.json?q=${city}&key=${APIKEY}`);
}
buttonForecast.addEventListener("click", handleForecast);