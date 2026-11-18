'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, ArrowRight, Code2, Briefcase, Cpu, Binary, Sparkles, ChevronDown, ShieldCheck, Activity } from 'lucide-react';
import { playHoverSound, playClickSound } from '../lib/cyberSound';

const phrases = [
  'Technical Associate',
  'Developer',
  'AI Enthusiast',
  'Computer Science Graduate',
];

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    const speed = deleting ? 35 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < phrase.length) {
          setText(phrase.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIdx > 0) {
          setText(phrase.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setPhraseIdx(i => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] rounded-full blur-[180px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(198,255,54,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(163,255,18,0.06)' }} />
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(198,255,54,0.04)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 nx-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        
        {/* Main 2-Column Gaming Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Typography (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Futuristic Operator Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full backdrop-blur-md"
              style={{ background: 'rgba(8,13,28,0.9)', border: '1px solid rgba(198,255,54,0.3)', boxShadow: '0 0 20px rgba(198,255,54,0.12)' }}>
              <span className="w-2 h-2 rounded-full animate-ping" style={{ background: '#C6FF36' }} />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: '#C6FF36' }}>
                SYSTEM OPERATOR // VERIFIED
              </span>
              <span className="text-gray-500 font-mono text-xs">|</span>
              <span className="font-mono text-xs" style={{ color: '#A0A5B5' }}>AIVOT AI</span>
            </div>

            {/* Giant Bold Futuristic Heading */}
            <div className="relative">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight uppercase select-none leading-none">
                <span className="text-white block">HIMANSHU</span>
                <span className="text-glow-lime block mt-1" style={{ color: '#C6FF36' }}>TIWARI</span>
              </h1>
              <div className="w-48 sm:w-72 h-[2px] mt-4"
                style={{ background: 'linear-gradient(90deg, #C6FF36, rgba(163,255,18,0.4), transparent)' }} />
            </div>

            {/* Animated Typing Role Line */}
            <div className="h-12 flex items-center font-mono text-lg sm:text-2xl md:text-3xl" style={{ color: '#A0A5B5' }}>
              <span className="mr-2 font-bold" style={{ color: '#C6FF36' }}>&gt;</span>
              <span className="font-semibold text-glow-lime text-white">{text}</span>
              <span className="w-2.5 h-6 ml-1.5 inline-block align-middle animate-pulse" style={{ background: '#C6FF36' }} />
            </div>

            {/* Professional Introduction Subtext */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-sans" style={{ color: '#A0A5B5' }}>
              <span className="text-white font-medium">Technical Associate at AIVOT AI</span> and <span className="text-white font-medium">B.Sc. Computer Science Graduate</span>.
              Architecting high-velocity web platforms, intelligent AI integrations, and next-generation developer tooling.
            </p>

            {/* Glowing Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/projects" onClick={playClickSound} onMouseEnter={playHoverSound}
                className="nx-btn-primary px-8 py-4 text-sm flex items-center justify-center gap-3 group">
                <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/resume" onClick={playClickSound} onMouseEnter={playHoverSound}
                className="nx-btn-outline px-8 py-4 text-sm flex items-center justify-center gap-3">
                <Download className="w-5 h-5 animate-bounce" />
                <span>DOWNLOAD RESUME</span>
              </Link>
            </div>

            {/* Telemetry Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {[
                { label: 'ROLE', value: 'AIVOT AI', sub: 'Tech Associate', color: '#C6FF36', Icon: Briefcase },
                { label: 'DEGREE', value: 'B.Sc. CS', sub: 'Graduate', color: '#A3FF12', Icon: Cpu },
                { label: 'STACK', value: 'Next.js & AI', sub: 'Full Stack', color: '#C6FF36', Icon: Binary },
                { label: 'STATUS', value: 'DEPLOYABLE', sub: 'Open to Impact', color: '#A3FF12', Icon: Sparkles },
              ].map(({ label, value, sub, color, Icon }) => (
                <div key={label} className="nx-glass rounded-lg p-3 text-left hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-[9px] font-mono uppercase tracking-widest mb-1 flex items-center gap-1" style={{ color: '#A0A5B5' }}>
                    <Icon className="w-3 h-3" style={{ color }} />
                    {label}
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold truncate" style={{ color }}>{value}</div>
                  <div className="text-[9px] font-mono truncate" style={{ color: '#A0A5B5' }}>{sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Masked Cyber Warrior Avatar in Cinematic HUD Frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Holographic Glowing Outer Container */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Back ambient radial flare directly behind the warrior */}
              <div className="absolute inset-0 rounded-2xl blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 40%, rgba(198,255,54,0.22) 0%, rgba(163,255,18,0.08) 50%, transparent 75%)' }} />

              {/* Main Cyber Frame */}
              <div className="relative rounded-2xl overflow-hidden border transition-all duration-500 group"
                style={{
                  background: 'linear-gradient(180deg, rgba(8,13,28,0.92) 0%, rgba(5,8,22,0.98) 100%)',
                  borderColor: 'rgba(198,255,54,0.3)',
                  boxShadow: '0 0 35px rgba(0,0,0,0.8), 0 0 30px rgba(198,255,54,0.15), inset 0 1px 0 rgba(198,255,54,0.2)',
                }}>

                {/* HUD Top Status Bar */}
                <div className="px-4 py-2.5 flex items-center justify-between font-mono text-[10px] border-b"
                  style={{ background: 'rgba(5,8,22,0.85)', borderColor: 'rgba(198,255,54,0.15)' }}>
                  <div className="flex items-center gap-2" style={{ color: '#C6FF36' }}>
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>AVATAR.SYS // ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: '#A0A5B5' }}>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C6FF36]" />
                    <span>NEURAL LINK: 99.4%</span>
                  </div>
                </div>

                {/* The Masked Cyber Warrior Image */}
                <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] flex items-center justify-center">
                  <img
                    src="/warrior.jpg"
                    alt="Himanshu Tiwari - Futuristic Cyber Warrior"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                  />
                  
                  {/* Subtle inner vignettes & scanlines */}
                  <div className="absolute inset-0 pointer-events-none nx-scanlines opacity-25" />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, transparent 65%, rgba(5,8,22,0.95) 100%)' }} />
                  
                  {/* Eye glow enhancement badge overlay */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded font-mono text-[9px] tracking-widest backdrop-blur-md"
                    style={{ background: 'rgba(5,8,22,0.85)', border: '1px solid rgba(198,255,54,0.4)', color: '#C6FF36' }}>
                    VISOR // CALIBRATED
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded font-mono text-[9px] tracking-widest backdrop-blur-md"
                    style={{ background: 'rgba(5,8,22,0.85)', border: '1px solid rgba(163,255,18,0.4)', color: '#A3FF12' }}>
                    SEC_LEVEL // OMEGA
                  </div>
                </div>

                {/* HUD Bottom Telemetry Bar */}
                <div className="p-4 border-t flex items-center justify-between"
                  style={{ background: 'rgba(8,13,28,0.95)', borderColor: 'rgba(198,255,54,0.15)' }}>
                  <div>
                    <div className="font-display font-black text-sm text-white tracking-wider flex items-center gap-2">
                      OPERATOR: HIMANSHU
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF36] inline-block animate-ping" />
                    </div>
                    <div className="font-mono text-[10px]" style={{ color: '#A0A5B5' }}>
                      CYBERNETIC FULL-STACK ENGINEER
                    </div>
                  </div>
                  
                  <Link
                    href="/resume"
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    className="nx-clip-sm px-3 py-1.5 font-mono font-bold text-[10px] tracking-wider transition-all duration-300"
                    style={{ background: '#C6FF36', color: '#050816' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#A3FF12'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#C6FF36'; }}
                  >
                    DOSSIER &gt;
                  </Link>
                </div>

                {/* HUD Corner Tech Accents */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <a href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="mt-12 flex flex-col items-center gap-1 font-mono text-[9px] tracking-widest transition-colors relative z-10"
        style={{ color: '#A0A5B5' }}
        onMouseEnter={e => e.currentTarget.style.color = '#C6FF36'}
        onMouseLeave={e => e.currentTarget.style.color = '#A0A5B5'}>
        <span>SCROLL FOR SYSTEM DOSSIER</span>
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: '#C6FF36' }} />
      </a>
    </section>
  );
}
