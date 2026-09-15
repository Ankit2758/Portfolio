import React, { useState, useEffect } from 'react';
import { FileText, Rocket, Send, RotateCw, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onThemeClick }) {
  const titles = [
    'Building Data Analytics & C++ Solutions',
    'Exploratory Data Analysis in Python & Power BI',
    'Data Structures & Algorithm Design',
    'Full-Stack Web Development'
  ];

  // Restricted Indian Languages List
  const indianGreetings = [
    { greeting: "Hi, I'm", name: "Ankit Verma", lang: "English", flag: "🇬🇧" },
    { greeting: "नमस्ते, मैं", name: "अंकित वर्मा हूँ", lang: "Hindi (हिंदी)", flag: "🇮🇳" },
    { greeting: "வணக்கம், நான்", name: "அங்கித் வர்மா", lang: "Tamil (தமிழ்)", flag: "🇮🇳" },
    { greeting: "నమస్కారం, నేను", name: "అంకిత్ వర్మ", lang: "Telugu (తెలుగు)", flag: "🇮🇳" }
  ];

  const [langIndex, setLangIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [animating, setAnimating] = useState(false);

  const currentGreeting = indianGreetings[langIndex];

  const handleLangChange = () => {
    setAnimating(true);
    setLangIndex((prev) => (prev + 1) % indianGreetings.length);
    setTimeout(() => setAnimating(false), 300);
  };

  // Typing effect simulation for roles
  useEffect(() => {
    const currentFullText = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const { personal } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Action Pills */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Status Pill: Open to Internships + Active Language Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f1420] border border-white/10 text-xs font-code">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-slate-200">Open to Software Engineering Roles</span>
              <button
                onClick={handleLangChange}
                className="bg-[#38bdf8]/15 hover:bg-[#38bdf8]/30 border border-[#38bdf8]/40 px-2.5 py-0.5 rounded-full text-[11px] text-[#38bdf8] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                title="Click to cycle languages"
              >
                <span>{currentGreeting.flag} {currentGreeting.lang}</span>
                <RotateCw size={11} />
              </button>
            </div>

            {/* Clickable Multilingual Headline Line */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 
                onClick={handleLangChange}
                className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight cursor-pointer select-none transition-transform duration-200 ${
                  animating ? 'scale-95 opacity-75' : 'scale-100 opacity-100'
                }`}
                title="Click to change language!"
              >
                <span>{currentGreeting.greeting} </span>
                <span className="gradient-text-reference">{currentGreeting.name}</span>
              </h1>

              <button
                onClick={handleLangChange}
                className="inline-flex items-center gap-1.5 bg-[#0f1420] border border-[#38bdf8]/40 hover:border-[#38bdf8] text-xs text-[#38bdf8] hover:text-white px-3 py-1.5 rounded-full font-code transition-all cursor-pointer shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                title="Click to switch language"
              >
                <Languages size={14} />
                <span>Change Lang 🔄</span>
              </button>
            </div>

            {/* Typing Subheadline */}
            <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-200 min-h-[40px] flex items-center">
              <span>{displayText}</span>
              <span className="w-0.5 h-7 bg-[#38bdf8] inline-block ml-1 animate-caret" />
            </div>

            {/* Paragraph Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Computer Science Engineer specializing in C++, Data Analytics, Power BI, Python, and Data Structures & Algorithms. Passionate about building clean, high-performance web applications and data-driven dashboards.
            </p>

            {/* 3 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Show CV Button */}
              <a 
                href={personal.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="btn-resume text-sm px-5 py-2.5 cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-2"
                title="Open Ankit Verma's Official CV"
              >
                <FileText size={16} />
                <span>Show CV</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#0f1420] hover:bg-[#161d2e] border border-white/10 hover:border-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
              >
                <Rocket size={16} className="text-[#38bdf8]" />
                <span>View My Work</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-[#38bdf8]/10 border border-[#38bdf8]/40 hover:border-[#38bdf8] text-[#38bdf8] font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
              >
                <Send size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
              <div>
                <h4 className="text-base font-extrabold text-white font-heading">B.Tech CSE</h4>
                <p className="text-xs text-slate-400 font-code">Lovely Professional Univ.</p>
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#38bdf8] font-heading">6.80 CGPA</h4>
                <p className="text-xs text-slate-400 font-code">Engineering Score</p>
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white font-heading">C++ & Python</h4>
                <p className="text-xs text-slate-400 font-code">Data Analytics & DSA</p>
              </div>
            </div>

          </div>

          {/* Right Column: Avatar Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#0f1420] border border-white/10 rounded-[28px] p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group hover:border-[#38bdf8]/40 transition-all">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#38bdf8]/25 transition-all" />

              {/* Circular Avatar */}
              <div className="relative mb-6">
                <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-[#38bdf8] via-blue-500 to-indigo-500 shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#07090e] flex items-center justify-center">
                    <img
                      src="developer_avatar.jpg"
                      alt="Ankit Verma"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.src = 'developer_avatar.png';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-extrabold text-white mb-1 font-heading">
                Ankit Verma
              </h3>
              <p className="text-xs font-code text-[#38bdf8] font-semibold tracking-wider">
                CS Engineer @ LPU
              </p>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
