import React, { useState } from 'react';
import { Code2, Terminal, BarChart3, Database, GitBranch, Cpu, Globe, Binary, Server, PieChart, Workflow } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const { languages, technologies, tools } = portfolioData.skills;

  const allSkills = [
    ...languages.map(s => ({ ...s, group: 'Languages' })),
    ...technologies.map(s => ({ ...s, group: 'Data Analytics & Frameworks' })),
    ...tools.map(s => ({ ...s, group: 'Tools & Core Concepts' }))
  ];

  const filteredSkills = activeTab === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.group.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-code font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            M Y &nbsp; S K I L L S
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Tab Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'languages', label: 'Programming Languages' },
            { id: 'analytics', label: 'Data Analytics' },
            { id: 'tools', label: 'Tools & DSA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-code font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#38bdf8] text-black shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                  : 'bg-[#0f1420] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-[#0f1420] border border-white/10 hover:border-[#38bdf8]/40 rounded-[20px] p-5 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center font-bold text-sm font-code">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-code block">
                      {skill.category || skill.group}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-code font-bold text-[#38bdf8]">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#38bdf8] to-blue-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
