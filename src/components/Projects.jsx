import React, { useState } from 'react';
import { ExternalLink, Github, BarChart3, Terminal, Layers, CheckCircle2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-code font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            P O R T F O L I O
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Projects
          </h2>
          <div className="w-16 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#0f1420] border border-white/10 hover:border-[#38bdf8]/40 rounded-[24px] p-8 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-code font-semibold bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30">
                    {project.id === 'ipl-power-bi' ? <BarChart3 size={14} /> : <Terminal size={14} />}
                    {project.category}
                  </span>
                  <span className="text-xs font-code text-slate-400">{project.period}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors font-heading">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-code text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-resume text-xs flex-1 justify-center py-2"
                >
                  <span>View Details</span>
                  <Layers size={15} />
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                  title="GitHub Repository"
                >
                  <Github size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-code text-[#38bdf8] font-bold">{selectedProject.category}</span>
                <span className="text-xs font-code text-slate-400">• {selectedProject.period}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">{selectedProject.description}</p>

              <h4 className="text-xs font-code font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Accomplishments:
              </h4>

              <div className="space-y-2 mb-6">
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button onClick={() => setSelectedProject(null)} className="btn btn-secondary btn-sm">
                  Close
                </button>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-resume text-xs px-4 py-2">
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
