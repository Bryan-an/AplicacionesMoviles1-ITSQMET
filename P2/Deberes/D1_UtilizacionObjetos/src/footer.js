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
