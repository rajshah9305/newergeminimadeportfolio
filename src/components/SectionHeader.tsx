interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-10 md:mb-14 border-l-[6px] border-primary pl-5 md:pl-7">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
