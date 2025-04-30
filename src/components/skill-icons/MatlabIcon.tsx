
import React from 'react';

export const MatlabIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder MATLAB 'M' */}
    <path d="M3 3v18h18V3H3zm5 13H5V8h3v8zm5 0h-3V8h3v8zm5 0h-3V8h3v8z"/>
    <text x="12" y="6" textAnchor="middle" fontSize="3" fill="currentColor">MATLAB</text>
  </svg>
);
