'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number; // previous z
}

const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  const initializeStars = useCallback((width: number, height: number) => {
    const numStars = 800; // Adjust number of stars
    starsRef.current = [];
    for (let i = 0; i < numStars; i++) {
      starsRef.current.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        pz: Math.random() * width,
      });
    }
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Use rich black background
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.fillStyle = 'rgba(200, 200, 255, 0.7)'; // Subtle star color

    const speed = 2; // Adjust speed of stars

    starsRef.current.forEach(star => {
      star.z -= speed;
      if (star.z < 1) {
        star.z = width;
        star.x = Math.random() * width - width / 2;
        star.y = Math.random() * height - height / 2;
        star.pz = star.z;
      }

      const sx = (star.x / star.z) * width;
      const sy = (star.y / star.z) * height;

      const r = Math.max(0.1, (1 - star.z / width) * 2.5); // Star size based on distance

      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fill();

      // Store previous position for potential trail (optional)
      star.pz = star.z;
    });

    ctx.restore();
  }, []);


  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    draw(ctx, canvas.width, canvas.height);
    animationFrameIdRef.current = requestAnimationFrame(animate);
  }, [draw]);

  const resizeCanvas = useCallback(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
      // Re-initialize stars on resize if needed for distribution, or just redraw
     initializeStars(canvas.width, canvas.height);
     // Ensure draw happens immediately after resize
     const ctx = canvas.getContext('2d');
     if(ctx) draw(ctx, canvas.width, canvas.height);

   }, [initializeStars, draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas(); // Initial setup
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    animationFrameIdRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [animate, resizeCanvas]);


  return <canvas id="starfield-canvas" ref={canvasRef} className="fixed top-0 left-0 -z-10" />;
};

export default StarfieldCanvas;
