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

document.addEventListener("DOMContentLoaded", function () {
  var stars = document.querySelectorAll(".star");

  function repositionStarWithDelay(star) {
    var randomTop = Math.floor(Math.random() * window.innerHeight);
    var randomLeft = Math.floor(Math.random() * window.innerWidth);

    star.style.top = randomTop + "px";
    star.style.left = randomLeft + "px";

    var randomDelay = Math.random() * 800 + 1200;
    setTimeout(function () {
      repositionStarWithDelay(star);
    }, randomDelay);
  }

  function repositionStars() {
    stars.forEach(function (star) {
      repositionStarWithDelay(star);
    });
  }

  // Reposition stars immediately
  repositionStars();
});
