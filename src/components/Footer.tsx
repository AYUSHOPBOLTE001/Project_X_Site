"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

import QRCodeDisplay from "./QRCodeDisplay";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-[#000000] relative overflow-hidden">
        {/* Radial glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0078D4]/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase mb-4 text-white">
              READY TO UNIFY YOUR CAMPUS?
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-8">
              One login. One dashboard. One campus.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <a
                href="https://github.com/AYUSHOPBOLTE001/Project_X_Site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                VIEW ON GITHUB
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="shrink-0"
          >
            <QRCodeDisplay url="https://project-x-site-two.vercel.app/" />
          </motion.div>
        </div>
      </section>

      {/* Actual Footer */}
      <footer className="bg-black border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

            {/* Left */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xl font-bold tracking-wider text-white mb-2">PROJECT X</span>
              <span className="text-sm text-[#525252]">Team 257 — Microsoft Innovate {currentYear}</span>
            </div>

            {/* Center - Links */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[#a3a3a3]">
              <Link href="#features" className="hover:text-white transition-colors">Features</Link>
              <Link href="#architecture" className="hover:text-white transition-colors">Architecture</Link>
              <Link href="#impact" className="hover:text-white transition-colors">Impact</Link>
              <Link href="#team" className="hover:text-white transition-colors">Team</Link>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4 justify-center">
              <span className="text-sm text-[#525252]">Built for Bennett University</span>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 text-center text-sm text-[#525252]">
            © {currentYear} Project X — Team 257, Bennett University. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
