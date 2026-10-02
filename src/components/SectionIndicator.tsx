"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "howitworks", label: "How It Works" },
  { id: "architecture", label: "Architecture" },
  { id: "impact", label: "Impact" },
  { id: "team", label: "Team" },
];

export default function SectionIndicator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when near top
      setIsVisible(window.scrollY > 400);

      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setCurrentIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2"
        >
          {sections.map((section, i) => (
            <button
              key={section.id}
              onClick={() => {
                const el = document.getElementById(section.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative flex items-center"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-[#0078D4] scale-125 shadow-[0_0_8px_rgba(0,120,212,0.6)]"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
              {/* Tooltip on hover */}
              <div className="absolute left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <span className="whitespace-nowrap text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-[#0a0a0a]/90 border border-white/10 text-white/70">
                  {String(i + 1).padStart(2, "0")} {section.label}
                </span>
              </div>
            </button>
          ))}

          {/* Current section number */}
          <div className="mt-3 text-center">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-mono text-[#0078D4] tracking-wider"
            >
              {String(currentIndex + 1).padStart(2, "0")}/{String(sections.length).padStart(2, "0")}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
