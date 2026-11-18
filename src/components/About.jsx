'use client';


import Link from 'next/link';
import { Briefcase, GraduationCap, Brain, Globe, Code2, ArrowRight, Zap, User } from 'lucide-react';
import { playClickSound, playHoverSound } from '../lib/cyberSound';

const pillars = [
  {
    icon: Briefcase,
    title: 'Technical Associate',
    org: 'AIVOT AI',
    desc: 'Contributing to AI-powered products and intelligent automation systems as a full-stack engineer.',
    color: '#C6FF36',
  },
  {
    icon: GraduationCap,
    title: 'B.Sc. Computer Science',
    org: 'Graduate',
    desc: 'Strong theoretical foundation in algorithms, data structures, software engineering, and system design.',
    color: '#A3FF12',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    org: 'Machine Learning & LLMs',
    desc: 'Passionate about integrating AI into real-world applications, from NLP pipelines to intelligent UX.',
    color: '#C6FF36',
  },
  {
    icon: Globe,
    title: 'Full-Stack Engineer',
    org: 'Web & Mobile',
    desc: 'End-to-end application development with React, Next.js, Node.js, Python, and MongoDB.',
    color: '#A3FF12',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 nx-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(198,255,54,0.04)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest mb-4"
            style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
            <User className="w-3.5 h-3.5" />
            ABOUT.SYS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            WHO AM <span className="text-glow-lime" style={{ color: '#C6FF36' }}>I</span>
          </h2>
          <div className="mt-3 w-20 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C6FF36, transparent)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Intro */}
          <div className="space-y-6">
            <div className="nx-glass rounded-xl p-7 relative overflow-hidden group transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-0.5 opacity-50"
                style={{ background: 'linear-gradient(90deg, rgba(198,255,54,0), #C6FF36, rgba(198,255,54,0))' }} />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded flex items-center justify-center"
                  style={{ background: 'rgba(198,255,54,0.1)', border: '1px solid rgba(198,255,54,0.3)' }}>
                  <Code2 className="w-5 h-5" style={{ color: '#C6FF36' }} />
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest" style={{ color: '#A0A5B5' }}>IDENTITY FILE</div>
                  <div className="font-display font-bold text-lg text-white">HIMANSHU TIWARI</div>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#A0A5B5' }}>
                <p>
                  I&apos;m a <span className="font-semibold" style={{ color: '#C6FF36' }}>Technical Associate at AIVOT AI</span>, working on intelligent, AI-powered systems and full-stack web applications that solve real-world problems.
                </p>
                <p>
                  With a <strong className="text-white">B.Sc. in Computer Science</strong>, I bring a solid engineering foundation combined with passion for modern technologies — React, Next.js, Python, and machine learning integrations.
                </p>
                <p>
                  My goal is to build products that are fast, beautiful, and intelligent — bridging human creativity and machine intelligence.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Next.js', 'React', 'Python', 'Node.js', 'MongoDB', 'AI/ML'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 font-mono text-[10px] tracking-wider rounded"
                    style={{ background: 'rgba(198,255,54,0.08)', border: '1px solid rgba(198,255,54,0.2)', color: '#C6FF36' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/contact" onClick={playClickSound} onMouseEnter={playHoverSound}
              className="nx-btn-primary inline-flex items-center gap-3 px-6 py-3 text-sm">
              <Zap className="w-4 h-4" />
              LET&apos;S COLLABORATE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, org, desc, color }) => (
              <div key={title}
                className="nx-glass rounded-xl p-5 group hover:-translate-y-0.5 transition-all duration-500 cursor-default">
                <div className="w-9 h-9 rounded flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}12`, border: `1px solid ${color}30` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="font-display font-bold text-sm text-white mb-0.5">{title}</div>
                <div className="font-mono text-[10px] tracking-widest mb-2" style={{ color }}>{org}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#A0A5B5' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
