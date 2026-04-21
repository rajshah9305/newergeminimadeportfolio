"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-secondary rounded-[2rem] border border-white/5 hover:border-accent/20 transition-all duration-500 overflow-hidden"
    >
      <div className="p-8 md:p-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-500">
            <ProjectIcon icon={project.icon} />
          </div>
          <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
            Project {project.number}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono tracking-widest text-white/40 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex gap-4">
            {project.links.github && (
              <a href={project.links.github} className="text-white/30 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} className="text-white/30 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          <a
            href={project.links.live || project.links.github}
            className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-accent uppercase hover:gap-3 transition-all"
          >
            Details <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="w-full bg-primary py-32 md:py-48 scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader
          title="Selected Works"
          subtitle="A collection of high-performance systems and intelligent agent architectures."
          index="02 // PORTFOLIO"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <BrutalistButton href={PERSONAL_INFO.github}>
            <Github className="w-4 h-4" />
            Explore More on GitHub
          </BrutalistButton>
        </div>
      </div>
    </section>
  );
}
