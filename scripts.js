// script.js (For basic testimonial slider functionality)
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(n) {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === n ? 'block' : 'none';
    });
}

showTestimonial(currentTestimonial); // Show the first testimonial initially

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000); // Change testimonial every 5 seconds

// Initialize AOS library
AOS.init({
    duration: 1000,
    once: true,
});

// Scroll to top button functionality
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});