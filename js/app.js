(function () {
  "use strict";

  var cards = document.querySelectorAll(".platform-card");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(function (card) {
    observer.observe(card);
  });

  var heroPhoto = document.querySelector(".hero-photo img");
  if (heroPhoto) {
    var fadeDistance = 260;
    var ticking = false;

    function updateFade() {
      var opacity = 1 - Math.min(window.scrollY / fadeDistance, 1);
      heroPhoto.style.opacity = opacity;
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateFade);
        ticking = true;
      }
    }, { passive: true });

    updateFade();
  }
})();
