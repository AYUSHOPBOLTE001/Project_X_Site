"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 z-0 radial-gradient-glow opacity-40"></div>
      
      {/* Particles (Inline simulation) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `floatUp ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#a3a3a3] bg-white/[0.02] backdrop-blur-sm">
              MICROSOFT INNOVATE 2026
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#0078D4] bg-[#0078D4]/10 backdrop-blur-sm">
              TEAM 257
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#a3a3a3] bg-white/[0.02] backdrop-blur-sm">
              AI FOR EDUCATION
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-7xl sm:text-8xl lg:text-[10rem] font-bold tracking-tight gradient-text mb-6 leading-none text-white"
          >
            PROJECT X
          </motion.h1>

          {/* Tagline */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-[#a3a3a3] tracking-[0.2em] uppercase mb-8"
          >
            One Platform. One University.
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg text-[#525252] mb-12"
          >
            A unified digital campus platform that consolidates 10+ fragmented university systems into one seamless, role-based experience for Bennett University.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <Link href="#problem" className="btn-primary bg-[#0078D4] text-white px-8 py-3 rounded hover:bg-[#1a8cff] transition-colors">
              EXPLORE THE MVP
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Dashboard Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
          className="mt-16 relative max-w-5xl w-full mx-auto"
        >
          <div className="relative rounded-t-xl overflow-hidden border border-white/10 border-b-0 shadow-[0_-20px_50px_rgba(0,120,212,0.15)] bg-[#0a0a0a] pt-4 px-4 sm:pt-6 sm:px-6">
            <img 
              src="/images/dashboard001.png" 
              alt="Project X Dashboard Preview" 
              className="w-full h-auto rounded-t-lg"
            />
            {/* Overlay fade at the bottom to blend with background */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#525252] mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#0078D4] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
