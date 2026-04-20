"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Cpu, Zap, Activity, Layers } from "lucide-react";
import { SKILLS, SkillGroup } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { WireframeCube } from "./WireframeCube";

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.08,
    },
  }),
};

function FeaturedCard({ skill }: { skill: SkillGroup }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={reduce ? undefined : cardVariants}
      custom={0}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="relative col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 bg-dark rounded-2xl p-8 md:p-10 overflow-hidden text-white flex flex-col justify-between min-h-[380px] border border-dark"
    >
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-bold tracking-widest uppercase mb-6 border border-white/5">
          {skill.badge}
        </div>

        <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4 max-w-md uppercase">
          {skill.featuredTitle}
        </h3>

        <p className="text-white/60 text-base font-normal max-w-sm leading-relaxed mb-8">
          {skill.featuredDesc}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {skill.items.slice(0, 4).map((item, i) => (
          <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 font-bold text-[11px] uppercase tracking-wider">
            {item}
          </div>
        ))}
      </div>

      {/* Decorative Cube - even subtler */}
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-72 h-72 text-white/[0.03] pointer-events-none">
        <WireframeCube className="w-full h-full rotate-12" />
      </div>
    </motion.div>
  );
}

function SecondaryCard({ skill, index }: { skill: SkillGroup; index: number }) {
  const reduce = useReducedMotion();

  const Icon = {
    cpu: Cpu,
    zap: Zap,
    activity: Activity,
    layers: Layers,
  }[skill.iconName || "zap"];

  return (
    <motion.div
      variants={reduce ? undefined : cardVariants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-2xl p-8 flex flex-col justify-between border border-dark hover:border-dark/5 transition-colors group"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-dark flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            {Icon && <Icon className="w-5 h-5" />}
          </div>
          <h4 className="font-bold text-dark tracking-tight uppercase text-sm">
            {skill.category}
          </h4>
        </div>
        {skill.badge && (
          <div className="px-2 py-0.5 rounded bg-white text-dark text-[8px] font-black uppercase tracking-tighter border border-dark">
            {skill.badge}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {skill.items.slice(0, 4).map((item, i) => (
          <div key={i} className="px-3 py-1.5 rounded-md bg-white text-dark/60 font-bold text-[10px] uppercase tracking-wider border border-dark">
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 md:mb-56 scroll-mt-24">
      {/* Visual Matrix Header Label */}
      <div className="flex items-center gap-2 mb-8 opacity-20">
        <Monitor className="w-3 h-3" />
        <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
          VARIATION 06 // VISUAL MATRIX
        </span>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Technical Arsenal"
          subtitle="Deep expertise across the modern full-stack and AI landscape."
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill, idx) => {
          if (skill.isFeatured) {
            return <FeaturedCard key={idx} skill={skill} />;
          }
          return <SecondaryCard key={idx} skill={skill} index={idx} />;
        })}
      </div>
    </section>
  );
}
