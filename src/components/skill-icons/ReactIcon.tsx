
import React from 'react';

export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // React logo has thinner lines
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* React Atom Symbol */}
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);
