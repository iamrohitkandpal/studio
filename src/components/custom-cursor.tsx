'use client';

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorGlazeRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null); // Added ref for the dot
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
       if (!isVisible) setIsVisible(true); // Show cursor on first move
    };

    const handleMouseLeave = () => {
       // Optionally hide or move cursor off-screen when leaving window
       // setPosition({ x: -100, y: -100 });
       // setIsVisible(false);
    };

     const handleMouseEnter = () => {
       setIsVisible(true);
     }

    document.addEventListener('mousemove', updateCursorPosition);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);


    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);

    };
  }, [isVisible]); // Depend on isVisible to attach/detach listeners if needed

  useEffect(() => {
    const glaze = cursorGlazeRef.current;
    const dot = cursorDotRef.current; // Get dot element

    if (glaze && dot) { // Check if both exist
      requestAnimationFrame(() => { // Use rAF for smoother updates
        // Apply transform directly for smoother performance
        const transformValue = `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`;
        glaze.style.transform = transformValue;
        dot.style.transform = transformValue; // Apply the same transform to the dot
      });
    }
  }, [position]);


  return (
    <>
      <div
        ref={cursorGlazeRef}
        className={`custom-cursor-glaze ${!isVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} // Updated class name
        // Style applied via useEffect for performance
      />
      {/* Add the cursor dot element back */}
       <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${!isVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        // Style applied via useEffect for performance
      />
    </>
  );
};

export default CustomCursor;
