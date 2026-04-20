"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";

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
    <section id="contact" className="w-full bg-dark border-b-2 border-primary scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-4 block">
              {`// 04 — CONTACT`}
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.88] text-white mb-6">
              Initiate
              <br />
              <span className="text-outline-white">Protocol</span>
            </h2>
            <p className="font-mono text-[12px] text-white/40 uppercase tracking-[0.18em] leading-[1.9] max-w-xs">
              Currently accepting new opportunities.
              <br />
              Let&apos;s build something scalable.
            </p>
          </motion.div>

          {/* Right — actions */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-between px-7 py-5 bg-white text-dark border-2 border-white hover:bg-primary hover:text-white hover:border-primary shadow-[4px_4px_0px_0px_#E8622A] hover:shadow-[6px_6px_0px_0px_#fff] hover:-translate-y-[2px] hover:-translate-x-[2px] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all focus:outline-none group"
            >
              <span className="font-mono text-[12px] font-black uppercase tracking-[0.16em]">
                {PERSONAL_INFO.email}
              </span>
              <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>

            {/* Copy */}
            <button
              onClick={copyEmail}
              className="flex items-center justify-between px-7 py-5 bg-transparent text-white border-2 border-white/20 hover:border-primary hover:text-primary transition-all focus:outline-none group"
            >
              <span className="font-mono text-[12px] font-black uppercase tracking-[0.16em]">
                {copied ? "Copied to clipboard" : "Copy email address"}
              </span>
              {copied ? <Check className="w-5 h-5 shrink-0 text-primary" /> : <Copy className="w-5 h-5 shrink-0" />}
            </button>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {[
                { href: PERSONAL_INFO.github,   label: "GitHub",   Icon: Github },
                { href: PERSONAL_INFO.linkedin, label: "LinkedIn", Icon: Linkedin },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 bg-white/5 text-white border-2 border-white/10 hover:bg-primary hover:border-primary hover:text-white transition-all focus:outline-none font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
