"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Cpu, Zap, Activity, Layers } from "lucide-react";
import { SKILLS, SkillGroup } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { WireframeCube } from "./WireframeCube";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.1,
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
      className="relative col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 bg-primary rounded-[2.5rem] p-8 md:p-12 overflow-hidden text-white flex flex-col justify-between min-h-[400px]"
    >
      <div className="relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase mb-8">
          {skill.badge}
        </div>

        <h3 className="text-4xl md:text-5xl font-black leading-[0.9] mb-6 max-w-md uppercase">
          {skill.featuredTitle}
        </h3>

        <p className="text-white/80 text-lg md:text-xl font-medium max-w-sm leading-relaxed mb-12">
          {skill.featuredDesc}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
        {skill.items.slice(0, 3).map((item, i) => (
          <div key={i} className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 font-bold text-sm">
            {item}
          </div>
        ))}
      </div>

      {/* Decorative Cube */}
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-80 h-80 text-white/10 pointer-events-none">
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
      className="bg-white rounded-[2rem] p-8 flex flex-col justify-between border border-slate-100 shadow-sm"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary">
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          <h4 className="font-bold text-dark tracking-tight uppercase">
            {skill.category}
          </h4>
        </div>
        {skill.badge && (
          <div className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-black uppercase">
            {skill.badge}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.slice(0, 3).map((item, i) => (
          <div key={i} className="px-4 py-2 rounded-xl bg-slate-50 text-dark/70 font-bold text-[12px] uppercase tracking-wider">
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
    <section id="expertise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-48 md:mb-64 scroll-mt-24">
      {/* Visual Matrix Header Label */}
      <div className="flex items-center gap-3 mb-8 opacity-40">
        <Monitor className="w-4 h-4" />
        <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
          VARIATION 06 // VISUAL MATRIX
        </span>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Technical Arsenal"
          subtitle="Deep expertise across the modern full-stack and AI landscape."
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
