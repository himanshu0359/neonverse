import Link from 'next/link';
import About from '../../components/About';
import { ChevronRight, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'ABOUT ME // HIMANSHU TIWARI - NEONVERSE',
  description: 'Deep dive into Himanshu Tiwari - Technical Associate at AIVOT AI and B.Sc. Computer Science Graduate.',
};

export default function AboutPage() {
  return (
    <div className="py-8 animate-fadeIn">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center space-x-2 font-mono text-xs" style={{ color: '#A0A5B5' }}>
          <Link href="/" className="hover:text-[#C6FF36] transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: '#6B7280' }} />
          <span className="font-bold" style={{ color: '#C6FF36' }}>ABOUT ME</span>
        </div>
      </div>

      {/* Main Core About Component */}
      <About />

      {/* Dedicated Deep-Dive Section: Academic & Systems Architecture Foundations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Academic Foundation Box */}
          <div className="nx-glass rounded-xl p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #C6FF36, transparent)' }} />
            <h3 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5" style={{ color: '#C6FF36' }} />
              Academic Computational Rigor
            </h3>
            <p className="text-sm font-sans leading-relaxed mb-4" style={{ color: '#A0A5B5' }}>
              My <strong className="text-white">B.Sc. in Computer Science</strong> instilled a deep appreciation for algorithmic time/space complexity, data structure design, discrete mathematics, and low-level computer architecture.
            </p>
            <ul className="space-y-2.5 font-mono text-xs" style={{ color: '#A0A5B5' }}>
              {[
                'Data Structures & Advanced Algorithms',
                'Relational & NoSQL Database Systems',
                'Distributed Systems & Networking Protocols',
                'Software Engineering Methodologies & OOP',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#C6FF36' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Engineering Ethos */}
          <div className="nx-glass rounded-xl p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(90deg, #A3FF12, transparent)' }} />
            <h3 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" style={{ color: '#A3FF12' }} />
              The AIVOT AI Engineering Ethos
            </h3>
            <p className="text-sm font-sans leading-relaxed mb-4" style={{ color: '#A0A5B5' }}>
              Operating as a <strong className="text-white">Technical Associate at AIVOT AI</strong>, my focus is bridging the boundary between Artificial Intelligence research and resilient, user-friendly software products.
            </p>
            <ul className="space-y-2.5 font-mono text-xs" style={{ color: '#A0A5B5' }}>
              {[
                'Deterministic reliability in non-deterministic AI flows',
                'Sub-second API response time and state synchronization',
                'High-performance, reactive interfaces with Next.js',
                'Clean, maintainable, modular codebase with full documentation',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#A3FF12' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Fast Navigation to Skills */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 p-6 rounded-xl"
          style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.2)' }}>
          <div>
            <div className="text-xs font-mono" style={{ color: '#A0A5B5' }}>NEXT RECOMMENDED SECTOR</div>
            <div className="font-display font-bold text-lg text-white">Explore My Technical Arsenal</div>
          </div>
          <Link
            href="/skills"
            className="nx-btn-primary px-6 py-3 text-xs flex items-center gap-2"
          >
            <span>VIEW TECH SKILLS</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
