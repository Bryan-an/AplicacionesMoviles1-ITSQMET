let footer = `
<footer id="footer">
      <div class="d-flex px-3 responsive-row">
        <div class="f-basis-50" style="align-self: center">
          <img src="assets/images/logo-itsqmet.webp" alt="Logo" class="logo" />
        </div>
        <div
          class="d-flex justify-content-center align-items-center f-direction-column f-basis-50 py-2"
        >
          <div>
            <p class="pb-1 reveal">
              <i class="fa-solid fa-graduation-cap pr-2"></i>ITSQMET
            </p>
            <p class="pb-1 reveal">
              <i
                class="fa-solid fa-mobile-screen-button pr-2"
                style="font-size: 25px"
              ></i
              >Aplicaciones Móviles I
            </p>
            <p class="pb-1 reveal">
              <i
                class="fa-solid fa-person-dress pr-2"
                style="font-size: 30px"
              ></i
              >Ing. Claudia Arcos
            </p>
            <p class="reveal">
              <i class="fa-solid fa-book pr-2" style="font-size: 22px"></i
              >Cuarto Nivel
            </p>
          </div>
        </div>
      </div>
    </footer>
`;

document.getElementById("body").insertAdjacentHTML("beforeend", footer);

const revealElements = () => {
  const reveals = document.querySelectorAll(".reveal");

  for (const reveal of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = reveal.getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", revealElements);

revealElements();
