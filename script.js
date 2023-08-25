document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".nav-link");
  const section1 = document.getElementById("section1");
  const stars = [];
  const starsContainer = document.querySelector(".stars-container");

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Close navbar when clicking outside or on a navigation link
  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) {
      navbar.classList.remove("show");
    }
  });

  // Close navbar when a navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
    });
  });

  // Generate stars dynamically
  for (let i = 0; i < 40; i++) {
    const star = document.createElement("span");
    star.className = "star";
    starsContainer.appendChild(star);
    stars.push(star);
  }

  // Reposition stars with delay
  function repositionStarWithDelay(star) {
    const randomTop = Math.floor(Math.random() * section1.clientHeight);
    const randomLeft = Math.floor(Math.random() * section1.clientWidth);

    star.style.top = randomTop + "px";
    star.style.left = randomLeft + "px";

    setTimeout(() => {
      repositionStarWithDelay(star);
    }, Math.random() * 800 + 1200);
  }

  stars.forEach((star) => {
    repositionStarWithDelay(star);
  });
});
