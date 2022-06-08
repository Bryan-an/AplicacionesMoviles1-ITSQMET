let header = `
<header>
      <div class="hero-image">
        <div class="hero-text">
          <h1 class="hero-title">Tarea de fin del Primer Parcial</h1>
          <h2>Bryan Andagoya</h2>
        </div>
      </div>
    </header>
    <ul class="topnav">
      <li>
        <a href="index.html">Valores</a>
      </li>
      <li>
        <a href="variables.html">Variables</a>
      </li>
      <li>
        <a href="operators.html">Operadores</a>
      </li>
      <li>
        <a href="structures.html">Estructuras de Control</a>
      </li>
      <li>
        <a href="loops.html">Bucles</a>
      </li>
      <li>
        <a href="functions.html">Funciones</a>
      </li>
      <li>
        <a href="examples.html">Ejemplos</a>
      </li>
      <li class="icon" onclick="toggleMenu()">
        <a href="#">
          <i class="fa fa-bars"></i>
        </a>
      </li>
    </ul>
`;

document.getElementById("body").insertAdjacentHTML("afterbegin", header);

const topnav = document.querySelector(".topnav");

const toggleMenu = () => {
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav";
  }
};
