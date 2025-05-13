// Discord specific JS - with unique animations fitting the Discord theme
document.addEventListener('DOMContentLoaded', function() {
    // Animation for product cards with delay
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150)); // 300ms initial delay + 150ms per card
    });
    
    // Hover effects with glow for products
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(218, 0, 255, 0.5)';
            
            // Additional Discord-specific effect: pulse border
            this.style.border = '1px solid rgba(218, 0, 255, 0.7)';
            this.style.animation = 'pulseBorder 1.5s infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            this.style.border = 'none';
            this.style.animation = 'none';
        });
    });
    
    // Terms of Service Modal Functionality
    const modal = document.getElementById('terms-modal');
    const termsLink = document.getElementById('terms-link');
    const closeButton = document.querySelector('.close-button');
    
    if (termsLink && modal && closeButton) {
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
    }
    
    // Background particle effect specific to Discord
    function createParticles() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '-1';
        document.body.appendChild(container);
        
        const particleCount = 35; // More particles for Discord theme
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            
            // Occasional larger particles for Discord
            const sizeMultiplier = Math.random() > 0.8 ? 3 : 1;
            particle.style.width = `${(Math.random() * 3 + 1) * sizeMultiplier}px`;
            particle.style.height = particle.style.width;
            
            particle.style.backgroundColor = 'rgba(218, 0, 255, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.boxShadow = '0 0 10px rgba(218, 0, 255, 0.5)';
            
            // Random position with bias toward bottom left (Discord specific)
            particle.style.left = `${Math.random() * 50}vw`;
            particle.style.top = `${Math.random() * 50 + 50}vh`;
            
            // Random animation
            const animDuration = Math.random() * 60 + 60;
            const animDelay = Math.random() * 60;
            
            particle.style.animation = `floatParticle ${animDuration}s linear ${animDelay}s infinite`;
            
            container.appendChild(particle);
        }
        
        // Add the keyframe to the animation
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translate(0, 0);
                }
                25% {
                    transform: translate(${Math.random() * 30}px, ${Math.random() * 30}px);
                }
                50% {
                    transform: translate(-${Math.random() * 30}px, ${Math.random() * 30}px);
                }
                75% {
                    transform: translate(${Math.random() * 30}px, -${Math.random() * 30}px);
                }
                100% {
                    transform: translate(0, 0);
                }
            }
            
            @keyframes pulseBorder {
                0% { border-color: rgba(218, 0, 255, 0.7); }
                50% { border-color: rgba(218, 0, 255, 0.2); }
                100% { border-color: rgba(218, 0, 255, 0.7); }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    createParticles();
    
    // Title animation with Discord-specific underline effect
    const title = document.querySelector('.browse-title');
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(-20px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            
            // Add dynamic underline for Discord
            const accent = title.querySelector('.accent');
            if (accent) {
                const underline = document.createElement('div');
                underline.style.position = 'absolute';
                underline.style.height = '3px';
                underline.style.width = '0';
                underline.style.bottom = '-8px';
                underline.style.left = '0';
                underline.style.background = 'linear-gradient(90deg, transparent, #da00ff, transparent)';
                underline.style.transition = 'width 1s ease, left 1s ease';
                
                accent.style.position = 'relative';
                accent.appendChild(underline);
                
                setTimeout(() => {
                    underline.style.width = '110%';
                    underline.style.left = '-5%';
                }, 500);
            }
        }, 300);
    }
    
    // Filter buttons animation
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
});