"use client";

import { useState } from "react";
import {
  BrainCircuit,
  Cpu,
  Database,
  ExternalLink,
  Github,
  ArrowRight,
  Zap,
  Layers,
  Code2,
  Bot,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO, type Project } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { BrutalistButton } from "./BrutalistButton";
import { useInView } from "@/hooks/useInView";

// Render function — never store JSX in module-level objects (breaks SSR)
function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  const cls = "w-6 h-6";
  switch (icon) {
    case "brain":    return <BrainCircuit className={cls} />;
    case "cpu":      return <Cpu className={cls} />;
    case "database": return <Database className={cls} />;
    case "zap":      return <Zap className={cls} />;
    case "layers":   return <Layers className={cls} />;
    case "code":     return <Code2 className={cls} />;
    case "bot":      return <Bot className={cls} />;
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity 0.55s ease, transform 0.55s ease, box-shadow 0.25s ease",
      }}
      className={`group relative bg-white border-2 border-dark flex flex-col lg:flex-row overflow-hidden ${
        hovered
          ? "shadow-[10px_10px_0px_0px_rgba(208,94,53,1)] -translate-y-0.5"
          : "shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]"
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-0 right-0 z-20 bg-primary text-white font-mono text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1">
          FEATURED
        </div>
      )}

      {/* Left panel */}
      <div
        className={`lg:w-[42%] shrink-0 border-b-2 lg:border-b-0 lg:border-r-2 border-dark p-8 flex flex-col justify-between relative overflow-hidden min-h-[220px] transition-colors duration-300 ${
          hovered ? "bg-slate-100" : "bg-slate-50"
        }`}
      >
        {/* Ghost number */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-[180px] font-black leading-none text-black transition-opacity duration-300"
            style={{ opacity: hovered ? 0.06 : 0.04 }}
          >
            {project.number}
          </span>
        </div>

        <div className="relative z-10">
          {/* Icon box */}
          <div
            className="w-14 h-14 bg-dark text-white flex items-center justify-center border-2 border-white shadow-[3px_3px_0px_0px_rgba(208,94,53,1)] mb-6 transition-transform duration-300"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
            aria-hidden="true"
          >
            <ProjectIcon icon={project.icon} />
          </div>

          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-dark leading-tight break-words">
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div className="relative z-10 flex gap-5 mt-6">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase hover:text-primary transition-colors focus:outline-none focus:text-primary group/link"
            >
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:rotate-12 transition-transform" aria-hidden="true" />
              Live App
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase hover:text-primary transition-colors focus:outline-none focus:text-primary group/link"
            >
              <Github className="w-3.5 h-3.5 group-hover/link:rotate-12 transition-transform" aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
        <div>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-7 font-medium">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 font-mono text-[11px] font-bold tracking-widest uppercase text-dark border border-slate-200 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t-2 border-slate-100 pt-5">
          <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
            STAT: {project.stat}
          </span>
          <a
            href={project.links.live ?? project.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title}`}
            className="w-10 h-10 bg-dark text-white flex items-center justify-center hover:bg-primary active:scale-90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shrink-0 group/arrow"
          >
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover/arrow:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <SectionHeader
          title="Selected Works"
          subtitle="Production-grade systems, AI orchestrations, and open-source contributions."
        />
      </div>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <BrutalistButton href={PERSONAL_INFO.github} className="w-full sm:w-auto">
          <Github className="w-4 h-4" aria-hidden="true" />
          View All Repositories
        </BrutalistButton>
      </div>
    </section>
  );
}
