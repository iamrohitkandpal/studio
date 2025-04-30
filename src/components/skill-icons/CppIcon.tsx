
import React from 'react';

export const CppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Basic placeholder 'C++' */}
    <text x="12" y="14" textAnchor="middle" fontSize="8" fill="currentColor">C++</text>
     <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" fill="none" />
  </svg>
);
