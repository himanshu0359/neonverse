import Link from 'next/link';
import Contact from '../../components/Contact';
import { ChevronRight, Radio, HelpCircle, ShieldCheck, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'CONTACT & COMMUNICATION UPLINK // HIMANSHU TIWARI - NEONVERSE',
  description: 'Connect directly with Himanshu Tiwari - Technical Associate at AIVOT AI. Send encrypted dispatches or connect via LinkedIn, GitHub, or Email.',
};

const faqs = [
  {
    q: 'What is your current work status & availability?',
    a: 'I am currently working as a Technical Associate at AIVOT AI. I am open to discussing high-impact projects, collaborations, and engineering opportunities.',
  },
  {
    q: 'What are your primary technical proficiencies?',
    a: 'My core stack centers on Full-Stack Next.js, React, Node.js, Express, MongoDB, Python, and integrating cutting-edge Artificial Intelligence capabilities into production web systems.',
  },
  {
    q: 'How fast can I expect a response to dispatches?',
    a: 'Direct messages transmitted through this uplink or sent to himanshut9988@gmail.com are monitored daily, typically receiving a response within 4 to 12 hours.',
  },
  {
    q: 'Are you available for speaking or tech mentoring?',
    a: 'Yes, as a B.Sc. Computer Science graduate and AI practitioner, I am passionate about sharing knowledge regarding modern web development, algorithms, and AI tooling.',
  },
];

export default function ContactPage() {
  return (
    <div className="py-8 animate-fadeIn">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center space-x-2 font-mono text-xs" style={{ color: '#A0A5B5' }}>
          <Link href="/" className="hover:text-[#C6FF36] transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: '#6B7280' }} />
          <span className="font-bold" style={{ color: '#C6FF36' }}>COMMUNICATION UPLINK</span>
        </div>
      </div>

      {/* Main Contact Terminal Component */}
      <Contact />

      {/* Extended Section: Direct Logistics & FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logistics & Availability Telemetry (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
              DISPATCH <span className="text-glow-lime" style={{ color: '#C6FF36' }}>TELEMETRY</span>
            </h3>
            <p className="text-sm font-sans leading-relaxed" style={{ color: '#A0A5B5' }}>
              Real-time operational coordinates and direct reachability benchmarks for Himanshu Tiwari.
            </p>

            <div className="p-5 nx-glass rounded-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="flex items-center gap-2" style={{ color: '#A0A5B5' }}>
                  <MapPin className="w-4 h-4" style={{ color: '#C6FF36' }} /> LOCATION:
                </span>
                <span className="text-white font-bold">India (Global Remote Capable)</span>
              </div>

              <div className="flex items-center justify-between pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="flex items-center gap-2" style={{ color: '#A0A5B5' }}>
                  <Clock className="w-4 h-4" style={{ color: '#A3FF12' }} /> TIME ZONE:
                </span>
                <span className="font-bold" style={{ color: '#A3FF12' }}>IST (UTC +5:30)</span>
              </div>

              <div className="flex items-center justify-between pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="flex items-center gap-2" style={{ color: '#A0A5B5' }}>
                  <ShieldCheck className="w-4 h-4" style={{ color: '#C6FF36' }} /> CLEARANCE:
                </span>
                <span className="font-bold" style={{ color: '#C6FF36' }}>VERIFIED RECRUITER NODE</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2" style={{ color: '#A0A5B5' }}>
                  <Radio className="w-4 h-4 animate-pulse" style={{ color: '#C6FF36' }} /> RESPONSE SLA:
                </span>
                <span className="text-white font-bold">&lt; 12 Hours</span>
              </div>
            </div>
          </div>

          {/* FAQs (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide flex items-center gap-2">
              <HelpCircle className="w-6 h-6" style={{ color: '#C6FF36' }} />
              FREQUENTLY ASKED <span className="text-glow-lime" style={{ color: '#C6FF36' }}>DIRECTIVES</span>
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 nx-glass rounded-xl group transition-all duration-300">
                  <h4 className="font-mono text-xs font-bold mb-1.5 flex items-center gap-2" style={{ color: '#C6FF36' }}>
                    <span>Q0{i + 1}.</span> {faq.q}
                  </h4>
                  <p className="text-xs font-sans leading-relaxed" style={{ color: '#A0A5B5' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
