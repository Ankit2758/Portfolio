import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { personal } = portfolioData;

  return (
    <footer className="bg-[#05070a] border-t border-white/10 py-10 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-accent)]">
              <Code2 size={20} />
            </div>
            <div>
              <span className="font-heading font-bold text-base text-white block">
                {personal.name}
              </span>
              <span className="text-[11px] font-code text-slate-400">
                LPU CSE '28 • Infosys Certified C++ Programmer
              </span>
            </div>
          </div>

          {/* Center: Copyright */}
          <div className="text-xs text-slate-400 font-code text-center">
            © {new Date().getFullYear()} {personal.name}. Built with React, Vite & Vanilla CSS.
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm gap-1.5"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>

        </div>
      </div>
    </footer>
  );
}
