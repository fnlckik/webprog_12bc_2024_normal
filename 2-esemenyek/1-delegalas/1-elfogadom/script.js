// e: Event objektum
// -> esemény tulajdonságait tartalmazza
// e.type -> esemény típusa
// e.preventDefault() -> alapértelmezett viselkedés megakadályozása
// Pl.:
// - form küldése
// - hivatkozásra (linkre) kattintás
// - kontextus menü (gyormenü, jobb klikk) megnyitása
// - input mezőbe gépelés
// ...
function checkData(e) {
    console.log(e.type);
    
    const checkbox = document.querySelector("input[type=checkbox]");
    const termsMessage = document.querySelector("#terms-message");
    termsMessage.classList.toggle("hidden", checkbox.checked);

    const input = document.querySelector("input[type=password]");
    const passwordMessage = document.querySelector("#password-message");
    passwordMessage.classList.toggle("hidden", input.value.length >= 8);

    // Ha nincs kipipálva a checkbox
    // vagy a jelszó kevesebb 8 karakternél
    // akkor ne küldjük el a <form>-ot!
    if (!checkbox.checked || input.value.length < 8) {
        e.preventDefault();
    }
}
const button = document.querySelector("button");
button.addEventListener("click", checkData);
