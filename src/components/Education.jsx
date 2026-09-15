import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-code font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            A C A D E M I C &nbsp; H I S T O R Y
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Education &amp; Academic Background
          </h2>
          <div className="w-16 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Detailed Education Cards Grid (No Photos) */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((item) => (
            <div 
              key={item.id}
              className="bg-[#0f1420] border border-white/10 hover:border-[#38bdf8]/40 rounded-[24px] p-6 sm:p-8 transition-all shadow-2xl group"
            >
              <div>
                {/* Header: Institution & Score */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-code text-[#38bdf8] mb-1.5 flex-wrap">
                      <span className="px-3 py-0.5 rounded-full text-xs font-code bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30">
                        {item.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-code text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                        <Calendar size={12} className="text-[#38bdf8]" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-code text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                        <MapPin size={12} className="text-rose-400" />
                        {item.location}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-white font-heading group-hover:text-[#38bdf8] transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      {item.degree}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-code shrink-0 self-start sm:self-auto">
                    <Award size={14} />
                    {item.score}
                  </span>
                </div>

                {/* About Institution */}
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
                  {item.about}
                </p>

                {/* Key Highlights */}
                <h4 className="text-xs font-code font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Building2 size={14} className="text-[#38bdf8]" />
                  <span>Academic Highlights:</span>
                </h4>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-[#38bdf8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Core Courses / Subjects */}
                <div>
                  <h4 className="text-[11px] font-code text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <BookOpen size={13} className="text-[#38bdf8]" />
                    <span>Core Coursework &amp; Subjects:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.courses.map((course, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-code text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
