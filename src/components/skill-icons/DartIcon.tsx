
import React from 'react';

export const DartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1" // Dart logo often uses thinner lines
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Placeholder Dart */}
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polygon points="2 17 12 22 22 17" />
    <polygon points="2 12 12 17 22 12" />
     <text x="12" y="16" textAnchor="middle" fontSize="4" fill="currentColor">Dart</text>
  </svg>
);
