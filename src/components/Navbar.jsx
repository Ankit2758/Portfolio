import React, { useState, useEffect } from 'react';
import { FileText, Palette, ChevronDown, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeTheme, setActiveTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Tech Stack', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const themes = ['Midnight', 'Cyberpunk', 'Emerald'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { personal } = portfolioData;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070e]/90 backdrop-blur-lg border-b border-white/10 py-3.5">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo: Cyan Icon + >_ Ankit Verma */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#38bdf8] flex items-center justify-center text-black font-extrabold text-sm shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            &gt;_
          </div>
          <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
            Ankit Verma
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive ? 'text-[#38bdf8] font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Controls: Show CV Button + Theme Selector */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="btn-resume text-xs sm:text-sm px-4 py-2 cursor-pointer flex items-center gap-1.5"
            title="Open Ankit Verma's Official CV on GitHub"
          >
            <FileText size={15} />
            <span>Show CV</span>
          </a>

          {/* Theme Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex items-center gap-1.5 bg-[#0f1420] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white px-3 py-1.5 rounded-full text-xs font-code transition-colors cursor-pointer"
            >
              <Palette size={14} className="text-[#38bdf8]" />
              <span>{activeTheme}</span>
              <ChevronDown size={13} className="text-slate-400" />
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#0f1420] border border-white/10 rounded-xl shadow-2xl py-1 z-50">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setActiveTheme(t);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-code flex items-center justify-between cursor-pointer ${
                      activeTheme === t ? 'text-[#38bdf8] font-bold bg-white/5' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{t}</span>
                    {activeTheme === t && <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={personal.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="btn-resume text-xs px-3 py-1.5 flex items-center gap-1"
            title="Show CV"
          >
            <FileText size={14} />
            <span>Show CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-[#0f1420] rounded-lg border border-white/10"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e] border-b border-white/10 px-6 py-5 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-[#38bdf8] text-sm font-medium py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
