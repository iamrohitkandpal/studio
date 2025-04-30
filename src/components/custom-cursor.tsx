'use client';

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null); // Ref for potential future cursor element enhancements
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      // Update CSS variables for the body::before pseudo-element
      document.body.style.setProperty('--cursor-x', `${clientX}px`);
      document.body.style.setProperty('--cursor-y', `${clientY}px`);
    };

    const handleMouseEnter = () => {
      document.body.classList.add('cursor-active');
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('cursor-active');
    };

    // Only add listeners if on the client
    if (isClient) {
        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup listeners on component unmount
    return () => {
      if (isClient) {
          window.removeEventListener('mousemove', handleMouseMove);
          document.body.removeEventListener('mouseenter', handleMouseEnter);
          document.body.removeEventListener('mouseleave', handleMouseLeave);
          // Reset styles if needed
          document.body.style.removeProperty('--cursor-x');
          document.body.style.removeProperty('--cursor-y');
          document.body.classList.remove('cursor-active');
      }
    };
  }, [isClient]); // Re-run effect if isClient changes (though it only changes once)

  // Render nothing server-side, let CSS handle the effect client-side
  if (!isClient) {
    return null;
  }

  // This component doesn't render a visible element itself,
  // it just manages the CSS variables and body class for the ::before pseudo-element effect.
  return null;

  // Example of a potential future visible cursor element (if needed):
  // return <div ref={cursorRef} className="custom-cursor-element" />;
};

export default CustomCursor;
