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
    let stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const numStars = 150; // Adjust density as needed
    const starColor = 'hsl(25, 95%, 55%)'; // Use primary orange color HSL value

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = []; // Reinitialize stars on resize
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5, // Star size range
          speed: Math.random() * 0.5 + 0.1, // Star speed range
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = starColor;

      stars.forEach((star) => {
        // Move stars vertically
        star.y += star.speed;

        // Wrap stars around the screen
        if (star.y > canvas.height + star.radius) {
          star.y = -star.radius;
          star.x = Math.random() * canvas.width; // Reset horizontal position
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

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
