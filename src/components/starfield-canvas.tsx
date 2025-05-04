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
  tail: Array<{x: number; y: number; radius: number}>;
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
    
    // Resize handler to make canvas responsive
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); // Reinitialize particles when resizing
    };

    // Initialize particles with enhanced properties for magical effect
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000); // Adjusted density
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 0.7 + 0.2; // Smaller particles for elegant effect
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          speed: Math.random() * 0.4 + 0.1, // Slower for more elegant movement
          color: getParticleColor(),
          twinkle: Math.random() * 0.02, // Subtle twinkling
          opacity: Math.random() * 0.5 + 0.3, // Slightly higher opacity (0.3-0.8)
          tail: [] // Store previous positions for tail effect
        });
      }
    };

    // Generate varied particle colors with subtle palette
    const getParticleColor = () => {
      const colors = [
        'rgba(147, 51, 234, 0.5)', // Purple (primary)
        'rgba(168, 85, 247, 0.4)', // Lighter purple
        'rgba(192, 132, 252, 0.35)', // Even lighter purple
        'rgba(216, 180, 254, 0.3)', // Very light purple
        'rgba(255, 255, 255, 0.5)', // White
        'rgba(233, 213, 255, 0.35)' // Lightest purple
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Animation loop with subtle trail effect
    const animate = () => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update tail
        if (particle.tail.length > 3) {
          particle.tail.shift();
        }
        particle.tail.push({x: particle.x, y: particle.y, radius: particle.radius});
        
        // Draw tail
        if (particle.tail.length > 1) {
          particle.tail.slice(0, -1).forEach((pos, i) => {
            const opacity = 0.1 * (i / particle.tail.length);
            ctx.beginPath();
            ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${opacity})`);
            ctx.arc(pos.x, pos.y, pos.radius * 0.6, 0, Math.PI * 2);
            ctx.fill();
          });
        }
        
        // Twinkle effect
        const twinkle = 1 + Math.sin(Date.now() * particle.twinkle) * 0.15;
        const radius = particle.radius * twinkle;
        
        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.y += particle.speed;
        particle.x += Math.sin(Date.now() * 0.0008 + particle.y * 0.005) * 0.12;
        
        // Reset position
        if (particle.y > canvas.height) {
          particle.y = -5;
          particle.x = Math.random() * canvas.width;
          particle.tail = [];
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

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
