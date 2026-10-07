import React from 'react';

export function BrandLogo({ className = "h-10 w-auto", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Bottom Wave */}
      <path
        d="M 20 95 Q 60 85 90 95 T 140 85"
        stroke="#7dd3fc"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Left Bubbles */}
      <g stroke="currentColor" strokeWidth="3">
        {/* Top large bubble */}
        <circle cx="35" cy="35" r="11" fill="#7dd3fc" />
        <path d="M 29 30 A 6 6 0 0 1 33 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Bottom medium bubble */}
        <circle cx="30" cy="65" r="9" fill="#7dd3fc" />
        <path d="M 25 61 A 4 4 0 0 1 28 58" stroke="white" strokeWidth="2" strokeLinecap="round" />
        
        {/* Tiny bubbles */}
        <circle cx="45" cy="48" r="3.5" fill="#86efac" />
        <circle cx="28" cy="80" r="2.5" fill="#7dd3fc" strokeWidth="1.5" />
      </g>

      {/* House */}
      <path
        d="M 45 80 V 50 L 75 25 L 105 50 V 80"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Chimney */}
      <path
        d="M 92 39 V 28 H 100 V 46"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Window */}
      <rect x="63" y="55" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="4" />
      <path d="M 75 55 V 79 M 63 67 H 87" stroke="currentColor" strokeWidth="3.5" />
      
      {/* 3-part Leaf above window */}
      <path d="M 75 48 C 73 45 70 45 70 48 C 73 48 75 51 75 48 Z" fill="#38bdf8" />
      <path d="M 75 48 C 77 45 80 45 80 48 C 77 48 75 51 75 48 Z" fill="#38bdf8" />
      <path d="M 75 48 C 75 44 75 42 75 48 Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

      {/* Tiny bubble on the right */}
      <circle cx="125" cy="72" r="4.5" fill="#7dd3fc" stroke="currentColor" strokeWidth="2.5" />

      {/* Paintbrush */}
      <g transform="translate(100, 20) rotate(18)">
        {/* Bristles (Lime Green) */}
        <path d="M 0 0 H 45 L 42 25 H 3 Z" fill="#bbf7d0" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M 12 0 V 22 M 22 0 V 22 M 32 0 V 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Metal Ferrule */}
        <rect x="5" y="25" width="35" height="12" rx="2" fill="white" stroke="currentColor" strokeWidth="4" />
        <circle cx="12" cy="31" r="1.5" fill="currentColor" />
        <circle cx="33" cy="31" r="1.5" fill="currentColor" />
        
        {/* Handle */}
        <path d="M 10 37 C 10 60 15 85 22 95 C 29 85 34 60 34 37 Z" fill="currentColor" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M 15 45 C 15 65 18 80 22 85" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="22" cy="82" r="2.5" fill="white" />
      </g>
    </svg>
  );
}
