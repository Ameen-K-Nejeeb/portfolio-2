document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function onScroll() {
    let scrollPos = window.scrollY + 80; // adjust offset for navbar

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").slice(1) === section.getAttribute("id")) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Highlight Home on load
  onScroll();

  window.addEventListener("scroll", onScroll);
});