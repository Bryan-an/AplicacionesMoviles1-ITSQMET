// Realizar un programa que solicite al usuario el
// nombre de la marca del vehículo a comprar
// (Ford 5%, Mazda 10%, Chevrolet 15%) y como
// resultado le muestre el precio del vehículo con
// su descuento.
// Nota: Considerando que todo vehículo cuesta
// $30000 USD.

let trademark = prompt(
  "Ingrese la marca del vehículo a comprar:"
).toLowerCase();

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
