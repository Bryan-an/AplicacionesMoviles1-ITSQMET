/* En el Ejercicio 2.- El usuario debe ingresar 5 nombres en el Grupo 1,
7 nombres en el Grupo 2. Validar que sólo se ingrese ese número de participantes,
que no permita el ingreso de nombres repetidos, no números,
que se limpie la información de los inputs una vez ingresado los nombres.
De esta manera en la página le muestre el nombre, fecha, hora de presentación,
junto con los nombres de los integrantes del Grupo 1; de la misma forma para el Grupo 2.

1. Validación que por lo menos ingrese un integrante
2. Una vez que hace clic en Enviar correctamente, se deben limpiar los inputs.
3. Las validaciones estén solo en una función
*/

/*
Equipos de Fútbol:
Equipo 1 (nombre de equipo, integrantes, director técnico), 
Equipo 2 (nombre de equipo, integrantes, director técnico)
*/

// Contenedor
const team1Container = document.getElementById("team1");

// Título
const teamTitle = document.getElementById("team");
const team1 = [];

// Añadir integrantes
const addTeamMember = () => {
  const nameInput = document.getElementById("name").value;
  let alreadyExists = false;

  if (!nameInput) {
    alert("Debe ingresar un jugador");
  } else {
    if (!isNaN(nameInput)) {
      return alert("No ingrese números");
    } else {
      if (team1.length === 5) {
        alert("Ya no se puede ingresar más jugadores");
      }
    }
  }

  for (let integrant of team1) {
    if (integrant.toLowerCase() === nameInput.toLowerCase()) {
      alreadyExists = true;
      alert("Ese nombre ya existe en el equipo");
      break;
    }
  }

  if (!alreadyExists) {
    team1.push(nameInput);
  }

  document.getElementById("name").value = "";
};

// Mostrar los integrantes del equipo
const formatInformation = (team) => {
  const teamList = document.createElement("ul");

  team.forEach((integrant) => {
    const name = document.createElement("li");

    name.innerText = integrant;
    teamList.appendChild(name);
  });

  return teamList;
};

const showInformation = (team) => {
  // Desestructuración
  const { teamName, team1, coachName } = team;

  let team1Information = formatInformation(team1);

  team1Container.innerHTML += "<strong>Datos del equipo</strong><br/>";
  team1Container.innerHTML += "Nombre del equipo: " + teamName + "<br/>";
  team1Container.innerHTML +=
    "Nombre del director técnico: " + coachName + "<br/>";
  team1Container.innerHTML += "Integrantes:<br/>";
  team1Container.appendChild(team1Information);

  team1Container.hidden = false;
};

const sendInfo = () => {
  let teamName = document.getElementById("teamName").value;
  let coachName = document.getElementById("coachName").value;
  let team;

  if (!teamName && !coachName) {
    return alert("Ingrese todos los campos");
  } else {
    team = {
      teamName,
      team1,
      coachName,
    };
  }

  showInformation(team);
};
