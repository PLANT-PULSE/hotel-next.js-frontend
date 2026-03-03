/* ============================================
   EVENTS PAGE JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initCalendar();
    initEventForm();
});

/* ============================================
   CALENDAR
   ============================================ */

function initCalendar() {
    const calendarDays = document.getElementById('calendarDays');
    const calendarTitle = document.getElementById('calendarTitle');
    const prevBtn = document.getElementById('calendarPrev');
    const nextBtn = document.getElementById('calendarNext');
    
    if (!calendarDays) return;
    
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Sample event availability
    const availability = {
        5: 'limited',
        8: 'booked',
        12: 'available',
        15: 'limited',
        18: 'available',
        20: 'booked',
        22: 'limited',
        25: 'available',
        28: 'available'
    };
    
    function generateCalendar(month, year) {
        calendarDays.innerHTML = '';
        
        if (calendarTitle) {
            calendarTitle.textContent = `${months[month]} ${year}`;
        }
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        
        // Previous month days
        const prevMonthDays = new Date(year, month, 0).getDate();
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = document.createElement('div');
            day.className = 'calendar-day other-month';
            day.textContent = prevMonthDays - i;
            calendarDays.appendChild(day);
        }
        
        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            // Check if it's today
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayElement.classList.add('today');
            }
            
            dayElement.textContent = day;
            
            // Add availability status
            if (availability[day]) {
                dayElement.classList.add(availability[day]);
            }
            
            // Click handler
            dayElement.addEventListener('click', () => {
                // Remove previous selection
                calendarDays.querySelectorAll('.calendar-day').forEach(d => {
                    d.classList.remove('selected');
                });
                
                // Add selection
                dayElement.classList.add('selected');
                
                // Set date in form if exists
                const eventDateInput = document.getElementById('eventDate');
                if (eventDateInput) {
                    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    eventDateInput.value = dateString;
                }
            });
            
            calendarDays.appendChild(dayElement);
        }
        
        // Next month days
        const totalCells = firstDay + daysInMonth;
        const remainingCells = 42 - totalCells;
        for (let i = 1; i <= remainingCells; i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day other-month';
            day.textContent = i;
            calendarDays.appendChild(day);
        }
    }
    
    generateCalendar(currentMonth, currentYear);
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        });
    }
}

/* ============================================
   EVENT FORM
   ============================================ */

function initEventForm() {
    const eventForm = document.getElementById('eventForm');
    const spaceButtons = document.querySelectorAll('.space-btn');
    
    // Space request buttons
    spaceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const formSection = document.querySelector('.event-booking-section');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    if (eventForm) {
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            alert('Thank you for your event inquiry!\n\nOur events team will contact you within 24 hours to discuss your requirements and provide a customized quote.\n\nIn a real application, this would submit the form data to a server.');
            
            eventForm.reset();
        });
    }
}
