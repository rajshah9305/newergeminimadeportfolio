"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { EXPERIENCE } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 md:mb-56 scroll-mt-24"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Experience Map"
          subtitle="A timeline of delivering value through code and architecture."
        />
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={reduce ? undefined : containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {EXPERIENCE.map((exp, idx) => {
          const isLast = idx === EXPERIENCE.length - 1;
          const Icon = isLast ? GraduationCap : Briefcase;

          return (
            <motion.article
              key={exp.id}
              custom={idx}
              variants={reduce ? undefined : cardVariants}
              className="group relative flex flex-col bg-white overflow-hidden rounded-2xl border border-slate-100 hover:border-dark/5 transition-colors p-8"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-8">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-dark border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-wider px-2 py-1 bg-slate-50 text-slate-400 rounded-md border border-slate-100">
                  {exp.year}
                </span>
              </div>

              {/* Role & Company */}
              <div className="mb-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-dark leading-tight mb-1">
                  {exp.role}
                </h3>
                <p className="text-[12px] font-bold tracking-wide text-primary uppercase">
                  {exp.company}
                </p>
              </div>

              {/* Description */}
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal mb-8 flex-1">
                {exp.desc}
              </p>

              {/* Skills chips */}
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 font-mono text-[9px] font-bold tracking-wider uppercase bg-slate-50 text-slate-400 border border-slate-100 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Ghost index watermark - even more subtle */}
              <div
                className="absolute bottom-2 right-4 pointer-events-none select-none"
                aria-hidden="true"
              >
                <span className="text-[64px] font-black leading-none text-dark/[0.015] block">
                  {String(idx + 1)}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
