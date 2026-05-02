"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const projects = [
  {
    id: "01",
    cat: "Industrial",
    title: "Industrial Robotic Arm",
    desc: "A factory-grade, multi-axis programmable manipulator built for repetitive, hazardous, and precision-critical tasks. Engineered for garment, pharma, and electronics industries.",
    metrics: [
      { val: "−40%", label: "Labour Cost" },
      { val: "3×", label: "Throughput" },
      { val: "24/7", label: "Reliability" },
    ],
    img: "/assets/img/p01-robotic-arm.jpg",
    status: "Scaling Phase",
  },
  {
    id: "02",
    cat: "Logistics",
    title: "Drone Delivery & Rescue",
    desc: "A dual-purpose aerial fleet for Bangladesh. Commercial logistics for port transport and humanitarian aid for flood-stricken communities.",
    metrics: [
      { val: "−45%", label: "Per-unit Cost" },
      { val: "−60%", label: "CO₂ Impact" },
      { val: "∞", label: "Lives Saved" },
    ],
    img: "/assets/img/p02-drone.jpg",
    status: "Seeking Series A",
  },
  {
    id: "03",
    cat: "Consumer",
    title: "AI Smart Home System",
    desc: "Autonomous appliance management using presence sensors and daily schedules to optimize energy and comfort in modern real estate.",
    metrics: [
      { val: "−40%", label: "Energy Bills" },
      { val: "2.1y", label: "Payback" },
      { val: "−1.2t", label: "CO₂/yr" },
    ],
    img: "/assets/img/p03-smart-home.jpg",
    status: "Miniaturising",
  },
  {
    id: "04",
    cat: "AgriTech",
    title: "AI Smart Irrigation",
    desc: "Real-time soil moisture sensors per-plant. AI suggests optimal water and soil composition based on species and local conditions.",
    metrics: [
      { val: "−50%", label: "Water Use" },
      { val: "+30%", label: "Yield Uplift" },
      { val: "Live", label: "Analytics" },
    ],
    img: "/assets/img/p04-irrigation.jpg",
    status: "Investor Priority",
  },
  {
    id: "05",
    cat: "Climate",
    title: "Floor-Lifting Flood Bridge",
    desc: "Hydraulic bridge deck that automatically rises with water levels to keep critical road links open during monsoon disasters.",
    metrics: [
      { val: "৳B", label: "Loss Avoided" },
      { val: "Auto", label: "Trigger" },
      { val: "100%", label: "Uptime" },
    ],
    img: "/assets/img/p05-flood-bridge.jpg",
    status: "Design Complete",
  },
  {
    id: "06",
    cat: "Mobility",
    title: "NFC Smart Toll System",
    desc: "Pre-loaded tap-and-go system that compresses 3-minute toll transactions to 3 seconds, eliminating traffic bottlenecks.",
    metrics: [
      { val: "3s", label: "Transaction" },
      { val: "−85%", label: "Queue Length" },
      { val: "Recurring", label: "Revenue" },
    ],
    img: "/assets/img/p06-nfc-toll.jpg",
    status: "Prototype Ready",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-32">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-cyan mb-4 block">
              <ScrambleText text="ACTIVE_INVENTORY" />
            </span>
            <h2 className="text-6xl sm:text-8xl font-serif tracking-tighter leading-none mb-8">
              Systematic <span className="italic text-gold">Solutions</span>.
            </h2>
            <p className="text-text-soft text-2xl font-light leading-relaxed">
              Proprietary prototypes engineered for industrial deployment across 
              the Bangladeshi landscape.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-ink-2 mb-10 border border-white/5 group-hover:border-cyan/50 transition-colors duration-700">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700" />
                
                <div className="absolute top-8 left-8 flex gap-2">
                  <div className="bg-ink/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cyan font-bold">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-4">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-cyan text-sm font-bold tracking-widest">[{project.id}]</span>
                  <div className="h-px flex-1 bg-white/5 group-hover:bg-cyan/20 transition-colors" />
                  <span className="font-mono text-text-mute text-[10px] uppercase tracking-widest font-bold">
                    <ScrambleText text={project.cat} triggerOnHover />
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-serif text-text mb-6 group-hover:text-gold transition-colors italic leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-text-soft text-lg font-light leading-relaxed mb-12 flex-1 max-w-xl">
                  {project.desc}
                </p>

                <div className="grid grid-cols-3 gap-8">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="group/metric">
                      <div className="text-2xl sm:text-3xl font-serif text-gold leading-none mb-3">
                        {metric.val}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-mute group-hover/metric:text-cyan transition-colors">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
