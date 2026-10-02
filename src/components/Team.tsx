"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Krishang Jain",
    role: "Leader & App Developer",
    program: "B.Tech CSE, 2nd Year",
    initials: "KJ",
    image: "/images/krishang.jpeg",
    github: "https://github.com/predator-27",
    linkedin: "https://www.linkedin.com/in/krishang-jain-2a804743b/"
  },
  {
    name: "Akhil Tyagi",
    role: "Lead Developer & UI/UX Design",
    program: "BCA, 2nd Year",
    initials: "AT",
    image: "/images/Akhil.jpeg",
    github: "https://github.com/atriputr",
    linkedin: "https://www.linkedin.com/in/akhil-tyagi-bb811621b"
  },
  {
    name: "Ayush Singh",
    role: "Cybersecurity & Website Design",
    program: "BCA, 2nd Year",
    initials: "AS",
    image: "/images/Ayush.jpeg",
    github: "https://github.com/AYUSHOPBOLTE001",
    linkedin: "https://www.linkedin.com/in/ayushopbolte001/"
  },
  {
    name: "Arun Dev Vasishth",
    role: "Interpreter",
    program: "B.Tech CSE, 2nd Year",
    initials: "AV",
    image: "/images/Arun.jpeg",
    github: "https://share.google/DjmL88j8EdaaMVTt3",
    linkedin: "https://www.linkedin.com/in/arun-dev-vashist-8b84953a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "Shabd Verma",
    role: "Beta Tester",
    program: "B.Tech CSE, 2nd Year",
    initials: "SV",
    image: "/images/shadb.jpeg",
    github: "https://github.com/shabdv3476",
    linkedin: "https://www.linkedin.com/in/shabd-verma-2b4526363"
  },
];

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section id="team" className="py-12 md:py-16 lg:py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0078D4] mb-4">
            08 — THE TEAM
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase mb-6">
            BUILT BY TEAM 257
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#a3a3a3] text-lg max-w-2xl">
            A team of 5 from Bennett University, guided by mentor Shabnam Firdaus
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mb-16"
        >
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants} 
              className="glass-card p-6 flex flex-col items-center text-center group hover:border-[#0078D4]/50 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,120,212,0.15)]"
            >
              <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-[#0078D4] to-blue-600 shadow-[0_0_20px_rgba(0,120,212,0.3)] overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-[#0078D4] mb-2 font-medium">{member.role}</p>
              <p className="text-xs text-[#525252] mb-6">{member.program}</p>
              
              <div className="flex gap-4 mt-auto">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                  <Github size={20} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#084e96] transition-colors">
                  <Linkedin size={20} fill="currentColor" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#a3a3a3] font-medium backdrop-blur-md">
            Mentored by <span className="text-white">Shabnam Firdaus</span>
          </div>
          <div className="text-xs tracking-[0.2em] uppercase text-[#525252]">
            Bennett University | Microsoft Innovate 2026
          </div>
        </motion.div>

      </div>
    </section>
  );
}
