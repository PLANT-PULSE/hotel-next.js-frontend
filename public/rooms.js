/* ============================================
   ROOMS PAGE JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initRoomFilters();
    initRoomCards();
});

/* ============================================
   ROOM FILTERS
   ============================================ */

function initRoomFilters() {
    const filterBtn = document.getElementById('applyFilters');
    const filterType = document.getElementById('filterType');
    const filterPrice = document.getElementById('filterPrice');
    const filterGuests = document.getElementById('filterGuests');
    const roomCards = document.querySelectorAll('.room-card');
    
    if (!filterBtn) return;
    
    function applyFilters() {
        const typeValue = filterType?.value || 'all';
        const priceValue = filterPrice?.value || 'all';
        const guestsValue = filterGuests?.value || 'all';
        
        roomCards.forEach(card => {
            let showCard = true;
            
            // Filter by type
            if (typeValue !== 'all') {
                const cardType = card.dataset.type;
                if (cardType !== typeValue) {
                    showCard = false;
                }
            }
            
            // Filter by price
            if (priceValue !== 'all' && showCard) {
                const cardPrice = parseInt(card.dataset.price);
                
                if (priceValue === '0-200' && cardPrice > 200) {
                    showCard = false;
                } else if (priceValue === '200-400' && (cardPrice < 200 || cardPrice > 400)) {
                    showCard = false;
                } else if (priceValue === '400-700' && (cardPrice < 400 || cardPrice > 700)) {
                    showCard = false;
                } else if (priceValue === '700+' && cardPrice < 700) {
                    showCard = false;
                }
            }
            
            // Filter by guests
            if (guestsValue !== 'all' && showCard) {
                const cardGuests = parseInt(card.dataset.guests);
                const filterGuestsNum = parseInt(guestsValue);
                
                if (guestsValue === '3' && cardGuests < 3) {
                    // Show 3+ guests
                } else if (filterGuestsNum > cardGuests) {
                    showCard = false;
                }
            }
            
            if (showCard) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    if (filterBtn) {
        filterBtn.addEventListener('click', applyFilters);
    }
    
    // Auto-apply on change
    if (filterType) {
        filterType.addEventListener('change', applyFilters);
    }
    if (filterPrice) {
        filterPrice.addEventListener('change', applyFilters);
    }
    if (filterGuests) {
        filterGuests.addEventListener('change', applyFilters);
    }
}

/* ============================================
   ROOM CARDS INTERACTIONS
   ============================================ */

function initRoomCards() {
    // Book now buttons
    const bookButtons = document.querySelectorAll('.room-btn.book-now');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const room = e.target.dataset.room;
            const roomNames = {
                standard: 'Standard Room',
                deluxe: 'Deluxe Room',
                suite: 'Executive Suite',
                penthouse: 'Presidential Penthouse',
                family: 'Family Room',
                business: 'Business Room'
            };
            
            // Scroll to booking section on home page
            window.location.href = 'index.html#booking';
        });
    });
    
    // Details buttons
    const detailsButtons = document.querySelectorAll('.room-btn.details-btn');
    detailsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const room = e.target.dataset.room;
            alert(`Room Details:\n\nIn a full implementation, this would open a detailed view of the ${room} with more photos, amenities, and booking options.`);
        });
    });
    
    // Select buttons in comparison table
    const selectButtons = document.querySelectorAll('.select-btn');
    selectButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const room = e.target.dataset.room;
            window.location.href = 'index.html#booking';
        });
    });
    
    // Virtual tour button
    const tourBtn = document.querySelector('.tour-video .video-container');
    if (tourBtn) {
        tourBtn.addEventListener('click', () => {
            alert('Starting Virtual Room Tour...\n\nIn a full implementation, this would launch a 360° virtual tour or video walkthrough of our rooms.');
        });
    }
}
