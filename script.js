document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  
  hamburger.addEventListener("click", function() {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  navLinks.addEventListener("click", function () {
    const isOpen = navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const isOpen = navLinks.classList.remove("open");
      hamburger.setAttribute("aria-expanded", isOpen);
    }
  });

  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const project = btn.closest(".project");

      const moreInfo = project.querySelector(".more-info");
      moreInfo.style.display =
        moreInfo.style.display === "block" ? "none" : "block";

      btn.textContent =
        moreInfo.style.display === "block" ? "Less Info" : "More Info";
    });
  });
});
