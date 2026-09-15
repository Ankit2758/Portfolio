import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-code font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            G E T &nbsp; I N &nbsp; T O U C H
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#0f1420] border border-white/10 rounded-[24px] p-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-full text-xs font-code bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <span className="text-xs font-code text-slate-400 block mb-1">Email Address</span>
              <a href={`mailto:${personal.email}`} className="text-sm sm:text-base font-bold text-white hover:text-[#38bdf8] transition-colors">
                {personal.email}
              </a>
            </div>

            {/* Phone & Location */}
            <div className="bg-[#0f1420] border border-white/10 rounded-[24px] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-[#38bdf8] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs font-code text-slate-400 block">Phone</span>
                  <a href={`tel:${personal.phone}`} className="text-sm font-bold text-white hover:text-[#38bdf8]">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-[#38bdf8] flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-code text-slate-400 block">Location</span>
                  <span className="text-sm font-bold text-white">{personal.location}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f1420] border border-white/10 rounded-[24px] p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-heading">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Message Sent!</h4>
                  <p className="text-xs text-slate-300">Thank you for reaching out, Ankit Verma will respond soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-code text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#07090e] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-code text-slate-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#07090e] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-code text-slate-300 mb-1.5">Message</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Hello Ankit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#07090e] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-resume w-full justify-center py-2.5">
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
