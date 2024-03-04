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
  console.log("clickeds")
  navbar.classList.contains("is-open")
    ? closeMobileNavbar()
    : openMobileNavbar();
});
