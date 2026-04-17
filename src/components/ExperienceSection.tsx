"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCE } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title="Experience Map"
          subtitle="A timeline of delivering value through code and architecture."
        />
      </motion.div>

      <div className="relative ml-3 md:ml-6 border-l-4 border-dark pl-8 md:pl-12 space-y-8 pb-2">
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
              viewport={{ once: true, margin: "-60px" }}
              className="relative group"
            >
              {/* Timeline node */}
              <motion.div
                whileHover={reduce ? {} : { scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="absolute -left-[2.75rem] md:-left-[3.75rem] top-5 w-5 h-5 bg-white border-4 border-dark group-hover:border-primary transition-colors duration-300 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] group-hover:shadow-none"
                aria-hidden="true"
              />

              <motion.div
                whileHover={reduce ? {} : { y: -3, boxShadow: "8px 8px 0px 0px rgba(208,94,53,1)" }}
                transition={{ duration: 0.2 }}
                className="bg-white border-2 border-dark p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl font-black uppercase text-dark flex items-center gap-2.5">
                    <Icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs font-bold text-white bg-dark px-3 py-1.5 inline-block whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(208,94,53,1)] self-start sm:self-auto">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-primary mb-3 tracking-wide">{exp.company}</h4>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">{exp.desc}</p>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
