"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { EXPERIENCE } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 scroll-mt-24"
    >
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

      {/* Cards grid */}
      <motion.div
        variants={reduce ? undefined : containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-dark shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]"
      >
        {EXPERIENCE.map((exp, idx) => {
          const isLast = idx === EXPERIENCE.length - 1;
          const Icon = isLast ? GraduationCap : Briefcase;
          const isMiddle = idx === 1;

          return (
            <motion.article
              key={exp.id}
              custom={idx}
              variants={reduce ? undefined : cardVariants}
              className={[
                "group relative flex flex-col bg-white overflow-hidden",
                "border-b-2 md:border-b-0 lg:border-b-0 border-dark",
                !isLast ? "md:border-r-2 lg:border-r-2 lg:border-dark" : "",
              ].join(" ")}
            >
              {/* Top accent bar */}
              <div
                className={[
                  "h-1 w-full",
                  isMiddle ? "bg-primary" : "bg-dark",
                ].join(" ")}
                aria-hidden="true"
              />

              {/* Index label */}
              <div className="px-8 pt-8 pb-0 flex items-start justify-between">
                <span
                  className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-dark/30 select-none"
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className={[
                    "font-mono text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border",
                    isMiddle
                      ? "bg-primary text-white border-primary shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
                      : "bg-dark text-white border-dark shadow-[2px_2px_0px_0px_rgba(208,94,53,1)]",
                  ].join(" ")}
                >
                  {exp.year}
                </span>
              </div>

              {/* Icon + Role */}
              <div className="px-8 pt-6 pb-0">
                <motion.div
                  whileHover={reduce ? {} : { scale: 1.08, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 340, damping: 20 }}
                  className={[
                    "w-11 h-11 flex items-center justify-center border-2 mb-5",
                    isMiddle
                      ? "bg-primary text-white border-white shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]"
                      : "bg-dark text-white border-white shadow-[3px_3px_0px_0px_rgba(208,94,53,1)]",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>

                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-dark leading-tight mb-1">
                  {exp.role}
                </h3>
                <p
                  className={[
                    "text-[13px] font-bold tracking-wide mb-5",
                    isMiddle ? "text-primary" : "text-dark/50",
                  ].join(" ")}
                >
                  {exp.company}
                </p>
              </div>

              {/* Divider */}
              <div className="mx-8 h-px bg-dark/10 mb-5" aria-hidden="true" />

              {/* Description */}
              <p className="px-8 text-[14px] text-slate-600 leading-[1.8] font-normal flex-1">
                {exp.desc}
              </p>

              {/* Skills chips */}
              <div className="px-8 pt-5 pb-8 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.12em] uppercase border border-dark/20 text-dark/60 bg-slate-50 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover overlay arrow */}
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-8 right-8 pointer-events-none"
                aria-hidden="true"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
              </motion.div>

              {/* Ghost index watermark */}
              <div
                className="absolute -bottom-3 -right-2 pointer-events-none select-none"
                aria-hidden="true"
              >
                <span className="text-[96px] font-black leading-none text-dark/[0.03] group-hover:text-dark/[0.06] transition-opacity duration-300 block">
                  {String(idx + 1)}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Bottom connector bar */}
      <motion.div
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        style={{ originX: 0 }}
        className="h-[3px] bg-gradient-to-r from-dark via-primary to-dark/20 mt-0"
        aria-hidden="true"
      />
    </section>
  );
}
