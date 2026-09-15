import React from 'react';
import { Settings, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header: WHO I AM + About Me + Glowing Underline Bar */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-code font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            W H O &nbsp; I &nbsp; A M
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            About Me
          </h2>
          {/* Glowing accent bar underline */}
          <div className="w-16 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Main Background & Goals Card (Exact Reference Image 2) */}
        <div className="bg-[#0f1420] border border-white/10 rounded-[24px] p-8 sm:p-10 shadow-2xl max-w-4xl mx-auto hover:border-white/20 transition-all">
          
          {/* Card Header: Icon + Title */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
              <Settings size={20} />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              Background & Goals
            </h3>
          </div>

          {/* Paragraph text */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            I am a B.Tech Computer Science student at Lovely Professional University with a strong foundation in Data Structures & Algorithms in C++, exploratory data analysis using Python & Power BI, and full-stack web development. I thrive on solving complex algorithmic problems and engineering responsive, user-friendly digital experiences.
          </p>

          {/* 2x2 Grid of Checked Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            {[
              "B.Tech CSE @ Lovely Professional University",
              "C++ Data Structures & Algorithm Design",
              "Power BI & DAX Data Analytics",
              "Python Pandas, NumPy & Data Visualization"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
