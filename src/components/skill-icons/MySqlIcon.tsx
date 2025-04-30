
import React from 'react';

export const MySqlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder MySQL Dolphin + DB */}
    <path d="M12 9.5c-2.28 0-4.5 1.5-4.5 4v5h9v-5c0-2.5-2.22-4-4.5-4z"/>
    <ellipse cx="12" cy="6" rx="4.5" ry="3"/>
     <path d="M16.5 18.5a4.5 3 0 1 1-9 0 4.5 3 0 0 1 9 0z"/>
  </svg>
);
