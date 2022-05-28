// Realizar un programa en el que se introduzca el
// número del mes (1 al 12) e indique al usuario si el
// mes que ingresó tiene 30 o 31 días.

const monthsWith28Days = ["2"];
const monthsWith30Days = ["4", "6", "9", "11"];
const monthsWith31Days = ["1", "3", "5", "7", "8", "10", "12"];

let month = prompt("Ingrese el número del mes (1-12):");

let result = monthsWith28Days.includes(month)
  ? "El mes tiene 28 días"
  : monthsWith30Days.includes(month)
  ? "El mes tiene 30 días"
  : monthsWith31Days.includes(month)
  ? "El mes tiene 31 días"
  : "Mes inválido";

document.write(result);
