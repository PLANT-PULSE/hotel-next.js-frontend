/**
 * LuxeStay Hotel - Booking Page JavaScript
 * Handles all booking-related functionality
 */

// Hotel Configuration
const HOTEL_CONFIG = {
    hotelName: 'LuxeStay Hotel',
    phone: '+15551234567',
    whatsapp: '15551234567',
    email: 'bookings@luxestay.com',
    address: '123 Luxury Avenue, New York, NY 10001',
    // API endpoint for admin notifications (can be connected to backend later)
    apiEndpoint: '/api/bookings'
};

// Room data for booking
const ROOMS = {
    standard: { name: 'Standard Room', price: 150 },
    deluxe: { name: 'Deluxe Room', price: 250 },
    suite: { name: 'Executive Suite', price: 450 },
    penthouse: { name: 'Penthouse Suite', price: 1000 }
};

// Package data
const PACKAGES = {
    weekend: { name: 'Weekend Escape', price: 455 },
    honeymoon: { name: 'Honeymoon Paradise', price: 1350 },
    business: { name: 'Business Traveler', price: 320 }
};

// Mock availability data (in real app, this comes from backend)
const availabilityData = generateMockAvailability();

// Generate mock availability for calendar
function generateMockAvailability() {
    const data = {};
    const today = new Date();
    for (let i = 0; i < 90; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        // Random availability: 0 = available, 1 = limited, 2 = booked
        const rand = Math.random();
        data[dateStr] = rand < 0.5 ? 0 : (rand < 0.8 ? 1 : 2);
    }
    return data;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initDatePickers();
    initCalendar();
    initBookingForms();
    initAvailabilityCheck();
});

// Set minimum date for check-in
function initDatePickers() {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    const quickCheckin = document.getElementById('quickCheckin');
    const quickCheckout = document.getElementById('quickCheckout');
    
    const today = new Date().toISOString().split('T')[0];
    
    [checkinInput, quickCheckin].forEach(input => {
        if (input) {
            input.min = today;
            input.addEventListener('change', function() {
                const checkinDate = new Date(this.value);
                const checkout = this.id === 'checkin' ? checkoutInput : quickCheckout;
                if (checkout) {
                    const minCheckout = new Date(checkinDate);
                    minCheckout.setDate(minCheckout.getDate() + 1);
                    checkout.min = minCheckout.toISOString().split('T')[0];
                }
            });
        }
    });
    
    [checkoutInput, quickCheckout].forEach(input => {
        if (input) {
            const minCheckout = new Date();
            minCheckout.setDate(minCheckout.getDate() + 1);
            input.min = minCheckout.toISOString().split('T')[0];
        }
    });
}

// Initialize Calendar
function initCalendar() {
    const calendarDays = document.getElementById('calendarDays');
    if (!calendarDays) return;
    
    let currentDate = new Date();
    renderCalendar(currentDate);
    
    document.getElementById('prevMonth')?.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
    
    document.getElementById('nextMonth')?.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
}

function renderCalendar(date) {
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthEl = document.getElementById('currentMonth');
    if (!calendarDays) return;
    
    const year = date.getFullYear();
    const month = date.getMonth();
    
    if (currentMonthEl) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        currentMonthEl.textContent = `${monthNames[month]} ${year}`;
    }
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let html = '';
    
    // Empty cells for days before first
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="calendar-day empty"></div>';
    }
    
    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = new Date(year, month, day);
        const dateStr = currentDay.toISOString().split('T')[0];
        const isToday = currentDay.getTime() === today.getTime();
        const isPast = currentDay < today;
        const status = availabilityData[dateStr] || 0;
        
        let classes = 'calendar-day';
        if (isPast || isToday) classes += ' disabled';
        else if (status === 0) classes += ' available';
        else if (status === 1) classes += ' limited';
        else classes += ' booked';
        
        if (isToday) classes += ' today';
        
        html += `<div class="${classes}" data-date="${dateStr}">${day}</div>`;
    }
    
    calendarDays.innerHTML = html;
}

// Initialize Booking Forms
function initBookingForms() {
    // Main booking form
    const bookingForm = document.getElementById('bookingRequestForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Event booking form
    const eventForm = document.getElementById('eventBookingForm');
    if (eventForm) {
        eventForm.addEventListener('submit', handleEventBookingSubmit);
    }
}

// Handle booking form submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    // Collect form data
    const bookingData = {
        type: 'room',
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        roomType: document.getElementById('roomType').value,
        specialRequests: document.getElementById('specialRequests').value,
        airportPickup: document.getElementById('airportPickup').checked,
        breakfast: document.getElementById('breakfast').checked,
        spaCredit: document.getElementById('spaCredit').checked,
        timestamp: new Date().toISOString()
    };
    
    // Store locally (in real app, send to API)
    storeBookingRequest(bookingData);
    
    // Generate confirmation number
    const confirmationNumber = generateConfirmationNumber();
    
    // Show success modal
    showSuccessModal(confirmationNumber);
    
    // Send to admin (API-ready)
    notifyAdmin(bookingData, confirmationNumber);
    
    // Reset form
    e.target.reset();
}

