"use client";

import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <span className={`relative group inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 -z-10 text-primary opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none"
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 -z-10 text-cyan-400 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2 pointer-events-none"
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}
