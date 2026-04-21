interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  index?: string;
}

export function SectionHeader({ title, subtitle, index }: SectionHeaderProps) {
  return (
    <header className="mb-20 md:mb-32 flex flex-col gap-4 relative">
      {index && (
        <span className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-accent/80 ml-1">
          {index}
        </span>
      )}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[14px] sm:text-[16px] text-white/40 max-w-2xl leading-relaxed mt-2">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-accent/20 hidden md:block" />
    </header>
  );
}
