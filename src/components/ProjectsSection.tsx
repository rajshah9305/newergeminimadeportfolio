"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, ArrowRight, Brain, Cpu, Database, Zap, Layers, Code, Bot } from "lucide-react";
import { PROJECTS, Project, PERSONAL_INFO } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { BrutalistButton } from "./BrutalistButton";
import { Magnetic } from "./Magnetic";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

  const Icon = {
    brain: Brain,
    cpu: Cpu,
    database: Database,
    zap: Zap,
    layers: Layers,
    code: Code,
    bot: Bot,
  }[project.icon || "code"];

  return (
    <motion.article
      variants={reduce ? undefined : cardVariants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] bg-white border border-slate-100 overflow-hidden rounded-2xl hover:border-dark/10 transition-colors"
    >
      {/* ── Left panel ── */}
      <div className="p-8 md:p-10 flex flex-col justify-between bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100">
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Project {project.number}
            </span>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-dark border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
              <Icon className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-dark leading-tight mb-4">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-6 mt-8">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase text-dark/40 hover:text-primary transition-colors focus:outline-none"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
        <div className="space-y-6">
          <p className="text-[15px] text-slate-500 leading-relaxed font-normal">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-white font-mono text-[10px] font-bold tracking-wider uppercase text-slate-500 border border-slate-100 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-slate-50">
          <div className="flex flex-col gap-0.5">
             <span className="font-mono text-[9px] font-bold text-slate-300 uppercase tracking-widest">Performance</span>
             <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-wider">
               {project.stat}
             </span>
          </div>
          <Magnetic strength={0.1}>
            <a
              href={project.links.live ?? project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title}`}
              className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors focus:outline-none"
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 md:mb-56 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
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

      <div className="mt-12 flex justify-center">
        <BrutalistButton href={PERSONAL_INFO.github} className="!shadow-none border border-dark/10 hover:border-dark w-full sm:w-auto">
          <Github className="w-4 h-4" aria-hidden="true" />
          View All Repositories
        </BrutalistButton>
      </div>
    </section>
  );
}
