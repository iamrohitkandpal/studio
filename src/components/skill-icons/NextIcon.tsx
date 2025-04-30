
import React from 'react';

export const NextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // Next.js logo is usually filled
    {...props}
  >
    {/* Simple Next.js 'N' like shape */}
    <path d="M9.75 4l7.5 16h-3L6.75 4h3zM14.25 4L6.75 20h3L17.25 4h-3z"/>
  </svg>
);
