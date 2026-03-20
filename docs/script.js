
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

function click1(){
const texto = document.getElementById("code1").innerText;
navigator.clipboard.writeText(texto)
const copyEl = document.getElementById("copy1");
copyEl.innerText = "¡Copiado!";
 setTimeout(() => {
    copyEl.innerText = "";
  }, 1000);

}
function click2(){
const texto = document.getElementById("code2").innerText;
navigator.clipboard.writeText(texto)
const copyEl = document.getElementById("copy2");
copyEl.innerText = "¡Copiado!";
 setTimeout(() => {
    copyEl.innerText = "";
  }, 1000);

}
function click3(){
const texto = document.getElementById("code3").innerText;
navigator.clipboard.writeText(texto)
const copyEl = document.getElementById("copy3");
copyEl.innerText = "¡Copiado!";
 setTimeout(() => {
    copyEl.innerText = "";
  }, 1000);

}