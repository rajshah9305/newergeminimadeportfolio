"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, Check, Copy } from "lucide-react";
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
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ContactSection() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white text-dark py-40 md:py-56 relative overflow-hidden border-t border-dark scroll-mt-24"
    >
      <motion.div
        variants={reduce ? undefined : container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div variants={fadeUp} className="mb-6">
           <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-primary border border-primary/20 px-3 py-1 rounded-full">
             Available for work
           </span>
        </motion.div>

        <motion.h2
          variants={reduce ? undefined : fadeUp}
          className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-dark"
        >
          Let&apos;s build
          <br />
          together.
        </motion.h2>

        <motion.p
          variants={reduce ? undefined : fadeUp}
          className="text-[15px] text-dark max-w-md mb-12 leading-relaxed"
        >
          Currently accepting new opportunities. Whether you have a specific project in mind or just want to say hi, my inbox is always open.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm justify-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-center gap-2.5 bg-dark text-white px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-primary transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>

            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2.5 bg-white text-dark px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-wider rounded-xl border border-dark hover:bg-dark hover:text-white transition-all"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy Email"}
            </button>
          </div>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-white text-dark border border-dark rounded-xl hover:bg-dark hover:text-white transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
