"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  LogIn,
  Mail,
  Shield,
  UserCheck,
  LayoutDashboard,
  ChevronDown,
  GraduationCap,
  Users,
  Settings,
} from "lucide-react";

const STEPS = [
  { id: 1, title: "OPEN APP", icon: Smartphone, desc: "Launch Project X" },
  { id: 2, title: "LOGIN / SIGN UP", icon: LogIn, desc: "Authenticate with ease" },
  { id: 3, title: "EMAIL VERIFICATION", icon: Mail, desc: "Confirm your identity" },
  { id: 4, title: "FIREBASE AUTH", icon: Shield, desc: "Secure token generation" },
  { id: 5, title: "ROLE DETECTION", icon: UserCheck, desc: "RBAC check" },
  { id: 6, title: "YOUR DASHBOARD", icon: LayoutDashboard, desc: "Role-specific UI" },
];

const PORTALS = [
  {
    id: "student",
    title: "🎓 Student Portal",
    features: [
      "Academics & LMS",
      "Faculty Directory",
      "Appointments",
      "Lost & Found",
      "Announcements",
      "AI Assistant",
    ],
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: "faculty",
    title: "👨‍🏫 Faculty Portal",
    features: [
      "Profile Management",
      "Cabin Info & Availability",
      "Appointment Requests",
      "Academic Functions",
    ],
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: "admin",
    title: "🔧 Admin Portal",
    features: [
      "System Admin & Role Management",
      "Courses & Timetables",
      "Attendance Tracking",
      "Global Announcements",
      "Platform Analytics",
    ],
    color: "from-emerald-500/20 to-transparent",
  },
];

export default function HowItWorks() {
  const [expandedPortal, setExpandedPortal] = useState<string | null>(null);

  const togglePortal = (id: string) => {
    setExpandedPortal((prev) => (prev === id ? null : id));
  };

  return (
    <section id="howitworks" className="py-24 sm:py-32 bg-section text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0078D4] mb-4">
            05 — HOW IT WORKS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
            FROM OPEN TO YOUR DASHBOARD IN SECONDS
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-32">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Mobile Timeline Line */}
          <div className="block md:hidden absolute top-0 left-6 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 relative">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="flex md:flex-col items-center md:items-center relative z-10 md:w-48 pl-12 md:pl-0"
                >
                  <div className="absolute md:relative left-0 md:left-auto flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-black border border-[#0078D4]/50 mb-0 md:mb-6 shadow-[0_0_15px_rgba(0,120,212,0.3)]">
                    <span className="absolute -top-2 -right-2 text-xs font-bold text-white bg-[#0078D4] w-6 h-6 rounded-full flex items-center justify-center">
                      {step.id}
                    </span>
                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-[#0078D4]" />
                  </div>
                  
                  <div className="text-left md:text-center ml-4 md:ml-0">
                    <h4 className="text-sm md:text-base font-bold uppercase tracking-wider text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#a3a3a3]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expandable Portals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 text-center">
            Role-Based Portals
          </h3>
          
          {PORTALS.map((portal) => (
            <div
              key={portal.id}
              className="glow-card cursor-pointer overflow-hidden transition-colors hover:bg-white/[0.05]"
              onClick={() => togglePortal(portal.id)}
            >
              <div className={`p-6 bg-gradient-to-r ${portal.color}`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-white tracking-wide">
                    {portal.title}
                  </h4>
                  <motion.div
                    animate={{ rotate: expandedPortal === portal.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#a3a3a3]" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {expandedPortal === portal.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {portal.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-[#a3a3a3]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {portal.id === "faculty" && (
                          <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
                            <img src="/images/teacher_admin_panel.jpeg" alt="Faculty/Admin Panel" className="w-full h-auto opacity-90" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="section-divider" />
    </section>
  );
}
