"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit, Cpu, Database,
  ExternalLink, Github, ArrowRight,
  Zap, Layers, Code2, Bot,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO, type Project } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { BrutalistButton } from "./BrutalistButton";

function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  const cls = "w-5 h-5";
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

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" as const, delay: i * 0.07 },
  }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      custom={index}
      variants={reduce ? undefined : cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={reduce ? {} : { y: -2, boxShadow: "8px 8px 0px 0px rgba(208,94,53,1)" }}
      className="group relative bg-white border-2 border-dark flex flex-col lg:flex-row overflow-hidden shadow-[5px_5px_0px_0px_rgba(17,17,17,1)] transition-shadow duration-250"
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-0 right-0 z-20 bg-primary text-white font-mono text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1"
          aria-label="Featured project"
        >
          FEATURED
        </div>
      )}

      {/* ── Left panel ── */}
      <div className="lg:w-[40%] shrink-0 border-b-2 lg:border-b-0 lg:border-r-2 border-dark bg-slate-50 group-hover:bg-[#F0F2F5] transition-colors duration-250 p-8 flex flex-col justify-between relative overflow-hidden">
        {/* Ghost number */}
        <div
          className="absolute bottom-4 right-4 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="text-[120px] font-black leading-none text-dark/[0.04] group-hover:text-dark/[0.07] transition-opacity duration-300 block">
            {project.number}
          </span>
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={reduce ? {} : { scale: 1.06 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="w-12 h-12 bg-dark text-white flex items-center justify-center border-2 border-white shadow-[3px_3px_0px_0px_rgba(208,94,53,1)] mb-5"
            aria-hidden="true"
          >
            <ProjectIcon icon={project.icon} />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-dark leading-tight break-words">
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div className="relative z-10 flex items-center gap-5 mt-7">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase text-dark/60 hover:text-primary transition-colors focus:outline-none focus:text-primary group/link"
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
              className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase text-dark/60 hover:text-primary transition-colors focus:outline-none focus:text-primary group/link"
            >
              <Github className="w-3.5 h-3.5 group-hover/link:rotate-12 transition-transform" aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-between gap-6">
        <div className="space-y-5">
          <p className="text-[15px] text-slate-600 leading-[1.75] font-normal">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-slate-100 font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-slate-700 border border-slate-200 hover:border-primary/30 hover:bg-primary/5 cursor-default transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-slate-100 pt-5">
          <span className="font-mono text-[11px] font-bold text-primary tracking-[0.15em] uppercase">
            STAT: {project.stat}
          </span>
          <motion.a
            href={project.links.live ?? project.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title}`}
            whileHover={reduce ? {} : { x: 2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shrink-0"
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Selected Works"
          subtitle="Production-grade systems, AI orchestrations, and open-source contributions."
        />
      </motion.div>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <BrutalistButton href={PERSONAL_INFO.github} className="w-full sm:w-auto">
          <Github className="w-4 h-4" aria-hidden="true" />
          View All Repositories
        </BrutalistButton>
      </div>
    </section>
  );
}
