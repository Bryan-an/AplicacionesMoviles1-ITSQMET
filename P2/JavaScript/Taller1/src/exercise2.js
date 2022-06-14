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

const form = document.getElementById("form");
const teamNumberHeader = document.getElementById("team-number");
const teamNameInput = document.getElementById("team-name");
const playerNameInput = document.getElementById("player-name");
const coachNameInput = document.getElementById("coach-name");
const team1InfoContainer = document.getElementById("team1-info");
const team2InfoContainer = document.getElementById("team2-info");
const team1 = {
  name: "",
  players: [],
  coach: "",
};

const team2 = {
  name: "",
  players: [],
  coach: "",
};

const addIntegrant = (name, { players }) => {
  if (!name) {
    return alert("Debe ingresar un jugador");
  }

  if (!isNaN(name)) {
    return alert("No ingrese números");
  }

  let alreadyExists = false;

  for (let integrant of players) {
    if (integrant.toLowerCase() === name.toLowerCase()) {
      alreadyExists = true;
      alert("Ese nombre ya existe en este equipo");
      break;
    }
  }

  if (!alreadyExists) {
    players.push(name);
  }
};

const formatInformation = ({ name, players, coach }) => {
  const dataFragment = document.createDocumentFragment();
  const dataParagraph = document.createElement("p");
  const teamList = document.createElement("ul");

  dataParagraph.innerHTML = `<b>Nombre del Equipo:</b> ${name}\n<br><b>Nombre del director técnico:</b> ${coach}\n<br><b>Integrantes:</b>`;
  dataFragment.appendChild(dataParagraph);

  players.forEach((integrant) => {
    const nameItem = document.createElement("li");

    nameItem.innerText = integrant;
    teamList.appendChild(nameItem);
  });

  dataFragment.appendChild(teamList);

  return dataFragment;
};

const showInformation = () => {
  let team1Information = formatInformation(team1);
  let team2Information = formatInformation(team2);

  team1InfoContainer.appendChild(team1Information);
  team2InfoContainer.appendChild(team2Information);

  team1InfoContainer.hidden = false;
  team2InfoContainer.hidden = false;
};

const addPlayer = () => {
  let teamNumber = teamNumberHeader.innerText;
  let playerName = playerNameInput.value;
  let teamName = teamNameInput.value;
  let coachName = coachNameInput.value;

  const { players: players1 } = team1;
  const { players: players2 } = team2;

  if (players2.length === 7) {
    alert("No se permiten más integrantes");
  } else {
    if (teamNumber === "1") {
      addIntegrant(playerName, team1);

      if (players1.length === 5) {
        team1.name = teamName;
        team1.coach = coachName;
        teamNumberHeader.innerText = "2";
        teamNameInput.value = "";
        coachNameInput.value = "";
      }
    } else {
      addIntegrant(playerName, team2);
    }
  }

  playerNameInput.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let teamNumber = teamNumberHeader.innerText;
  let teamName = teamNameInput.value;
  let coachName = coachNameInput.value;

  if (teamNumber === "1") {
    if (team1.players.length === 0) {
      return alert("Debe ingresar al menos un integrante");
    }

    team1.name = teamName;
    team1.coach = coachName;
    teamNumberHeader.innerText = "2";
  } else {
    if (team2.players.length === 0) {
      return alert("Debe ingresar al menos un integrante");
    }

    team2.name = teamName;
    team2.coach = coachName;

    showInformation();
  }

  teamNameInput.value = "";
  playerNameInput.value = "";
  coachNameInput.value = "";
});
