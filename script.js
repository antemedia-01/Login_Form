let name = document.getElementById("name");
let pass = document.getElementById("pass");
let small = document.querySelector("small")
name.addEventListener('input', () => {
    if (!name.checkValidity()) {
        small.innerText = name.validationMessage;
    }
    else {

    }
});