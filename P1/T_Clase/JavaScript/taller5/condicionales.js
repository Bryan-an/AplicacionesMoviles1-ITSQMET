// CONDICIONALES
// EVALUAR EXPRESIONES
// IF, ELSE, ELSE IF, SWITCH

if (promedio >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// ELSE IF
if (promedio >= 7) {
  console.log("Aprobado");
} else if (promedio <= 6 || promedio >= 5) {
  if (promedio === 6) {
    console.log("Supletorio 1");
  } else {
    console.log("Supletorio 2");
  }
}

let promedio = 5;

// TERNARIO
promedio >= 7
  ? console.log("Aprobado")
  : (promedio <= 6 || promedio >= 5) && promedio === 6
  ? console.log("Supletorio 1")
  : console.log("Supletorio 2");

// SWITCH

let day = 3;

switch (day) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día inválido");
    break;
}
