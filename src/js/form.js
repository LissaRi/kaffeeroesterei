//Checkt die Email-Adresse
export function validateEmail(value) {
  if (!value.includes("@")) {
    return "Eine Email muss ein @ Zeichen haben und mit .com enden";
  } else {
    return null;
  }
}

export function validateNotEmpty(value) {
  if (value.length < 1) {
    return "Dieses Feld darf nicht leer sein";
  } else {
    return null;
  }
}
