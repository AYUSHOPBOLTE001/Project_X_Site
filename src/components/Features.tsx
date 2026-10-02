"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, MapPin, Calendar, Search, MessageSquare, Bot, Clock, Percent, GraduationCap, FileText, ArrowRight, CheckCircle2, LayoutDashboard, Users } from "lucide-react";

const tabs = [
  { id: "academics", label: "Academics", icon: BookOpen },
  { id: "navigation", label: "Campus Navigation", icon: MapPin },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "lost-found", label: "Lost & Found", icon: Search },
  { id: "community", label: "Community", icon: MessageSquare },
  { id: "ai", label: "AI Assistant", icon: Bot },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "academics":
        return (
          <motion.div
            key="academics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#0078D4]" />
                  <h3 className="text-xl font-semibold text-white">Timetable</h3>
                </div>
                <p className="text-[#a3a3a3]">View today&apos;s classes, overall schedule, room allocations, and faculty details instantly.</p>
              </div>
              <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0078D4]/20 text-[#0078D4] text-xs font-bold px-3 py-1 rounded-bl-lg">HIGHLIGHT</div>
                <div className="flex items-center gap-3 mb-4">
                  <Percent className="w-5 h-5 text-[#0078D4]" />
                  <h3 className="text-xl font-semibold text-white">Attendance</h3>
                </div>
                <p className="text-[#a3a3a3]">Track subject-wise percentage. <strong className="text-white font-medium">75% attendance calculator</strong> — students always know exactly where they stand and how many classes they can afford to miss.</p>
              </div>
              <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-[#0078D4]" />
                  <h3 className="text-xl font-semibold text-white">Courses</h3>
                </div>
                <p className="text-[#a3a3a3]">Access comprehensive course information, faculty assignments, and credit tracking.</p>
              </div>
              <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-[#0078D4]" />
                  <h3 className="text-xl font-semibold text-white">LMS Integration</h3>
                </div>
                <p className="text-[#a3a3a3]">Browse study materials, view upcoming assignments, and track submission status.</p>
              </div>
            </div>
          </motion.div>
        );
      case "navigation":
        return (
          <motion.div
            key="navigation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="flex flex-col gap-6 justify-center">
              <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-2">Faculty Directory</h3>
                <p className="text-[#a3a3a3]">Search for any faculty member by name, department, or specialization.</p>
              </div>
              <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-2">Faculty Profiles</h3>
                <p className="text-[#a3a3a3]">View detailed profiles including department, cabin number, and current availability.</p>
              </div>
              <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl border-[#0078D4]/30 bg-[#0078D4]/5">
                <h3 className="text-xl font-semibold text-white mb-2">Cabin Navigation</h3>
                <p className="text-[#a3a3a3]">Never get lost looking for a professor. See the exact cabin location on the interactive campus map.</p>
              </div>
            </div>
            <div className="glass-card bg-[#050505] border border-[#0078D4]/20 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden group">
              {/* Radar Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#0078D4 1px, transparent 1px), linear-gradient(90deg, #0078D4 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center center' }}></div>

              {/* Radar Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-[#0078D4]/30 border-dashed opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-[#0078D4]/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-[#0078D4]/20"></div>

              {/* Radar Sweep Animation (Rotating conical gradient) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute top-1/2 left-1/2 origin-top-left z-10"
                style={{
                  width: '160px',
                  height: '160px',
                  background: 'conic-gradient(from 180deg at 0% 0%, rgba(0, 120, 212, 0) 0deg, rgba(0, 120, 212, 0.5) 90deg)',
                  borderRight: '2px solid #0078D4',
                  boxShadow: '2px 0 10px rgba(0, 120, 212, 0.5)'
                }}
              />

              {/* Center Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-[#0078D4]"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-[#0078D4]"></div>
              </div>

              {/* Blinking Targets (Faculty Cabins) */}
              <motion.div
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.8, times: [0, 0.1, 0.5, 0.6] }}
                className="absolute top-[30%] left-[65%] w-3 h-3 bg-[#3DDC84] rounded-full shadow-[0_0_15px_#3DDC84] z-20"
              >
                <div className="absolute -left-1 -top-1 w-5 h-5 border border-[#3DDC84] rounded-full animate-ping opacity-50"></div>
                <div className="absolute left-5 -top-1.5 flex flex-col pointer-events-none">
                  <span className="text-[10px] text-[#3DDC84] font-mono whitespace-nowrap bg-black/80 px-1 border border-[#3DDC84]/30">CABIN A-402</span>
                  <span className="text-[8px] text-white/70 font-mono bg-black/80 px-1">Prof. Sharma</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2.8, times: [0, 0.1, 0.5, 0.6] }}
                className="absolute top-[65%] left-[25%] w-3 h-3 bg-[#3DDC84] rounded-full shadow-[0_0_15px_#3DDC84] z-20"
              >
                <div className="absolute -left-1 -top-1 w-5 h-5 border border-[#3DDC84] rounded-full animate-ping opacity-50"></div>
                <div className="absolute left-5 -top-1.5 flex flex-col pointer-events-none">
                  <span className="text-[10px] text-[#3DDC84] font-mono whitespace-nowrap bg-black/80 px-1 border border-[#3DDC84]/30">CABIN B-114</span>
                  <span className="text-[8px] text-white/70 font-mono bg-black/80 px-1">Dr. Gupta</span>
                </div>
              </motion.div>

              {/* Scanning Overlay Text */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">Live Campus Scan</span>
              </div>
            </div>
          </motion.div>
        );
      case "appointments":
        return (
          <motion.div
            key="appointments"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-10"
          >
            {/* Step flow */}
            <div className="glass-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">Seamless Booking Flow</h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                {/* Connecting line (desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/[0.1] -z-10 -translate-y-1/2"></div>

                {[
                  "Find Faculty",
                  "Check Availability",
                  "Book Appointment",
                  "Faculty Response",
                  "Confirmed Meeting"
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 relative bg-[#0a0a0a] px-2 py-4 md:py-0 w-full md:w-auto z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${i === 4 ? 'bg-[#0078D4] text-white shadow-[0_0_15px_rgba(0,120,212,0.5)]' : 'bg-[#1a1a1a] border border-white/[0.1] text-[#a3a3a3]'}`}>
                      {i === 4 ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                    </div>
                    <span className={`text-sm text-center font-medium ${i === 4 ? 'text-white' : 'text-[#a3a3a3]'}`}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl border-l-4 border-l-[#0078D4]">
                <h3 className="text-xl font-semibold text-white mb-4">For Students</h3>
                <ul className="space-y-3">
                  {["No more waiting outside cabins", "See real-time faculty availability", "Add notes to appointment requests", "Get notified when approved/rescheduled"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#a3a3a3]">
                      <ArrowRight className="w-5 h-5 text-[#0078D4] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl border-l-4 border-l-[#a3a3a3]">
                <h3 className="text-xl font-semibold text-white mb-4">For Faculty</h3>
                <ul className="space-y-3">
                  {["Manage consulting hours in one place", "Accept, reject, or propose new times", "Know why the student wants to meet", "Sync with personal calendar"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#a3a3a3]">
                      <ArrowRight className="w-5 h-5 text-[#525252] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case "lost-found":
        return (
          <motion.div
            key="lost-found"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
                <div className="bg-[#0078D4]/10 text-[#0078D4] w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Staff Flow</div>
                <h3 className="text-2xl font-bold text-white mb-6">Inventory Management</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] shrink-0">1</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Add Found Items</h4>
                      <p className="text-[#a3a3a3] text-sm">Upload images, add descriptions, and tag exact location.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] shrink-0">2</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Categorization</h4>
                      <p className="text-[#a3a3a3] text-sm">Tag characteristics for easy searching (electronics, documents, keys).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl">
                <div className="bg-[#525252]/20 text-[#a3a3a3] w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Student Flow</div>
                <h3 className="text-2xl font-bold text-white mb-6">Claim Process</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                  <span className="text-white bg-[#1a1a1a] px-3 py-1.5 rounded-lg border border-white/[0.1]">Search</span>
                  <ArrowRight className="w-4 h-4 text-[#525252]" />
                  <span className="text-white bg-[#1a1a1a] px-3 py-1.5 rounded-lg border border-white/[0.1]">Find Match</span>
                  <ArrowRight className="w-4 h-4 text-[#525252]" />
                  <span className="text-white bg-[#1a1a1a] px-3 py-1.5 rounded-lg border border-white/[0.1]">Claim</span>
                  <ArrowRight className="w-4 h-4 text-[#525252]" />
                  <span className="text-[#0078D4] bg-[#0078D4]/10 px-3 py-1.5 rounded-lg border border-[#0078D4]/30">Verify & Handover</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-[#0078D4]/20 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-lg">Future Development</h4>
                <p className="text-[#a3a3a3]">Analytics dashboard for items recovered, lost locations heatmap, and resolution rates.</p>
              </div>
              <div className="hidden sm:block text-[#0078D4]">
                <LayoutDashboard className="w-8 h-8 opacity-50" />
              </div>
            </div>
          </motion.div>
        );
      case "community":
        return (
          <motion.div
            key="community"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-[#0078D4]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Messages</h3>
              <p className="text-[#a3a3a3]">Direct messaging and group chats for project teams and societies.</p>
            </div>

            <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-[#0078D4]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Announcements</h3>
              <p className="text-[#a3a3a3]">Important updates from university administration and department heads.</p>
            </div>

            <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-[#0078D4]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Events</h3>
              <p className="text-[#a3a3a3]">Campus-wide event discovery, registration, and calendar synchronization.</p>
            </div>

            <div className="glass-card p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#0078D4]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Student Interaction</h3>
              <p className="text-[#a3a3a3]">Forums and discussion boards for academic help and peer networking.</p>
            </div>
          </motion.div>
        );
      case "ai":
        return (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-8"
          >
            <div className="glass-card p-10 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl max-w-3xl w-full text-center relative overflow-hidden">
              <div className="absolute top-6 right-6 bg-[#0078D4] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(0,120,212,0.5)]">
                Coming Soon
              </div>

              <div className="w-24 h-24 mx-auto bg-[#000000] border border-[#0078D4]/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,120,212,0.15)] relative">
                <div className="absolute inset-0 bg-[#0078D4] opacity-20 blur-xl rounded-full animate-pulse"></div>
                <Bot className="w-12 h-12 text-[#0078D4] relative z-10" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Intelligent Campus Assistant</h3>
              <p className="text-lg text-[#a3a3a3] mb-10 max-w-2xl mx-auto">
                A built-in AI assistant that helps students navigate campus life, answer academic queries, and provide instant support based on the unified university knowledge base.
              </p>

              <div className="bg-[#0a0a0a] border border-white/[0.1] rounded-xl p-4 flex flex-col gap-4 max-w-lg mx-auto text-left">
                {/* User Message */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[#1a1a1a] border border-white/[0.05] rounded-t-xl rounded-bl-xl px-4 py-2 max-w-[85%]">
                    <p className="text-sm text-[#d4d4d4]">Where is Prof. Sharma&apos;s cabin?</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1 text-[10px] font-bold text-white">U</div>
                </div>

                {/* AI Response */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0078D4]/20 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-[#0078D4]" />
                  </div>
                  <div className="bg-[#0078D4]/10 border border-[#0078D4]/20 rounded-t-xl rounded-br-xl px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white/90">Prof. Sharma is located in <span className="text-[#3DDC84] font-mono">Cabin A-402</span>. They are currently available for the next 45 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={itemVariants} className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0078D4] mb-4">
            04 — FEATURES
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase tracking-wider mb-6 text-[#ffffff]">
            EVERYTHING IN ONE PLACE
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {/* Tabs header */}
          <div className="flex overflow-x-auto hide-scrollbar border-b border-white/[0.1] mb-12 pb-px">
            <div className="flex w-max min-w-full justify-start md:justify-center">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 whitespace-nowrap ${isActive
                        ? "border-[#0078D4] text-white"
                        : "border-transparent text-[#525252] hover:text-[#a3a3a3] hover:border-white/[0.1]"
                      }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#0078D4]" : ""}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
    </section>
  );
}
