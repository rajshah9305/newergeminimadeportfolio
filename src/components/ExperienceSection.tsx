"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { EXPERIENCE } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-primary py-32 md:py-48 scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader
          title="Experience Map"
          subtitle="A timeline of delivering production-ready systems and architectural excellence."
          index="03 // TIMELINE"
        />

        <div className="relative space-y-12">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />

          {EXPERIENCE.map((exp, idx) => {
            const isLast = idx === EXPERIENCE.length - 1;
            const Icon = isLast ? GraduationCap : Briefcase;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-secondary p-8 rounded-3xl border border-white/5 hover:border-accent/20 transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-accent/10 text-accent rounded-xl">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[11px] text-accent/80 tracking-widest uppercase">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/50 text-[14px] leading-relaxed mb-8">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono tracking-widest text-white/30 uppercase">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center point */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary border-2 border-accent rounded-full -translate-x-1/2 z-10 hidden md:block shadow-[0_0_10px_#00FF94]" />

                {/* Date side */}
                <div className={`w-full md:w-[45%] flex items-center gap-4 ${
                  isEven ? "md:justify-end" : "md:justify-start"
                }`}>
                  <div className="flex items-center gap-3 text-white/30 group-hover:text-white transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-[12px] font-bold tracking-[0.2em] uppercase">
                      {exp.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
