const form = document.getElementById("form");
const stadiumNameInput = document.getElementById("stadium-name");
const stadiumPlaceInput = document.getElementById("stadium-place");
const stadiumCountryInput = document.getElementById("stadium-country");
const stadiumCityInpup = document.getElementById("stadium-city");
const stadiumCreationYearInput = document.getElementById(
  "stadium-creation-year"
);
const stadiumLeaderInput = document.getElementById("stadium-leader");
const stadiumTreasurerInput = document.getElementById("stadium-treasurer");
const stadiumSecretaryInput = document.getElementById("stadium-secretary");
const teamNameInput = document.getElementById("team-name");
const teamCoachInput = document.getElementById("team-coach");
const integrantNameInput = document.getElementById("integrant-name");
const teamsTable = document.getElementById("teams-table");
const teamsTableContainer = document.getElementById("teams-table-container");
const integrantsContainer = document.getElementById("integrants-container");
const stadiumNameResult = document.getElementById("stadium-name-result");
const locationResult = document.getElementById("location-result");
const leaderResult = document.getElementById("leader-result");
const gameCardsContainer = document.getElementById("game-cards-container");
const resultSection = document.getElementById("result-section");

const COLORS = ["#e9ff70", "#ffd670", "#ff9770", "#ff70a6", "#70d6ff"];
const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

let stadium = {
  teams: [],
  administrators: {
    leader: "",
    treasurer: "",
    secretary: "",
  },
  data: {
    name: "",
    place: "",
    country: "",
    city: "",
    creationYear: null,
  },
};

let auxIntegrants = [];

const reset = () => {
  const inputs = [
    stadiumNameInput,
    stadiumPlaceInput,
    stadiumCountryInput,
    stadiumCityInpup,
    stadiumCreationYearInput,
    stadiumLeaderInput,
    stadiumTreasurerInput,
    stadiumSecretaryInput,
  ];

  inputs.forEach((input) => (input.value = ""));

  auxIntegrants = [];

  stadium = {
    teams: [],
    administrators: {
      leader: "",
      treasurer: "",
      secretary: "",
    },
    data: {
      name: "",
      place: "",
      country: "",
      city: "",
      creationYear: null,
    },
  };

  showTeams();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (stadium.teams.length !== 10) {
    return alert("Agregue 10 equipos");
  }

  stadium.administrators.leader = stadiumLeaderInput.value;
  stadium.administrators.treasurer = stadiumTreasurerInput.value;
  stadium.administrators.secretary = stadiumSecretaryInput.value;
  stadium.data.name = stadiumNameInput.value;
  stadium.data.place = stadiumPlaceInput.value;
  stadium.data.country = stadiumCountryInput.value;
  stadium.data.city = stadiumCityInpup.value;
  stadium.data.creationYear = stadiumCreationYearInput.value;

  const {
    administrators: { leader },
    data: { name, country, city, place },
  } = stadium;

  stadiumNameResult.innerText = name;
  locationResult.innerText = `${country}, ${city}, ${place}`;
  leaderResult.innerText = leader;

  shuffleTeams();
  showGames();

  resultSection.hidden = false;

  reset();
});

const deleteIntegrant = (integrantToDelete) => {
  auxIntegrants = auxIntegrants.filter(
    (integrant) => integrant.toLowerCase() !== integrantToDelete.toLowerCase()
  );

  showIntegrants();
};

const showIntegrants = () => {
  let html = "";
  let colorIndex = 0;

  auxIntegrants.forEach((integrant) => {
    html += `<div class="card" style="background-color: ${COLORS[colorIndex]}">
    <p>
      ${integrant}
      <span class="pl-1" onclick="deleteIntegrant('${integrant}')"
        ><i class="fa-regular fa-trash-can icon" ></i
      ></span>
    </p>
  </div>`;

    if (colorIndex === 4) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
  });

  integrantsContainer.innerHTML = html;
};

