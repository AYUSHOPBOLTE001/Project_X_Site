"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Problem", href: "#problem", sectionId: "problem" },
  { name: "Solution", href: "#solution", sectionId: "solution" },
  { name: "Features", href: "#features", sectionId: "features" },
  { name: "How It Works", href: "#howitworks", sectionId: "howitworks" },
  { name: "Architecture", href: "#architecture", sectionId: "architecture" },
  { name: "Impact", href: "#impact", sectionId: "impact" },
  { name: "Team", href: "#team", sectionId: "team" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Intersection Observer scroll spy
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            let maxRatio = 0;
            let maxId = "";
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxId = sectionId;
              }
            });

            if (visibleSections.size === 0 && window.scrollY < 300) {
              setActiveSection("");
            } else if (maxId) {
              setActiveSection(maxId);
            }
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
          rootMargin: "-80px 0px -30% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 text-white font-bold tracking-[0.3em] uppercase text-xs sm:text-sm z-50"
        >
          <img src="/images/LO.png" alt="Project X Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          PROJECT X
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs font-semibold tracking-widest uppercase pb-1 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#a3a3a3] hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#0078D4] rounded-full"
                    style={{
                      boxShadow: "0 0 8px rgba(0, 120, 212, 0.6), 0 0 20px rgba(0, 120, 212, 0.2)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-50 w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            {/* Header label */}
            <div className="absolute top-20 left-0 right-0 text-center">
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#525252]">Navigation</span>
            </div>

            <nav className="flex flex-col items-center gap-1 w-full max-w-xs px-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-4 w-full px-5 py-3.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-[#0078D4]/10 border border-[#0078D4]/30"
                          : "border border-transparent hover:bg-white/5"
                      }`}
                    >
                      <span className={`text-xs font-mono w-5 ${isActive ? "text-[#0078D4]" : "text-[#525252]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-sm font-semibold tracking-wider uppercase ${
                        isActive ? "text-white" : "text-[#a3a3a3]"
                      }`}>
                        {link.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileDot"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0078D4]"
                          style={{ boxShadow: "0 0 8px rgba(0, 120, 212, 0.8)" }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom branding */}
            <div className="absolute bottom-8 text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#525252]">Team 257 · Bennett University</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
