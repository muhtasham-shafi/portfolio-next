"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Cpu, Bot } from "lucide-react";
import ScrambleText from "./ScrambleText";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Custom websites & storefronts",
      desc: "Modern, responsive, SEO-friendly websites built from scratch — no bloated templates. Delivered fast, at startup-friendly rates.",
      icon: Globe,
    },
    {
      id: "02",
      title: "Jarvis · personal AI assistant",
      desc: "My own conversational AI chatbot — voice-aware, context-keeping, integrated with home and web tools. A live demo of what AI can do for you.",
      icon: Bot,
    },
    {
      id: "03",
      title: "Custom hardware & automation",
      desc: "Robotics, IoT and smart-home builds — from prototype to deployment. Sensor networks, actuators, embedded software, all in one shop.",
      icon: Cpu,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-cyan mb-4 block">
              <ScrambleText text="CAPABILITIES_INDEX" />
            </span>
            <h2 className="text-6xl sm:text-8xl font-serif leading-none tracking-tighter">
              Engineering <br />
              <span className="italic text-gold">Success</span>.
            </h2>
          </div>
          <p className="max-w-md text-text-soft text-2xl font-light leading-relaxed">
            Scalable digital and physical infrastructure for the modern age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-ink-2 border border-white/5 rounded-[48px] hover:border-cyan/40 transition-all group relative overflow-hidden glass"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 blur-[80px] group-hover:bg-cyan/10 transition-colors" />
              <div className="w-16 h-16 border-2 border-cyan/20 rounded-2xl grid place-items-center text-cyan mb-10 group-hover:bg-cyan group-hover:text-ink transition-all duration-500">
                <service.icon size={28} />
              </div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-text-mute mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-white/10" />
                {service.id} / <ScrambleText text={service.title.split(' ')[0]} triggerOnHover />
              </div>
              <h3 className="text-4xl font-serif text-text mb-6 group-hover:text-gold transition-colors italic leading-tight">
                {service.title}
              </h3>
              <p className="text-text-soft text-lg font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Client: PanamTanker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-ink-3 border border-white/10 rounded-[56px] overflow-hidden group glass"
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 sm:p-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2.5 h-2.5 rounded-full bg-green shadow-[0_0_15px_rgba(97,208,149,0.8)]" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-green">
                  <ScrambleText text="ACTIVE_DEPLOYMENT" />
                </span>
              </div>
              <h3 className="text-5xl sm:text-7xl font-serif mb-8 leading-tight italic">
                PanamTanker.com
              </h3>
              <p className="text-text-soft text-2xl font-light leading-relaxed mb-12 max-w-xl">
                A mission-critical enterprise platform designed for Bangladesh's leading tanker logistics fleet.
              </p>
              <a 
                href="https://panamtanker.com/" 
                target="_blank" 
                rel="noopener"
                className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-ink font-mono text-xs font-bold uppercase tracking-widest hover:bg-cyan transition-all overflow-hidden"
              >
                <span className="relative z-10">Live Site ↗</span>
                <div className="absolute inset-0 bg-cyan translate-y-full group-hover:translate-y-0 transition-transform" />
              </a>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-ink-2 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
              <Image
                src="/assets/img/panamtanker.png"
                alt="PanamTanker website"
                fill
                className="object-cover object-top transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
