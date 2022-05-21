// JavaScript - Operadores metemáticos - Operación - Aritméticos

// Declarar variables
let numero1;
let numero2;

// Asignar valores
numero1 = 8;
numero2 = 5;

// Suma
console.log(
  "La Suma de",
  numero1,
  "+",
  numero2,
  "es igual a",
  numero1 + numero2
);

// Resta
console.log(
  "La Resta de " +
    numero1 +
    " - " +
    numero2 +
    " es igual a " +
    (numero1 - numero2)
);

// Multiplicación
console.log(
  `La Multiplicación de ${numero1} * ${numero2} es igual a ${numero1 * numero2}`
);

// Residuo de la división
console.log(
  `El residuo de ${numero1} % ${numero2} es igual a ${numero1 % numero2}`
);

// Incremento
console.log(`Incremento ${++numero1}`);

// Decremento
console.log(`Decremento ${--numero1}`);

// La diferencia entre Pre-incremento y Post-incremento
let aux = numero1;

console.log(
  `La diferencia entre Pre-incremento y Post-incremento es: Pre-incremento -> ${++numero1}; Post-incremento -> ${aux++}`
);

// Operadores lógicos o de comparación
// AND -> &&
// OR -> ||
// NOT -> !
// >, >=, <=, <, !=, !==, ==, ===

numero1 = 8;
numero2 = 5;

// el post-incremento del número 1 es igual al pre-incremento del número 2
console.log(
  `El Post-incremento del número 1 (${numero1++}) es igual el pre-incremento del número 2 (${++numero2}): ${
    numero1++ === ++numero2
  }`
);

// La diferencia entre el operador == y el operador ===
let foo = "";
let bar = 0;

console.log(
  `Utilizando == entre '' y el 0, JavaScript nos indica que es ${foo == bar}`
);
console.log(
  `Utilizando === entre '' y el 0, JavaScript nos indica que es ${foo === bar}`
);

// Negación
let baz = false;
console.log(!baz);

// Ejercicios
// 1
let a = 1;
let b = "1";

console.log(
  `Utilizando == entre 1 y el '1', JavaScript nos indica que es ${a == b}`
);
console.log(
  `Utilizando === entre 1 y el '1', JavaScript nos indica que es ${a === b}`
);

// 2
var c = false;
var d = 0;

console.log(
  `Utilizando == entre false y el 0, JavaScript nos indica que es ${c == d}`
);
console.log(
  `Utilizando === entre false y el 0, JavaScript nos indica que es ${c === d}`
);

// Operadores de Asignación
// Asignar valores a variables
// =, +=, -=, *=, /=, %=

let direccion = "Las Casas";

let numero = 55;

// numero = numero + 3;
// console.log(numero);

numero += 3;

numero *= 3;
console.log(numero);

let w = 1;
let x = 5;
let y = 3;
let z = 11;

y %= w;
console.log(y);

w = z = x = y;

w = z = x = y;

console.log(w);
console.log(
  `¿La sentencia de (w = z = x = y) es igual a  (w = (z = (x = y)))? es ${
    (w = z = x = y) === (w = z = x = y)
  }`
);

z += x *= y;
// Cuánto es el valor de x?
console.log(x);

w = 1;
x = 5;
y = 3;
z = 11;

x &&= y;
x = x && y;

console.log(
  `¿La sentencia de (x &&= y) es igual a (x = x && y) ? ${
    (x &&= y) === (x = x && y)
  }`
);

x >= y;
x = x >= y;

z <= w;
z = z <= w;

x ??= y;
