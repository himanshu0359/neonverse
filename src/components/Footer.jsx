'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { playClickSound, playHoverSound } from '../lib/cyberSound';

const sectors = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' },
  { name: 'Admin Console', href: '/admin' },
];

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(new Date().toUTCString().slice(17, 25) + ' UTC');
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: '#080D1C', borderTop: '1px solid rgba(198,255,54,0.15)' }}>
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: 'linear-gradient(90deg, transparent, #C6FF36, transparent)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>

          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" onClick={playClickSound} className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 flex items-center justify-center nx-clip-sm transition-all duration-300"
                style={{ background: 'rgba(198,255,54,0.1)', border: '1px solid rgba(198,255,54,0.4)' }}>
                <span className="font-mono font-black text-sm" style={{ color: '#C6FF36' }}>NV</span>
              </div>
              <span className="font-display font-black text-2xl tracking-widest text-white group-hover:transition-colors"
                style={{ transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C6FF36'}
                onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                NEONVERSE
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#A0A5B5' }}>
              The futuristic developer universe of <strong className="text-white">Himanshu Tiwari</strong>.
              Technical Associate at <span style={{ color: '#C6FF36' }}>AIVOT AI</span> and B.Sc. Computer Science Graduate.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs" style={{ color: '#C6FF36' }}>
              <span className="w-2 h-2 rounded-full animate-ping" style={{ background: '#C6FF36' }} />
              SYSTEM OPERATIONAL // MULTI-PAGE ROUTER
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#C6FF36' }}>SECTORS</div>
            <ul className="space-y-2">
              {sectors.map(s => (
                <li key={s.name}>
                  <Link href={s.href} onClick={playClickSound} onMouseEnter={playHoverSound}
                    className="flex items-center gap-1.5 font-mono text-xs transition-colors"
                    style={{ color: '#A0A5B5' }}
                    onMouseEnter={e => { playHoverSound(); e.currentTarget.style.color = '#C6FF36'; }}
                    onMouseLeave={e => e.currentTarget.style.color = '#A0A5B5'}>
                    <span style={{ color: 'rgba(198,255,54,0.4)' }}>&gt;</span> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & telemetry */}
          <div className="md:col-span-4 space-y-5">
            <div className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: '#C6FF36' }}>CONNECT</div>
            <div className="flex gap-3">
              {[
                { href: 'https://www.linkedin.com/in/himanshu-tiwari/', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/himanshutiwari', Icon: Github, label: 'GitHub' },
                { href: 'mailto:himanshut9988@gmail.com', Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded transition-all duration-300"
                  style={{ background: '#050816', border: '1px solid rgba(255,255,255,0.1)', color: '#A0A5B5' }}
                  onMouseEnter={e => { playHoverSound(); e.currentTarget.style.borderColor = 'rgba(198,255,54,0.6)'; e.currentTarget.style.color = '#C6FF36'; e.currentTarget.style.background = 'rgba(198,255,54,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#A0A5B5'; e.currentTarget.style.background = '#050816'; }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="p-3 rounded font-mono text-xs space-y-1.5"
              style={{ background: 'rgba(5,8,22,0.8)', border: '1px solid rgba(255,255,255,0.05)', color: '#A0A5B5' }}>
              <div className="flex justify-between">
                <span>TIME:</span>
                <span style={{ color: '#C6FF36' }}>{time || 'SYNCING...'}</span>
              </div>
              <div className="flex justify-between">
                <span>STACK:</span>
                <span className="text-white">Next.js 14 • Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs" style={{ color: '#A0A5B5' }}>
          <span>
            <span className="text-white font-semibold">Himanshu Tiwari</span> © 2026 NEONVERSE. All rights reserved.
          </span>
          <button
            onClick={() => { playClickSound(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onMouseEnter={playHoverSound}
            className="nx-clip-sm px-4 py-2 flex items-center gap-2 transition-all duration-300 group"
            style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}
            onMouseEnter={e => { playHoverSound(); e.currentTarget.style.background = '#C6FF36'; e.currentTarget.style.color = '#050816'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#080D1C'; e.currentTarget.style.color = '#C6FF36'; }}>
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
