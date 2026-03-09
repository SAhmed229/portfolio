document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  var elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach(function(el) {
    observer.observe(el);
  });
});
