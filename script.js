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

  
  const bigDipperStarPositions = [
    { top: "30%", left: "75%" }, // Polaris
    { top: "25%", left: "80%" }, // Kochab
    { top: "20%", left: "83%" }, // Pherkad
    { top: "15%", left: "85%" }, // Yildun
    { top: "25%", left: "88%" }, // Urodelus
    { top: "30%", left: "90%" }, // Ahfa al Farkadain
    { top: "35%", left: "93%" }, // Anwar al Farkadain
    { top: "40%", left: "95%" }, // Alasco
    { top: "45%", left: "98%" }  // Ahfa al Farkadain
];

// Generate stars dynamically for the Big Dipper constellation
for (const position of bigDipperStarPositions) {
    const star = document.createElement("span");
    star.className = "bigDipper";
    star.style.top = position.top;
    star.style.left = position.left;
    starsContainer.appendChild(star);
}

// Connect stars with lines
const starElements = document.querySelectorAll(".bigDipper");
for (let i = 0; i < starElements.length - 1; i++) {
    const line = document.createElement("div");
    line.className = "line";
    line.style.top = parseFloat(starElements[i].style.top) + 1.5 + "%";
    line.style.left = parseFloat(starElements[i].style.left) + 1.5 + "%";
    line.style.width = (parseFloat(starElements[i + 1].style.left) - parseFloat(starElements[i].style.left)) + "%";
    line.style.transformOrigin = "0 50%";
    line.style.transform = `rotate(${Math.atan2(parseFloat(starElements[i + 1].style.top) - parseFloat(starElements[i].style.top), parseFloat(starElements[i + 1].style.left) - parseFloat(starElements[i].style.left))}rad)`;
    starsContainer.appendChild(line);
}
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
