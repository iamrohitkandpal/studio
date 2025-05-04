'use client';

import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: string;
  twinkle: number;
  opacity: number;
  tail: {x: number, y: number, radius: number}[];
  direction: {x: number, y: number};
  glow: number;
}

const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseActive = false;
    let mouseTimer: NodeJS.Timeout;
    
    // Track mouse clicks for interactive effects instead of movement
    const handleMouseClick = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseActive = true;
      
      // Set a timeout to return to normal behavior after 3 seconds
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        isMouseActive = false;
      }, 3000); // 3 seconds timeout
    };
    
    // Resize handler to make canvas responsive
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); // Reinitialize particles when resizing
    };

    // Initialize particles with enhanced properties for magical effect
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 6000); // Increased density
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 1.2 + 0.2; // Varied particle sizes
        const dirX = Math.random() * 0.4 - 0.2;
        const dirY = Math.random() * 0.4 - 0.1;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          speed: Math.random() * 0.5 + 0.1, // Varied speeds
          color: getParticleColor(),
          twinkle: Math.random() * 0.03, // Enhanced twinkling
          opacity: Math.random() * 0.6 + 0.4, // Higher opacity
          tail: [], // Store previous positions for tail effect
          direction: { x: dirX, y: dirY }, // Random direction
          glow: Math.random() * 5 + 2 // Glow effect intensity
        });
      }
    };

    // Generate varied particle colors with enhanced palette
    const getParticleColor = () => {
      const colors = [
        'rgba(147, 51, 234, 0.7)', // Purple (primary)
        'rgba(168, 85, 247, 0.6)', // Lighter purple
        'rgba(192, 132, 252, 0.5)', // Even lighter purple
        'rgba(216, 180, 254, 0.4)', // Very light purple
        'rgba(255, 255, 255, 0.7)', // White
        'rgba(233, 213, 255, 0.5)', // Lightest purple
        'rgba(99, 102, 241, 0.6)', // Indigo
        'rgba(79, 70, 229, 0.5)', // Deeper indigo
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Animation loop with enhanced effects
    const animate = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(13, 17, 23, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      gradient.addColorStop(0, 'rgba(88, 28, 135, 0.03)'); // Deep purple center
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.01)'); // Dark blue edge
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update tail
        if (particle.tail.length > 5) { // Longer tails
          particle.tail.shift();
        }
        particle.tail.push({x: particle.x, y: particle.y, radius: particle.radius});
        
        // Draw tail with glow effect
        if (particle.tail.length > 1) {
          particle.tail.slice(0, -1).forEach((pos, i) => {
            const opacity = 0.15 * (i / particle.tail.length);
            ctx.beginPath();
            ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${opacity})`);
            
            // Add glow effect to tails
            ctx.shadowBlur = particle.glow * (i / particle.tail.length);
            ctx.shadowColor = particle.color.replace(/[\d.]+\)$/g, '0.3)');
            
            ctx.arc(pos.x, pos.y, pos.radius * 0.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          });
        }
        
        // Enhanced twinkle effect
        const time = Date.now() * 0.001;
        const twinkle = 1 + Math.sin(time * particle.twinkle) * 0.2;
        const radius = particle.radius * twinkle;
        
        // Draw particle with glow
        ctx.beginPath();
        ctx.shadowBlur = particle.glow;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Interactive movement - particles react to mouse clicks instead of movement
        if (isMouseActive) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const repelForce = (150 - distance) * 0.01;
            particle.direction.x -= Math.cos(angle) * repelForce;
            particle.direction.y -= Math.sin(angle) * repelForce;
          }
        }
        
        // Update position with direction and gentle wave motion
        particle.x += particle.direction.x + Math.sin(time + particle.y * 0.01) * 0.2;
        particle.y += particle.direction.y + particle.speed;
        
        // Boundary checks with wrap-around
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    // Replace mousemove with click event
    window.addEventListener('click', handleMouseClick);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleMouseClick);
      clearTimeout(mouseTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield-canvas"
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'auto' }} // Change to 'auto' to allow clicks
    />
  );
};

export default StarfieldCanvas;
