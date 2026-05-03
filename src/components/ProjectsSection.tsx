"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit, Cpu, Database, ExternalLink, Github,
  Zap, Layers, Code2, Bot, ArrowUpRight,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO, type Project } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { BrutalistButton } from "./BrutalistButton";

const EASE_OUT_EXPO: [number, number, number, number] = [0.33, 1, 0.68, 1];

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
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: index * 0.05 }}
      className="group grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] border-b-2 border-black last:border-b-0 hover:bg-accent/5 transition-colors duration-500 overflow-hidden"
    >
      {/* Left panel */}
      <div className={`flex flex-col justify-between p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div>
          {/* Number + featured */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-[11px] font-bold text-accent tracking-[0.25em]">
              {project.number.padStart(2, "0")}
            </span>
            {project.featured && (
              <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-highlight text-black border border-black">
                FEATURED
              </span>
            )}
          </div>

          {/* Icon */}
          <motion.div
            whileHover={{ rotate: -15, scale: 1.1 }}
            className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black mb-6 transition-all duration-300"
            aria-hidden="true"
          >
            <ProjectIcon icon={project.icon} />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-dark leading-tight mb-3 transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>

          {/* Stat */}
          <span className="font-mono text-[11px] font-bold text-accent tracking-[0.18em] uppercase bg-accent/5 px-2 py-1 border border-accent/10">
            {project.stat}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 mt-10">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live site for ${project.title}`}
              className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase text-dark/40 hover:text-accent transition-colors focus:outline-none"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase text-dark/40 hover:text-accent transition-colors focus:outline-none"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Right panel */}
      <div className={`relative flex flex-col justify-between p-8 md:p-12 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        {/* Subtle background text for "standout" factor */}
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none translate-x-1/4 -translate-y-1/4">
          <span className="text-[12rem] font-black uppercase leading-none">
            {project.icon}
          </span>
        </div>

        <p className="relative z-10 text-[16px] text-dark/75 leading-[1.8] mb-8 transition-colors duration-300">
          {project.desc}
        </p>

        <div className="relative z-10 flex flex-wrap gap-2.5 mb-10" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-dark/50 border border-black/10 bg-white group-hover:border-accent/30 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex justify-end">
          <a
            href={project.links.live ?? project.links.github ?? "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={`View more details about ${project.title}`}
            className="w-14 h-14 bg-black text-white flex items-center justify-center border-2 border-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 hover:bg-accent hover:border-accent hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
          >
            <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="w-full border-b-2 border-black scroll-mt-[72px] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <SectionHeader
          title="Selected Works"
          subtitle="Production-grade systems, AI orchestrations, and open-source contributions."
          index="// 02 — WORK"
        />

        <div className="border-2 border-black overflow-hidden bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <BrutalistButton href={PERSONAL_INFO.github} ariaLabel={`Explore all repositories of ${PERSONAL_INFO.name} on GitHub`}>
            <Github className="w-4 h-4" aria-hidden="true" />
            Explore All Repositories
          </BrutalistButton>
        </div>
      </div>
    </section>
  );
}
