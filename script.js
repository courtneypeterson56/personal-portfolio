document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Close navbar when clicking outside or on a navigation link
  document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar-collapse");
    if (!navbar.contains(event.target)) {
      navbar.classList.remove("show");
    }
  });

  // Close navbar when a navigation link is clicked
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const navbar = document.querySelector(".navbar-collapse");
      navbar.classList.remove("show");
    });
  });
});
