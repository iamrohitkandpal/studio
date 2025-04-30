
import React from 'react';

export const SocketIOIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Placeholder Socket.IO */}
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8" />
    <path d="M8.5 12h7" />
     <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);