// Handle event booking submission
function handleEventBookingSubmit(e) {
    e.preventDefault();
    
    const eventData = {
        type: 'event',
        eventType: document.getElementById('eventType').value,
        attendees: document.getElementById('attendees').value,
        eventDate: document.getElementById('eventDate').value,
        eventDuration: document.getElementById('eventDuration').value,
        eventRequirements: document.getElementById('eventRequirements').value,
        contactName: document.getElementById('eventName').value,
        email: document.getElementById('eventEmail').value,
        phone: document.getElementById('eventPhone').value,
        companyName: document.getElementById('companyName').value,
        timestamp: new Date().toISOString()
    };
    
    storeBookingRequest(eventData);
    
    const confirmationNumber = generateConfirmationNumber();
    showSuccessModal(confirmationNumber);
    
    notifyAdmin(eventData, confirmationNumber);
    
    e.target.reset();
}

// Store booking request locally
function storeBookingRequest(data) {
    let requests = JSON.parse(localStorage.getItem('bookingRequests') || '[]');
    requests.push(data);
    localStorage.setItem('bookingRequests', JSON.stringify(requests));
}

// Generate unique confirmation number
function generateConfirmationNumber() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `LuxeStay-${timestamp}-${random}`;
}

// Show success modal
function showSuccessModal(confirmationNumber) {
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    document.getElementById('confirmationNumber').textContent = confirmationNumber;
    modal.show();
}

// Notify admin (API structure ready for backend integration)
function notifyAdmin(bookingData, confirmationNumber) {
    const notification = {
        booking: bookingData,
        confirmationNumber: confirmationNumber,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    // In production, this would be an API call:
    // fetch(HOTEL_CONFIG.apiEndpoint, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(notification)
    // });
    
    console.log('Booking notification ready for admin:', notification);
}

// Quick Availability Check
function initAvailabilityCheck() {
    const availabilityForm = document.getElementById('availabilityForm');
    if (availabilityForm) {
        availabilityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const checkin = document.getElementById('quickCheckin').value;
            const checkout = document.getElementById('quickCheckout').value;
            const roomType = document.getElementById('quickRoomType').value;
            
            // Check availability
            const available = checkAvailability(checkin, checkout, roomType);
            
            if (available) {
                // Pre-fill main booking form
                document.getElementById('checkin').value = checkin;
                document.getElementById('checkout').value = checkout;
                if (roomType) {
                    document.getElementById('roomType').value = roomType;
                }
                
                // Scroll to booking form
                document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
                
                alert('Rooms available! Please complete your booking request below.');
            } else {
                alert('Sorry, no rooms available for selected dates. Please try different dates.');
            }
        });
    }
}

// Check availability (mock implementation)
function checkAvailability(checkin, checkout, roomType) {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    
    // Check each day in range
    for (let d = new Date(checkinDate); d < checkoutDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        if (availabilityData[dateStr] === 2) {
            return false; // Fully booked
        }
    }
    
    return true;
}

// Request booking for specific room (from comparison table)
function requestBooking(roomType) {
    document.getElementById('roomType').value = roomType;
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
}

// Reserve special offer
function reserveOffer(offerType) {
    const offerNames = {
        weekend: 'Weekend Escape Package',
        honeymoon: 'Honeymoon Paradise Package',
        business: 'Business Traveler Package'
    };
    
    document.getElementById('specialRequests').value = `Interested in: ${offerNames[offerType]}`;
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
}

// Book via WhatsApp
function bookViaWhatsApp() {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;
    const guests = document.getElementById('guests').value;
    
    const roomNames = {
        standard: 'Standard Room',
        deluxe: 'Deluxe Room',
        suite: 'Executive Suite',
        penthouse: 'Penthouse Suite'
    };
    
    const message = `Hello LuxeStay Hotel! I'd like to make a booking request:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Check-in: ${checkin}\n` +
        `Check-out: ${checkout}\n` +
        `Room Type: ${roomNames[roomType] || 'Not selected'}\n` +
        `Guests: ${guests}\n\n` +
        `Please confirm availability. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Book via Email
function bookViaEmail() {
    const name = document.getElementById('fullName').value || '[Name]';
    const checkin = document.getElementById('checkin').value || '[Check-in]';
    const checkout = document.getElementById('checkout').value || '[Check-out]';
    const roomType = document.getElementById('roomType').value || '[Room Type]';
    const guests = document.getElementById('guests').value || '[Guests]';
    
    const roomNames = {
        standard: 'Standard Room',
        deluxe: 'Deluxe Room',
        suite: 'Executive Suite',
        penthouse: 'Penthouse Suite'
    };
    
    const subject = `Booking Request from ${name} - LuxeStay Hotel`;
    const body = `Hello LuxeStay Hotel Team,\n\n` +
        `I would like to make a booking request with the following details:\n\n` +
        `Name: ${name}\n` +
        `Check-in Date: ${checkin}\n` +
        `Check-out Date: ${checkout}\n` +
        `Room Type: ${roomNames[roomType] || roomType}\n` +
        `Number of Guests: ${guests}\n\n` +
        `Please let me know about availability and confirmation details.\n\n` +
        `Thank you!\n` +
        `${name}`;
    
    const mailtoUrl = `mailto:${HOTEL_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
}

// Export for use in other scripts
window.LuxeStayBooking = {
    requestBooking,
    reserveOffer,
    bookViaWhatsApp,
    bookViaEmail,
    HOTEL_CONFIG,
    ROOMS,
    PACKAGES
};
