/* Navigation Bar */
const navbarToggle = document.querySelector(".navbar-toggle");
const mainNav = document.querySelector(".main-nav");
const loginButton = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const closeButton = document.querySelector(".close-btn");
const form = document.querySelector(".form-container form");

// Toggle navigation menu
navbarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

// Show login popup form
loginButton.addEventListener("click", function() {
  formPopup.style.display = "block";
});

// Close login popup form
closeButton.addEventListener("click", function() {
  formPopup.style.display = "none";
});

// Handle form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form values
  const username = form.querySelector("#username").value;
  const password = form.querySelector("#password").value;
  
  // Check if username and password are correct
  if (username === "admin" && password === "admin") {
    // Redirect to dashboard page
    window.location.href = "/dashboard.html";
  } else {
    // Display error message
    const error = form.querySelector(".error");
    error.style.display = "block";
  }
});
