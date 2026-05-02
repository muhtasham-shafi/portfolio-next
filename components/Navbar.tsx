"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact-direct" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 pointer-events-none",
          isScrolled ? "pt-4" : "pt-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="pointer-events-auto group relative">
            <Magnetic>
              <div className="flex items-center gap-6">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 border-2 border-cyan/20 rounded-2xl rotate-45 group-hover:rotate-[225deg] group-hover:border-cyan transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                  <div className="absolute inset-0 border-2 border-cyan/40 rounded-2xl -rotate-45 group-hover:rotate-[-225deg] group-hover:border-cyan transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                  <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-cyan/50 transition-colors">
                    <span className="font-serif italic text-cyan text-2xl font-black relative z-10 transition-transform group-hover:scale-125 group-hover:rotate-[-12deg]">MS</span>
                    <motion.div 
                      className="absolute inset-0 bg-cyan/20 shadow-[0_0_20px_rgba(76,201,240,0.4)]"
                      animate={{
                        y: ["100%", "-100%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  {/* Glitch pieces */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity animate-pulse delay-75" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-base font-black tracking-[0.25em] uppercase text-text group-hover:text-cyan transition-colors">
                    <ScrambleText text="Muhtasham Shafi" triggerOnHover />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                    <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-cyan font-black opacity-80">
                      SYSTEM_ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </Magnetic>
          </Link>

          <div className={cn(
            "hidden md:flex items-center px-4 py-2 rounded-full border border-white/5 transition-all duration-700 pointer-events-auto shadow-2xl",
            isScrolled ? "glass bg-ink/60" : "bg-transparent"
          )}>
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className="px-6 py-2.5 font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-text hover:text-cyan transition-colors relative group/link"
                >
                  <ScrambleText text={link.name} triggerOnHover />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover/link:w-4 transition-all" />
                </Link>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-4 pointer-events-auto">
            <Magnetic>
              <Link
                href="#contact-direct"
                className="hidden sm:flex items-center gap-3 font-mono text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-full bg-cyan text-ink hover:shadow-[0_0_40px_rgba(76,201,240,0.6)] transition-all overflow-hidden relative group/btn"
              >
                <span className="relative z-10">Hire / Invest</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Magnetic>
            <button
              className="md:hidden w-12 h-12 rounded-2xl glass grid place-items-center text-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[90] bg-ink p-12 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            <div className="grid-bg opacity-10" />
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="font-serif text-5xl text-text hover:text-cyan transition-colors italic"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
