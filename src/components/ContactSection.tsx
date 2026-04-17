"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";

const SOCIAL_LINKS = [
  { href: PERSONAL_INFO.github,   label: "GitHub Profile",   Icon: Github },
  { href: PERSONAL_INFO.linkedin, label: "LinkedIn Profile", Icon: Linkedin },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ContactSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="bg-dark text-white py-32 md:py-40 relative overflow-hidden scroll-mt-20"
    >
      {/* Soft radial glow — subtle, not brown */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute right-[-80px] top-[-80px] w-[480px] h-[480px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      {/* Decorative Zap — very faint */}
      {!reduce && (
        <motion.div
          initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 0.05 }}
          transition={{ duration: 1.4, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="absolute -right-20 -top-20 pointer-events-none select-none text-white"
          aria-hidden="true"
        >
          <Zap className="w-[400px] h-[400px] md:w-[520px] md:h-[520px]" />
        </motion.div>
      )}

      <motion.div
        variants={reduce ? undefined : container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
      >
        {/* Heading — white, hover turns primary */}
        <motion.h2
          variants={reduce ? undefined : fadeUp}
          className="text-6xl sm:text-7xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.88] mb-6 text-white hover:text-primary transition-colors duration-500 cursor-default"
        >
          Initiate
          <br />
          Protocol
        </motion.h2>

        <motion.p
          variants={reduce ? undefined : fadeUp}
          className="text-[13px] text-slate-400 max-w-xs mb-12 font-mono uppercase tracking-[0.18em] leading-[1.9]"
        >
          Currently accepting new opportunities.
          <br />
          Let&apos;s build something scalable.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm justify-center"
        >
          {/* Email CTA */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-primary text-white px-7 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.15em] border-2 border-transparent hover:bg-white hover:text-dark hover:border-dark shadow-[4px_4px_0px_0px_rgba(255,255,255,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
            Email Me
          </a>

          {/* Social icons */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[52px] h-[52px] flex items-center justify-center bg-white/8 text-white border-2 border-white/12 hover:bg-white hover:text-dark hover:border-dark hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(208,94,53,1)] active:translate-y-0.5 active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
