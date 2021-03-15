"use strict";
import { validateEmail, validateNotEmpty } from "./form";

const email = document.getElementById("email");
const nameField = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const checkboxInput = document.getElementById("privacy");

// ---------------------------------------------------------------------------------------------------------------------
function validate() {
  let status = {
    error: false,
    errorMessages: [],
  };
  const errorElement = document.querySelector(`#${this.id}-error`);
  if (this.id === "email") {
    status = [...status, validateEmail(this.value)];
    status = [...status, validateNotEmpty(this.value)];
  }
  console.log(status);
  if (status.error) {
    this.classList.add("invalid");
    errorElement.innerHTML = status.errorMsg;
  } else {
    this.classList.remove("invalid");
    errorElement.innerHTML = "";
  }
}

email.addEventListener("keyup", validate);

// ---------------------------------------------------------------------------------------------------------------------

//Email

// const emailWarning = document.getElementById("email-error");
// export function validateEmail() {
//   if (!this.includes("@")) {
//     return "Eine Email muss ein @ Zeichen haben und mit .com enden";
//   } else {
//     return null;
//   }
// }

//
// const test = function () {
//   return `
//       <p>Eine Emailadresse muss ein @ Zeichen, sowie einen . beinhalten!</p>
//     `;
// };

// emailWarning.innerHTML = test();

//Checkt den Namen
//Checkt die Telefonnummer
//Checkt das drop-down
//Gibt es eine Nachricht?
//Ist die Checkobx gecheckt?

// Button
document
  .querySelector("button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (checkboxInput.checked === false) {
      alert("Du hast das Häkchen nicht gesetzt!");
    } else if (email.validity.typeMismatch) {
      // alert("Trage bitte eine gültige Emai-Adresse ein")
    } else if (
      email.value === "" ||
      nameField.value === "" ||
      phoneInput.value === ""
    ) {
      alert(
        "Du musst deinen Namen, eine Email-Adresse und eine Telefonnummer eintragen. Diese Felder dürfen nicht leer bleiben!"
      );
      emailWarning.addEventListener("keyup", validateEmail);
    }

    console.log("Es wurde geklickt");
  });
