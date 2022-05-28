// Nombre: Bryan Andagoya

// Ejemplo de uso del operador spread
const calculateAverage = (n1, n2, n3) => {
  return (n1 + n2 + n3) / 3;
};

const grades = [10, 7, 9];

let average = calculateAverage(...grades);

console.log(average);
