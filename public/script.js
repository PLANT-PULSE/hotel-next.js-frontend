/* ============================================
   LUXESTAY HOTEL - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initCarousel();
    initBookingForm();
    initRoomCarousels();
    initTestimonials();
    initScrollAnimations();
    initBackToTop();
    initFAQ();
    initMobileNavigation();
});

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   HERO CAROUSEL
   ============================================ */

let currentSlide = 0;
let carouselInterval;

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (slides.length === 0) return;

    // Show specific slide
    window.showSlide = function(n) {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (indicators[index]) {
                indicators[index].classList.remove('active');
            }
        });

        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }

        slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) {
            indicators[currentSlide].classList.add('active');
        }
    };

    // Next/Prev buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            window.showSlide(currentSlide - 1);
            resetCarouselInterval();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.showSlide(currentSlide + 1);
            resetCarouselInterval();
        });
    }

    // Indicators
    if (indicators) {
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                window.showSlide(index);
                resetCarouselInterval();
            });
        });
    }

    // Auto-advance
    carouselInterval = setInterval(() => {
        window.showSlide(currentSlide + 1);
    }, 6000);

    function resetCarouselInterval() {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
            window.showSlide(currentSlide + 1);
        }, 6000);
    }
}

/* ============================================
   BOOKING FORM
   ============================================ */

function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const guests = document.getElementById('guests');
    const roomType = document.getElementById('roomType');
    const totalPrice = document.getElementById('totalPrice');
    const nightsCount = document.getElementById('nightsCount');
    const pricePerNight = document.getElementById('pricePerNight');
    const progressSteps = document.querySelectorAll('.progress-step');

    // Room prices
    const prices = {
        standard: 150,
        deluxe: 250,
        suite: 450,
        penthouse: 1000
    };

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    if (checkIn) checkIn.min = today;
    if (checkOut) checkOut.min = today;

    function calculatePrice() {
        if (!checkIn || !checkOut || !roomType || !totalPrice) return;

        const checkInDate = new Date(checkIn.value);
        const checkOutDate = new Date(checkOut.value);

        if (!checkIn.value || !checkOut.value) {
            totalPrice.textContent = '$0';
            if (nightsCount) nightsCount.textContent = '0 nights';
            if (pricePerNight) pricePerNight.textContent = '$0/night';
            return;
        }

        const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        
        if (nights <= 0) {
            totalPrice.textContent = '$0';
            if (nightsCount) nightsCount.textContent = '0 nights';
            return;
        }

        const price = prices[roomType.value] || 0;
        const total = nights * price;

        totalPrice.textContent = `$${total.toLocaleString()}`;
        
        if (nightsCount) {
            nightsCount.textContent = `${nights} night${nights !== 1 ? 's' : ''}`;
        }
        
        if (pricePerNight) {
            pricePerNight.textContent = `$${price}/night`;
        }

        // Update progress
        updateProgress();
    }

    function updateProgress() {
        if (!progressSteps || progressSteps.length === 0) return;

        if (checkIn.value && checkOut.value) {
            progressSteps[0].classList.add('active');
        }
        
        if (checkIn.value && checkOut.value && guests.value) {
            progressSteps[1]?.classList.add('active');
            const progressLines = document.querySelectorAll('.progress-line');
            if (progressLines[0]) progressLines[0].classList.add('active');
        }

        if (checkIn.value && checkOut.value && guests.value && roomType.value) {
            progressSteps[2]?.classList.add('active');
            const progressLines = document.querySelectorAll('.progress-line');
            if (progressLines[1]) progressLines[1].classList.add('active');
        }
    }

    // Event listeners
    if (checkIn) {
        checkIn.addEventListener('change', () => {
            if (checkOut) {
                checkOut.min = checkIn.value;
                if (checkOut.value && checkOut.value < checkIn.value) {
                    checkOut.value = checkIn.value;
                }
            }
            calculatePrice();
        });
    }

    if (checkOut) {
        checkOut.addEventListener('change', calculatePrice);
    }

    if (roomType) {
        roomType.addEventListener('change', calculatePrice);
    }

    if (guests) {
        guests.addEventListener('change', calculatePrice);
    }

    // Form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkInDate = checkIn?.value;
        const checkOutDate = checkOut?.value;
        const guestCount = guests?.value;
        const room = roomType?.value;
        
        if (checkInDate && checkOutDate && guestCount && room) {
            const nights = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
            const total = nights * (prices[room] || 0);
            
            alert(`Booking Summary:\n\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guestCount}\nRoom Type: ${room.charAt(0).toUpperCase() + room.slice(1)}\nTotal: $${total.toLocaleString()}\n\nThis is a demo booking. In a real application, this would proceed to payment.`);
        }
    });
}

/* ============================================
   ROOM CAROUSELS
   ============================================ */

