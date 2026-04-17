"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCE } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { useInView } from "@/hooks/useInView";

function ExperienceCard({
  exp,
  index,
  isLast,
}: {
  exp: (typeof EXPERIENCE)[number];
  index: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInView();
  const Icon = isLast ? GraduationCap : Briefcase;

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
      className="relative group"
    >
      {/* Timeline node */}
      <div
        className="absolute -left-[2.75rem] md:-left-[3.75rem] top-5 w-5 h-5 bg-white border-4 border-dark group-hover:border-primary group-hover:scale-125 transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] group-hover:shadow-none"
        aria-hidden="true"
      />

      <div className="bg-white border-2 border-dark p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-[8px_8px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <h3 className="text-xl md:text-2xl font-black uppercase text-dark flex items-center gap-2.5">
            <Icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
            {exp.role}
          </h3>
          <span className="font-mono text-xs font-bold text-white bg-dark px-3 py-1.5 inline-block whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(208,94,53,1)] self-start sm:self-auto">
            {exp.year}
          </span>
        </div>
        <h4 className="text-sm font-bold text-primary mb-3 tracking-wide">{exp.company}</h4>
        <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">
          {exp.desc}
        </p>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <SectionHeader
          title="Experience Map"
          subtitle="A timeline of delivering value through code and architecture."
        />
      </div>

      <div className="relative ml-3 md:ml-6 border-l-4 border-dark pl-8 md:pl-12 space-y-8 pb-2">
        {EXPERIENCE.map((exp, idx) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            index={idx}
            isLast={idx === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
