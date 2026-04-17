import { ReactNode } from 'react';

interface BrutalistButtonProps {
  children: ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: string | boolean;
  ariaLabel?: string;
}

export function BrutalistButton({ 
  children, 
  primary, 
  href, 
  onClick, 
  className = "", 
  download, 
  ariaLabel 
}: BrutalistButtonProps) {
  const baseStyle = "group relative inline-flex items-center justify-center px-6 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  const primaryStyle = "bg-dark text-white border-2 border-dark hover:bg-primary hover:border-primary shadow-[4px_4px_0px_0px_rgba(208,94,53,1)] hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-[2px] hover:-translate-x-[2px] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none";
  const secondaryStyle = "bg-white text-dark border-2 border-dark shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-[6px_6px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-[2px] hover:-translate-x-[2px] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none";
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href}
      onClick={onClick}
      download={download}
      aria-label={ariaLabel}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}
