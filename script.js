const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a'); // Select all menu links

// Toggle the menu when the hamburger button is clicked
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a menu item is clicked
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
