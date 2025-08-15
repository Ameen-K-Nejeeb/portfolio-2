function adjustBodyPadding() {
  const navbar = document.querySelector(".navbar.fixed-top");
  if (navbar) {
    const navbarHeight = navbar.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }
}

window.addEventListener("DOMContentLoaded", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);