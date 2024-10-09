// Gond: ekkor is elküldjük a form-ot!
function checkData() {
    const checkbox = document.querySelector("input[type=checkbox]");
    if (checkbox.checked === false) {
        return;
    }
}
const button = document.querySelector("button");
button.addEventListener("click", checkData);
