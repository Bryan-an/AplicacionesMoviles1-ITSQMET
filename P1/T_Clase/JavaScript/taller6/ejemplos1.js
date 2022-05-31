// Taller
// Indicar 5 ejemplos de las diferentes formas de
// sintaxis con Funciones Tipo Flecha

const sum = (n1, n2) => n1 + n2;
const square = (n) => n * n;
const greet = () => console.log("Hello World!");
const returnSomething = () => "something";
const doSomething = () => {
  let count = 0;

  for (let i = 0; i < 5; i++) {
    count += i;
  }

  return count;
};

console.log(sum(3, 2));
console.log(square(4));
greet();
console.log(returnSomething());
console.log(doSomething());
