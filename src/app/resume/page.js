'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Printer, 
  Download, 
  Maximize2, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  Linkedin, 
  Github 
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../../lib/cyberSound';

export default function ResumePage() {
  const [viewMode, setViewMode] = useState('pdf');

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
    <div className="py-8 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb Header */}
      <div className="flex items-center space-x-2 font-mono text-xs mb-6" style={{ color: '#A0A5B5' }}>
        <Link href="/" className="hover:text-[#C6FF36] transition-colors">
          HOME
        </Link>
        <ChevronRight className="w-3.5 h-3.5" style={{ color: '#6B7280' }} />
        <span className="font-bold" style={{ color: '#C6FF36' }}>VERIFIED RESUME</span>
      </div>

      {/* Main Resume Container */}
      <div className="nx-glass rounded-2xl overflow-hidden relative shadow-2xl">

        {/* Top Control Header */}
        <div className="p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4"
          style={{ background: '#080D1C', borderBottom: '1px solid rgba(198,255,54,0.15)' }}>
          
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ background: '#C6FF36' }}></span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: '#C6FF36' }}>
                DOCUMENT PROTOCOL // VERIFIED FLOWCV PDF
              </span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
              Himanshu Tiwari — Official Resume
            </h1>
            <p className="font-mono text-xs mt-0.5" style={{ color: '#A0A5B5' }}>
              Technical Associate at AIVOT AI &bull; B.Sc. Computer Science Graduate
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded font-mono text-xs mr-2"
              style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => {
                  playClickSound();
                  setViewMode('pdf');
                }}
                className="px-3 py-1 rounded transition-colors flex items-center gap-1.5 font-bold"
                style={viewMode === 'pdf'
                  ? { background: '#C6FF36', color: '#050816' }
                  : { color: '#A0A5B5' }}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>ORIGINAL PDF</span>
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  setViewMode('text');
                }}
                className="px-3 py-1 rounded transition-colors flex items-center gap-1.5 font-bold"
                style={viewMode === 'text'
                  ? { background: '#A3FF12', color: '#050816' }
                  : { color: '#A0A5B5' }}
              >
                <span>TELEMETRY</span>
              </button>
            </div>

            {/* Open Full Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-3.5 py-2 rounded font-mono text-xs transition-colors flex items-center gap-1.5"
              style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.15)', color: '#A0A5B5' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C6FF36'; e.currentTarget.style.color = '#C6FF36'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#A0A5B5'; }}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">FULL TAB</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              onMouseEnter={playHoverSound}
              className="px-3.5 py-2 rounded font-mono text-xs transition-colors flex items-center gap-1.5"
              style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.15)', color: '#A0A5B5' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C6FF36'; e.currentTarget.style.color = '#C6FF36'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#A0A5B5'; }}
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT</span>
            </button>

            {/* Download Original PDF Button */}
            <a
              href="/Himanshu_Tiwari_Resume.pdf"
              download="Himanshu_Tiwari_Resume.pdf"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="nx-btn-primary px-4 py-2 text-xs flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF</span>
            </a>

          </div>

        </div>

        {/* Viewport Content */}
        <div className="p-4 sm:p-6 min-h-[75vh]">
          {viewMode === 'pdf' ? (
            <div className="w-full h-[80vh] rounded-lg overflow-hidden shadow-2xl"
              style={{ border: '1px solid rgba(198,255,54,0.25)', background: '#050816' }}>
              <iframe
                id="resume-pdf-frame"
                src="/resume.pdf#toolbar=1&navpanes=0"
                className="w-full h-full"
                title="Himanshu Tiwari Official Resume"
              />
            </div>
          ) : (
            <div className="space-y-6 font-sans text-gray-200 max-w-4xl mx-auto p-4">
              
              <div className="pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 className="font-display font-black text-3xl text-white uppercase tracking-wide">
                  Himanshu Tiwari
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs mt-1" style={{ color: '#C6FF36' }}>
                  <span>Technical Associate @ AIVOT AI</span>
                  <span>&bull;</span>
                  <span>B.Sc. Computer Science Graduate</span>
                </div>

                <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono" style={{ color: '#A0A5B5' }}>
                  <a href="mailto:himanshut9988@gmail.com" className="hover:text-[#C6FF36] flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#C6FF36]" /> himanshut9988@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/himanshu-tiwari" target="_blank" rel="noreferrer" className="hover:text-[#C6FF36] flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-[#C6FF36]" /> LinkedIn
                  </a>
                  <a href="https://github.com/himanshutiwari" target="_blank" rel="noreferrer" className="hover:text-[#C6FF36] flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-[#C6FF36]" /> GitHub
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2 font-bold" style={{ color: '#C6FF36' }}>
                  <Briefcase className="w-4 h-4" /> WORK EXPERIENCE
                </h3>
                <div className="p-4 rounded" style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h4 className="font-display font-bold text-white text-base">AIVOT AI</h4>
                      <div className="text-xs font-mono" style={{ color: '#A3FF12' }}>Technical Associate</div>
                    </div>
                    <div className="text-xs font-mono px-2 py-0.5 rounded font-bold"
                      style={{ background: 'rgba(198,255,54,0.1)', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
                      2024 – PRESENT (CURRENTLY WORKING)
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs font-sans list-disc list-inside" style={{ color: '#A0A5B5' }}>
                    <li>Developing and scaling enterprise AI applications and automated pipelines.</li>
                    <li>Architecting responsive interfaces and scalable backend services with Next.js, React, and Python.</li>
                    <li>Optimizing database performance, state management, and real-time application responsiveness.</li>
                    <li>Active collaboration in fast-paced software development sprints with version control workflows.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2 font-bold" style={{ color: '#A3FF12' }}>
                  <GraduationCap className="w-4 h-4" /> EDUCATION
                </h3>
                <div className="p-4 rounded" style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 className="font-display font-bold text-white text-base">
                    Bachelor of Science (B.Sc.) in Computer Science
                  </h4>
                  <p className="mt-2 text-xs" style={{ color: '#A0A5B5' }}>
                    Core Coursework: Algorithms, Data Structures, Software Engineering, Database Systems, Web Technologies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2 font-bold" style={{ color: '#C6FF36' }}>
                  CORE TECHNICAL ARSENAL
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
                  {[
                    'Python', 'JavaScript', 'React', 'Next.js',
                    'HTML', 'CSS / Tailwind', 'Node.js', 'Express.js',
                    'MongoDB', 'Git & GitHub', 'REST APIs', 'AI Integration'
                  ].map((s) => (
                    <div key={s} className="p-2 rounded flex items-center gap-2"
                      style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.08)', color: '#A0A5B5' }}>
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#C6FF36' }} />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  );
}
