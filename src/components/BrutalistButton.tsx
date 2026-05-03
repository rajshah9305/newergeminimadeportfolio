"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BrutalistButtonProps {
  children: ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  download?: string | boolean;
}

const BTN_BASE =
  "inline-flex items-center flex-wrap justify-center gap-2 font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] px-8 py-5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

export function BrutalistButton({
  children,
  href,
  onClick,
  className = "",
  ariaLabel,
  download,
  primary = false,
}: BrutalistButtonProps) {
  const colorClasses = primary
    ? "bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_#FF6B00] hover:bg-accent hover:border-accent hover:shadow-[6px_6px_0px_0px_#000000]"
    : "bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:bg-accent hover:text-black hover:border-black hover:shadow-[6px_6px_0px_0px_#FF6B00]";

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98, x: 2, y: 2 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const cls = `${BTN_BASE} ${colorClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {content}
    </button>
  );
}
