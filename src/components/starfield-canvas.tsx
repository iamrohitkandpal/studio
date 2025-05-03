'use client';

import React, { useRef, useEffect } from 'react';

const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; radius: number; speed: number; color: string; twinkle: number; opacity: number }[] = [];
    
    // Resize handler to make canvas responsive
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); // Reinitialize particles when resizing
    };

    // Initialize particles with enhanced properties for snowflake effect
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 6000); // Slightly higher density
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 0.8 + 0.2; // Even smaller particles for snowflake effect
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          speed: Math.random() * 0.5 + 0.2, // Slightly faster for snowfall effect
          color: getParticleColor(),
          twinkle: Math.random() * 0.03, // Reduced twinkling
          opacity: Math.random() * 0.4 + 0.2 // Slightly higher opacity (0.2-0.6)
        });
      }
    };

    // Generate varied particle colors with our new accent color
    const getParticleColor = () => {
      const colors = [
        'rgba(147, 51, 234, 0.4)', // Purple (primary)
        'rgba(168, 85, 247, 0.35)', // Lighter purple
        'rgba(192, 132, 252, 0.3)', // Even lighter purple
        'rgba(216, 180, 254, 0.25)', // Very light purple
        'rgba(255, 255, 255, 0.4)', // White
        'rgba(233, 213, 255, 0.3)' // Lightest purple
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Animation loop with minimal trail effect
    const animate = () => {
      // Almost completely clear the background each frame (minimal trails)
      ctx.fillStyle = 'rgba(13, 17, 23, 0.2)'; // Higher opacity to reduce trails significantly
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles with minimal trail effect
      particles.forEach(particle => {
        // Core of the particle (no gradient glow to reduce trail effect)
        ctx.beginPath();
        
        // Apply very subtle twinkling effect
        const twinkle = 1 + Math.sin(Date.now() * particle.twinkle) * 0.1;
        const radius = particle.radius * twinkle;
        
        // Simple circle with no gradient for cleaner snowflake look
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particle downward with slight horizontal drift for snowfall effect
        particle.y += particle.speed;
        particle.x += Math.sin(Date.now() * 0.001 + particle.y * 0.01) * 0.15; // Gentle horizontal drift
        
        // Reset particle position when it goes off screen
        if (particle.y > canvas.height) {
          particle.y = -5; // Start slightly above viewport
          particle.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default StarfieldCanvas;
