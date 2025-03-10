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

"http://api.weatherapi.com/v1/forecast.json?q=Cegled&key=c75e43014d424a7a92a231046251802&days=3"

function showForecast(data) {
    const div = document.querySelector("div");
    div.innerHTML = `
        <p>Város: ${data.location.name}</p>
        <p>Ország: ${data.location.country}</p>
        <p>Hőmérséklet (átlag): ${data.forecast.forecastday[1].day.avgtemp_c} °C</p>
        <p>Páratartalom (átlag): ${data.forecast.forecastday[1].day.avghumidity}%</p>
        <p id="egbolt">
            <span>Égbolt: ${data.forecast.forecastday[1].day.condition.text}</span>
            <img src="https:${data.forecast.forecastday[1].day.condition.icon}">
        </p>
    `;
}

const buttonForecast = document.querySelector("#holnapi");
async function handleForecast() {
    const input = document.querySelector("input");
    const city = input.value;
    try {
        const response = await fetch(`${URL}/forecast.json?q=${city}&key=${APIKEY}&days=3&lang=hu`);
        const data = await response.json();
        // response.status === 400
        if (!response.ok) {
            // throw new Error(JSON.stringify(data));
            // console.log(data.error.message);
            throw new Error(data.error.message);
        }
        showForecast(data);
    } catch (error) {
        // console.log(error.message);
        alert(error.message);
    }
}
buttonForecast.addEventListener("click", handleForecast);