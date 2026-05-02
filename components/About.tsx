"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

export default function About() {
  const stats = [
    { num: "7+", label: "Years building" },
    { num: "2×", label: "FIRST Global Team BD" },
    { num: "6", label: "Investor-ready prototypes" },
  ];

  return (
    <section id="about" className="py-24 sm:py-40 relative overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-cyan mb-6 block">
              <ScrambleText text="CORE_PROFILE" />
            </span>
            <h2 className="text-6xl sm:text-8xl font-serif leading-[0.9] tracking-tighter mb-12">
              Building systems, <br />
              <span className="italic text-gold">not</span> just code.
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl font-light text-text-soft leading-tight mb-12 max-w-3xl"
            >
              I am a system architect obsessed with the intersection of <strong className="text-text font-medium">robotics, AI</strong> and physical infrastructure.
            </motion.p>

            <div className="grid grid-cols-3 gap-8 border-y border-white/5 py-12 mb-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="group/stat">
                  <div className="text-5xl sm:text-7xl font-serif text-cyan mb-4 italic group-hover/stat:text-gold transition-colors duration-500">
                    {stat.num}
                  </div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute group-hover/stat:text-text-soft transition-colors">
                    <ScrambleText text={stat.label} triggerOnHover />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-text-soft text-xl font-light leading-relaxed max-w-2xl">
              From representing Bangladesh at the <em>FIRST Global Challenge</em> in 
              Singapore and Panama to founding <strong>Miracle Robotics</strong>, 
              my journey has been a continuous loop of building, failing, and scaling.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/assets/img/2nd.jpg"
                alt="Muhtasham Shafi"
                fill
                className="object-cover transition-all duration-1000 group-hover:grayscale group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent opacity-40 group-hover:opacity-0 transition-opacity" />
              
              <div className="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:border-cyan transition-colors">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full p-2"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-cyan/40">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    <text fontFamily="monospace" fontSize="9" fontWeight="bold">
                      <textPath xlinkHref="#circlePath">SYSTEM.ACTIVE • PROFILE.VERIFIED • </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="absolute w-2 h-2 bg-cyan rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[40vw] h-px bg-white/5 -z-10" />
    </section>
  );
}
