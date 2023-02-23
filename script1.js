// Add active class to current navigation item
const navLinks = document.querySelectorAll("nav ul li a");

for (const link of navLinks) {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
}
