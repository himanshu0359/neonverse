'use client';

import { useState } from 'react';
import { Layers } from 'lucide-react';

const skills = [
  { name: 'Python', level: 88, cat: 'Language', icon: '🐍', color: '#C6FF36' },
  { name: 'JavaScript', level: 90, cat: 'Language', icon: 'JS', color: '#A3FF12' },
  { name: 'React', level: 85, cat: 'Frontend', icon: '⚛', color: '#C6FF36' },
  { name: 'Next.js', level: 82, cat: 'Frontend', icon: 'N', color: '#A3FF12' },
  { name: 'HTML', level: 95, cat: 'Frontend', icon: '5', color: '#C6FF36' },
  { name: 'CSS', level: 88, cat: 'Frontend', icon: '3', color: '#A3FF12' },
  { name: 'Node.js', level: 80, cat: 'Backend', icon: '⬡', color: '#C6FF36' },
  { name: 'Express.js', level: 78, cat: 'Backend', icon: 'EX', color: '#A3FF12' },
  { name: 'MongoDB', level: 75, cat: 'Database', icon: '🍃', color: '#C6FF36' },
  { name: 'Git & GitHub', level: 85, cat: 'Tools', icon: '⎇', color: '#A3FF12' },
];

const cats = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'Tools'];

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 nx-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(198,255,54,0.04)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest mb-4"
            style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
            <Layers className="w-3.5 h-3.5" />
            SKILLS.DAT
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            TECH <span className="text-glow-lime" style={{ color: '#C6FF36' }}>ARSENAL</span>
          </h2>
          <div className="mt-3 w-20 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C6FF36, transparent)' }} />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200"
              style={active === cat
                ? { background: 'rgba(198,255,54,0.15)', color: '#C6FF36', border: '1px solid rgba(198,255,54,0.5)', boxShadow: '0 0 12px rgba(198,255,54,0.2)' }
                : { color: '#A0A5B5', border: '1px solid rgba(255,255,255,0.1)', background: '#080D1C' }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(({ name, level, cat, icon, color }) => (
            <div key={name}
              className="nx-glass rounded-xl p-5 group hover:-translate-y-0.5 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded flex items-center justify-center font-mono font-black text-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}>
                  {icon}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">{name}</div>
                  <div className="font-mono text-[9px] tracking-widest" style={{ color: '#A0A5B5' }}>{cat}</div>
                </div>
              </div>

              {/* Level bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[9px]">
                  <span style={{ color: '#A0A5B5' }}>PROFICIENCY</span>
                  <span style={{ color }}>{level}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${level}%`,
                      background: `linear-gradient(90deg, ${color}, #A3FF12)`,
                      boxShadow: `0 0 8px ${color}60`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
