"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCE } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="w-full border-b-2 border-dark scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader
          title="Experience Map"
          subtitle="A timeline of delivering value through code and architecture."
          index="// 03 — EXPERIENCE"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-dark overflow-hidden">
          {EXPERIENCE.map((exp, idx) => {
            const isLast = idx === EXPERIENCE.length - 1;
            const Icon = isLast ? GraduationCap : Briefcase;

            return (
              <motion.article
                key={exp.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group flex flex-col bg-white hover:bg-dark transition-colors duration-300 ${
                  idx < EXPERIENCE.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-dark" : ""
                }`}
              >
                {/* Top accent */}
                <div className={`h-1.5 w-full ${idx === 1 ? "bg-primary" : "bg-dark group-hover:bg-primary transition-colors duration-300"}`} />

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  {/* Year badge */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-dark/30 group-hover:text-white/30 transition-colors duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-mono text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 border-2 ${
                      idx === 1
                        ? "bg-primary text-white border-primary"
                        : "bg-dark text-white border-dark group-hover:bg-primary group-hover:border-primary transition-colors duration-300"
                    }`}>
                      {exp.year}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 flex items-center justify-center border-2 mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                    idx === 1
                      ? "bg-primary text-white border-primary"
                      : "bg-dark text-white border-dark group-hover:bg-primary group-hover:border-primary transition-colors duration-300"
                  }`} aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-black uppercase tracking-tight text-dark group-hover:text-white leading-tight mb-2 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-primary mb-6">
                    {exp.company}
                  </p>

                  <div className="h-px bg-dark/10 group-hover:bg-white/10 mb-6 transition-colors duration-300" />

                  <p className="text-[14px] text-dark/60 group-hover:text-white/60 leading-[1.8] flex-1 transition-colors duration-300">
                    {exp.desc}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5 mt-8">
                    {exp.skills.map((skill) => (
                      <span key={skill}
                        className="px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.12em] uppercase border border-dark/20 group-hover:border-white/20 text-dark/50 group-hover:text-white/50 transition-colors duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
