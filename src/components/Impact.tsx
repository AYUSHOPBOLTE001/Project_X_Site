"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, LineChart, GraduationCap, Users, ArrowRight } from "lucide-react";

const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      // Increment based on a step time
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      
      let timer: NodeJS.Timeout;
      
      if (end === 0) return;
      
      const updateCounter = () => {
        start += Math.ceil(end / (duration * 60)); // Assumes 60fps
        if (start > end) start = end;
        setCount(start);
        if (start < end) {
          timer = setTimeout(updateCounter, 1000 / 60);
        }
      };
      
      updateCounter();
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Impact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section id="impact" className="py-12 md:py-16 lg:py-20 bg-[#000000] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 md:mb-24"
        >
          <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0078D4] mb-4">
            07 — IMPACT & VISION
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
            TRANSFORMING CAMPUS LIFE
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          <motion.div variants={itemVariants} className="glass-card p-8 text-center flex flex-col items-center justify-center">
            <h3 className="stat-number mb-2">
              <AnimatedCounter value={5000} />+
            </h3>
            <p className="text-[#a3a3a3] text-sm max-w-[200px]">students freed from navigating fragmented systems daily</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-card p-8 text-center flex flex-col items-center justify-center">
            <h3 className="stat-number mb-2">
              <AnimatedCounter value={60} />%+
            </h3>
            <p className="text-[#a3a3a3] text-sm max-w-[200px]">less time spent switching between platforms</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-card p-8 text-center flex flex-col items-center justify-center">
            <h3 className="stat-number mb-2">
              <AnimatedCounter value={5} />
            </h3>
            <p className="text-[#a3a3a3] text-sm max-w-[200px]">distinct user roles, each with a personalised experience</p>
          </motion.div>
        </motion.div>

        <div className="w-full h-px bg-white/5 my-16 sm:my-24"></div>

        {/* Roadmap */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-wider uppercase mb-12 text-center">
            Roadmap to Launch
          </motion.h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <motion.div variants={itemVariants} className="glass-card p-6 w-full md:w-[30%] relative z-10">
              <div className="text-[#0078D4] font-bold mb-2">STEP 1</div>
              <h4 className="text-xl font-bold mb-2 text-white">Complete Student Portal</h4>
              <p className="text-[#a3a3a3] text-sm">Full academic hub + campus services integrated.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hidden md:flex text-[#525252] w-[5%] justify-center">
              <ArrowRight size={24} />
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 w-full md:w-[30%] relative z-10 border-[#0078D4]/30 bg-[#0078D4]/5">
              <div className="text-[#0078D4] font-bold mb-2">STEP 2</div>
              <h4 className="text-xl font-bold mb-2 text-white">Faculty & Admin Dashboards</h4>
              <p className="text-[#a3a3a3] text-sm">Role-specific features and permissions.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="hidden md:flex text-[#525252] w-[5%] justify-center">
              <ArrowRight size={24} />
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 w-full md:w-[30%] relative z-10">
              <div className="text-[#0078D4] font-bold mb-2">STEP 3</div>
              <h4 className="text-xl font-bold mb-2 text-white">100+ Test Users</h4>
              <p className="text-[#a3a3a3] text-sm">Across all 5 roles testing in real scenarios.</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-white/5 my-16 sm:my-24"></div>

        {/* Future Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-wider uppercase mb-12 text-center">
            Future Vision
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="glow-card p-8">
              <Bot className="text-[#0078D4] mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3 text-white">AI Assistant</h4>
              <p className="text-[#a3a3a3]">Built-in student assistant inside the community space.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glow-card p-8">
              <LineChart className="text-[#0078D4] mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3 text-white">Campus Analytics</h4>
              <p className="text-[#a3a3a3]">Lost & Found trends, anonymised campus insights.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glow-card p-8">
              <GraduationCap className="text-[#0078D4] mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3 text-white">Full Academic Coverage</h4>
              <p className="text-[#a3a3a3]">All key academic functions brought into Project X.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glow-card p-8">
              <Users className="text-[#0078D4] mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3 text-white">Richer Community</h4>
              <p className="text-[#a3a3a3]">Messages, events, and student interaction in one place.</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
