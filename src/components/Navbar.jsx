'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Cpu, Layers, Briefcase, FolderGit2, Send, Menu, X, FileText, Zap } from 'lucide-react';
import { playHoverSound, playClickSound, toggleAudio, isAudioEnabled, initAudioSettings } from '../lib/cyberSound';

const navItems = [
  { name: 'HOME', href: '/', icon: Terminal },
  { name: 'ABOUT', href: '/about', icon: Cpu },
  { name: 'SKILLS', href: '/skills', icon: Layers },
  { name: 'EXPERIENCE', href: '/experience', icon: Briefcase },
  { name: 'PROJECTS', href: '/projects', icon: FolderGit2 },
  { name: 'CONTACT', href: '/contact', icon: Send },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    initAudioSettings();
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#050816]/95 backdrop-blur-xl border-b border-[#C6FF36]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-[#050816]/70 backdrop-blur-sm border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" onClick={playClickSound} onMouseEnter={playHoverSound}
            className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-[#C6FF36]/10 border border-[#C6FF36]/40 group-hover:border-[#C6FF36] group-hover:bg-[#C6FF36]/20 transition-all duration-300 nx-clip-sm">
              <span className="font-mono font-black text-[#C6FF36] text-base tracking-wider">NV</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C6FF36] rounded-full animate-ping opacity-70" />
            </div>
            <div>
              <div className="font-display font-black text-xl tracking-widest text-white group-hover:text-[#C6FF36] transition-colors flex items-center gap-2">
                NEONVERSE
                <span className="text-[10px] px-1.5 py-0.5 bg-[#C6FF36]/10 text-[#C6FF36] border border-[#C6FF36]/30 font-mono font-normal rounded">HT.v2</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#A0A5B5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF36] animate-pulse" />
                SYSTEM OPERATIONAL
              </div>
            </div>
          </Link>

          {/* Desktop nav pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#080D1C]/80 px-2 py-1.5 rounded-full border border-[#C6FF36]/15 backdrop-blur-md">
            {navItems.map(({ name, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link key={name} href={href} onClick={playClickSound} onMouseEnter={playHoverSound}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 ${
                    active
                      ? 'bg-[#C6FF36]/15 text-[#C6FF36] border border-[#C6FF36]/40 shadow-[0_0_12px_rgba(198,255,54,0.2)]'
                      : 'text-[#A0A5B5] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}>
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#C6FF36]' : 'text-[#A0A5B5]'}`} />
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* Resume button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/resume" onClick={playClickSound} onMouseEnter={playHoverSound}
              className="relative px-5 py-2.5 text-xs font-mono font-black tracking-widest text-[#050816] bg-[#C6FF36] hover:bg-[#A3FF12] nx-clip transition-all duration-300 shadow-[0_0_20px_rgba(198,255,54,0.4)] hover:shadow-[0_0_35px_rgba(198,255,54,0.65)] flex items-center gap-2 group">
              <FileText className="w-3.5 h-3.5" />
              RESUME
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => { playClickSound(); setMobileOpen(!mobileOpen); }}
            className="flex md:hidden p-2 border border-[#C6FF36]/30 bg-[#080D1C] text-[#C6FF36] rounded hover:border-[#C6FF36] transition-colors">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050816]/98 backdrop-blur-xl border-b border-[#C6FF36]/20 px-4 pt-2 pb-6 space-y-2">
          <div className="py-2 border-b border-white/5 text-[10px] font-mono text-[#C6FF36] tracking-widest flex justify-between">
            <span>NEONVERSE // NAVIGATION</span>
            <span className="text-[#A0A5B5]">SELECT MODULE</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map(({ name, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link key={name} href={href} onClick={() => { playClickSound(); setMobileOpen(false); }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded text-xs font-mono tracking-wider border ${
                    active
                      ? 'bg-[#C6FF36]/15 text-[#C6FF36] border-[#C6FF36]/40'
                      : 'text-[#A0A5B5] border-white/10 bg-[#080D1C] hover:border-[#C6FF36]/30'
                  }`}>
                  <Icon className="w-4 h-4 text-[#C6FF36]" />
                  {name}
                </Link>
              );
            })}
          </div>
          <Link href="/resume" onClick={() => { playClickSound(); setMobileOpen(false); }}
            className="flex items-center justify-center gap-2 w-full py-3 text-xs font-mono font-black tracking-widest text-[#050816] bg-[#C6FF36] hover:bg-[#A3FF12] nx-clip mt-2 transition-all duration-300">
            <FileText className="w-4 h-4" />
            VIEW RESUME
          </Link>
        </div>
      )}
    </header>
  );
}
