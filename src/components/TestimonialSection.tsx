"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const cardVariants = {
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

export function TestimonialSection() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 md:mb-56 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Field Reports"
          subtitle="Direct feedback from industry partners and engineering leadership."
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t, idx) => (
          <motion.article
            key={t.id}
            custom={idx}
            variants={reduce ? undefined : cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white border border-dark rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-dark/5 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-white text-dark flex items-center justify-center font-black rounded-lg border border-dark group-hover:bg-primary group-hover:text-white transition-colors">
                {t.avatar}
              </div>
              <div>
                <h4 className="font-black text-dark uppercase tracking-tight text-xs">{t.author}</h4>
                <p className="font-mono text-[9px] text-primary font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>

            <p className="text-dark italic leading-relaxed text-[15px] relative z-10">
              &quot;{t.quote}&quot;
            </p>

            <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <Quote className="w-12 h-12 text-dark" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
