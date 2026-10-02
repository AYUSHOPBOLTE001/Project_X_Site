"use client";

import { motion } from "framer-motion";
import { Globe, KeyRound, LayoutDashboard, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  },
};

export default function Solution() {
  return (
    <section id="solution" className="py-12 md:py-16 lg:py-20 bg-[#000000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={itemVariants} className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0078D4] mb-4">
            03 — THE SOLUTION
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase tracking-wider mb-6 text-[#ffffff]">
            ONE LOGIN. ONE DASHBOARD. ONE CAMPUS.
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl text-lg text-[#a3a3a3]">
            We are building a unified digital platform that helps Bennett University students, faculty and administrators consolidate all campus services into one seamless, role-specific experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="glow-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-[#0078D4]/10 flex items-center justify-center mb-6">
              <Globe className="text-[#0078D4] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">One University Platform</h3>
            <p className="text-[#a3a3a3]">Academics, campus, services & community in a single app</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="glow-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-[#0078D4]/10 flex items-center justify-center mb-6">
              <KeyRound className="text-[#0078D4] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">One Login</h3>
            <p className="text-[#a3a3a3]">Bennett University email + Firebase Authentication</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="glow-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-[#0078D4]/10 flex items-center justify-center mb-6">
              <LayoutDashboard className="text-[#0078D4] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Personalised Dashboard</h3>
            <p className="text-[#a3a3a3]">Home screen built from the user&apos;s profile and role</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="glow-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-[#0078D4]/10 flex items-center justify-center mb-6">
              <Users className="text-[#0078D4] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Features by Role</h3>
            <p className="text-[#a3a3a3]">Student, Faculty, L&F Staff, College Admin, Super Admin</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-white/[0.06] bg-white/[0.01] rounded-xl p-6 text-center max-w-4xl mx-auto"
        >
          <p className="text-[#a3a3a3] italic">
            &ldquo;Not a wrapper around Camu/LMS — a unified university platform with equivalent student-facing academic functionality plus Project X&apos;s own campus features.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
