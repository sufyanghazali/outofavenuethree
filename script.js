// FORM PROCESSING
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navbarToggle = navbar.querySelector("#navbar__toggle");

  function openMobileNavbar() {
    navbar.classList.add("is-open");
    navbarToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileNavbar() {
    navbar.classList.remove("is-open");
    navbarToggle.setAttribute("aria-expanded", "false");
  }

  navbarToggle.addEventListener("click", () => {
    console.log("clickeds");

    navbar.classList.contains("is-open")
      ? closeMobileNavbar()
      : openMobileNavbar();

    testingMegaMenu.classList.remove("active");
  });

  const testingButton = document.querySelector(".testing");
  const testingMegaMenu = document.querySelector(".mega-menu--testing");

  testingButton.addEventListener("click", () => {
    console.log("mega menu");
    testingMegaMenu.classList.toggle("active");
  });


});
