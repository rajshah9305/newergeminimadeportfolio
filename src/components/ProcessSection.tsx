"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: i * 0.15,
    },
  }),
};

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-48 md:mb-64 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="System Lifecycle"
          subtitle="A standardized engineering methodology for delivering mission-critical software."
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
        {PROCESS.map((p, idx) => (
          <motion.div
            key={p.step}
            custom={idx}
            variants={reduce ? undefined : stepVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative"
          >
            <div className="h-full bg-white border-2 border-dark p-8 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(208,94,53,1)] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300">
              <span className="font-mono text-4xl font-black text-dark/10 group-hover:text-primary/20 transition-colors duration-300 block mb-4">
                {p.step}
              </span>
              <h3 className="font-black text-xl text-dark mb-4 tracking-tighter uppercase leading-tight">
                {p.title}
              </h3>
              <div className="w-10 h-1 bg-primary mb-6 group-hover:w-full transition-all duration-500" />
              <p className="text-slate-600 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>

            {idx < PROCESS.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-dark text-white flex items-center justify-center border-2 border-primary rotate-45">
                   <div className="-rotate-45 font-black text-xs">→</div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
