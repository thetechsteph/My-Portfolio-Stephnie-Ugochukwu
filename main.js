const menuToggle = document.getElementById('hamburger');
const navBar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;


menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});


document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});


document.addEventListener('click', (e) => {
  if (!navBar.contains(e.target) && !menuToggle.contains(e.target)) {
    navBar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});


if (html.getAttribute("data-theme") === "dark") {
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️"; 
}

// Theme toggle
toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    html.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});