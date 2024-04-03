// Selecting the hamburger div and navigation menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Adding a click event listener to the hamburger div to toggle the mobile menu
hamburger.addEventListener("click", mobileMenu);

// Function to toggle the mobile menu
function mobileMenu() {
    // Toggling the 'active' class on the hamburger div
    hamburger.classList.toggle("active");
    // Toggling the 'active' class on the navigation menu
    navMenu.classList.toggle("active");
}

// Selecting all navigation links
const navLink = document.querySelectorAll(".nav-link");

// Adding click event listeners to all navigation links to close the mobile menu
navLink.forEach(n => n.addEventListener("click", closeMenu));

// Function to close the mobile menu
function closeMenu() {
    // Removing the 'active' class from the hamburger div
    hamburger.classList.remove("active");
    // Removing the 'active' class from the navigation menu
    navMenu.classList.remove("active");
}