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

const BASE =
  "group relative inline-flex items-center justify-center font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
const PRIMARY =
  "px-6 py-4 bg-dark text-white border-2 border-dark hover:bg-primary hover:border-primary shadow-[4px_4px_0px_0px_rgba(208,94,53,1)] hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-[2px] hover:-translate-x-[2px] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none";
const SECONDARY =
  "px-5 py-3 bg-white text-dark border-2 border-dark shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] hover:shadow-[5px_5px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-[2px] hover:-translate-x-[2px] active:translate-y-[3px] active:translate-x-[3px] active:shadow-none text-slate-500";

export function BrutalistButton({
  children,
  primary,
  href,
  onClick,
  className = "",
  ariaLabel,
  download,
}: BrutalistButtonProps) {
  const cls = `${BASE} ${primary ? PRIMARY : SECONDARY} ${className}`;
  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>;

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
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {inner}
    </button>
  );
}
