// Validar Ford, Mazda, Chevrolet
const validTrademarks = ["ford", "mazda", "chevrolet"];
let trademark = "";

do {
  trademark = prompt("Ingrese la marca del vehículo a comprar:").toLowerCase();

  if (validTrademarks.includes(trademark)) {
    break;
  } else {
    alert("Marca inválida");
  }
} while (true);

const VEHICLE_PRICE = 30000;

let total =
  trademark === "ford"
    ? VEHICLE_PRICE * 0.95
    : trademark === "mazda"
    ? VEHICLE_PRICE * 0.9
    : trademark === "chevrolet"
    ? VEHICLE_PRICE * 0.85
    : VEHICLE_PRICE;

document.write(`El precio total del vehículo es $ ${total.toFixed(2)}`);
