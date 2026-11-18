import Link from 'next/link';
import Skills from '../../components/Skills';
import { ChevronRight, Code, Server, Cpu } from 'lucide-react';

export const metadata = {
  title: 'TECH SKILLS // HIMANSHU TIWARI - NEONVERSE',
  description: 'Mastery levels and technical proficiencies: Python, JavaScript, React, Next.js, HTML, CSS, Node.js, Express.js, MongoDB, Git & GitHub.',
};

export default function SkillsPage() {
  return (
    <div className="py-8 animate-fadeIn">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center space-x-2 font-mono text-xs" style={{ color: '#A0A5B5' }}>
          <Link href="/" className="hover:text-[#C6FF36] transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: '#6B7280' }} />
          <span className="font-bold" style={{ color: '#C6FF36' }}>TECH SKILLS</span>
        </div>
      </div>

      {/* Main Core Skills Component */}
      <Skills />

      {/* Extended Architectural Stack Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        
        <h3 className="font-display font-black text-2xl text-white mb-6 uppercase tracking-wide">
          STACK SPECIALIZATIONS &amp; <span className="text-glow-lime" style={{ color: '#C6FF36' }}>INTEGRATION MAP</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="nx-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #C6FF36, transparent)' }} />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded" style={{ background: 'rgba(198,255,54,0.1)', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
                <Code className="w-5 h-5" />
              </div>
              <h4 className="font-mono font-bold text-white text-base">Frontend &amp; UI/UX</h4>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: '#A0A5B5' }}>
              Next.js 14 App Router, React 18, Tailwind CSS, Responsive Breakpoints, Web Audio API, Canvas rendering, and micro-interactions.
            </p>
            <div className="text-[11px] font-mono font-bold" style={{ color: '#C6FF36' }}>
              BENCHMARK: 94%+ MASTERY
            </div>
          </div>

          <div className="nx-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #A3FF12, transparent)' }} />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded" style={{ background: 'rgba(163,255,18,0.1)', border: '1px solid rgba(163,255,18,0.3)', color: '#A3FF12' }}>
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-mono font-bold text-white text-base">Backend &amp; APIs</h4>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: '#A0A5B5' }}>
              Node.js asynchronous event loops, Express RESTful routing, authentication middlewares, MongoDB aggregation queries, and Schema validation.
            </p>
            <div className="text-[11px] font-mono font-bold" style={{ color: '#A3FF12' }}>
              BENCHMARK: 90%+ MASTERY
            </div>
          </div>

          <div className="nx-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #C6FF36, transparent)' }} />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded" style={{ background: 'rgba(198,255,54,0.1)', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-mono font-bold text-white text-base">AI &amp; Data Pipelines</h4>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: '#A0A5B5' }}>
              Python scripting, automated scraping, neural API integrations, prompt engineering, structured LLM outputs, and automated workflow triggers.
            </p>
            <div className="text-[11px] font-mono font-bold" style={{ color: '#C6FF36' }}>
              BENCHMARK: ADVANCED PRODUCTION
            </div>
          </div>

        </div>

        {/* Forward Link to Experience */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 p-6 rounded-xl"
          style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.2)' }}>
          <div>
            <div className="text-xs font-mono" style={{ color: '#A0A5B5' }}>NEXT RECOMMENDED SECTOR</div>
            <div className="font-display font-bold text-lg text-white">See These Skills In Action at AIVOT AI</div>
          </div>
          <Link
            href="/experience"
            className="nx-btn-primary px-6 py-3 text-xs flex items-center gap-2"
          >
            <span>VIEW WORK EXPERIENCE</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
