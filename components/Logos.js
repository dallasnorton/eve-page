import React from 'react';

export default function Logos() {
  return (
    <div className="flex items-center">
      <img src={'images/f5-logo.svg'} alt={''} className="mr-2 h-8 w-8" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      <img
        src={'images/GitHub-Mark-64px.png'}
        alt={''}
        className="ml-2 h-9 w-9"
      />
    </div>
  );
}
