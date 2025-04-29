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
    const numStars = 100; // Reduced star count for subtlety
    const starColor = 'hsl(25 95% 55%)'; // Use primary orange color HSL value directly
    const glowColor = 'hsla(25 95% 55% / 0.3)'; // Fainter glow color

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = []; // Reinitialize stars on resize
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.0 + 0.2, // Smaller star size range (0.2 to 1.2)
          speed: Math.random() * 0.3 + 0.05, // Slower star speed range (0.05 to 0.35)
          opacity: Math.random() * 0.5 + 0.3, // Varying opacity (0.3 to 0.8)
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move stars vertically
        star.y += star.speed;

        // Wrap stars around the screen
        if (star.y > canvas.height + star.radius) {
          star.y = -star.radius;
          star.x = Math.random() * canvas.width; // Reset horizontal position
           // Reset opacity slightly for variation
          star.opacity = Math.random() * 0.5 + 0.3;
        }

        // Draw star with opacity and subtle glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // Apply glow effect
        ctx.shadowBlur = star.radius * 3; // Glow size relative to star size
        ctx.shadowColor = glowColor;
        ctx.fillStyle = `hsla(25, 95%, 55%, ${star.opacity})`; // Use HSL with dynamic opacity
        ctx.fill();
      });

       // Reset shadow for other potential drawings (though none here)
       ctx.shadowBlur = 0;
       ctx.shadowColor = 'transparent';

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

  return <canvas id="starfield-canvas" ref={canvasRef} />;
};

export default StarfieldCanvas;