function initRoomCarousels() {
    const carousels = document.querySelectorAll('.room-carousel');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.room-carousel-track');
        const images = track?.querySelectorAll('img');
        const prevBtn = carousel.querySelector('.room-carousel-btn.prev');
        const nextBtn = carousel.querySelector('.room-carousel-btn.next');
        
        if (!images || images.length === 0) return;
        
        let currentIndex = 0;
        
        function showImage(index) {
            if (index >= images.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = images.length - 1;
            } else {
                currentIndex = index;
            }
            
            if (track) {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
        }
    });

    // Room detail buttons
    const roomButtons = document.querySelectorAll('.room-btn[data-room]');
    roomButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const room = e.target.dataset.room;
            const roomNames = {
                standard: 'Standard Room',
                deluxe: 'Deluxe Room',
                suite: 'Executive Suite',
                penthouse: 'Presidential Penthouse'
            };
            
            alert(`Viewing details for ${roomNames[room] || room}...\n\nIn a full implementation, this would open a detailed modal or navigate to a room details page.`);
        });
    });

    // Virtual tour buttons
    const tourButtons = document.querySelectorAll('.video-tour-btn');
    tourButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            alert('Starting virtual room tour...\n\nIn a full implementation, this would launch a 360° virtual tour or video walkthrough.');
        });
    });
}

/* ============================================
   TESTIMONIALS CAROUSEL
   ============================================ */

let currentTestimonial = 0;
let testimonialInterval;

function initTestimonials() {
    const track = document.getElementById('testimonialTrack');
    if (!track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.testimonial-indicators .indicator');
    const prevBtn = document.getElementById('testimonialsCtrlPrev');
    const nextBtn = document.getElementById('testimonialsCtrlNext');

    if (cards.length === 0) return;

    window.showTestimonial = function(n) {
        cards.forEach(card => card.classList.remove('active'));
        
        if (indicators) {
            indicators.forEach(ind => ind.classList.remove('active'));
        }

        if (n >= cards.length) {
            currentTestimonial = 0;
        } else if (n < 0) {
            currentTestimonial = cards.length - 1;
        } else {
            currentTestimonial = n;
        }

        cards[currentTestimonial]?.classList.add('active');
        if (indicators && indicators[currentTestimonial]) {
            indicators[currentTestimonial].classList.add('active');
        }
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            window.showTestimonial(currentTestimonial - 1);
            resetTestimonialInterval();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.showTestimonial(currentTestimonial + 1);
            resetTestimonialInterval();
        });
    }

    if (indicators) {
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                window.showTestimonial(index);
                resetTestimonialInterval();
            });
        });
    }

    // Auto-advance
    testimonialInterval = setInterval(() => {
        window.showTestimonial(currentTestimonial + 1);
    }, 7000);

    function resetTestimonialInterval() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(() => {
            window.showTestimonial(currentTestimonial + 1);
        }, 7000);
    }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initScrollAnimations() {
    // AOS-like scroll animations
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // General scroll animations for cards
    const cards = document.querySelectorAll('.room-card, .amenity-card, .space-card, .tier-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', () => {
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });
}

/* ============================================
   BACK TO TOP
   ============================================ */

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
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
   MOBILE NAVIGATION
   ============================================ */

function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            if (spans[1]) spans[1].style.opacity = '0';
            if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });

    // Close menu when link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });

    // Close menu on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */

window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

/* ============================================
   INPUT VALIDATION
   ============================================ */

document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#e53e3e';
        } else {
            this.style.borderColor = '';
        }
    });
});

/* ============================================
   NEWSLETTER FORM
   ============================================ */

const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (email) {
            alert(`Thank you for subscribing!\n\nConfirmation email sent to: ${email}`);
            form.querySelector('input[type="email"]').value = '';
        }
    });
});

/* ============================================
   CONTACT FORM
   ============================================ */

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const firstName = formData.get('0'); // First input
        const email = formData.get('1'); // Second input
        
        alert('Thank you for your message!\n\nOur team will respond to your inquiry within 24 hours.');
        contactForm.reset();
    });
}

/* ============================================
   EVENT FORM
   ============================================ */

const eventForm = document.getElementById('eventForm');
if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        alert('Thank you for your event inquiry!\n\nOur events team will contact you within 24 hours to discuss your requirements and provide a customized quote.');
        
        eventForm.reset();
    });
}

/* ============================================
   POINTS CALCULATOR (LOYALTY PAGE)
   ============================================ */

const stayCostInput = document.getElementById('stayCost');
const currentTierSelect = document.getElementById('currentTier');
const pointsResult = document.getElementById('pointsResult');

if (stayCostInput && currentTierSelect && pointsResult) {
    function calculatePoints() {
        const cost = parseInt(stayCostInput.value) || 0;
        const tierMultiplier = parseInt(currentTierSelect.value) || 10;
        const points = cost * tierMultiplier;
        
        pointsResult.textContent = points.toLocaleString();
    }

    stayCostInput.addEventListener('input', calculatePoints);
    currentTierSelect.addEventListener('change', calculatePoints);
}
