// Menu toggle logic for popout navigation
(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const menuItems = document.querySelectorAll(
    ".menu-nav__item .menu-nav__link"
  );

  if (!menuBtn || !nav) return;

  // Initialize ARIA state
  menuBtn.setAttribute("role", "button");
  menuBtn.setAttribute("tabindex", "0");
  menuBtn.setAttribute("aria-label", "Toggle navigation menu");
  menuBtn.setAttribute("aria-expanded", "false");
  nav.setAttribute("aria-hidden", "true");

  const isOpen = () => nav.classList.contains("open");

  function openMenu() {
    menuBtn.classList.add("open");
    nav.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    menuBtn.classList.remove("open");
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
  }

  function toggleMenu() {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Click to toggle
  menuBtn.addEventListener("click", toggleMenu);

  // Keyboard support for accessibility (Enter/Space)
  menuBtn.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Enter" || key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      closeMenu();
      // Return focus to the menu button for accessibility
      menuBtn.focus();
    }
  });

  // Close when clicking a menu item (and let navigation proceed)
  menuItems.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
})();
