'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ResumeModal from '../components/ResumeModal';
import { 
  ArrowRight, 
  Cpu, 
  Layers, 
  Briefcase, 
  FolderGit2, 
  Send, 
  FileText, 
  Sparkles, 
  Radio 
} from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessSound } from '../lib/cyberSound';

const pagePortals = [
  {
    title: 'OPERATOR PROFILE',
    subtitle: 'Background & Mission',
    href: '/about',
    icon: Cpu,
    color: '#C6FF36',
    stats: 'AIVOT AI // B.Sc. CS',
  },
  {
    title: 'TECH ARSENAL',
    subtitle: '10 Core Stack Skills',
    href: '/skills',
    icon: Layers,
    color: '#A3FF12',
    stats: 'React, Next.js, Python, Node',
  },
  {
    title: 'OPERATIONAL LOGS',
    subtitle: 'Career Milestones',
    href: '/experience',
    icon: Briefcase,
    color: '#C6FF36',
    stats: 'Technical Associate (Active)',
  },
  {
    title: 'FLAGSHIP PROJECTS',
    subtitle: 'Live Interactive Apps',
    href: '/projects',
    icon: FolderGit2,
    color: '#A3FF12',
    stats: '4 Full-Stack Projects',
  },
  {
    title: 'ORIGINAL RESUME',
    subtitle: 'Verified FlowCV PDF',
    href: '/resume',
    icon: FileText,
    color: '#C6FF36',
    stats: 'View & Download PDF',
  },
  {
    title: 'COMM UPLINK',
    subtitle: 'Encrypted Dispatch',
    href: '/contact',
    icon: Send,
    color: '#A3FF12',
    stats: 'Direct Node Channels',
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(15);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Initial Cyber Boot Sequence
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            try {
              playSuccessSound();
            } catch {
              // Ignore audio on first un-interacted load
            }
          }, 250);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 14;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Cyber Initial Boot / Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white px-4 font-mono select-none" style={{ background: '#050816' }}>
          <div className="absolute inset-0 nx-grid opacity-50 pointer-events-none" />
          <div className="w-full max-w-md p-6 rounded-xl relative z-10"
            style={{ background: '#080D1C', border: '2px solid rgba(198,255,54,0.5)', boxShadow: '0 0 40px rgba(198,255,54,0.2)' }}>

            <div className="flex items-center justify-between pb-3 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="text-xs flex items-center gap-2" style={{ color: '#C6FF36' }}>
                <span className="w-2 h-2 rounded-full animate-ping" style={{ background: '#C6FF36' }}></span>
                SYSTEM BOOT // NEONVERSE
              </span>
              <span className="text-xs" style={{ color: '#A0A5B5' }}>v2.4.0</span>
            </div>

            <div className="text-center my-6">
              <div className="font-display font-black text-3xl tracking-wider text-white mb-1">
                HIMANSHU TIWARI
              </div>
              <div className="text-xs font-mono" style={{ color: '#C6FF36' }}>
                TECHNICAL ASSOCIATE @ AIVOT AI
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs" style={{ color: '#A0A5B5' }}>
                <span>INITIALIZING SYSTEM MATRIX</span>
                <span className="font-bold" style={{ color: '#C6FF36' }}>{Math.min(loadingProgress, 100)}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full overflow-hidden p-[1px]" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(198,255,54,0.2)' }}>
                <div
                  className="h-full rounded-full transition-all duration-150"
                  style={{ width: `${Math.min(loadingProgress, 100)}%`, background: 'linear-gradient(90deg, #C6FF36, #A3FF12)', boxShadow: '0 0 10px rgba(198,255,54,0.6)' }}
                ></div>
              </div>
            </div>

            <div className="mt-4 pt-3 flex justify-between text-[10px]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#A0A5B5' }}>
              <span>CORE: READY</span>
              <span>MULTI-PAGE: ONLINE</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Home Hero */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* Multi-Page Fast Travel Portal Hub */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(198,255,54,0.08)' }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col items-center mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest mb-3"
              style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              PAGE DIRECTORY
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide uppercase">
              EXPLORE DEDICATED <span className="text-glow-lime" style={{ color: '#C6FF36' }}>SECTORS</span>
            </h2>
            <p className="font-mono text-xs mt-1" style={{ color: '#A0A5B5' }}>
              Select any portal below for dedicated full-page architectures
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pagePortals.map((portal) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={portal.title}
                  href={portal.href}
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className="nx-glass p-5 rounded-lg relative group flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5">

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${portal.color}15`,
                          borderColor: `${portal.color}40`,
                          border: `1px solid ${portal.color}40`,
                          color: portal.color
                        }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] flex items-center gap-1 transition-colors" style={{ color: '#A0A5B5' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#C6FF36'}
                        onMouseLeave={e => e.currentTarget.style.color = '#A0A5B5'}>
                        GO TO PAGE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#C6FF36] transition-colors">
                      {portal.title}
                    </h3>
                    <p className="font-mono text-xs mt-0.5" style={{ color: '#A0A5B5' }}>
                      {portal.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 font-mono text-[11px]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: portal.color }}>
                    {portal.stats}
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* About Preview */}
      <About />

      {/* Skills Showcase */}
      <Skills />

      {/* Experience Showcase */}
      <Experience />

      {/* Flagship Projects */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
