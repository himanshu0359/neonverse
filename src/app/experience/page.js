import Link from 'next/link';
import Experience from '../../components/Experience';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'WORK EXPERIENCE // HIMANSHU TIWARI - NEONVERSE',
  description: 'Technical Associate at AIVOT AI (2024 - Present). Developing AI applications, scalable web architectures, and automation pipelines.',
};

export default function ExperiencePage() {
  return (
    <div className="py-8 animate-fadeIn">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center space-x-2 font-mono text-xs" style={{ color: '#A0A5B5' }}>
          <Link href="/" className="hover:text-[#C6FF36] transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: '#6B7280' }} />
          <span className="font-bold" style={{ color: '#C6FF36' }}>EXPERIENCE</span>
        </div>
      </div>

      {/* Main Experience Component */}
      <Experience />

      {/* Extended Corporate Impact & Operational Methodology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        
        <h3 className="font-display font-black text-2xl text-white mb-6 uppercase tracking-wide">
          OPERATIONAL METHODOLOGY &amp; <span className="text-glow-lime" style={{ color: '#C6FF36' }}>DAILY WORKFLOWS</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="nx-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #C6FF36, transparent)' }} />
            <h4 className="font-mono font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#C6FF36' }}>
              <Zap className="w-4 h-4" /> Agile Sprints &amp; Code Quality
            </h4>
            <p className="text-sm leading-relaxed font-sans mb-4" style={{ color: '#A0A5B5' }}>
              At AIVOT AI, development cycles follow fast-paced Agile sprint planning. We emphasize strict Git branching conventions, collaborative pull-request reviews, and clean architectural separation of concerns.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['Sprint Planning', 'PR Reviews', 'CI/CD Automation'].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded" style={{ background: 'rgba(198,255,54,0.08)', border: '1px solid rgba(198,255,54,0.2)', color: '#C6FF36' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="nx-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #A3FF12, transparent)' }} />
            <h4 className="font-mono font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#A3FF12' }}>
              <ShieldCheck className="w-4 h-4" /> Production Stability &amp; Uptime
            </h4>
            <p className="text-sm leading-relaxed font-sans mb-4" style={{ color: '#A0A5B5' }}>
              Ensuring enterprise services operate with high uptime by applying error boundary shields in React, handling API timeouts gracefully, and optimizing database indices in MongoDB for minimum disk I/O.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['Error Logging', 'Load Resiliency', 'Data Caching'].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded" style={{ background: 'rgba(163,255,18,0.08)', border: '1px solid rgba(163,255,18,0.2)', color: '#A3FF12' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Forward Link to Projects */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 p-6 rounded-xl"
          style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.2)' }}>
          <div>
            <div className="text-xs font-mono" style={{ color: '#A0A5B5' }}>NEXT RECOMMENDED SECTOR</div>
            <div className="font-display font-bold text-lg text-white">Explore My Flagship Projects Archive</div>
          </div>
          <Link
            href="/projects"
            className="nx-btn-primary px-6 py-3 text-xs flex items-center gap-2"
          >
            <span>VIEW ALL PROJECTS</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
