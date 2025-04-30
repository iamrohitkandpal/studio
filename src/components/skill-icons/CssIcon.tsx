
import React from 'react';

export const CssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder CSS letters */}
     <path d="m10 10-6 6 6 6m4-12 6 6-6 6"/>
     <text x="12" y="7" textAnchor="middle" fontSize="4" fill="currentColor">CSS</text>
  </svg>
);
