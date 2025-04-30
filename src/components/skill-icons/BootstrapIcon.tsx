
import React from 'react';

export const BootstrapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // Bootstrap icon is often filled
    {...props}
  >
    {/* Placeholder 'B' */}
     <path d="M13.67 4.008h-3.13L6 11.428V12h12v-.638l-4.33-7.354zm.18 13.984H7.57l3.4-5.82h5.14l-3.32 5.82zm-6.7-7.412L10.57 5h3.04l3.4 5.58H7.15z"/>
  </svg>
);
