import React, { useEffect } from 'react';

// Wave Component for Hero Section
export const WaveAnimation = () => {
  return (
    <div className="wave-container">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-animation">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
      <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-animation-slow" style={{opacity: 0.7}}>
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>
  );
};

// Bubbles Animation Component
export const BubblesAnimation = () => {
  useEffect(() => {
    const container = document.querySelector('.bubbles-container');
    if (!container) return;
    
    // Create random bubbles
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // Random properties
      const size = Math.random() * 30 + 10; // 10-40px
      const left = Math.random() * 100; // 0-100%
      const duration = Math.random() * 10 + 5; // 5-15s
      const delay = Math.random() * 5; // 0-5s
      
      // Apply styles
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;
      
      container.appendChild(bubble);
    }
    
    // Cleanup
    return () => {
      const bubbles = container.querySelectorAll('.bubble');
      bubbles.forEach(bubble => bubble.remove());
    };
  }, []);
  
  return <div className="bubbles-container"></div>;
};

// Ripple Background Component
export const RippleBackground = () => {
  return (
    <div className="ripple-background">
      <div className="ripple-circle ripple-1"></div>
      <div className="ripple-circle ripple-2"></div>
      <div className="ripple-circle ripple-3"></div>
    </div>
  );
};

// Water Ring Component for Testimonials
export const WaterRingEffect = () => {
  return (
    <>
      <div className="water-ring" style={{animationDelay: '0s'}}></div>
      <div className="water-ring" style={{animationDelay: '1s'}}></div>
      <div className="water-ring" style={{animationDelay: '2s'}}></div>
    </>
  );
};

// Water Flow Component for About Section
export const WaterFlowAnimation = () => {
  return (
    <>
      <div className="flow-line flow-line-1"></div>
      <div className="flow-line flow-line-2"></div>
      <div className="flow-line flow-line-3"></div>
      <div className="flow-line flow-line-4"></div>
    </>
  );
};

// Raindrop Effect Component
export const RainEffect = () => {
  useEffect(() => {
    const statItems = document.querySelectorAll('.stat-item');
    
    // Create raindrops for each stat item
    const intervals = [];
    
    statItems.forEach(item => {
      const createRaindrop = () => {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        
        // Random position
        const left = Math.random() * 100;
        raindrop.style.left = `${left}%`;
        raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        
        item.appendChild(raindrop);
        
        // Remove after animation completes
        setTimeout(() => {
          raindrop.remove();
        }, 1000);
      };
      
      // Create raindrops at intervals
      const interval = setInterval(createRaindrop, 300);
      intervals.push(interval);
    });
    
    // Cleanup
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);
  
  return null; // This component just adds the effect
};

// Water Drop Animation for Project Cards
export const WaterDropEffect = () => {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const splash = document.createElement('div');
        splash.classList.add('water-splash');
        
        const image = card.querySelector('.project-image');
        if (image) {
          image.appendChild(splash);
          
          // Remove after animation completes
          setTimeout(() => {
            splash.remove();
          }, 1000);
        }
      });
    });
  }, []);
  
  return null;
};

// Animated Water Background
export const AnimatedWaterBackground = () => {
  return (
    <div className="water-bg">
      <div className="water-wave water-wave-1"></div>
      <div className="water-wave water-wave-2"></div>
      <div className="water-wave water-wave-3"></div>
    </div>
  );
};

// A component that brings together all water animations CSS for the Home page
export const WaterAnimations = () => {
  return (
    <style>
      {`
/* Water Wave Animation for Hero Section */
.hero-section {
  position: relative;
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 3;
}

.wave-container svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 70px;
}

.wave-container .shape-fill {
  fill: #FFFFFF;
}

.wave-animation {
  animation: wave 8s linear infinite;
}

.wave-animation-slow {
  animation: wave 12s linear infinite;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Water Ripple Effect for CTA and Sections */
.ripple-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.1;
}

.ripple-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  animation: ripple-effect 4s infinite;
  box-shadow: 0 0 20px rgba(0, 128, 255, 0.7);
}

.ripple-1 {
  width: 100px;
  height: 100px;
  left: 20%;
  top: 30%;
  animation-delay: 0s;
}

.ripple-2 {
  width: 150px;
  height: 150px;
  right: 25%;
  top: 60%;
  animation-delay: 1s;
}

.ripple-3 {
  width: 80px;
  height: 80px;
  left: 60%;
  top: 40%;
  animation-delay: 2s;
}

@keyframes ripple-effect {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* Water Droplet Animation for Cards */
.category-card {
  overflow: hidden;
}

.category-card::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 128, 255, 0.4) 0%, rgba(0, 128, 255, 0) 70%);
  border-radius: 50%;
  top: -100px;
  right: -100px;
  z-index: -1;
  opacity: 0;
  transition: all 0.8s ease;
}

.category-card:hover::after {
  opacity: 1;
  transform: scale(1.5);
}

/* Floating Bubbles Animation */
.bubbles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
}

.bubble {
  position: absolute;
  bottom: -30px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.3);
  animation: bubble-rise linear infinite;
}

@keyframes bubble-rise {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-50vh) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh) scale(0.5);
  }
}

/* Liquid Button Effect */
.btn {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  z-index: -1;
  transform: translateX(-100%) translateY(-100%) rotate(45deg);
  transition: all 0.6s ease;
}

.btn:hover:before {
  transform: translateX(100%) translateY(100%) rotate(45deg);
}

/* Water Ring Effect for Testimonials */
.testimonial-item {
  position: relative;
}

.water-ring {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  animation: water-pulse 4s infinite;
}

@keyframes water-pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
}

/* Water Flow Animation for About Section */
.flow-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  animation: water-flow 3s ease-in-out infinite;
  opacity: 0.6;
}

.flow-line-1 {
  width: 60%;
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.flow-line-2 {
  width: 40%;
  top: 40%;
  left: 30%;
  animation-delay: 0.5s;
}

.flow-line-3 {
  width: 70%;
  top: 60%;
  left: 15%;
  animation-delay: 1s;
}

.flow-line-4 {
  width: 50%;
  top: 80%;
  left: 25%;
  animation-delay: 1.5s;
}

@keyframes water-flow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Raindrop Effect for Statistics */
.stat-item {
  position: relative;
}

.raindrop {
  position: absolute;
  width: 4px;
  background: linear-gradient(to bottom, rgba(0, 128, 255, 0), rgba(255, 255, 255, 0.8));
  top: -50px;
  opacity: 0;
  animation: raindrop-fall linear forwards;
}

@keyframes raindrop-fall {
  0% {
    height: 0;
    top: -50px;
    opacity: 1;
  }
  70% {
    height: 50px;
    opacity: 1;
  }
  100% {
    height: 0;
    top: 0;
    opacity: 0;
  }
}

/* Splash Effect for Projects */
.project-card .project-image {
  position: relative;
  overflow: hidden;
}

.water-splash {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: splash 0.6s ease-out forwards;
  pointer-events: none;
}

@keyframes splash {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

/* Animated Water Background */
.water-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
}

.water-wave {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  border-radius: 40%;
  animation: water-rotate linear infinite;
  opacity: 0.03;
  background: radial-gradient(ellipse at center, transparent 30%, var(--primary-color) 100%);
}

.water-wave-1 {
  animation-duration: 45s;
}

.water-wave-2 {
  animation-duration: 30s;
  animation-direction: reverse;
  opacity: 0.02;
}

.water-wave-3 {
  animation-duration: 15s;
  opacity: 0.01;
}

@keyframes water-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
      `}
    </style>
  );
};

export default WaterAnimations;