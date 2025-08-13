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


const sunSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="12" y1="1" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
  </g>
</svg>
`;

const moonSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
</svg>
`;


if (html.getAttribute("data-theme") === "dark") {
  toggleBtn.innerHTML = moonSVG;
} else {
  toggleBtn.innerHTML = sunSVG; 
}



// Theme toggle
toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    toggleBtn.innerHTML = sunSVG;
  } else {
    html.setAttribute("data-theme", "dark");
    toggleBtn.innerHTML = moonSVG;
  }
});