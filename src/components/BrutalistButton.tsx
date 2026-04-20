import { ReactNode } from "react";
import { Magnetic } from "./Magnetic";

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
  "group relative inline-flex items-center justify-center font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none rounded-xl overflow-hidden";
const PRIMARY =
  "px-6 py-4 bg-dark text-white border border-dark hover:bg-primary hover:border-primary active:scale-[0.98]";
const SECONDARY =
  "px-5 py-3 bg-white text-dark border border-slate-100 hover:border-dark/10 active:scale-[0.98]";

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

  const content = href ? (
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
  ) : (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {inner}
    </button>
  );

  return <Magnetic strength={0.1}>{content}</Magnetic>;
}
