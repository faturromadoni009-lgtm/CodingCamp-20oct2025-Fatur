
// Greeting
document.addEventListener("DOMContentLoaded", () => {
  const username = prompt("Please enter your name:");
  document.getElementById("username").textContent = username || "Guest";
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Form validation
const form = document.getElementById("messageForm");
const result = document.getElementById("formResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !message) {
    result.style.color = "red";
    result.textContent = "Please fill in both fields!";
  } else {
    result.style.color = "green";
    result.textContent = `Thanks, ${name}! Your message has been received.`;
    form.reset();
  }
});

// Navbar toggle for mobile
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
