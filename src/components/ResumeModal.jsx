'use client';

import { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  Linkedin, 
  Github, 
  Maximize2 
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../lib/cyberSound';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'text'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    const iframe = document.getElementById('resume-pdf-frame');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.print();
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl h-[94vh] rounded-xl flex flex-col overflow-hidden"
        style={{ background: '#080D1C', border: '2px solid rgba(198,255,54,0.4)', boxShadow: '0 0 40px rgba(198,255,54,0.2)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hud-corner-tl"></div>
        <div className="hud-corner-tr"></div>
        <div className="hud-corner-bl"></div>
        <div className="hud-corner-br"></div>

        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-[#C6FF36]/30 bg-[#050816] gap-2">
          
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF36] animate-ping"></span>
            <div>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#C6FF36] uppercase tracking-wider block">
                ORIGINAL RESUME // HIMANSHU TIWARI
              </span>
              <span className="text-[10px] font-mono text-[#A0A5B5] hidden sm:inline">
                FILE: Himanshu_Tiwari_Resume.pdf &bull; VERIFIED FORMAT
              </span>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-[#080D1C] p-1 rounded border border-white/10 text-xs font-mono">
            <button
              onClick={() => {
                playClickSound();
                setViewMode('pdf');
              }}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                viewMode === 'pdf'
                  ? 'bg-[#C6FF36] text-[#050816] font-bold shadow-[0_0_15px_rgba(198,255,54,0.4)]'
                  : 'text-[#A0A5B5] hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ORIGINAL PDF</span>
            </button>
            <button
              onClick={() => {
                playClickSound();
                setViewMode('text');
              }}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                viewMode === 'text'
                  ? 'bg-[#A3FF12] text-[#050816] font-bold shadow-[0_0_15px_rgba(163,255,18,0.4)]'
                  : 'text-[#A0A5B5] hover:text-white'
              }`}
            >
              <span>TELEMETRY VIEW</span>
            </button>
          </div>

          {/* Action Hub */}
          <div className="flex items-center space-x-2">
            {/* Open in new tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded bg-[#080D1C] border border-white/15 text-[#A0A5B5] hover:text-[#C6FF36] hover:border-[#C6FF36] font-mono text-xs transition-colors flex items-center gap-1.5"
              title="Open Original PDF in New Tab"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">FULL TAB</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              onMouseEnter={playHoverSound}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded bg-[#080D1C] border border-white/15 text-[#A0A5B5] hover:text-[#C6FF36] hover:border-[#C6FF36] font-mono text-xs transition-colors flex items-center gap-1.5"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">PRINT</span>
            </button>

            {/* Direct Download Original PDF */}
            <a
              href="/Himanshu_Tiwari_Resume.pdf"
              download="Himanshu_Tiwari_Resume.pdf"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-3 py-1.5 rounded bg-[#C6FF36] hover:bg-[#A3FF12] text-[#050816] font-mono font-bold text-xs transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(198,255,54,0.4)]"
              title="Download Original PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-1.5 rounded border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Modal Main View */}
        <div className="flex-1 overflow-hidden relative bg-black/60">
          
          {viewMode === 'pdf' ? (
            /* Original PDF Document Viewer */
            <div className="w-full h-full flex flex-col p-2 sm:p-4">
              <iframe
                id="resume-pdf-frame"
                src="/resume.pdf#toolbar=1&navpanes=0"
                className="w-full h-full rounded-lg border border-cyber-neon-green/40 shadow-inner bg-slate-900"
                title="Himanshu Tiwari Original Resume"
              />
            </div>
          ) : (
            /* Telemetry Summary View */
            <div className="p-6 sm:p-8 overflow-y-auto h-full font-sans text-gray-200 space-y-6">
              
              <div className="border-b border-gray-800 pb-6">
                <h2 className="font-display font-black text-3xl text-white uppercase tracking-wide">
                  Himanshu Tiwari
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-cyber-neon-green mt-1">
                  <span>Technical Associate @ AIVOT AI</span>
                  <span>&bull;</span>
                  <span>B.Sc. Computer Science Graduate</span>
                </div>

                <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-gray-400">
                  <a href="mailto:rtiwarihimanshu@gmail.com" className="hover:text-cyber-neon-cyan flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-cyber-neon-cyan" /> rtiwarihimanshu@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/himanshu-r-tiwari-a2148" target="_blank" rel="noreferrer" className="hover:text-cyber-neon-green flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-cyber-neon-green" /> LinkedIn
                  </a>
                  <a href="https://github.com/himanshutiwari" target="_blank" rel="noreferrer" className="hover:text-cyber-neon-purple flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-cyber-neon-purple" /> GitHub
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs text-cyber-neon-green uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                  <Briefcase className="w-4 h-4" /> WORK EXPERIENCE
                </h3>
                <div className="p-4 bg-cyber-dark rounded border border-gray-800">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h4 className="font-display font-bold text-white text-base">AIVOT AI</h4>
                      <div className="text-xs font-mono text-cyber-neon-cyan">Technical Associate</div>
                    </div>
                    <div className="text-xs font-mono text-cyber-neon-green px-2 py-0.5 rounded bg-cyber-neon-green/10 border border-cyber-neon-green/30">
                      2024 – PRESENT (CURRENTLY WORKING)
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-gray-300 font-sans list-disc list-inside">
                    <li>Developing and scaling enterprise AI applications and automated pipelines.</li>
                    <li>Architecting responsive interfaces and scalable backend services with Next.js, React, and Python.</li>
                    <li>Optimizing database performance, state management, and real-time application responsiveness.</li>
                    <li>Active collaboration in fast-paced software development sprints with version control workflows.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                  <GraduationCap className="w-4 h-4" /> EDUCATION
                </h3>
                <div className="p-4 bg-cyber-dark rounded border border-gray-800">
                  <h4 className="font-display font-bold text-white text-base">
                    Bachelor of Science (B.Sc.) in Computer Science
                  </h4>
                  <p className="mt-2 text-xs text-gray-400">
                    Core Coursework: Algorithms, Data Structures, Software Engineering, Database Systems, Web Technologies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs text-cyber-neon-purple uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                  CORE TECHNICAL ARSENAL
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
                  {[
                    'Python', 'JavaScript', 'React', 'Next.js',
                    'HTML', 'CSS / Tailwind', 'Node.js', 'Express.js',
                    'MongoDB', 'Git & GitHub', 'REST APIs', 'AI Integration'
                  ].map((s) => (
                    <div key={s} className="p-2 rounded bg-cyber-dark border border-gray-800 text-gray-300 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyber-neon-green" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-cyber-card border-t border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-cyber-neon-green">
            <CheckCircle2 className="w-3.5 h-3.5" /> ORIGINAL DOCUMENT LOADED
          </span>
          <span className="text-gray-500 hidden sm:inline">
            PRESS &apos;ESC&apos; OR CLICK CLOSE TO EXIT
          </span>
        </div>

      </div>
    </div>
  );
}
