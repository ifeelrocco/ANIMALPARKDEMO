// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once
    offset: 50, // Offset (in px) from the original trigger point
});

// Basic Navbar Toggle (Optional - Needs CSS for .nav-menu.active)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        // You would typically add a class like 'active' to navMenu
        // and style it in CSS to make it visible.
        console.log('Navbar toggle clicked - CSS implementation needed');
        // Example: navMenu.classList.toggle('active');
    });
}
