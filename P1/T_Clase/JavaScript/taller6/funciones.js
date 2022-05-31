// Funciones
// Conjunto de sentencias que utilizamos para generar acciones

// Declarativas
function square(x) {
  return x * x;
}

// De Expresión o Anónimas
let square1 = function (x) {
  return x * x;
};

// Llamar a la función
console.log(square(3));
console.log(square1(3));

// Tipo Flecha
let square2 = (x) => x * x;

console.log(square2(3));
