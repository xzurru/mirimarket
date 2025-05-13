// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Animation for page load
    document.body.classList.add('page-loaded');
    
    // Add animation to product cards with delay
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animated');
        }, 100 + (index * 100)); // 100ms initial delay + 100ms per card
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter logic would go here
            // For now, we'll just simulate filtering with a visual effect
            
            // Reset all product cards
            productCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
            });
            
            // Re-animate product cards with delay
            productCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 + (index * 100));
            });
        });
    });
    
    // Hover effects with glow for products
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(218, 0, 255, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Terms of Service Modal Functionality
    const modal = document.getElementById('terms-modal');
    const termsLink = document.getElementById('terms-link');
    const closeButton = document.querySelector('.close-button');
    
    // Open modal when clicking Terms of Service
    if (termsLink && modal && closeButton) {
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
    }
    
    // Background particle effect
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Apply styles
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(218, 0, 255, ${opacity});
            box-shadow: 0 0 ${size*2}px rgba(218, 0, 255, ${opacity});
            border-radius: 50%;
            left: ${posX}px;
            top: ${posY}px;
            pointer-events: none;
            z-index: -1;
            animation: float ${duration}s linear infinite;
        `;
        
        // Add to container
        particlesContainer.appendChild(particle);
        
        // Set random movement
        setInterval(() => {
            const newX = parseFloat(particle.style.left) + (Math.random() * 2 - 1);
            const newY = parseFloat(particle.style.top) + (Math.random() * 2 - 1);
            
            particle.style.left = `${newX}px`;
            particle.style.top = `${newY}px`;
        }, 1000);
    }
    
    // Add keyframe animation for particles
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-15px) translateX(15px);
            }
            50% {
                transform: translateY(0) translateX(30px);
            }
            75% {
                transform: translateY(15px) translateX(15px);
            }
        }
        
        .particle {
            transition: all 3s ease;
        }
    `;
    document.head.appendChild(style);
});