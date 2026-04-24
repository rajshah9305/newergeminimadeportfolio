interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  index?: string;
}

export function SectionHeader({ title, subtitle, index }: SectionHeaderProps) {
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0];

  return (
    <header className="mb-20 md:mb-32 flex flex-col gap-3 relative">
      {/* Micro-data marker */}
      <div className="absolute -top-12 left-0 font-mono text-[8px] text-dark/20 uppercase tracking-[0.4em] hidden sm:block select-none">
        LOG_EVENT: {index?.split(' ')[2] || 'SECTION'}_INIT | REF: 0x{Math.floor(Math.random() * 16777215).toString(16).toUpperCase()} | {timestamp}
      </div>

      {index && (
        <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-accent">
          {index}
        </span>
      )}
      <div className="flex items-center gap-5">
        <div className="w-1.5 h-14 bg-accent shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]" aria-hidden="true" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.92] text-dark">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-1 text-[14px] text-dark/50 max-w-xl font-mono uppercase tracking-[0.12em] leading-relaxed pl-6 border-l border-black/5">
          {subtitle}
        </p>
      )}
    </header>
  );
}
