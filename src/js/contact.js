"use strict"
//Checkt den Namen

//Checkt die Email-Adresse
const email = document.getElementById ("email");

email.addEventListener("change", function (event) {
    console.log("change");
    // if (email.validity.typeMismatch) {
    //     email.setCustomValidity("Trag bitte eine gültige E-Mail-Adresse ein!");
    // }
    // else {
    //     email.setCustomValidity("");
    // }
});



//Checkt die Telefonnummer
//Checkt das drop-down
//Gibt es eine Nachricht?

//Ist die Checkobx gecheckt?
const checkboxInput = document.getElementById("privacy")



// Button soll submitten
document.querySelector("button").addEventListener("click", function () {
    if (privacy.checked === false) {
        alert("Bitte stimme der Datenschutzerklärung zu!")
    };

    if (email.validity.typeMismatch) {
        alert("Trage bitte eine gültige Emai-Adresse ein")
    };
    console.log("Es wurde geklickt")
});
