// BUCLES
// OPERACIONES REPETITIVAS
// FOR, WHILE, DO WHILE

// FOR
for (let pasos = 2; pasos < 5; pasos++) {
  console.log("Camina un paso hacia el este");
}

let equipo1 = ["Carla", "Pepe", "Susana"];

for (let index = 0; index < equipo1.length; index++) {
  console.log(equipo1[index]);
}

console.log(...equipo1);

// FOR  EACH
equipo1.forEach((element) => console.log(element));

// FOR IN - FOR OF
// FOR IN
// const items = {
//   trajes: 30,
//   pantalones: 40,
//   zapatos: 20,
//   calcetines: 5,
// };

// for (const key in items) {
//   console.log(`Los ${key} cuestan $ ${items[key].toFixed(2)}`);
// }

let items = [
  {
    trajes: 30,
    pantalones: 40,
    zapatos: 20,
    calcetines: 5,
  },
  {
    trajes: 30,
    pantalones: 40,
    zapatos: 20,
    calcetines: 5,
  },
];

for (let key of items) {
  console.log(key);
}

// FOR OF
const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

for (const day of daysOfWeek) {
  console.log(day);
}

// WHILE
let n = 0;
let x = 0;

while (n <= 3) {
  n++;
  x += n;
  console.log("N:", n);
}

// DO WHILE
do {
  n++;
  x += n;
  console.log("N:", n);
} while (n <= 3);

// Validar Ford, Mazda, Chevrolet
