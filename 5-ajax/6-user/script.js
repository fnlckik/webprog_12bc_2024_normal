// POST
// https://reqres.in/api/users
// name => "Neo", job => "Chosen one"

const user = {
    name: "Neo",
    job: "Chosen one"
};
const button = document.querySelector("button");
async function createUser() {
    const name = document.querySelector("#name").value;
    const job = document.querySelector("#job").value;
    const user = {name, job};
    const OPTIONS = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };
    const response = await fetch("https://reqres.in/api/users", OPTIONS);
    const data = await response.json();
    console.log(data);
}

function createUserXHR() {
    const name = document.querySelector("#name").value;
    const job = document.querySelector("#job").value;
    const user = {name, job};
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users");
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
}
button.addEventListener("click", createUserXHR);