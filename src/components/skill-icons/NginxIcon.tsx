
import React from 'react';

export const NginxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder 'N' for Nginx */}
     <path d="M4 4v16h4V12l8 8V4H8v8L4 4z"/>
     <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" fill="none"/>
  </svg>
);
