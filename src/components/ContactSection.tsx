"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";

const SOCIAL_LINKS = [
  { href: PERSONAL_INFO.github, label: "GitHub Profile", Icon: Github },
  { href: PERSONAL_INFO.linkedin, label: "LinkedIn Profile", Icon: Linkedin },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function ContactSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="bg-dark text-white py-28 md:py-36 relative overflow-hidden scroll-mt-20"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute right-[-120px] top-[-120px] w-[500px] h-[500px] bg-primary opacity-20 blur-[120px]" />
      </div>

      {/* Decorative Zap */}
      {!reduce && (
        <motion.div
          initial={{ rotate: -15, scale: 0.85, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 0.07 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="absolute -right-16 -top-16 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Zap className="w-[360px] h-[360px] md:w-[480px] md:h-[480px]" />
        </motion.div>
      )}

      <motion.div
        variants={reduce ? undefined : container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
      >
        <motion.h2
          variants={reduce ? undefined : fadeUp}
          className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9] hover:text-primary transition-colors duration-500"
        >
          Initiate
          <br />
          Protocol
        </motion.h2>

        <motion.p
          variants={reduce ? undefined : fadeUp}
          className="text-sm md:text-base text-slate-400 max-w-md mb-12 font-mono uppercase tracking-[0.15em] leading-relaxed"
        >
          Currently accepting new opportunities.
          <br className="hidden sm:block" />
          Let&apos;s build something scalable.
        </motion.p>

        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-transparent hover:bg-white hover:text-dark hover:border-dark shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            Email Me
          </a>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-white/10 text-white border-2 border-white/10 hover:bg-white hover:text-dark hover:border-dark hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(208,94,53,1)] active:translate-y-0.5 active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
