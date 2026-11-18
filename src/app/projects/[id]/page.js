'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ChevronRight, 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Kanban, 
  Split, 
  Stethoscope, 
  MessageSquare,
  Play 
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../../../lib/cyberSound';

const projectsDatabase = {
  taskify: {
    title: 'Taskify',
    subtitle: 'Task Management Application',
    tagline: 'Kanban & Agile Sprint Orchestrator',
    category: 'Productivity',
    accentColor: '#C6FF36',
    githubUrl: 'https://github.com/himanshutiwari/taskify',
    overview: 'Taskify is an agile engineering productivity platform created to replace clunky, bloated project management software with a sub-second, keyboard-first Kanban experience.',
    challenge: 'Engineering teams often lose velocity due to fragmented status tracking, slow UI updates, and poor real-time synchronization across developers.',
    solution: 'Built with Next.js and React on the frontend and Node.js + Express + MongoDB on the backend. Employs optimistic UI state updates, indexed queries, and low-latency API routes for instant column transitions.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    keyFeatures: [
      'Interactive drag-and-drop Kanban workflow with zero render stutter',
      'Priority matrix tagging and sprint deadline telemetry',
      'Sub-second search and tag categorization',
      'Encrypted MongoDB data persistence with Mongoose schema validation',
    ],
    architecture: [
      { step: '01', title: 'Client Viewport', desc: 'Next.js 14 App Router rendering responsive HUD components.' },
      { step: '02', title: 'State Engine', desc: 'Optimistic local caching ensures drag-and-drop feels instantaneous.' },
      { step: '03', title: 'API Gateway', desc: 'Express.js REST endpoints validate payloads with JWT auth verification.' },
      { step: '04', title: 'Persistence Layer', desc: 'MongoDB Atlas with compound indices on project_id and status.' },
    ],
  },
  splitr: {
    title: 'Splitr',
    subtitle: 'AI-Powered Expense Splitting App',
    tagline: 'Smart Ledger with Neural Receipt Intelligence',
    category: 'AI & FinTech',
    accentColor: '#A3FF12',
    githubUrl: 'https://github.com/himanshutiwari/splitr',
    overview: 'Splitr is a group finance application that leverages Artificial Intelligence to automatically scan, itemize, and divide complex multi-person bills in seconds.',
    challenge: 'Group trips and team hackathons often result in tangled webs of IOUs, multi-currency conversion confusion, and lost paper receipts.',
    solution: 'Integrates AI optical vision models with Python backend endpoints to automatically read physical receipt images, detect line items, compute tax/tips, and calculate the minimal number of debt settlement transfers.',
    technologies: ['Next.js', 'Python', 'AI APIs', 'React', 'Tailwind CSS', 'MongoDB'],
    keyFeatures: [
      'AI receipt image parsing and automatic line-item breakdown',
      'Debt simplification graph algorithm (O(V+E) minimal settlement)',
      'Real-time multi-currency support with automated conversions',
      'Instant shareable links and clean CSV/PDF export',
    ],
    architecture: [
      { step: '01', title: 'Receipt Upload', desc: 'Client uploads receipt photo directly through Next.js client component.' },
      { step: '02', title: 'Neural Vision Extraction', desc: 'Python API invokes vision models to parse line items and subtotals.' },
      { step: '03', title: 'Settlement Optimizer', desc: 'Calculates the mathematically optimal settlement network.' },
      { step: '04', title: 'Ledger Storage', desc: 'Stores group balances and receipts in MongoDB with historical audit logs.' },
    ],
  },
  prescripto: {
    title: 'Prescripto',
    subtitle: 'Doctor Appointment Booking System',
    tagline: 'Healthcare Management & Telehealth Portal',
    category: 'HealthTech',
    accentColor: '#C6FF36',
    githubUrl: 'https://github.com/himanshutiwari/prescripto',
    overview: 'Prescripto is an end-to-end medical scheduling and telehealth application connecting patients with qualified doctors, consultation slots, and digital prescriptions.',
    challenge: 'Patients often experience long waiting room delays and friction when scheduling specialist appointments, while clinics struggle with double-booking conflicts.',
    solution: 'Designed a unified portal with doctor calendar synchronization, slot concurrency locking, verified specialist profiles, and a patient prescription vault.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    keyFeatures: [
      'Medical specialist search filtered by domain and availability',
      'Real-time slot reservation with automated collision prevention',
      'Digital prescription repository with consultation histories',
      'Doctor administrative portal for schedule and patient management',
    ],
    architecture: [
      { step: '01', title: 'Patient Search Portal', desc: 'Filter specialists by domain, rating, and available time slots.' },
      { step: '02', title: 'Slot Locking Service', desc: 'Atomic database transactions prevent concurrent double-booking.' },
      { step: '03', title: 'Consultation Pipeline', desc: 'Generates secure digital appointment tokens and reminders.' },
      { step: '04', title: 'Health Records Vault', desc: 'Encrypted storage for doctor notes and prescriptions in MongoDB.' },
    ],
  },
  whatsapp: {
    title: 'WhatsApp Clone',
    subtitle: 'Messaging Application',
    tagline: 'Low-Latency Real-Time Encrypted Chat Protocol',
    category: 'Communication',
    accentColor: '#A3FF12',
    githubUrl: 'https://github.com/himanshutiwari/whatsapp-clone',
    accentColor: '#00FF88',
    githubUrl: 'https://github.com/himanshutiwari/WhatsApp-Clone',
    overview: 'A high-concurrency instant messaging client engineered to demonstrate deep mastery of real-time bidirectional WebSockets, media transmission, and reactive UI states.',
    challenge: 'Traditional HTTP polling creates immense server overhead and noticeable message lag in interactive real-time communications.',
    solution: 'Implemented full-duplex WebSocket connections via Socket.IO, enabling instant message delivery, real-time typing indicators, read receipts, and reactive dark mode styling.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Socket.IO', 'Tailwind CSS'],
    keyFeatures: [
      'Sub-millisecond WebSocket bidirectional chat transmission',
      'Read receipts (Sent, Delivered, Read tick status)',
      'Media preview simulations and instant audio recording playback',
      'Cyberpunk high-contrast responsive interface',
    ],
    architecture: [
      { step: '01', title: 'WebSocket Handshake', desc: 'Client establishes persistent low-latency socket with Node.js server.' },
      { step: '02', title: 'Event Dispatcher', desc: 'Broadcasts chat messages, typing signals, and online presence.' },
      { step: '03', title: 'Receipt Tracker', desc: 'Updates message delivery and read acknowledgment states in real-time.' },
      { step: '04', title: 'Client Virtualization', desc: 'Renders thousands of chat messages smoothly without DOM bloat.' },
    ],
  },
};

