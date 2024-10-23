const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  header.dataset.mobileMenuOpen =
    header.dataset.mobileMenuOpen === "false" ? "true" : "false";
  menuBtn.disabled = true;
  setTimeout(() => {
    menuBtn.disabled = false;
  }, 50);
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (header.dataset.mobileMenuOpen === "true")
      header.dataset.mobileMenuOpen = "false";
  });
});