const addIntegrant = () => {
  let name = integrantNameInput.value;

  if (!name) {
    return alert("Ingrese un integrante");
  }

  let alreadyExists = false;

  for (let integrantName of auxIntegrants) {
    if (integrantName.toLowerCase() === name.toLowerCase()) {
      alreadyExists = true;
      break;
    }
  }

  if (alreadyExists) {
    return alert("Dicho integrante ya existe");
  }

  auxIntegrants.push(name);

  showIntegrants();

  integrantNameInput.value = "";
};

const addTeam = () => {
  if (!teamNameInput.value) {
    return alert("Ingrese el nombre del equipo");
  }

  let alreadyExists = false;

  for (let { name: teamName } of stadium.teams) {
    if (teamNameInput.value.toLowerCase() === teamName.toLowerCase()) {
      alreadyExists = true;
      break;
    }
  }

  if (alreadyExists) {
    return alert("Dicho equipo ya existe");
  }

  if (!teamCoachInput.value) {
    return alert("Ingrese el nombre del director técnico del equipo");
  }

  if (!auxIntegrants.length) {
    return alert("Ingrese al menos un integrante");
  }

  let name = teamNameInput.value;
  let coach = teamCoachInput.value;

  const team = {
    id: new Date().valueOf(),
    name,
    coach,
    integrants: auxIntegrants,
  };

  stadium.teams.push(team);

  showTeams();

  auxIntegrants = [];
  teamNameInput.value = "";
  teamCoachInput.value = "";

  showIntegrants();
};

const showTeams = () => {
  const { teams } = stadium;

  teamsTable.innerHTML = "";

  teams.forEach(({ id, name, coach, integrants }) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const nameParagraph = document.createElement("p");
    const integrantsCell = document.createElement("td");
    const integrantsList = document.createElement("ul");
    const coachCell = document.createElement("td");
    const coachParagraph = document.createElement("p");

    integrants.forEach((integrant) => {
      const integrantItem = document.createElement("li");
      const integrantParagraph = document.createElement("p");

      integrantParagraph.innerText = integrant;
      integrantItem.appendChild(integrantParagraph);
      integrantsList.appendChild(integrantItem);
    });

    nameParagraph.innerText = name;
    nameCell.appendChild(nameParagraph);
    row.appendChild(nameCell);

    integrantsCell.appendChild(integrantsList);
    row.appendChild(integrantsCell);

    coachParagraph.innerText = coach;
    coachCell.appendChild(coachParagraph);
    row.appendChild(coachCell);

    row.insertAdjacentHTML(
      "beforeend",
      `<td class="text-center-middle">
    <p>
      <i class="fa-regular fa-trash-can icon" onclick="deleteTeam(${id})"></i>
    </p>
  </td>`
    );

    teamsTable.insertAdjacentElement("beforeend", row);
  });

  teamsTableContainer.hidden = !teams.length > 0;
};

const deleteTeam = (id) => {
  stadium.teams = stadium.teams.filter((team) => team.id !== id);

  showTeams();
};

const shuffleTeams = () => {
  stadium.teams.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

const showGames = () => {
  let day = 0;
  let html = "";
  const { teams } = stadium;

  for (let i = 0; i < teams.length; i += 2, day++) {
    let hour = String(Math.floor(Math.random() * (23 - 0) + 0)).padStart(
      2,
      "0"
    );
    let minutes = String(Math.floor(Math.random() * (59 - 0) + 0)).padStart(
      2,
      "0"
    );

    html += `<div class="game-card">
    <div
      class="game-team-card"
      style="background-color: #e9ff70; border-radius: 0 0 0 6rem"
    >
      <p><b>${teams[i].name}</b></p>
    </div>
    <div class="game-time-card">
      <div>
        <p>${DAYS[day]}</p>
      </div>
      <div>
        <p>${hour}H${minutes}</p>
      </div>
    </div>
    <div
      class="game-team-card text-right"
      style="background-color: #70d6ff; border-radius: 0 0 6rem 0"
    >
      <p><b>${teams[i + 1].name}</b></p>
    </div>
  </div>`;
  }

  gameCardsContainer.innerHTML = html;
};
