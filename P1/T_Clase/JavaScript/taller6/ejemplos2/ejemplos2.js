// TALLER
// PROMPT Solicitar que se ingrese para el Equipo1
// Nombre y Apellido
// Desea ingresar otro (Si, le sigue solicitando los datos)
// (No, le dice que ingrese Equipo 2)
// (De la misma manera para el Equipo 2 y 3)
// Ingrese Nombre y Apellido a buscar
// Como resultado le indica en que Equipo se encuentra.

const team1 = [];
const team2 = [];
const team3 = [];

const fillTeam = (team, teamNumber) => {
  let exit = false;

  do {
    let member = prompt(
      `Equipo ${teamNumber}\nIngrese nombre y apellido:`
    ).toLowerCase();

    team.push(member);

    exit =
      prompt("¿Desea ingresar otro integrante? (si/no)").toLowerCase() === "no";
  } while (!exit);
};

fillTeam(team1, 1);
fillTeam(team2, 2);
fillTeam(team3, 3);

let nameToSearch = prompt(
  "Ingrese el nombre y apellido del integrante a buscar:"
).toLowerCase();

let selectedTeam = team1.includes(nameToSearch)
  ? "Equipo 1"
  : team2.includes(nameToSearch)
  ? "Equipo 2"
  : team3.includes(nameToSearch)
  ? "Equipo 3"
  : null;

selectedTeam
  ? alert(`El integrante ${nameToSearch} se encuentra en el ${selectedTeam}`)
  : alert("Dicho integrante no existe");
