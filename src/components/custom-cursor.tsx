'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(computedStyle.cursor === 'pointer');
        
        // Check if hovering over an interactive element
        const isInteractive = 
          hoveredElement.tagName === 'BUTTON' || 
          hoveredElement.tagName === 'A' || 
          hoveredElement.hasAttribute('role') && hoveredElement.getAttribute('role') === 'button';
        
        setIsPointer(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', updateCursorType);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateCursorType);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  // Don't render custom cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 1.2 : 1,
          opacity: isHidden ? 0 : 1
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 150,
          mass: 0.8
        }}
      />
    </>
  );
};

export default CustomCursor;