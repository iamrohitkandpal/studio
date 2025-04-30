
import React from 'react';

export const GitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Git branch structure */}
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M18 21V9" />
    <path d="M6 9v10a2 2 0 0 0 2 2h7" />
     <line x1="18" y1="15" x2="18" y2="21" />
     <line x1="6" y1="3" x2="6" y2="9" />
  </svg>
);
