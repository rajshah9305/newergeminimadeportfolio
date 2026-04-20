interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-16 md:mb-20 border-l-4 border-primary pl-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] text-slate-500 max-w-xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
