
import React from 'react';

export const JsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder JS */}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none"/>
    <text x="12" y="14" textAnchor="middle" fontSize="9" fill="hsl(var(--background))" fontWeight="bold">JS</text>
  </svg>
);
