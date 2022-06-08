const form = document.getElementById("form");
const nameInput = document.getElementById("name");
let teamHeader = document.getElementById("team");
const team1Container = document.getElementById("team1");
const team2Container = document.getElementById("team2");
const team1 = [];
const team2 = [];

const addIntegrant = (name, team) => {
  if (!isNaN(name)) {
    return alert("No ingrese números");
  }

  let alreadyExists = false;

  for (let integrant of team) {
    if (integrant.toLowerCase() === name.toLowerCase()) {
      alreadyExists = true;
      alert("Ese nombre ya existe en este equipo");
      break;
    }
  }

  if (!alreadyExists) {
    team.push(name);
  }
};

const formatInformation = (team) => {
  const teamList = document.createElement("ul");

  team.forEach((integrant) => {
    const name = document.createElement("li");

    name.innerText = integrant;
    teamList.appendChild(name);
  });

  return teamList;
};

const showInformation = () => {
  let team1Information = formatInformation(team1);
  let team2Information = formatInformation(team2);

  team1Container.appendChild(team1Information);
  team2Container.appendChild(team2Information);

  team1Container.hidden = false;
  team2Container.hidden = false;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = nameInput.value;

  if (team2.length === 7) {
    alert("No se permiten más integrantes");
  } else {
    if (teamHeader.innerText === "Grupo 1") {
      addIntegrant(name, team1);

      if (team1.length === 5) {
        teamHeader.innerText = `Grupo 2`;
      }
    } else {
      addIntegrant(name, team2);
      if (team2.length === 7) {
        showInformation();
      }
    }
  }

  nameInput.value = "";
});
