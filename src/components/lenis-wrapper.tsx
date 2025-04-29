'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisWrapperProps {
  children: React.ReactNode;
}

const LenisWrapper: React.FC<LenisWrapperProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
        lerp: 0.08, // Adjust smoothness (lower value = smoother)
        smoothTouch: false, // Disable smooth touch for potentially better performance/feel on touch devices
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis instance on component unmount
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
