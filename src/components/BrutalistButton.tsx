import { ReactNode } from "react";

interface BrutalistButtonProps {
  children: ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  download?: string | boolean;
}

const BTN =
  "inline-flex items-center justify-center gap-2 font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-[0.16em] px-6 py-4 bg-accent text-primary border-2 border-accent hover:bg-white hover:border-white hover:-translate-y-[2px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 cursor-pointer";

const SECONDARY =
  "inline-flex items-center justify-center gap-2 font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-[0.16em] px-6 py-4 bg-transparent text-white border-2 border-white/20 hover:border-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 cursor-pointer";

export function BrutalistButton({
  children,
  primary = false,
  href,
  onClick,
  className = "",
  ariaLabel,
  download,
}: BrutalistButtonProps) {
  const cls = `${primary ? BTN : SECONDARY} ${className}`;

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
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}
