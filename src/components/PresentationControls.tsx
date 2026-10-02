"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize } from "lucide-react";


export default function PresentationControls() {
  const [showHint, setShowHint] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Show hint after 5 seconds, hide after 10
  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 5000);
    const hideTimer = setTimeout(() => setShowHint(false), 12000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {


    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Track fullscreen state changes
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <>
      {/* Keyboard hint toast */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-md shadow-lg"
          >
            <kbd className="px-1.5 h-6 flex items-center justify-center rounded bg-white/10 text-[10px] font-mono text-white/70 border border-white/10">F</kbd>
            <span className="text-[11px] text-white/50 font-medium">Fullscreen Toggle</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
