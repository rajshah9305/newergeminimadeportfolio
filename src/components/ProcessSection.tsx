"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const stepVariants = {
  hidden: { opacity: 0, y: 15 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 md:mb-56 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="System Lifecycle"
          subtitle="A standardized engineering methodology for delivering mission-critical software."
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {PROCESS.map((p, idx) => (
          <motion.div
            key={p.step}
            custom={idx}
            variants={reduce ? undefined : stepVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative h-full"
          >
            <div className="h-full bg-white border border-dark rounded-2xl p-8 hover:border-dark/5 transition-colors">
              <span className="font-mono text-3xl font-black text-dark group-hover:text-primary/10 transition-colors block mb-4">
                {p.step}
              </span>
              <h3 className="font-black text-lg text-dark mb-4 tracking-tight uppercase leading-tight">
                {p.title}
              </h3>
              <p className="text-dark text-[13px] leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
