'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set visibility after component mounts to prevent flashing
    setTimeout(() => setIsHidden(false), 100);

    // Smoother position tracking with RAF
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let followerX = -100;
    let followerY = -100;
    let rafId = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateAnimation = () => {
      // Apply smooth lerping
      cursorX = lerp(cursorX, mouseX, 0.2);
      cursorY = lerp(cursorY, mouseY, 0.2);
      followerX = lerp(followerX, mouseX, 0.1);
      followerY = lerp(followerY, mouseY, 0.1);

      // Update the state with the lerped position
      setPosition({ x: cursorX, y: cursorY });
      
      rafId = requestAnimationFrame(updateAnimation);
    };
    
    // Start animation loop
    updateAnimation();

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursorType = () => {
      try {
        // Use document.elementsFromPoint for more reliable detection
        const elements = document.elementsFromPoint(mouseX, mouseY);
        
        // Check if any of the elements under cursor are interactive
        const isInteractive = elements.some(el => {
          const tagName = el.tagName.toLowerCase();
          const computedStyle = window.getComputedStyle(el);
          
          return (
            tagName === 'button' || 
            tagName === 'a' || 
            tagName === 'input' ||
            tagName === 'select' ||
            tagName === 'textarea' ||
            (el.hasAttribute('role') && ['button', 'link'].includes(el.getAttribute('role') || '')) ||
            computedStyle.cursor === 'pointer'
          );
        });
        
        setIsPointer(isInteractive);
      } catch (error) {
        console.error('Error in updateCursorType:', error);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
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
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Don't render custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && 
     (window.innerWidth <= 768 || 
      ('ontouchstart' in window) || 
      (navigator.maxTouchPoints > 0))) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isHidden && (
        <>
          <motion.div
            ref={cursorRef}
            className="custom-cursor"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              x: position.x,
              y: position.y,
              scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
              opacity: isHidden ? 0 : 1
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "tween",
              duration: 0.15,
              ease: "circOut"
            }}
          />
          <motion.div
            ref={followerRef}
            className="custom-cursor-follower"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              x: position.x,
              y: position.y,
              scale: isClicking ? 0.8 : isPointer ? 1.3 : 1,
              opacity: isHidden ? 0 : 0.7
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "circOut"
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;