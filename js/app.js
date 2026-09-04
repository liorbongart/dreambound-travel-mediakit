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
})();
