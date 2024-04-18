document.addEventListener("DOMContentLoaded", function () {
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

  var fadeElements = document.querySelectorAll('.fade-in-scroll');
  const navbar = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".nav-link");
  const section1 = document.getElementById("section1");
  const stars = [];
  const starsContainer = document.querySelector(".stars-container");

  function checkFade() {
    fadeElements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('active-scroll');
        }
    });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  var elementTop = rect.top;
  var elementBottom = rect.bottom;
  
  return (
      (elementTop >= 0 && elementTop <= windowHeight - 50) ||
      (elementBottom >= 0 && elementBottom <= windowHeight - 50)
  );
}


// Trigger fade on page load
checkFade();

// Trigger fade when scrolling
window.addEventListener('scroll', checkFade);

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
    { top: "7%", left: "40%" },
    { top: "10%", left: "55%" },
    { top: "18%", left: "67%" },
    { top: "30%", left: "75%" },
    { top: "40%", left: "73%" },
    { top: "48%", left: "87%" },
    { top: "38%", left: "95%" },
    { top: "30%", left: "75%" },
  ];
  // Generate stars dynamically for the Big Dipper constellation
  for (const position of bigDipperStarPositions) {
    const star = document.createElement("span");
    star.className = "bigDipper";
    star.style.top = position.top;
    star.style.left = position.left;
    starsContainer.appendChild(star);
  }

  // // Connect stars with lines
  // const starElements = document.querySelectorAll(".bigDipper");
  // for (let i = 0; i < starElements.length - 1; i++) {
  //   const line = document.createElement("div");
  //   line.className = "line";
  //   line.style.top = parseFloat(starElements[i].style.top) + "%";
  //   line.style.left = parseFloat(starElements[i].style.left) + "%";
  //   line.style.width =
  //     Math.sqrt(
  //       Math.pow(
  //         parseFloat(starElements[i + 1].style.left) -
  //           parseFloat(starElements[i].style.left),
  //         2
  //       ) +
  //         Math.pow(
  //           parseFloat(starElements[i + 1].style.top) -
  //             parseFloat(starElements[i].style.top),
  //           2
  //         )
  //     ) + "%";
  //   line.style.transformOrigin = "0 50%";
  //   line.style.transform = `rotate(${Math.atan2(
  //     parseFloat(starElements[i + 1].style.top) -
  //       parseFloat(starElements[i].style.top),
  //     parseFloat(starElements[i + 1].style.left) -
  //       parseFloat(starElements[i].style.left)
  //   )}rad)`;
  //   starsContainer.appendChild(line);
  // }
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

document.addEventListener("DOMContentLoaded", function() {
  var projectsWrapper = document.querySelector('.projects-wrapper');
  var projects = projectsWrapper.querySelectorAll('.project');
  var seeMoreBtn = document.getElementById('see-more-btn');

  // Initially hide projects beyond the first 4
  for (var i = 4; i < projects.length; i++) {
      projects[i].style.display = 'none';
  }

  seeMoreBtn.addEventListener('click', function() {
      // Toggle visibility of additional projects
      for (var i = 4; i < projects.length; i++) {
          if (projects[i].style.display === 'none') {
              projects[i].style.display = 'flex';
              seeMoreBtn.textContent = 'View Less';
          } else {
              projects[i].style.display = 'none';
              seeMoreBtn.textContent = 'View More';
          }
      }
  });
});
