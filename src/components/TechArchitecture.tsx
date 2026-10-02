"use client";

import { motion } from "framer-motion";
import { Smartphone, Layers, Cpu, Server, Database, Shield, Cloud, ArrowRight } from "lucide-react";

const TECH_STACK = [
  { title: "Frontend", name: "Jetpack Compose", icon: Smartphone, color: "text-[#3DDC84]", bg: "bg-[#3DDC84]/10", border: "border-[#3DDC84]/30" },
  { title: "State", name: "ViewModels + StateFlow", icon: Layers, color: "text-[#7F52FF]", bg: "bg-[#7F52FF]/10", border: "border-[#7F52FF]/30" },
  { title: "Data", name: "Repository Pattern", icon: Cpu, color: "text-[#0078D4]", bg: "bg-[#0078D4]/10", border: "border-[#0078D4]/30" },
  { title: "Backend", name: "Firebase + REST APIs", icon: Server, color: "text-[#FFCA28]", bg: "bg-[#FFCA28]/10", border: "border-[#FFCA28]/30" },
  { title: "Database", name: "Firestore", icon: Database, color: "text-[#FFA000]", bg: "bg-[#FFA000]/10", border: "border-[#FFA000]/30" },
  { title: "Auth", name: "Firebase Auth + RBAC", icon: Shield, color: "text-[#F57C00]", bg: "bg-[#F57C00]/10", border: "border-[#F57C00]/30" },
  { title: "Cloud", name: "Firebase (Google Cloud)", icon: Cloud, color: "text-[#4285F4]", bg: "bg-[#4285F4]/10", border: "border-[#4285F4]/30" },
];

export default function TechArchitecture() {
  return (
    <section id="architecture" className="py-12 md:py-16 lg:py-20 bg-[#050505] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 text-center md:text-left"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0078D4] mb-3">
            06 — TECHNOLOGY
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase mb-3">
            ENGINEERED FOR SCALE
          </h2>
          <p className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl">
            Native Android on a Firebase backend — real engineering, not a Figma prototype.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Architecture Diagram */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#0078D4]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col items-center space-y-3 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full glass-card p-5 text-center border-[#0078D4]/30 bg-[#0078D4]/10"
              >
                <h3 className="font-bold tracking-[0.2em] uppercase text-[#0078D4] text-sm sm:text-base">
                  Project X Android App
                </h3>
              </motion.div>

              <div className="w-px h-6 bg-white/20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-4/5 glass-card p-4 text-center"
              >
                <h4 className="text-sm font-semibold tracking-wider text-white">
                  JETPACK COMPOSE UI
                </h4>
              </motion.div>

              <div className="w-px h-5 bg-white/20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-3/4 glass-card p-4 text-center"
              >
                <h4 className="text-sm font-semibold tracking-wider text-white">
                  VIEWMODELS + STATEFLOW
                </h4>
              </motion.div>

              <div className="w-px h-5 bg-white/20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-2/3 glass-card p-4 text-center"
              >
                <h4 className="text-sm font-semibold tracking-wider text-white">
                  REPOSITORY PATTERN
                </h4>
              </motion.div>

              <div className="w-px h-5 bg-white/20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full grid grid-cols-3 gap-2 sm:gap-4"
              >
                <div className="glass-card p-4 text-center bg-white/5 border-white/10 flex flex-col items-center justify-center">
                  <Shield className="w-5 h-5 text-[#a3a3a3] mb-2" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#a3a3a3]">AUTH</span>
                </div>
                <div className="glass-card p-4 text-center bg-white/5 border-white/10 flex flex-col items-center justify-center">
                  <Database className="w-5 h-5 text-[#a3a3a3] mb-2" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#a3a3a3]">FIRESTORE</span>
                </div>
                <div className="glass-card p-4 text-center bg-white/5 border-white/10 flex flex-col items-center justify-center">
                  <Server className="w-5 h-5 text-[#a3a3a3] mb-2" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#a3a3a3]">SECURITY RULES</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tech Stack Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECH_STACK.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card p-4 flex items-center space-x-4 transition-all duration-300 hover:bg-white/[0.05] border-l-2 ${tech.border}`}
                >
                  <div className={`p-2 rounded-lg bg-black border ${tech.border} ${tech.bg}`}>
                    <Icon className={`w-5 h-5 ${tech.color}`} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#525252] font-semibold">
                      {tech.title}
                    </p>
                    <p className="text-sm font-medium text-white">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Security Flow Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24"
        >
          <div className="glass-card p-8 relative overflow-hidden bg-gradient-to-br from-black to-white/[0.02]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0078D4]" />
            
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-white">
              Security Flow
            </h3>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 text-xs sm:text-sm font-medium text-[#a3a3a3]">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">User</span>
              <ArrowRight className="w-4 h-4 text-[#525252]" />
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Firebase Auth</span>
              <ArrowRight className="w-4 h-4 text-[#525252]" />
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Email Verify</span>
              <ArrowRight className="w-4 h-4 text-[#525252]" />
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Firestore Profile</span>
              <ArrowRight className="w-4 h-4 text-[#525252]" />
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#0078D4] border-[#0078D4]/30">Role Check</span>
              <ArrowRight className="w-4 h-4 text-[#525252]" />
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-bold">Role-Based Access</span>
            </div>

            <blockquote className="text-lg md:text-xl font-medium text-white italic border-l-2 border-white/20 pl-4 py-1">
              &ldquo;Roles are enforced by backend security rules — not merely hidden or shown in the UI.&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
