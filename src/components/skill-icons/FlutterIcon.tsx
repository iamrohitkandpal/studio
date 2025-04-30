
import React from 'react';

export const FlutterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // Flutter logo often uses slightly thicker lines
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Placeholder Flutter logo shape */}
    <path d="M5 15l5-5h10L10 20H5z" />
    <path d="M15 9l-5 5h10l-5-5z" />
  </svg>
);
