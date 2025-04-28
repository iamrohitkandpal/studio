'use client';

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
       if (!isVisible) setIsVisible(true); // Show cursor on first move
    };

    const handleMouseLeave = () => {
       // Keep cursor visible even when leaving window slightly
       // setIsVisible(false); // Can uncomment this to hide when leaving window
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
  }, [isVisible]);

  useEffect(() => {
    const dot = cursorDotRef.current;

    if (dot) {
      requestAnimationFrame(() => { // Use rAF for smoother updates
        // Apply transform directly for smoother performance
        const transformValue = `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`;
        dot.style.transform = transformValue;
      });
    }
  }, [position]);


  return (
    <>
      {/* Only render the cursor dot */}
       <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${!isVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        // Style applied via useEffect for performance
      />
    </>
  );
};

export default CustomCursor;
