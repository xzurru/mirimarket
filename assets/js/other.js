// Other category specific JS with unique animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dynamic elements
    initializeAnimations();
    setupProductCards();
    setupModalFunctionality();
    createBackgroundEffects();
    
    // Function to handle all animations
    function initializeAnimations() {
        // Title animation with special effect for Other category
        const title = document.querySelector('.browse-title');
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-20px)';
            title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
                
                // Add special glow effect to the accent word
                const accent = title.querySelector('.accent');
                if (accent) {
                    setTimeout(() => {
                        accent.style.textShadow = '0 0 10px rgba(218, 0, 255, 0.7)';
                        accent.style.transition = 'text-shadow 1.5s ease';
                    }, 800);
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
    }
    
    // Function to add special effects and animations to product cards
    function setupProductCards() {
        const productCards = document.querySelectorAll('.product-card');
        
        // Set initial styles and animations
        productCards.forEach((card, index) => {
            // Add staggered animation on load
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 400 + (index * 200));
            
            // Add hover effects specific to Other category
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 15px 30px rgba(218, 0, 255, 0.4)';
                
                // Add border glow animation
                this.style.animation = 'glowBorder 1.5s infinite';
                
                // Scale up the image slightly more
                const img = this.querySelector('.product-img');
                if (img) {
                    img.style.transform = 'scale(1.08)';
                }
                
                // Make the price more prominent
                const price = this.querySelector('.price');
                if (price) {
                    price.style.transition = 'all 0.3s ease';
                    price.style.backgroundColor = 'rgba(218, 0, 255, 0.2)';
                    price.style.transform = 'scale(1.05)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                this.style.animation = 'none';
                
                const img = this.querySelector('.product-img');
                if (img) {
                    img.style.transform = 'scale(1)';
                }
                
                const price = this.querySelector('.price');
                if (price) {
                    price.style.backgroundColor = 'rgba(218, 0, 255, 0.1)';
                    price.style.transform = 'scale(1)';
                }
            });
            
            // Add custom badges to some products
            if (index === 0) {
                const badge = document.createElement('div');
                badge.className = 'product-badge premium';
                badge.textContent = 'Premium';
                
                const imageContainer = card.querySelector('.product-image');
                if (imageContainer) {
                    imageContainer.appendChild(badge);
                }
            } else if (index === 1) {
                const badge = document.createElement('div');
                badge.className = 'product-badge';
                badge.textContent = 'Popular';
                
                const imageContainer = card.querySelector('.product-image');
                if (imageContainer) {
                    imageContainer.appendChild(badge);
                }
            }
        });
        
        // Add product ratings dynamically
        const productInfoSections = document.querySelectorAll('.product-info');
        productInfoSections.forEach((info) => {
            const heading = info.querySelector('h3');
            
            if (heading && !info.querySelector('.product-rating')) {
                // Generate random rating
                const rating = (Math.random() * 2 + 3).toFixed(1); // Between 3.0 and 5.0
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                const reviewCount = Math.floor(Math.random() * 100) + 5; // Between 5 and 104
                
                // Create rating element
                const ratingDiv = document.createElement('div');
                ratingDiv.className = 'product-rating';
                
                // Add full stars
                for (let i = 0; i < fullStars; i++) {
                    const star = document.createElement('i');
                    star.className = 'fas fa-star';
                    ratingDiv.appendChild(star);
                }
                
                // Add half star if needed
                if (hasHalfStar) {
                    const halfStar = document.createElement('i');
                    halfStar.className = 'fas fa-star-half-alt';
                    ratingDiv.appendChild(halfStar);
                }
                
                // Add empty stars
                for (let i = 0; i < emptyStars; i++) {
                    const emptyStar = document.createElement('i');
                    emptyStar.className = 'far fa-star';
                    ratingDiv.appendChild(emptyStar);
                }
                
                // Add review count
                const reviewSpan = document.createElement('span');
                reviewSpan.textContent = `(${reviewCount})`;
                ratingDiv.appendChild(reviewSpan);
                
                // Insert rating after heading
                heading.after(ratingDiv);
            }
        });
    }
    
    // Function to set up modal functionality
    function setupModalFunctionality() {
        const modal = document.getElementById('terms-modal');
        const termsLink = document.getElementById('terms-link');
        const closeButton = document.querySelector('.close-button');
        
        if (termsLink && modal && closeButton) {
            // Open modal when clicking Terms of Service
            termsLink.addEventListener('click', function(e) {
                e.preventDefault();
                modal.style.display = 'block';
                modal.style.animation = 'fadeIn 0.3s forwards';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                
                // Add entrance animation to modal content
                const modalContent = modal.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.style.transform = 'translateY(30px)';
                    modalContent.style.opacity = '0';
                    modalContent.style.transition = 'all 0.4s ease';
                    
                    setTimeout(() => {
                        modalContent.style.transform = 'translateY(0)';
                        modalContent.style.opacity = '1';
                    }, 50);
                }
            });
            
            // Close modal with × button
            closeButton.addEventListener('click', function() {
                closeModal();
            });
            
            // Close modal when clicking outside the modal content
            window.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.style.display === 'block') {
                    closeModal();
                }
            });
            
            // Function to close modal with animation
            function closeModal() {
                const modalContent = modal.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.style.transform = 'translateY(30px)';
                    modalContent.style.opacity = '0';
                    
                    setTimeout(() => {
                        modal.style.opacity = '0';
                        modal.style.transition = 'opacity 0.3s ease';
                        
                        setTimeout(() => {
                            modal.style.display = 'none';
                            modal.style.opacity = '1';
                            modal.style.transition = '';
                            document.body.style.overflow = 'auto'; // Restore scrolling
                        }, 300);
                    }, 200);
                } else {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Restore scrolling
                }
            }
        }
    }
    
    // Function to create background particle effects
    function createBackgroundEffects() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '-1';
        document.body.appendChild(container);
        
        // Create more particles for a richer effect
        const particleCount = 50;
        
        // Create particles with different sizes, colors and animations
        for (let i = 0; i < particleCount; i++) {
            createParticle(container, i);
        }
        
        // Add keyframe animations
        addKeyframeAnimations();
    }
    
    // Function to create individual particles
    function createParticle(container, index) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Randomize particle properties
        const size = Math.random() * 4 + 1; // Size between 1-5px
        const isSpecial = Math.random() > 0.9; // 10% chance for special particles
        
        // Set special properties for special particles
        if (isSpecial) {
            particle.style.width = `${size * 2}px`;
            particle.style.height = `${size * 2}px`;
            particle.style.background = `linear-gradient(135deg, #da00ff, #9000ff)`;
            particle.style.boxShadow = `0 0 ${size * 3}px rgba(218, 0, 255, 0.8)`;
        } else {
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = `rgba(218, 0, 255, ${Math.random() * 0.5 + 0.3})`;
            particle.style.boxShadow = `0 0 ${size * 2}px rgba(218, 0, 255, 0.5)`;
        }
        
        // Set position and other styles
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        
        // Random position evenly distributed across screen
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Animation
        const animDuration = Math.random() * 60 + 40;
        const animDelay = Math.random() * 20;
        
        // Give some particles a more complex animation
        if (Math.random() > 0.7) {
            particle.style.animation = `
                particleFloat${index % 5} ${animDuration}s linear ${animDelay}s infinite, 
                particleFade ${animDuration / 4}s ease-in-out ${animDelay}s infinite alternate
            `;
        } else {
            particle.style.animation = `particleFloat${index % 5} ${animDuration}s linear ${animDelay}s infinite`;
        }
        
        // Add to container
        container.appendChild(particle);
    }
    
    // Function to add keyframe animations
    function addKeyframeAnimations() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes particleFloat0 {
                0% { transform: translate(0, 0); }
                25% { transform: translate(${Math.random() * 30}px, ${Math.random() * 30}px); }
                50% { transform: translate(-${Math.random() * 30}px, ${Math.random() * 30}px); }
                75% { transform: translate(${Math.random() * 30}px, -${Math.random() * 30}px); }
                100% { transform: translate(0, 0); }
            }
            
            @keyframes particleFloat1 {
                0% { transform: translate(0, 0); }
                33% { transform: translate(-${Math.random() * 40}px, ${Math.random() * 20}px); }
                66% { transform: translate(${Math.random() * 40}px, -${Math.random() * 20}px); }
                100% { transform: translate(0, 0); }
            }
            
            @keyframes particleFloat2 {
                0% { transform: translate(0, 0); }
                20% { transform: translate(${Math.random() * 20}px, ${Math.random() * 40}px); }
                40% { transform: translate(${Math.random() * 40}px, -${Math.random() * 20}px); }
                60% { transform: translate(-${Math.random() * 30}px, -${Math.random() * 30}px); }
                80% { transform: translate(-${Math.random() * 20}px, ${Math.random() * 40}px); }
                100% { transform: translate(0, 0); }
            }
            
            @keyframes particleFloat3 {
                0% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(${Math.random() * 50}px, ${Math.random() * 20}px) rotate(180deg); }
                100% { transform: translate(0, 0) rotate(360deg); }
            }
            
            @keyframes particleFloat4 {
                0% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(-${Math.random() * 30}px, -${Math.random() * 30}px) scale(1.5); }
                100% { transform: translate(0, 0) scale(1); }
            }
            
            @keyframes particleFade {
                0% { opacity: 0.3; }
                100% { opacity: 0.8; }
            }
            
            @keyframes glowBorder {
                0% { box-shadow: 0 5px 15px rgba(218, 0, 255, 0.3); }
                50% { box-shadow: 0 5px 25px rgba(218, 0, 255, 0.6); }
                100% { box-shadow: 0 5px 15px rgba(218, 0, 255, 0.3); }
            }
        `;
        document.head.appendChild(styleSheet);
    }
});