"use client";

import { Blocks } from "lucide-react";
import { SKILLS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { useInView } from "@/hooks/useInView";

export function SkillsSection() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <SectionHeader
          title="Technical Arsenal"
          subtitle="Deep expertise across the modern full-stack and AI landscape."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SKILLS.map((skillGroup, idx) => (
          <SkillCard key={idx} skillGroup={skillGroup} index={idx} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({
  skillGroup,
  index,
}: {
  skillGroup: { category: string; items: string[] };
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        transitionDelay: `${index * 90}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease, transform 0.25s ease",
      }}
      className="bg-white border-2 border-dark p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-[8px_8px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-1 flex flex-col group"
    >
      <h3 className="font-mono text-[11px] font-bold text-primary mb-4 tracking-[0.18em] uppercase border-b-2 border-slate-100 pb-3">
        {`// ${skillGroup.category}`}
      </h3>
      <ul className="flex flex-col gap-2.5 flex-1">
        {skillGroup.items.map((item, i) => (
          <li
            key={i}
            className="font-bold text-base flex items-center gap-2.5 text-slate-800 group/item"
          >
            <Blocks
              className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-primary transition-colors shrink-0"
              aria-hidden="true"
            />
            <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
