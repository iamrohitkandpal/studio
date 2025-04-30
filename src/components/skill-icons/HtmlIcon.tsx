
import React from 'react';

export const HtmlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder HTML tags */}
     <path d="m18 16 4-4-4-4M6 8l-4 4 4 4"/>
     <path d="m14.5 4-5 16"/>
      <text x="12" y="7" textAnchor="middle" fontSize="4" fill="currentColor">HTML</text>
  </svg>
);
