'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Smoother position tracking with RAF
    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Cancel any existing animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Schedule the position update
      rafId = requestAnimationFrame(() => {
        setPosition({ x: mouseX, y: mouseY });
      });
    };

    const updateCursorType = () => {
      try {
        // Use document.elementsFromPoint for more reliable detection
        const elements = document.elementsFromPoint(mouseX, mouseY);
        
        // Check if any of the elements under cursor are interactive
        const isInteractive = elements.some(el => {
          const tagName = el.tagName.toLowerCase();
          return (
            tagName === 'button' || 
            tagName === 'a' || 
            tagName === 'input' ||
            tagName === 'select' ||
            tagName === 'textarea' ||
            (el.hasAttribute('role') && ['button', 'link'].includes(el.getAttribute('role') || '')) ||
            window.getComputedStyle(el).cursor === 'pointer'
          );
        });
        
        setIsPointer(isInteractive);
      } catch (error) {
        console.error('Error in updateCursorType:', error);
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousemove', updateCursorType, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateCursorType);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Don't render custom cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1
        }}
        transition={{
          type: "tween", // Use tween instead of spring for more precise tracking
          duration: 0.1,
          ease: "linear"
        }}
      />
      <motion.div
        ref={followerRef}
        className="custom-cursor-follower"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 1.2 : 1,
          opacity: isHidden ? 0 : 1
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeOut"
        }}
      />
    </>
  );
};

export default CustomCursor;