export default function ProjectDetailPage({ params }) {
  const project = projectsDatabase[params?.id];

  if (!project) {
    return notFound();
  }

  return (
    <div className="py-8 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center space-x-2 font-mono text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-cyber-neon-green transition-colors">
          HOME
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <Link href="/projects" className="hover:text-cyber-neon-green transition-colors">
          PROJECTS
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <span className="text-cyber-neon-green font-bold uppercase">{project.title}</span>
      </div>

      {/* Main Showcase Hero */}
      <div className="p-6 sm:p-10 bg-cyber-card border-2 border-cyber-neon-green/40 rounded-xl cyber-card-clip shadow-neon-green/20 backdrop-blur-xl mb-12 relative">
        <div className="hud-corner-tl"></div>
        <div className="hud-corner-tr"></div>
        <div className="hud-corner-bl"></div>
        <div className="hud-corner-br"></div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-dark border border-cyber-neon-green/30 text-cyber-neon-green font-mono text-xs font-bold uppercase mb-3">
              <span>{project.category}</span>
              <span>&bull;</span>
              <span>VERIFIED CASE STUDY</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              {project.title}
            </h1>
            <p className="font-mono text-sm text-cyber-neon-cyan mt-1">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-5 py-3 bg-cyber-dark hover:bg-black text-white hover:text-cyber-neon-green border border-gray-700 hover:border-cyber-neon-green rounded font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </a>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="font-mono text-xs text-cyber-neon-green uppercase tracking-widest mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> EXECUTIVE SUMMARY
              </h3>
              <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-cyber-dark/80 border border-red-500/30">
                <div className="text-xs font-mono text-red-400 font-bold mb-1 uppercase">
                  THE CHALLENGE
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 rounded bg-cyber-dark/80 border border-cyber-neon-green/30">
                <div className="text-xs font-mono text-cyber-neon-green font-bold mb-1 uppercase">
                  THE SOLUTION
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Used Sidebar */}
          <div className="lg:col-span-4 p-5 bg-cyber-darker rounded-lg border border-gray-800 space-y-4">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyber-neon-cyan" /> DEPLOYED TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-cyber-dark text-cyber-neon-green border border-cyber-neon-green/30 rounded font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-800 text-xs font-mono text-gray-400">
              REPOSITORY: <span className="text-white block mt-0.5 break-all">{project.githubUrl}</span>
            </div>
          </div>
        </div>

        {/* System Architecture Flow */}
        <div className="pt-6 border-t border-gray-800">
          <h3 className="font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> ARCHITECTURAL PIPELINE &amp; DATA FLOW
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.architecture.map((arch) => (
              <div key={arch.step} className="p-4 bg-cyber-dark/90 rounded border border-gray-800 relative">
                <div className="font-mono text-xs text-cyber-neon-green font-bold mb-1">
                  PHASE {arch.step}
                </div>
                <div className="font-display font-bold text-white text-sm mb-1">
                  {arch.title}
                </div>
                <div className="text-xs text-gray-400 font-sans leading-normal">
                  {arch.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Bullet List */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <h3 className="font-mono text-xs text-cyber-neon-purple uppercase tracking-widest mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> KEY DELIVERABLES &amp; CAPABILITIES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded bg-cyber-dark/60 border border-gray-800 text-xs">
                <CheckCircle2 className="w-4 h-4 text-cyber-neon-green shrink-0 mt-0.5" />
                <span className="text-gray-200">{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between border-t border-gray-800 pt-6">
        <Link
          href="/projects"
          className="text-xs font-mono text-gray-400 hover:text-cyber-neon-green transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO ALL PROJECTS</span>
        </Link>

        <Link
          href="/contact"
          className="px-5 py-2.5 bg-cyber-neon-green text-black font-mono font-bold text-xs rounded cyber-btn-clip hover:bg-white transition-colors"
        >
          DISCUSS THIS PROJECT
        </Link>
      </div>

    </div>
  );
}
