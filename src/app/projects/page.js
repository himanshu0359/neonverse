'use client';

import { useState } from 'react';
import Link from 'next/link';
import Projects from '../../components/Projects';
import { ChevronRight, ArrowRight, Github } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../lib/cyberSound';

const projectPreviews = [
  {
    id: 'taskify',
    title: 'Taskify',
    subtitle: 'Task Management Application',
    category: 'Productivity',
    color: '#C6FF36',
    summary: 'Kanban board & sprint tracking application with sub-second state sync and priority metrics.',
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/himanshutiwari/taskify',
  },
  {
    id: 'splitr',
    title: 'Splitr',
    subtitle: 'AI-Powered Expense Splitting App',
    category: 'AI & FinTech',
    color: '#A3FF12',
    summary: 'Intelligent group finance platform using AI to parse receipts and simplify multi-party debt.',
    tech: ['Next.js', 'Python', 'AI APIs', 'React', 'MongoDB'],
    github: 'https://github.com/himanshutiwari/splitr',
  },
  {
    id: 'prescripto',
    title: 'Prescripto',
    subtitle: 'Doctor Appointment Booking System',
    category: 'HealthTech',
    color: '#C6FF36',
    summary: 'Healthcare appointment scheduler connecting patients with specialists, digital prescriptions & slots.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/himanshutiwari/prescripto',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Clone',
    subtitle: 'Messaging Application',
    category: 'Communication',
    color: '#A3FF12',
    summary: 'Low-latency real-time chat application powered by WebSockets, read receipts, and media sharing.',
    tech: ['React', 'JavaScript', 'Node.js', 'Socket.IO'],
    github: 'https://github.com/himanshutiwari/whatsapp-clone',
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filtered = projectPreviews.filter(p => selectedCategory === 'ALL' || p.category === selectedCategory);

  return (
    <div className="py-8 animate-fadeIn">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center space-x-2 font-mono text-xs" style={{ color: '#A0A5B5' }}>
          <Link href="/" className="hover:text-[#C6FF36] transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: '#6B7280' }} />
          <span className="font-bold" style={{ color: '#C6FF36' }}>PROJECTS ARCHIVE</span>
        </div>
      </div>

      {/* Main Flagship Interactive Projects Component */}
      <Projects />

      {/* Case Studies Deep-Dive Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
              PROJECT CASE STUDIES &amp; <span className="text-glow-lime" style={{ color: '#C6FF36' }}>ARCHITECTURES</span>
            </h3>
            <p className="font-mono text-xs mt-1" style={{ color: '#A0A5B5' }}>
              Click &quot;Explore Case Study&quot; to review the full architectural breakdown of any project
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['ALL', 'Productivity', 'AI & FinTech', 'HealthTech', 'Communication'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200"
                style={selectedCategory === cat
                  ? { background: 'rgba(198,255,54,0.15)', color: '#C6FF36', border: '1px solid rgba(198,255,54,0.5)', boxShadow: '0 0 10px rgba(198,255,54,0.2)' }
                  : { background: '#080D1C', color: '#A0A5B5', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="nx-glass rounded-xl p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, ${proj.color}, transparent)` }} />
              <div>
                <div className="flex items-center justify-between pb-3 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-mono text-xs font-bold uppercase" style={{ color: proj.color }}>
                    {proj.category}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.1)', color: '#A0A5B5' }}>
                    CASE STUDY AVAILABLE
                  </span>
                </div>

                <h4 className="font-display font-bold text-xl text-white mb-1 group-hover:text-[#C6FF36] transition-colors">
                  {proj.title}
                </h4>
                <div className="font-mono text-xs mb-3" style={{ color: proj.color }}>
                  {proj.subtitle}
                </div>
                <p className="text-sm leading-relaxed font-sans mb-4" style={{ color: '#A0A5B5' }}>
                  {proj.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded"
                      style={{ background: `${proj.color}08`, border: `1px solid ${proj.color}20`, color: proj.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <Link
                  href={`/projects/${proj.id}`}
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className="nx-btn-primary px-4 py-2 text-xs flex items-center gap-1.5"
                >
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="p-2 rounded text-xs font-mono flex items-center gap-1.5 transition-colors"
                  style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.15)', color: '#A0A5B5' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(198,255,54,0.5)'; e.currentTarget.style.color = '#C6FF36'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#A0A5B5'; }}
                >
                  <Github className="w-4 h-4" />
                  <span>REPO</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Forward to Contact */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 p-6 rounded-xl"
          style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.2)' }}>
          <div>
            <div className="text-xs font-mono" style={{ color: '#A0A5B5' }}>READY TO COLLABORATE?</div>
            <div className="font-display font-bold text-lg text-white">Let&apos;s Build Your Next High-Impact Application</div>
          </div>
          <Link
            href="/contact"
            className="nx-btn-primary px-6 py-3 text-xs flex items-center gap-2"
          >
            <span>TRANSMIT MESSAGE</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
