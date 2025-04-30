
import React from 'react';

export const FigmaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder Figma logo shape */}
    <path d="M5 5h4v14H5z" fill="currentColor"/>
    <path d="M9 5h4v4H9z" fill="currentColor"/>
    <path d="M13 5h4v4h-4z" fill="currentColor"/>
    <path d="M17 5h4v4h-4z" fill="currentColor"/>
    <path d="M9 9h4v4H9z" fill="currentColor"/>
     <circle cx="15" cy="11" r="2" fill="currentColor"/>
  </svg>
);
