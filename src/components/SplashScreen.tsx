"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-[400px] h-[400px] bg-[#0078D4] rounded-full blur-[150px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Custom Animated X using SVG */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {/* Glow filter */}
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Left to Right diagonal */}
                <motion.path
                  d="M 20 20 L 80 80"
                  stroke="#ffffff"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="transparent"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Right to Left diagonal */}
                <motion.path
                  d="M 80 20 L 20 80"
                  stroke="#0078D4"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="transparent"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                />

                {/* Intersection pop */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="6"
                  fill="#ffffff"
                  filter="url(#glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                />
              </svg>
            </div>
            
            {/* PROJECT X Text reveals after X finishes drawing */}
            <motion.div
              initial={{ opacity: 0, y: 10, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="text-xl md:text-2xl font-bold text-white uppercase text-center flex flex-col items-center"
            >
              <div>Project <span className="text-[#0078D4]">X</span></div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-[10px] md:text-xs font-semibold text-[#a3a3a3] tracking-[0.3em] mt-2 block"
              >
                BY TEAM 257
              </motion.span>
            </motion.div>
            
            {/* Loading line */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "160px", opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#a3a3a3] to-transparent mt-6"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
