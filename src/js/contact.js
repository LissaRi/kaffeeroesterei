const email = document.getElementById ("email");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Trag bitte eine gültige E-Mail-Adresse ein!");
    }
    else {
        email.setCustomValidity("");
    }
});
