// Qué es un objeto?
// Colección de propiedades (nombre o clave) y tiene valores.

// Sintaxis
let objeto = {};

let marca = "Toyota";
let modelo = "Corolla";
let anio = 2020;

// E5
// let miAuto = {
//   marca: marca,
//   modelo: modelo,
//   anio: anio,
// };

// E6
let miAuto = {
  marca,
  modelo,
  anio,
};

console.log(miAuto);

let casa = {
  color: "Blanca",
  pisos: 3,
  numero: 127,
};

// Obeto de Arreglos
let personas = {
  nombres: ["María", "Carlos", "Cecilia"],
  grupo: "Uno",
};

// Arreglo de objetos
let personas2 = [
  {
    nombre: "Guillermo",
    edad: 20,
  },
  {
    nombre: "Pedro",
    edad: 12,
  },
];

// Arreglo de arreglos
let arreglo1 = [
  [2, 1, 6, 7],
  ["e", "c"],
];

// Objeto de objetos
let objeto2 = {
  nombre: {
    edad: 5,
  },
  apellido: {
    materno: "Chiris",
    paterno: "Clausi",
  },
};
