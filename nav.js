(function () {
  var nav = document.getElementById("nav");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (!nav || !toggle || !menu) return;

  window.addEventListener(
    "scroll",
    function () {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
  );

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });
})();
