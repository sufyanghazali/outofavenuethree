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
    overlay.classList.remove("is-open");
  }

  function openMegaMenu() {
    testingMegaMenu.classList.add("active");
    testingMegaMenu.setAttribute("aria-expanded", "true");
    overlay.classList.add("is-open");
  }

  function closeMegaMenu() {
    testingMegaMenu.classList.remove("active");
    testingMegaMenu.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-open");
  }

  navbarToggle.addEventListener("click", () => {
    navbar.classList.contains("is-open")
      ? closeMobileNavbar()
      : openMobileNavbar();

    testingMegaMenu.classList.remove("active");
  });

  const testingButton = document.querySelector(".testing");
  const testingMegaMenu = document.querySelector(".mega-menu--testing");
  const overlay = document.querySelector(".modal__overlay");

  testingButton.addEventListener("click", () => {
    console.log("clicked");
    testingMegaMenu.classList.contains("active")
      ? closeMegaMenu()
      : openMegaMenu();
  });

  overlay.addEventListener("click", () => {
    testingMegaMenu.classList.contains("active")
      ? closeMegaMenu()
      : openMegaMenu();
  });
});
