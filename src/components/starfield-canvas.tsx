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
    // Reduced number of stars for better performance
    const numStars = 100;
    // Use HSL values directly for the primary color (orange)
    const starColor = 'hsl(25 95% 55%)'; // HSL for vibrant orange


    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = []; // Reinitialize stars on resize
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Slightly smaller stars for subtlety
          radius: Math.random() * 1.0 + 0.2,
          speed: Math.random() * 0.3 + 0.05, // Even slower speed
          opacity: Math.random() * 0.5 + 0.1, // More subtle opacity
        });
      }
    };

    const drawStars = () => {
       // Clear only the area where stars were in the previous frame (potential optimization, but complex)
      // For simplicity and stability, clear the whole canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set fill style once outside the loop
      ctx.fillStyle = starColor;

      stars.forEach((star) => {
        // Update star position
        star.y += star.speed;

        // Reset star position if it goes off screen
        if (star.y > canvas.height + star.radius) {
          star.y = -star.radius;
          star.x = Math.random() * canvas.width;
          // Optionally reset opacity/speed for variation
          star.opacity = Math.random() * 0.5 + 0.1;
          star.speed = Math.random() * 0.3 + 0.05;
        }

        // Draw simple circle (less performance impact than gradients/shadows)
        ctx.beginPath();
        ctx.globalAlpha = star.opacity; // Use globalAlpha for opacity
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset global alpha
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(drawStars);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true }); // Use passive listener

    // Start animation
    drawStars();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Ensure canvas is positioned correctly and doesn't interfere with layout
  return <canvas id="starfield-canvas" ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default StarfieldCanvas;
