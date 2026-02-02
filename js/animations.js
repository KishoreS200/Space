// Scroll animations using Intersection Observer

document.addEventListener('DOMContentLoaded', function() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        // Set up intersection observer for animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    
                    // Add animation class based on data attribute or default
                    if (target.hasAttribute('data-animation')) {
                        const animation = target.getAttribute('data-animation');
                        target.classList.add(animation);
                    } else {
                        target.classList.add('fade-in-up');
                    }
                    
                    // Stop observing once animated
                    observer.unobserve(target);
                }
            });
        }, observerOptions);
        
        // Observe all elements with animation-trigger class
        const animatedElements = document.querySelectorAll('.animation-trigger');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
        
        // Special handling for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            // Add animation-trigger class for observation
            item.classList.add('animation-trigger');
            
            // Set data-animation based on position
            if (item.classList.contains('left')) {
                item.setAttribute('data-animation', 'slide-in-left');
            } else {
                item.setAttribute('data-animation', 'slide-in-right');
            }
            
            // Add delay based on index
            const delayClass = `delay-${Math.min(index, 4)}`;
            item.classList.add(delayClass);
        });
        
        // Animate planet cards with stagger
        const planetCards = document.querySelectorAll('.planet-card');
        planetCards.forEach((card, index) => {
            card.classList.add('animation-trigger');
            card.setAttribute('data-animation', 'fade-in-up');
            const delayClass = `delay-${Math.min(index, 4)}`;
            card.classList.add(delayClass);
        });
        
        // Animate light speed items
        const lightItems = document.querySelectorAll('.light-item');
        lightItems.forEach((item, index) => {
            item.classList.add('animation-trigger');
            item.setAttribute('data-animation', 'fade-in-up');
            const delayClass = `delay-${Math.min(index, 4)}`;
            item.classList.add(delayClass);
        });
        
        // Animate mission cards
        const missionCards = document.querySelectorAll('.mission-card');
        missionCards.forEach((card, index) => {
            card.classList.add('animation-trigger');
            card.setAttribute('data-animation', 'fade-in-up');
            const delayClass = `delay-${Math.min(index, 4)}`;
            card.classList.add(delayClass);
        });
        
    } else {
        // Fallback for browsers without Intersection Observer
        // Simply show all elements without animation
        const animatedElements = document.querySelectorAll('.animation-trigger, .timeline-item, .planet-card, .light-item, .mission-card');
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
        });
    }
    
    // Add hover effects for interactive elements
    const hoverElements = document.querySelectorAll('.planet-card, .mission-card, .light-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease-out';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease-out';
        });
    });
});