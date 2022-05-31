// Mostrar todos los números impares que hay entre dos números
// introducidos por el usuario.
// Rango hasta 100
// Resultado solo lo que está entre esos dos números
// Validar el el valor ingresado sea número y hasta 100
// No sea negativo

const numbers = [];

do {
  let number = prompt("Ingrese un número positivo hasta el 100:");

  if (!isNaN(number) && number >= 0 && number <= 100) {
    numbers.push(parseInt(number));
  } else {
    alert("Número inválido");
  }
} while (numbers.length < 2);

numbers.sort((a, b) => a - b);

for (let i = numbers[0]; i <= numbers[1]; i++) {
  if (i % 2 !== 0) {
    document.write(`${i}<br>`);
  }
}
