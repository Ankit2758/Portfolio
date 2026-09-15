import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, FileText, Eye, Download, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCertPdf, setSelectedCertPdf] = useState(null);

  const { certifications } = portfolioData;

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-code font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            V E R I F I E D &nbsp; C E R T I F I C A T E S
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Certificates &amp; Credentials
          </h2>
          <div className="w-16 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Certificates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-[#0f1420] border border-white/10 hover:border-[#38bdf8]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center font-bold">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-code text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck size={14} />
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 font-heading group-hover:text-[#38bdf8] transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-code text-[#38bdf8] font-semibold mb-4">
                  Issued by {cert.issuer} • {cert.date}
                </p>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((s, i) => (
                    <span key={i} className="text-xs font-code text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {cert.pdfName ? (
                  <button 
                    onClick={() => setSelectedCertPdf(cert)}
                    className="btn-resume text-xs flex-1 justify-center py-2.5 cursor-pointer"
                  >
                    <Eye size={15} />
                    <span>View Certificate</span>
                  </button>
                ) : (
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-resume text-xs flex-1 justify-center py-2.5"
                  >
                    <FileText size={15} />
                    <span>Verify Credential</span>
                  </a>
                )}

                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                  title="Verify on Infosys Onwingspan"
                >
                  <ExternalLink size={17} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Direct PDF View Modal */}
        {selectedCertPdf && (
          <div className="modal-overlay" onClick={() => setSelectedCertPdf(null)}>
            <div className="modal-content max-w-4xl" onClick={(e) => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center font-bold">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">{selectedCertPdf.title}</h3>
                    <p className="text-xs font-code text-[#38bdf8]">Infosys Springboard Official Certificate</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedCertPdf(null)} 
                  className="text-slate-400 hover:text-white p-2 bg-white/5 rounded-full cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* PDF Embed iFrame */}
              <div className="w-full bg-[#07090e] rounded-xl overflow-hidden border border-white/10 mb-4">
                <iframe 
                  src={selectedCertPdf.pdfName}
                  title={selectedCertPdf.title}
                  className="w-full h-[520px] rounded-xl"
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                <span className="text-xs font-code text-slate-400">
                  Awarded on {selectedCertPdf.issuedDate || selectedCertPdf.date}
                </span>

                <div className="flex items-center gap-3">
                  <a 
                    href={selectedCertPdf.pdfName} 
                    download 
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-code bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>

                  <a 
                    href={selectedCertPdf.verifyUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-resume text-xs px-4 py-2"
                  >
                    <ExternalLink size={14} />
                    <span>Verify on Infosys</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
