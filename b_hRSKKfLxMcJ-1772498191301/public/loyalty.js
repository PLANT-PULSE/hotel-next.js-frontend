/* ============================================
   LOYALTY PAGE JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initPointsCalculator();
    initTierButtons();
    initFAQ();
});

/* ============================================
   POINTS CALCULATOR
   ============================================ */

function initPointsCalculator() {
    const stayCostInput = document.getElementById('stayCost');
    const currentTierSelect = document.getElementById('currentTier');
    const pointsResult = document.getElementById('pointsResult');
    
    if (!stayCostInput || !currentTierSelect || !pointsResult) return;
    
    function calculatePoints() {
        const cost = parseInt(stayCostInput.value) || 0;
        const tierMultiplier = parseInt(currentTierSelect.value) || 10;
        const points = cost * tierMultiplier;
        
        // Animate the number
        pointsResult.style.transform = 'scale(1.1)';
        pointsResult.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            pointsResult.textContent = points.toLocaleString();
            pointsResult.style.transform = 'scale(1)';
        }, 200);
    }
    
    stayCostInput.addEventListener('input', calculatePoints);
    currentTierSelect.addEventListener('change', calculatePoints);
}

/* ============================================
   TIER BUTTONS
   ============================================ */

function initTierButtons() {
    const tierButtons = document.querySelectorAll('.tier-btn');
    
    tierButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tierName = btn.textContent.trim();
            
            alert(`Join ${tierName}!\n\nIn a full implementation, this would open the registration form or redirect to the signup page.\n\nYou'll earn points faster and enjoy exclusive benefits!`);
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
   PROGRESS CIRCLE ANIMATION
   ============================================ */

function animateProgressCircle() {
    const circle = document.querySelector('.circle-progress');
    if (!circle) return;
    
    // Get current points and calculate percentage
    const points = 12500;
    const maxPoints = 15000; // Points needed for next tier
    const percentage = (points / maxPoints) * 100;
    
    // Calculate stroke dash offset
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDashoffset = offset;
}

// Run on load
window.addEventListener('load', animateProgressCircle);
