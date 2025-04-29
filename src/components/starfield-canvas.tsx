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
    let stars: { x: number; y: number; radius: number; speed: number; opacity: number }[] = [];
    const numStars = 150; // Increased slightly for a fuller effect, but still subtle
    // Use HSL values directly for the primary color (orange)
    const starColor = 'hsl(25 95% 55%)'; // HSL for vibrant orange
    const glowColor = 'hsla(25 95% 55% / 0.2)'; // Fainter glow

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = []; // Reinitialize stars on resize
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, // Start stars randomly across the screen
          radius: Math.random() * 1.2 + 0.3, // Slightly larger stars (0.3 to 1.5)
          speed: Math.random() * 0.4 + 0.1, // Slower snowfall speed (0.1 to 0.5)
          opacity: Math.random() * 0.6 + 0.2, // Varying opacity (0.2 to 0.8 for subtlety)
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move stars downwards
        star.y += star.speed;

        // Reset star to the top when it goes off-screen
        if (star.y > canvas.height + star.radius) {
          star.y = -star.radius; // Start just above the screen
          star.x = Math.random() * canvas.width; // Reset horizontal position randomly
          // Optionally reset opacity/speed for variation
          star.opacity = Math.random() * 0.6 + 0.2;
          star.speed = Math.random() * 0.4 + 0.1;
        }

        // Draw star with opacity and subtle glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 2);
        gradient.addColorStop(0, `hsla(25, 95%, 55%, ${star.opacity})`); // Center color with opacity
        gradient.addColorStop(1, `hsla(25, 95%, 55%, 0)`); // Fade to transparent

        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2); // Use gradient radius for glow effect
        ctx.fill();

        // // Alternative simple draw (less glowy)
        // ctx.beginPath();
        // ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // ctx.shadowBlur = star.radius * 2; // Smaller glow
        // ctx.shadowColor = glowColor;
        // ctx.fillStyle = `hsla(25, 95%, 55%, ${star.opacity})`;
        // ctx.fill();
      });

      // Reset shadow if using the alternative draw method
      // ctx.shadowBlur = 0;
      // ctx.shadowColor = 'transparent';

      animationFrameId = requestAnimationFrame(drawStars);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    drawStars();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <canvas id="starfield-canvas" ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default StarfieldCanvas;
