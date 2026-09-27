"use client";

import { useState, useEffect, useCallback } from "react";
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

  // Scroll spy: observe which section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    // Track which sections are visible and how much
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

            // Find the section with the highest intersection ratio
            let maxRatio = 0;
            let maxId = "";
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxId = sectionId;
              }
            });

            // If no sections visible and we're near top, clear active
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
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white font-bold tracking-[0.3em] uppercase text-sm z-50"
        >
          <img src="/images/LO.png" alt="Project X Logo" className="w-8 h-8 object-contain" />
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

                {/* Animated blue underline bar */}
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
          className="lg:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative text-lg font-bold tracking-widest uppercase transition-colors ${
                    isActive ? "text-[#0078D4]" : "text-white hover:text-[#0078D4]"
                  }`}
                >
                  {link.name}
                  {/* Blue dot indicator on mobile */}
                  {isActive && (
                    <motion.span
                      layoutId="activeMobileDot"
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0078D4]"
                      style={{
                        boxShadow: "0 0 6px rgba(0, 120, 212, 0.8)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
