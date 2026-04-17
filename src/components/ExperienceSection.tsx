"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCE } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.09 },
  }),
};

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Experience Map"
          subtitle="A timeline of delivering value through code and architecture."
        />
      </motion.div>

      {/* Timeline */}
      <div className="relative ml-3 md:ml-5 border-l-[3px] border-dark/20 pl-8 md:pl-12 space-y-6 pb-2">
        {EXPERIENCE.map((exp, idx) => {
          const isLast = idx === EXPERIENCE.length - 1;
          const Icon = isLast ? GraduationCap : Briefcase;

          return (
            <motion.article
              key={exp.id}
              custom={idx}
              variants={reduce ? undefined : cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Timeline node */}
              <motion.div
                whileHover={reduce ? {} : { scale: 1.25 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="absolute -left-[2.65rem] md:-left-[3.65rem] top-[1.35rem] w-4 h-4 bg-white border-[3px] border-dark/40 group-hover:border-primary transition-colors duration-250 shadow-[1px_1px_0px_0px_rgba(17,17,17,0.3)]"
                aria-hidden="true"
              />

              <motion.div
                whileHover={reduce ? {} : { y: -2, boxShadow: "6px 6px 0px 0px rgba(208,94,53,1)" }}
                transition={{ duration: 0.18 }}
                className="bg-white border-2 border-dark p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-black uppercase text-dark flex items-center gap-2.5 leading-tight">
                    <Icon className="w-[18px] h-[18px] text-primary shrink-0" aria-hidden="true" />
                    {exp.role}
                  </h3>
                  <span className="font-mono text-[10px] font-bold text-white bg-dark px-3 py-1.5 inline-block whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(208,94,53,1)] self-start shrink-0">
                    {exp.year}
                  </span>
                </div>

                {/* Company */}
                <p className="text-sm font-bold text-primary mb-3 tracking-wide">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-[14px] text-slate-600 leading-[1.75] font-normal">
                  {exp.desc}
                </p>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
