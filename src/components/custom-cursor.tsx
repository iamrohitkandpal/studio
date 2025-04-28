'use client';

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  // Removed cursorDotRef
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
    const cursor = cursorRef.current;
    if (cursor) {
      requestAnimationFrame(() => { // Use rAF for smoother updates
        // Apply transform directly for smoother performance
        cursor.style.transform = `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`;
      });
    }
  }, [position]);


  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${!isVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} // Use opacity for smooth hiding/showing
        // Style applied via useEffect for performance
      />
      {/* Cursor dot element is removed */}
    </>
  );
};

export default CustomCursor;
