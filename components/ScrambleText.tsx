"use client";

import { useState, useEffect, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

export default function ScrambleText({ 
  text, 
  className, 
  delay = 0,
  duration = 1.5,
  triggerOnHover = false
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  duration?: number;
  triggerOnHover?: boolean;
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }
      iteration += 1 / (duration / (text.length * 0.05));
    }, 30);
  }, [text, duration, isScrambling]);

  useEffect(() => {
    if (!triggerOnHover) {
      const timeout = setTimeout(scramble, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [scramble, delay, triggerOnHover]);

  return (
    <span 
      className={className}
      onMouseEnter={() => triggerOnHover && scramble()}
    >
      {displayText}
    </span>
  );
}
