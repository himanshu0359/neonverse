'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FolderGit2, Github, ArrowRight, Search, Zap } from 'lucide-react';
import { playClickSound, playHoverSound } from '../lib/cyberSound';

const projects = [
  {
    id: 'taskify',
    title: 'Taskify',
    subtitle: 'Task Management Application',
    desc: 'A powerful Kanban-based task management app with drag-and-drop boards, priority labeling, deadline tracking, and team collaboration features.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/himanshutiwari/taskify',
    status: 'DEPLOYED',
    color: '#C6FF36',
  },
  {
    id: 'splitr',
    title: 'Splitr',
    subtitle: 'AI-Powered Expense Splitting',
    desc: 'Smart expense splitting app powered by AI. Automatically categorizes bills, suggests fair splits, and tracks group balances across events and trips.',
    stack: ['Next.js', 'Python', 'MongoDB', 'AI APIs'],
    github: 'https://github.com/himanshutiwari/splitr',
    status: 'ACTIVE',
    color: '#A3FF12',
  },
  {
    id: 'prescripto',
    title: 'Prescripto',
    subtitle: 'Doctor Appointment System',
    desc: 'Full-featured medical appointment platform. Patients can search doctors by specialty, book slots, and receive confirmations. Doctors manage availability in real-time.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/himanshutiwari/prescripto',
    status: 'LIVE',
    color: '#C6FF36',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Clone',
    subtitle: 'Real-time Messaging App',
    desc: 'Full-stack real-time messaging application with WebSocket-powered chat, authentication, file sharing, and group conversations.',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/himanshutiwari/whatsapp-clone',
    status: 'COMPLETE',
    color: '#A3FF12',
  },
];

export default function Projects() {
  const [search, setSearch] = useState('');
  const filtered = projects.filter(p =>
    search === '' ||
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.stack.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 nx-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(198,255,54,0.04)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest mb-4"
            style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
            <FolderGit2 className="w-3.5 h-3.5" />
            PROJECTS.DIR
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            FEATURED <span className="text-glow-lime" style={{ color: '#C6FF36' }}>WORK</span>
          </h2>
          <div className="mt-3 w-20 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C6FF36, transparent)' }} />
        </div>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-10 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#A0A5B5' }} />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 font-mono text-sm text-white outline-none transition-colors rounded-lg"
            style={{ background: '#080D1C', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
            onFocus={e => e.target.style.borderColor = 'rgba(198,255,54,0.5)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(({ id, title, subtitle, desc, stack, github, status, color }) => (
            <div key={id}
              className="nx-glass rounded-xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex flex-col">
              {/* Top accent */}
              <div className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

              {/* Image placeholder */}
              <div className="relative h-44 overflow-hidden"
                style={{ background: `linear-gradient(135deg, #080D1C 0%, ${color}08 100%)` }}>
                <div className="absolute inset-0 nx-grid opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}10`, border: `1px solid ${color}30` }}>
                    <FolderGit2 className="w-8 h-8" style={{ color }} />
                  </div>
                </div>
                {/* Status badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[9px] tracking-widest"
                  style={{ background: 'rgba(5,8,22,0.8)', border: `1px solid ${color}40`, color }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: color }} />
                  {status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-display font-black text-xl text-white mb-0.5 transition-colors group-hover:text-[#C6FF36]">{title}</h3>
                  <div className="font-mono text-xs tracking-widest mb-3" style={{ color }}>{subtitle}</div>
                  <p className="text-sm leading-relaxed" style={{ color: '#A0A5B5' }}>{desc}</p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {stack.map(t => (
                    <span key={t} className="px-2 py-0.5 font-mono text-[9px] tracking-wider rounded"
                      style={{ background: `${color}08`, border: `1px solid ${color}20`, color }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-3">
                  <a href={github} target="_blank" rel="noopener noreferrer"
                    onClick={playClickSound} onMouseEnter={playHoverSound}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider rounded transition-all duration-200"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#A0A5B5', background: 'rgba(5,8,22,0.5)' }}
                    onMouseEnter={e => { playHoverSound(); e.currentTarget.style.borderColor = 'rgba(198,255,54,0.5)'; e.currentTarget.style.color = '#C6FF36'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#A0A5B5'; }}>
                    <Github className="w-3.5 h-3.5" /> GITHUB
                  </a>
                  <Link href={`/projects/${id}`} onClick={playClickSound} onMouseEnter={playHoverSound}
                    className="nx-clip-sm flex items-center gap-2 px-4 py-2 text-xs font-mono font-black tracking-wider text-[#050816] flex-1 justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,255,54,0.4)]"
                    style={{ background: color }}>
                    <Zap className="w-3.5 h-3.5" /> VIEW DETAILS
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <Link href="/projects" onClick={playClickSound} onMouseEnter={playHoverSound}
            className="nx-btn-primary inline-flex items-center gap-3 px-8 py-3.5 text-sm">
            <FolderGit2 className="w-5 h-5" />
            ALL PROJECTS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
