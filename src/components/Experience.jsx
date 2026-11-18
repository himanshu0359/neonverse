'use client';

import Link from 'next/link';
import { Briefcase, Calendar, MapPin, ChevronRight, Zap, ArrowRight } from 'lucide-react';
import { playClickSound, playHoverSound } from '../lib/cyberSound';

const responsibilities = [
  'Developing and maintaining AI-powered web applications using React and Next.js',
  'Building RESTful APIs and backend services with Node.js and Express.js',
  'Integrating machine learning models and LLM APIs into production applications',
  'Collaborating with cross-functional teams on product features and technical roadmaps',
  'Optimizing application performance, database queries, and system architecture',
  'Contributing to code reviews, documentation, and agile development sprints',
];

const techStack = ['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'REST APIs', 'Git', 'AI/ML'];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 nx-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(198,255,54,0.04)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest mb-4"
            style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
            <Briefcase className="w-3.5 h-3.5" />
            EXPERIENCE.LOG
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            WORK <span className="text-glow-lime" style={{ color: '#C6FF36' }}>HISTORY</span>
          </h2>
          <div className="mt-3 w-20 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C6FF36, transparent)' }} />
        </div>

        {/* Experience card */}
        <div className="nx-glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,255,54,0.08)]">
          {/* Top accent bar */}
          <div className="h-1 w-full"
            style={{ background: 'linear-gradient(90deg, #C6FF36, #A3FF12, #C6FF36)' }} />

          <div className="p-8 sm:p-10">
            {/* Company header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(198,255,54,0.1)', border: '1px solid rgba(198,255,54,0.3)' }}>
                  <span className="font-display font-black text-xl tracking-wider" style={{ color: '#C6FF36' }}>AI</span>
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wider">AIVOT AI</h3>
                  <div className="font-mono text-sm font-semibold tracking-widest mt-0.5" style={{ color: '#C6FF36' }}>Technical Associate</div>
                  <div className="flex flex-wrap items-center gap-3 mt-2 font-mono text-xs" style={{ color: '#A0A5B5' }}>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 2024 — Present</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Remote / India</span>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(198,255,54,0.1)', border: '1px solid rgba(198,255,54,0.4)', boxShadow: '0 0 15px rgba(198,255,54,0.2)' }}>
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ background: '#C6FF36' }} />
                  <span className="font-mono text-xs font-bold tracking-wider" style={{ color: '#C6FF36' }}>CURRENTLY WORKING</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <div className="font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: '#A0A5B5' }}>
                <div className="w-1 h-4 rounded-full" style={{ background: '#C6FF36' }} />
                KEY RESPONSIBILITIES
              </div>
              <ul className="space-y-3">
                {responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" style={{ color: '#C6FF36' }} />
                    <span className="text-sm leading-relaxed transition-colors" style={{ color: '#A0A5B5' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = '#A0A5B5'}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <div className="font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: '#A0A5B5' }}>
                <div className="w-1 h-4 rounded-full" style={{ background: '#C6FF36' }} />
                TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map(t => (
                  <span key={t} className="px-3 py-1 font-mono text-xs tracking-wider rounded transition-all duration-200"
                    style={{ background: 'rgba(198,255,54,0.08)', border: '1px solid rgba(198,255,54,0.2)', color: '#C6FF36' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(198,255,54,0.15)'; e.currentTarget.style.borderColor = 'rgba(198,255,54,0.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(198,255,54,0.08)'; e.currentTarget.style.borderColor = 'rgba(198,255,54,0.2)'; }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <Link href="/projects" onClick={playClickSound} onMouseEnter={playHoverSound}
                className="nx-btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-xs">
                <Zap className="w-4 h-4" />
                VIEW MY PROJECTS
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" onClick={playClickSound} onMouseEnter={playHoverSound}
                className="nx-btn-outline inline-flex items-center gap-2 px-6 py-2.5 text-xs">
                HIRE ME
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
