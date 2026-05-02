"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const timeline = [
  {
    year: "2026",
    tag: "The company",
    title: "Founded Miracle Robotics.",
    desc: "Turned years of prototyping into a company focused on charity-aligned community tech solutions for Bangladesh.",
    img: "/assets/img/journey/2026-miracle.jpg",
  },
  {
    year: "2025",
    tag: "Hanoi → Panama",
    title: "Global Youth Summit & FGC Panama.",
    desc: "Collaborated on SDG solutions in Vietnam. Represented BD again in Panama, ranking 43rd out of 191 countries.",
    img: "/assets/img/journey/panama.jpg",
  },
  {
    year: "2024",
    tag: "MIT · Oxford",
    title: "Going global, going deeper.",
    desc: "MIT robotics workshop and Oxford Union debating. Ranked 4th place in the National Mental Math Olympiad.",
    img: "/assets/img/journey/2024.jpg",
  },
  {
    year: "2023",
    tag: "Bangladesh → Singapore",
    title: "Representing Team BD at FIRST Global.",
    desc: "Ranked 36th out of 186 countries at the FIRST Global Challenge in Singapore. Theme: Hydrogen Horizons.",
    img: "/assets/img/journey/2023-fgc-singapore.jpg",
  },
  {
    year: "2022",
    tag: "First system",
    title: "Home automation, and a math medal.",
    desc: "Built an AI-driven system to automate home tasks. Same year, secured 6th place in the National Mental Math Olympiad.",
    img: "/assets/img/journey/2022-olympiad.jpg",
  },
  {
    year: "2019",
    tag: "The first robot",
    title: "A line-follower, and the bug.",
    desc: "Started my robotics journey with a classic LFR project. It was the first time I saw code make something move — and that was the bug.",
    img: "/assets/img/journey/2019-lfr.jpg",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-40 text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-cyan mb-6 block">
            <ScrambleText text="TEMPORAL_LOGS" />
          </span>
          <h2 className="text-7xl sm:text-[10vw] font-serif leading-none tracking-tighter">
            The <span className="italic text-gold">Ascent</span>.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-white/5 to-transparent hidden lg:block" />

          <div className="space-y-40 lg:space-y-64">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative",
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Large Year Background */}
                <div className={cn(
                  "absolute top-0 opacity-[0.03] font-serif text-[20vw] select-none pointer-events-none z-[-1]",
                  i % 2 === 0 ? "left-0" : "right-0"
                )}>
                  {item.year}
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className={cn(
                    "flex flex-col",
                    i % 2 === 0 ? "lg:items-start" : "lg:items-end text-right"
                  )}>
                    <div className="flex items-center gap-6 mb-8">
                      <span className="text-6xl sm:text-8xl font-serif text-white font-black tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:text-cyan transition-colors duration-500">
                        {item.year}
                      </span>
                      <div className="h-0.5 w-16 bg-cyan/50" />
                      <span className="font-mono text-xs font-black uppercase tracking-[0.4em] text-cyan bg-cyan/10 px-3 py-1 rounded-sm">
                        [{item.tag}]
                      </span>
                    </div>
                    <h3 className="text-4xl sm:text-6xl font-serif mb-8 leading-none italic tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-text-soft text-xl font-light leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 1 : -1 }}
                    className="aspect-[16/10] relative rounded-[48px] overflow-hidden border border-white/10 glass shadow-2xl group transition-all duration-700"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-[2.5s] ease-out group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 left-0 w-full h-full bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
