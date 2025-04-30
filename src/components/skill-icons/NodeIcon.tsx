
import React from 'react';

export const NodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // Node.js logo uses slightly thicker lines
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Placeholder Node.js hexagon */}
    <path d="M17.27 6.73l-5.44-3.14a.5.5 0 0 0-.5 0L5.89 6.73a.5.5 0 0 0-.25.43v6.68c0 .19.09.36.25.43l5.44 3.14a.5.5 0 0 0 .5 0l5.44-3.14a.5.5 0 0 0 .25-.43V7.16a.5.5 0 0 0-.25-.43z"/>
     <text x="12" y="14" textAnchor="middle" fontSize="5" fill="currentColor">Node</text>
  </svg>
);
