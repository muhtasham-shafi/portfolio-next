"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Globe, Share2, Camera } from "lucide-react";
import ScrambleText from "./ScrambleText";
import Magnetic from "./Magnetic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/md-muhtasham-musharof-shafi-055a20317/", icon: Share2 },
    { name: "Instagram", href: "https://www.instagram.com/muhtasham.shafi/", icon: Camera },
    { name: "YouTube", href: "https://www.youtube.com/@MuhtashamShafi.07", icon: Globe },
    { name: "WhatsApp", href: "https://wa.me/8801711903180", icon: Phone },
    { name: "GitHub", href: "https://github.com/muhtasham-shafi", icon: Globe },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-64 pb-12 bg-ink overflow-hidden border-t border-white/5">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-cyan via-cyan/20 to-transparent shadow-[0_0_30px_rgba(76,201,240,0.5)]" />
      <div className="absolute top-64 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Moving Data Streams */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-px bg-cyan"
            style={{ left: `${20 * i}%` }}
            animate={{
              y: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Massive CTA */}
        <div className="mb-48 text-center lg:text-left relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-cyan/10 border border-cyan/20 px-6 py-2 rounded-full mb-12 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span className="font-mono text-xs font-black uppercase tracking-[0.5em] text-cyan">
              <ScrambleText text="TRANSMISSION_INITIATED" />
            </span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16">
            <h2 className="text-8xl sm:text-[12vw] font-serif leading-[0.75] tracking-tighter max-w-5xl flex flex-wrap items-center gap-x-8">
              Let's build
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-cyan/50 -rotate-6 scale-90 sm:scale-100">
                <Image src="/assets/img/1st.jpg" alt="Muhtasham Shafi" fill className="object-cover" />
              </div>
              <br />
              <span className="italic text-gold drop-shadow-[0_0_50px_rgba(244,183,64,0.3)] w-full">the future</span>.
            </h2>
            
            <Magnetic>
              <button 
                onClick={scrollToTop}
                className="w-40 h-40 rounded-full border-2 border-white/10 flex flex-col items-center justify-center group hover:border-cyan hover:bg-cyan hover:text-ink transition-all duration-700 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 font-mono text-xs font-black uppercase tracking-widest mb-1 group-hover:invert">Top</span>
                <span className="relative z-10 text-3xl group-hover:invert group-hover:-translate-y-2 transition-transform duration-500">↑</span>
              </button>
            </Magnetic>
          </div>
        </div>

        <div id="contact-direct" className="grid lg:grid-cols-12 gap-24 mb-40 items-start scroll-mt-40">
          <div className="lg:col-span-6">
            <h3 className="text-5xl font-serif italic mb-10 tracking-tight">Direct Access</h3>
            <div className="relative group inline-block">
              <a 
                href="mailto:md.muhtasham.m.shafi@gmail.com" 
                className="flex items-center gap-8 text-3xl sm:text-5xl font-serif text-text hover:text-cyan transition-all duration-500"
              >
                <ScrambleText text="md.muhtasham.m.shafi@gmail.com" triggerOnHover />
                <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan group-hover:text-ink transition-all duration-500">
                  <ArrowUpRight size={32} />
                </div>
              </a>
              <div className="absolute -bottom-4 left-0 w-0 h-1 bg-cyan group-hover:w-full transition-all duration-1000" />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-wrap gap-x-16 gap-y-16 justify-end">
            <div className="flex flex-col gap-8">
              <span className="font-mono text-xs font-black uppercase tracking-[0.4em] text-text-mute border-l-2 border-cyan pl-4">Network</span>
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((link) => (
                  <Magnetic key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-10 py-5 rounded-[24px] border border-white/5 font-mono text-xs font-black uppercase tracking-widest text-text hover:border-cyan hover:text-cyan transition-all glass shadow-xl hover:-translate-y-1"
                    >
                      <link.icon size={16} />
                      <ScrambleText text={link.name} triggerOnHover />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8 min-w-[300px]">
              <span className="font-mono text-xs font-black uppercase tracking-[0.4em] text-text-mute border-l-2 border-green pl-4">Diagnostics</span>
              <div className="bg-ink-2/80 p-8 rounded-[40px] border border-white/5 glass shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 blur-[60px] group-hover:bg-green/10 transition-colors" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green animate-ping" />
                  </div>
                  <span className="font-mono text-xs text-green font-black uppercase tracking-widest">Core_Operational</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Architecture", val: "Next.js 16" },
                    { label: "Engine", val: "Turbopack" },
                    { label: "Region", val: "Asia-South" },
                    { label: "Security", val: "SSL_Active" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center gap-12 font-mono text-[10px] uppercase border-b border-white/5 pb-2">
                      <span className="text-text-mute font-bold">{stat.label}</span>
                      <span className="text-cyan font-black">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-16 border-t border-white/5 relative">
          <div className="absolute top-0 left-0 w-32 h-px bg-cyan shadow-[0_0_20px_rgba(76,201,240,1)]" />
          <div className="font-mono text-xs font-black uppercase tracking-[0.4em] text-text-mute">
            © {currentYear} Muhtasham Shafi <span className="text-cyan mx-4">//</span> Miracle Robotics
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-text-mute">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              Build: 2026.05.02
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Lat: 23.81°N
            </span>
          </div>
        </div>
      </div>
      
      {/* Footer Glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/5 blur-[150px] rounded-full -z-10" />
    </footer>
  );
}
