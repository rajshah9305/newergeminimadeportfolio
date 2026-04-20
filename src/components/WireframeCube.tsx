import React from "react";

interface WireframeCubeProps {
  className?: string;
}

export function WireframeCube({ className }: WireframeCubeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back face */}
      <path d="M60 60 L140 60 L140 140 L60 140 Z" opacity="0.3" />

      {/* Front face */}
      <path d="M90 90 L170 90 L170 170 L90 170 Z" />

      {/* Connecting lines */}
      <path d="M60 60 L90 90" />
      <path d="M140 60 L170 90" />
      <path d="M140 140 L170 170" />
      <path d="M60 140 L90 170" />
    </svg>
  );
}
