"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="w-full bg-primary py-32 md:py-48 scroll-mt-[80px] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-6"
          >
            04 // INQUIRIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white mb-8"
          >
            READY TO <span className="text-outline-accent">UPGRADE?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-[16px] max-w-xl leading-relaxed"
          >
            I am currently open to new opportunities, technical partnerships, and high-impact engineering projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 group relative p-10 bg-secondary rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[320px]"
          >
            <div className="relative z-10">
              <div className="p-4 bg-accent text-primary rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform duration-500">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-white/40 font-mono tracking-widest uppercase text-[12px]">Initialize connection via email</p>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                {PERSONAL_INFO.email}
              </span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                <Check className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          </motion.a>

          <div className="flex flex-col gap-6">
            <motion.button
              onClick={copyEmail}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group flex-1 p-8 bg-secondary rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col items-center justify-center text-center"
            >
              <div className="p-3 bg-white/5 rounded-xl mb-4 group-hover:bg-white/10 transition-colors">
                {copied ? <Check className="w-5 h-5 text-accent" /> : <Copy className="w-5 h-5 text-white/60" />}
              </div>
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                {copied ? "Address Copied" : "Copy Address"}
              </span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 h-full"
            >
              <a href={PERSONAL_INFO.github} className="flex-1 flex flex-col items-center justify-center p-8 bg-secondary rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all group">
                <Github className="w-6 h-6 text-white/60 group-hover:text-white mb-3" />
                <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-white/20 group-hover:text-white/40">GitHub</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} className="flex-1 flex flex-col items-center justify-center p-8 bg-secondary rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all group">
                <Linkedin className="w-6 h-6 text-white/60 group-hover:text-white mb-3" />
                <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-white/20 group-hover:text-white/40">LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
