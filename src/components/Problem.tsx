"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  Users, 
  MapPin, 
  MessageSquare, 
  Bell, 
  Search,
  AlertTriangle
} from "lucide-react";

const systems = [
  { icon: Clock, label: "Timetable", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Calendar, label: "Attendance", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { icon: BookOpen, label: "Courses & Academic Info", color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: GraduationCap, label: "LMS / Learning Materials", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: Users, label: "Faculty Information", color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { icon: MapPin, label: "Faculty Cabin Locations", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
  { icon: MessageSquare, label: "Faculty Appointments", color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { icon: Bell, label: "Announcements", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { icon: Search, label: "Lost & Found", color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { icon: AlertTriangle, label: "Campus Communication", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
];

export default function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="problem" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0078D4] mb-4">
            02 — THE PROBLEM
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase max-w-4xl">
            Campus life is broken across 10+ systems
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Stats & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 flex flex-col justify-center"
          >
            <div className="mb-8">
              <span className="stat-number text-[8rem] leading-none font-bold text-white block">10+</span>
              <p className="text-xl text-[#a3a3a3] mt-4 font-medium">
                separate places a student depends on for everyday university tasks
              </p>
            </div>
            
            <p className="text-lg text-[#525252] mb-12">
              Every need lives in a different system or service — so students keep switching, searching, and asking around.
            </p>

            <div className="glass-card p-6 border-l-4 border-l-[#0078D4] bg-white/[0.03] backdrop-blur-xl rounded-r-2xl">
              <p className="text-white font-medium">
                <span className="text-[#0078D4] font-bold">Result:</span> a fragmented student experience — no single place to see, find, or do things on campus.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold tracking-widest uppercase text-[#525252] mb-4">Who is affected every day</p>
              <div className="flex flex-wrap gap-3">
                {["Students", "Faculty", "Administrators"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Fragmented System Pills */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-7/12 flex flex-wrap content-center gap-3 sm:gap-4 mt-10 lg:mt-0 relative"
          >
            {/* Background glow to tie the cluster together */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0078D4]/5 rounded-full blur-[100px] -z-10"></div>
            
            {systems.map((sys, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 pr-5 sm:pr-6 rounded-full border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-default group`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${sys.bg} border ${sys.border} flex items-center justify-center relative overflow-hidden`}>
                  {/* Inner glow */}
                  <div className={`absolute inset-0 opacity-50 blur-md ${sys.bg}`}></div>
                  <sys.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${sys.color} group-hover:scale-110 transition-transform relative z-10`} />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#a3a3a3] group-hover:text-white transition-colors">{sys.label}</h4>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
