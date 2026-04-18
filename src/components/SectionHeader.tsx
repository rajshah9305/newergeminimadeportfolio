interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-12 md:mb-16 border-l-[6px] border-primary pl-5 md:pl-7">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] text-slate-600 max-w-xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
