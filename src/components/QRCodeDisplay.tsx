"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRCodeDisplay({ url = "https://project-x-site-two.vercel.app/" }) {
  return (
    <div className="relative group p-1">
      {/* Cyber/Tech Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0078D4] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0078D4] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0078D4] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0078D4] transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
      
      {/* Inner Container */}
      <div className="flex flex-col items-center justify-center p-6 bg-black/40 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(0,120,212,0.15)] group-hover:shadow-[0_0_50px_rgba(0,120,212,0.3)] transition-all duration-500 m-1 relative overflow-hidden">
        
        {/* Scanning Line Animation */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0078D4]/50 shadow-[0_0_10px_#0078D4] animate-scan pointer-events-none z-20"></div>

        <div className="bg-white p-2 rounded-sm relative z-10">
          <QRCodeSVG 
            value={url} 
            size={140} 
            level="H"
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>
        
        <div className="flex items-center gap-2 mt-4 text-[#0078D4]">
          <span className="w-1.5 h-1.5 bg-[#0078D4] animate-pulse rounded-full"></span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
            Scan to view
          </span>
          <span className="w-1.5 h-1.5 bg-[#0078D4] animate-pulse rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
