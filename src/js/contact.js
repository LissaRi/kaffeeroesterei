"use strict"
//Checkt den Namen

//Checkt die Email-Adresse
const email = document.getElementById ("email");
const nameField = document.getElementById ("name");
const phoneInput = document.getElementById ("phone");


function validEmail () {
    if (!this.value.includes ("@")) {  
          email.classList.add("invalid");
        } else {
            email.classList.remove("invalid");
        }
  }

email.addEventListener("change", validEmail);


//Checkt die Telefonnummer
//Checkt das drop-down
//Gibt es eine Nachricht?

//Ist die Checkobx gecheckt?
const checkboxInput = document.getElementById("privacy")



// Button soll submitten
document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault ();
    
    if (checkboxInput.checked === false) {
        alert("Du hast das Häkchen nicht gesetzt!")
    }

    else if (email.validity.typeMismatch) {
        // alert("Trage bitte eine gültige Emai-Adresse ein")
       
        
 

    }
    
    else if (email.value === "" || nameField.value === "" || phoneInput.value === "") {
        alert ("Du musst deinen Namen, eine Email-Adresse und eine Telefonnummer eintragen. Diese Felder dürfen nicht leer bleiben!")
    }


    console.log("Es wurde geklickt")
});



const emailWarning = document.getElementsByClassName ("email-wrapper");
const test = function () {
    console.log (emailWarning);
 return `
<div class="email-wrapper">
    <p>Eine Email muss ein @ Zeichen haben und mit .com enden</p>
</div>
`
};

emailWarning.innerHTML = test;
console.log (emailWarning.innerHTML);