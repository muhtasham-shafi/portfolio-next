"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  const line1 = "Building the";
  const line2 = "future,";
  const line3 = "one prototype";
  const line4 = "at a time.";

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const item: Variants = {
    visible: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hidden: {
      y: 120,
      rotateX: 60,
      opacity: 0,
    },
  };

  return (
    <header className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(76,201,240,0.05)_0%,_transparent_50%)]">
      <div className="noise opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.span 
                key={i}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(76,201,240,0.8)]" 
              />
            ))}
          </div>
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-cyan">
            <ScrambleText text="Dhaka Terminal — 23.8103° N, 90.4125° E" />
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16 mb-20">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-[14vw] sm:text-[10vw] leading-[0.8] font-serif tracking-tighter select-none flex-1 order-2 lg:order-1"
          >
            <div className="overflow-hidden py-1">
              <motion.span variants={item} className="block">
                {line1}
              </motion.span>
            </div>
            <div className="overflow-hidden py-1 flex items-baseline flex-wrap">
              <motion.span variants={item} className="block text-gold italic pr-4 sm:pr-8">
                {line2}
              </motion.span>
              <motion.span variants={item} className="block text-[6vw] font-light text-text-soft/40 tracking-normal">
                {line3}
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span variants={item} className="block text-cyan/10 outline-text tracking-tight">
                {line4}
              </motion.span>
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2 shrink-0"
          >
            <div className="w-48 h-60 sm:w-72 sm:h-96 relative rounded-[48px] overflow-hidden border border-white/10 group shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                <Image
                  src="/assets/img/1st.jpg"
                  alt="Muhtasham Shafi"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:grayscale group-hover:scale-110"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity" />
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <p className="text-2xl sm:text-4xl text-text-soft font-light leading-[1.3] max-w-2xl mb-16">
              I'm <em className="text-text font-serif italic not-italic font-medium">Muhtasham Shafi</em> — a system architect building the{" "}
              <span className="text-text relative inline-block">
                autonomous hardware
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-px bg-cyan/50"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2, duration: 1.5 }}
                />
              </span>{" "}
              of tomorrow.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <Magnetic>
                <a 
                  href="#contact-direct" 
                  className="group relative bg-cyan text-ink px-12 py-7 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest overflow-hidden transition-all shadow-[0_0_50px_rgba(76,201,240,0.2)] hover:shadow-[0_0_60px_rgba(76,201,240,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <ScrambleText text="INVEST" triggerOnHover />
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href="#journey" 
                  className="group flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-widest text-text-soft hover:text-cyan transition-colors"
                >
                  <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-cyan/10"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    <span className="relative z-10">↓</span>
                  </div>
                  <ScrambleText text="VIEW JOURNEY" triggerOnHover />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.8, duration: 2 }}
            className="hidden lg:block relative font-mono text-xs text-text-mute space-y-3 uppercase tracking-[0.4em]"
          >
            <div className="flex gap-4 items-center">
              <span className="text-cyan font-bold">01</span>
              <ScrambleText text="INITIALIZING_CORE_SYSTEMS" delay={2} />
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-cyan font-bold">02</span>
              <ScrambleText text="ROBOTICS_PROTOCOLS_ACTIVE" delay={2.2} />
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-cyan font-bold">03</span>
              <ScrambleText text="AI_LOGIC_GATES_OPEN" delay={2.4} />
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-cyan font-bold">04</span>
              <ScrambleText text="MIRACLE_ROBOTICS_LIVE" delay={2.6} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cryptic Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
    </header>
  );
}
