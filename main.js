document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const navLinks = document.getElementById("navLinks");

  burgerIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
