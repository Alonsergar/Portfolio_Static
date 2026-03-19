
document.getElementById('year').textContent =new Date().getFullYear();

(function() {
  const toggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  function getCurrentTheme() {
    return root.getAttribute("data-theme") || 
           (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (toggleBtn) {
      toggleBtn.textContent = theme === "dark"
        ? "☀️"
        : "🌙";
    }
  }

  // Inicializar tema
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(getCurrentTheme());
  }

  // Evento click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newTheme =
        root.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";

      setTheme(newTheme);
    });
  }
})();
