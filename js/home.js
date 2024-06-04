// Navigation event listeners
document
  .getElementById("home-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("home-section").style.display = "block";
    document.getElementById("contact-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("about-section").style.display = "none";
    localStorage.setItem("currentSection", "home");
  });

document
  .getElementById("about-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("home-section").style.display = "none";
    document.getElementById("contact-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("about-section").style.display = "block";
    localStorage.setItem("currentSection", "about");
  });

document
  .getElementById("projects-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("home-section").style.display = "none";
    document.getElementById("contact-section").style.display = "none";
    document.getElementById("projects-section").style.display = "block";
    document.getElementById("about-section").style.display = "none";
    localStorage.setItem("currentSection", "projects");
  });

document
  .getElementById("contact-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("home-section").style.display = "none";
    document.getElementById("contact-section").style.display = "block";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("about-section").style.display = "none";
    localStorage.setItem("currentSection", "contact");
  });

// Load event to handle the default section display
window.addEventListener("load", function () {
  let currentSection = localStorage.getItem("currentSection");
  if (!currentSection) {
    currentSection = "home";
  }

  if (currentSection === "about") {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("contact-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("about-section").style.display = "block";
  } else if (currentSection === "home") {
    document.getElementById("home-section").style.display = "block";
    document.getElementById("about-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("contact-section").style.display = "none";
  } else if (currentSection === "projects") {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("about-section").style.display = "none";
    document.getElementById("projects-section").style.display = "block";
    document.getElementById("contact-section").style.display = "none";
  } else if (currentSection === "contact") {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("about-section").style.display = "none";
    document.getElementById("projects-section").style.display = "none";
    document.getElementById("contact-section").style.display = "block";
  }
});

//header
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    document.querySelector("header").classList.toggle("header-disappear");
  });
});

//menu
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
const texts = [
  "Hello world!",
  "My name is Ismihana!",
  "Welcome to my portfolio!",
];
let index = 0;

const typedElement = document.querySelector(".typed");

function updateText() {
  typedElement.textContent = texts[index];
  index = (index + 1) % texts.length;

  typedElement.style.animation = "none";
  typedElement.offsetHeight;
  typedElement.style.animation = "";
}

updateText();

typedElement.addEventListener("animationiteration", updateText);
