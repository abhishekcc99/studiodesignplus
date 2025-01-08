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