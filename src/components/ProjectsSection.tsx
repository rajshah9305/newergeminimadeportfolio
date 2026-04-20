"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit, Cpu, Database, ExternalLink, Github,
  Zap, Layers, Code2, Bot, ArrowUpRight,
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="group grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] border-b-2 border-dark last:border-b-0 hover:bg-dark transition-colors duration-200"
    >
      {/* Left panel */}
      <div className={`flex flex-col justify-between p-8 md:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-dark ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div>
          {/* Number + featured */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] font-bold text-primary tracking-[0.2em]">
              {project.number}
            </span>
            {project.featured && (
              <span className="font-mono text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 bg-primary text-white">
                FEATURED
              </span>
            )}
          </div>

          {/* Icon */}
          <div className="w-11 h-11 bg-dark group-hover:bg-primary text-white flex items-center justify-center border-2 border-dark group-hover:border-primary mb-5 transition-colors duration-200" aria-hidden="true">
            <ProjectIcon icon={project.icon} />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-dark group-hover:text-white leading-tight mb-2 transition-colors duration-200">
            {project.title}
          </h3>

          {/* Stat */}
          <span className="font-mono text-[11px] font-bold text-primary tracking-[0.15em] uppercase">
            {project.stat}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 mt-8">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase text-dark/50 group-hover:text-white/60 hover:!text-primary transition-colors focus:outline-none">
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Live
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase text-dark/50 group-hover:text-white/60 hover:!text-primary transition-colors focus:outline-none">
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Right panel */}
      <div className={`flex flex-col justify-between p-8 md:p-10 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <p className="text-[15px] text-dark/60 group-hover:text-white/70 leading-[1.8] mb-6 transition-colors duration-200">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span key={tag}
              className="px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.12em] uppercase text-dark/60 group-hover:text-white/60 border border-dark/20 group-hover:border-white/20 bg-transparent transition-colors duration-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          <a
            href={project.links.live ?? project.links.github ?? "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title}`}
            className="w-10 h-10 bg-dark group-hover:bg-primary text-white flex items-center justify-center border-2 border-dark group-hover:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="w-full border-b-2 border-dark scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader
          title="Selected Works"
          subtitle="Production-grade systems, AI orchestrations, and open-source contributions."
          index="// 02 — WORK"
        />

        <div className="border-2 border-dark">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <BrutalistButton href={PERSONAL_INFO.github}>
            <Github className="w-4 h-4" aria-hidden="true" />
            View All Repositories
          </BrutalistButton>
        </div>
      </div>
    </section>
  );
}
