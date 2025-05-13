// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Animation for page load
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 300);
    
    // Terms of Service Modal Functionality
    const modal = document.getElementById('terms-modal');
    const termsLink = document.getElementById('terms-link');
    const closeButton = document.querySelector('.close-button');
    
    // Open modal when clicking Terms of Service
    termsLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
    
    // Close modal with × button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's the terms link
            if (this.id === 'terms-link') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip if href is just #
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Category hover effects
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.category-overlay');
            overlay.style.opacity = '0.8';
        });
        
        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.category-overlay');
            overlay.style.opacity = '0.6';
        });
    });

    // Added entrance animation for the hero section
    const heroContent = document.querySelector('.hero-content');
    const heroStats = document.querySelector('.hero-stats');
    
    setTimeout(function() {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);
    
    setTimeout(function() {
        heroStats.style.opacity = '1';
        heroStats.style.transform = 'translateY(0)';
    }, 800);

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .category-item, .section-header, .review-placeholder');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation elements
    const animatedElements = document.querySelectorAll('.product-card, .category-item, .section-header, .review-placeholder');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Listen for scroll to trigger animations
    window.addEventListener('scroll', animateOnScroll);
});