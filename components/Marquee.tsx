"use client";

import React from "react";

export default function Marquee() {
  const items = [
    "Robotics",
    "Artificial Intelligence",
    "Web Development",
    "Smart Hardware",
    "FIRST Global · Singapore '23 · Panama '25",
    "Founder · Miracle Robotics",
  ];

  return (
    <div className="py-8 border-y border-white/5 bg-ink/50 backdrop-blur-sm overflow-hidden whitespace-nowrap">
      <div className="marquee-track flex items-center gap-12">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text">
                  {item}
                </span>
                <span className="text-gold text-lg">✦</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
