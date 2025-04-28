'use client';

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (cursor && cursorDot) {
      cursor.style.left = `${position.x}px`;
      cursor.style.top = `${position.y}px`;
      cursorDot.style.left = `${position.x}px`;
      cursorDot.style.top = `${position.y}px`;
    }
  }, [position]);

  // Hide cursor if it hasn't moved initially or goes off window
  const isVisible = position.x > 0 && position.y > 0;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${!isVisible ? 'hidden' : ''}`}
      />
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${!isVisible ? 'hidden' : ''}`}
      />
    </>
  );
};

export default CustomCursor;
