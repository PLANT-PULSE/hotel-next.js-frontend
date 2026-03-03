/* ============================================
   CONTACT PAGE JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
});

/* ============================================
   CONTACT FORM
   ============================================ */

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const firstName = contactForm.querySelector('input[type="text"]:nth-of-type(1)');
        const email = contactForm.querySelector('input[type="email"]');
        
        // Show success message
        alert(`Thank you for your message${firstName?.value ? ', ' + firstName.value : ''}!\n\nWe've received your inquiry and will respond to ${email?.value || 'your email'} within 24 hours.\n\nIn a real application, this would submit the form data to a server.`);
        
        // Reset form
        contactForm.reset();
    });
    
    // Input validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });
}

function validateInput(input) {
    const isValid = input.checkValidity();
    
    if (!isValid) {
        input.style.borderColor = '#e53e3e';
        input.style.boxShadow = '0 0 0 3px rgba(229, 62, 62, 0.1)';
    } else {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }
    
    return isValid;
}

/* ============================================
   FAQ ACCORDION
   ============================================ */

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

/* ============================================
   MAP INTERACTION
   ============================================ */

function initMapInteraction() {
    const mapContainer = document.querySelector('.map-placeholder');
    
    if (mapContainer) {
        mapContainer.addEventListener('click', () => {
            alert('Opening map directions...\n\nIn a full implementation, this would open Google Maps or another mapping service with directions to the hotel.');
        });
    }
}

// Run on load
window.addEventListener('load', initMapInteraction);
