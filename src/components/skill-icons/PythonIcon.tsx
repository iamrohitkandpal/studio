
import React from 'react';

export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Placeholder Python logo (two snakes) */}
     <path d="M10.5 7.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1" />
     <path d="M13.5 16.5a3 3 0 0 1 3-3V7.5a3 3 0 0 1-3-3h-3a3 3 0 0 1-3 3V15a3 3 0 0 1 3 3h1" />
     <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
     <circle cx="15.5" cy="15.5" r="1" fill="currentColor" />
  </svg>
);
