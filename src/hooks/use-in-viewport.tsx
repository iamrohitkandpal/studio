// Add a custom hook for viewport detection
import { useState, useEffect, RefObject } from 'react';

export function useInViewport(ref: RefObject<HTMLElement>, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  
  return isIntersecting;
}