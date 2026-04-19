"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.1,
    },
  }),
};

export function TestimonialSection() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-48 md:mb-64 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Field Reports"
          subtitle="Direct feedback from industry partners and engineering leadership."
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.article
            key={t.id}
            custom={idx}
            variants={reduce ? undefined : cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={reduce ? {} : {
              y: -8,
              boxShadow: "12px 12px 0px 0px rgba(208,94,53,1)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="bg-white border-2 border-dark p-8 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote className="w-16 h-16 text-dark" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark text-white flex items-center justify-center font-black border-2 border-primary shadow-[2px_2px_0px_0px_rgba(208,94,53,1)]">
                {t.avatar}
              </div>
              <div>
                <h4 className="font-black text-dark uppercase tracking-tight text-sm">{t.author}</h4>
                <p className="font-mono text-[10px] text-primary font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>

            <p className="text-slate-600 italic leading-relaxed text-[15px] relative z-10">
              &quot;{t.quote}&quot;
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
