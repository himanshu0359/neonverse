'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Key, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  Layers, 
  Briefcase, 
  FolderGit2, 
  User, 
  Radio, 
  Download,
  Copy,
  ExternalLink
} from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessSound } from '../../lib/cyberSound';

const DEFAULT_DATA = {
  profile: {
    firstName: 'HIMANSHU',
    lastName: 'TIWARI',
    role: 'Technical Associate',
    company: 'AIVOT AI',
    degree: 'B.Sc. Computer Science Graduate',
    bio: 'Technical Associate at AIVOT AI and Computer Science Graduate. Building resilient full-stack applications, intelligent AI integrations, and next-generation interfaces.',
    email: 'himanshut9988@gmail.com',
    linkedin: 'https://www.linkedin.com/in/himanshu-tiwari/',
    github: 'https://github.com/himanshutiwari',
  },
  phrases: [
    'Technical Associate',
    'Developer',
    'AI Enthusiast',
    'Computer Science Graduate',
  ],
  skills: [
    { name: 'Python', level: 88, cat: 'Language' },
    { name: 'JavaScript', level: 90, cat: 'Language' },
    { name: 'React', level: 85, cat: 'Frontend' },
    { name: 'Next.js', level: 82, cat: 'Frontend' },
    { name: 'HTML', level: 95, cat: 'Frontend' },
    { name: 'CSS', level: 88, cat: 'Frontend' },
    { name: 'Node.js', level: 80, cat: 'Backend' },
    { name: 'Express.js', level: 78, cat: 'Backend' },
    { name: 'MongoDB', level: 75, cat: 'Database' },
    { name: 'Git & GitHub', level: 85, cat: 'Tools' },
  ],
  projects: [
    {
      id: 'taskify',
      title: 'Taskify',
      subtitle: 'Task Management Application',
      desc: 'A powerful Kanban-based task management app with drag-and-drop boards, priority labeling, and team collaboration features.',
      stack: 'React, Node.js, MongoDB, Express.js',
      github: 'https://github.com/himanshutiwari/taskify',
      status: 'DEPLOYED',
    },
    {
      id: 'splitr',
      title: 'Splitr',
      subtitle: 'AI-Powered Expense Splitting',
      desc: 'Smart expense splitting app powered by AI. Automatically categorizes bills, suggests fair splits, and tracks group balances.',
      stack: 'Next.js, Python, MongoDB, AI APIs',
      github: 'https://github.com/himanshutiwari/splitr',
      status: 'ACTIVE',
    },
    {
      id: 'prescripto',
      title: 'Prescripto',
      subtitle: 'Doctor Appointment System',
      desc: 'Full-featured medical appointment platform. Patients can search doctors by specialty, book slots, and receive confirmations.',
      stack: 'React, Node.js, Express.js, MongoDB',
      github: 'https://github.com/himanshutiwari/prescripto',
      status: 'LIVE',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Clone',
      subtitle: 'Real-time Messaging App',
      desc: 'Full-stack real-time messaging application with WebSocket-powered chat, authentication, file sharing, and group conversations.',
      stack: 'React, Node.js, Socket.io, MongoDB',
      github: 'https://github.com/himanshutiwari/whatsapp-clone',
      status: 'COMPLETE',
    },
  ],
};

const inputStyle = {
  width: '100%',
  background: 'rgba(5,8,22,0.9)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '8px',
  padding: '10px 14px',
  fontSize: '13px',
  color: '#fff',
  fontFamily: 'JetBrains Mono, monospace',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [siteData, setSiteData] = useState(DEFAULT_DATA);
  const [saveStatus, setSaveStatus] = useState('');

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem('neonverse_admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
    const savedData = localStorage.getItem('neonverse_site_data');
    if (savedData) {
      try {
        setSiteData(JSON.parse(savedData));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Handle Passcode Unlock
  const handleLogin = (e) => {
    e.preventDefault();
    playClickSound();

    // Default master passcodes
    if (passcode === 'himanshu2026' || passcode === 'admin123' || passcode === 'neonverse') {
      playSuccessSound();
      setIsAuthenticated(true);
      sessionStorage.setItem('neonverse_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('ACCESS DENIED // INVALID CLEARANCE PASSCODE');
    }
  };

  const handleLogout = () => {
    playClickSound();
    setIsAuthenticated(false);
    sessionStorage.removeItem('neonverse_admin_auth');
  };

  // Profile fields change
  const handleProfileChange = (key, value) => {
    setSiteData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [key]: value,
      },
    }));
  };

  // Save changes to localStorage
  const handleSave = () => {
    playClickSound();
    localStorage.setItem('neonverse_site_data', JSON.stringify(siteData));
    playSuccessSound();
    setSaveStatus('CHANGES SAVED TO SYSTEM MEMORY');
    setTimeout(() => setSaveStatus(''), 3000);
  };

  // Reset to default data
  const handleReset = () => {
    playClickSound();
    if (confirm('Reset all fields back to system defaults?')) {
      setSiteData(DEFAULT_DATA);
      localStorage.removeItem('neonverse_site_data');
      setSaveStatus('RESTORED DEFAULT CONFIGURATION');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  // Download updated JSON
  const handleExportJSON = () => {
    playClickSound();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(siteData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'neonverse_content.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Project management
  const handleAddProject = () => {
    playClickSound();
    const newProj = {
      id: `project-${Date.now()}`,
      title: 'New Flagship Project',
      subtitle: 'Full-Stack Application',
      desc: 'Enter detailed operational narrative and project architecture description here.',
      stack: 'React, Next.js, Python, MongoDB',
      github: 'https://github.com/himanshutiwari',
      status: 'DEVELOPMENT',
    };
    setSiteData((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects],
    }));
  };

  const handleDeleteProject = (index) => {
    playClickSound();
    setSiteData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const handleProjectChange = (index, field, value) => {
    setSiteData((prev) => {
      const updated = [...prev.projects];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, projects: updated };
    });
  };

  // Skills management
  const handleAddSkill = () => {
    playClickSound();
    const newSkill = { name: 'New Skill', level: 80, cat: 'Frontend' };
    setSiteData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const handleDeleteSkill = (index) => {
    playClickSound();
    setSiteData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSkillChange = (index, field, value) => {
    setSiteData((prev) => {
      const updated = [...prev.skills];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, skills: updated };
    });
  };

  // If locked, render Cyber Lock Terminal
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 animate-fadeIn">
        <div className="w-full max-w-md nx-glass rounded-2xl p-8 relative overflow-hidden"
          style={{ border: '2px solid rgba(198,255,54,0.4)', boxShadow: '0 0 50px rgba(198,255,54,0.15)' }}>
          <div className="absolute top-0 left-0 w-full h-1"
            style={{ background: 'linear-gradient(90deg, #C6FF36, #A3FF12, #C6FF36)' }} />

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border"
              style={{ background: 'rgba(198,255,54,0.1)', borderColor: 'rgba(198,255,54,0.3)', color: '#C6FF36' }}>
              <Lock className="w-8 h-8 animate-pulse" />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest" style={{ color: '#C6FF36' }}>
              RESTRICTED CONSOLE // LEVEL 5
            </div>
            <h1 className="font-display font-black text-2xl text-white mt-1">
              OPERATOR ADMIN PANEL
            </h1>
            <p className="text-xs font-mono mt-1" style={{ color: '#A0A5B5' }}>
              Enter security passcode to unlock website content editing
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 rounded text-xs font-mono flex items-center gap-2"
                style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#fca5a5' }}>
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase mb-2" style={{ color: '#A0A5B5' }}>
                OPERATOR PASSCODE
              </label>
              <div className="relative">
                <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#C6FF36' }} />
                <input
                  type="password"
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (e.g. himanshu2026)"
                  style={{ ...inputStyle, paddingLeft: '38px' }}
                />
              </div>
              <div className="mt-2 text-[11px] font-mono" style={{ color: '#A0A5B5' }}>
                Default key: <span style={{ color: '#C6FF36' }}>himanshu2026</span>
              </div>
            </div>

            <button
              type="submit"
              onMouseEnter={playHoverSound}
              className="nx-btn-primary w-full py-3.5 text-xs flex items-center justify-center gap-2 mt-4"
            >
              <Unlock className="w-4 h-4" />
              AUTHENTICATE &amp; ENTER
            </button>
          </form>

          <div className="mt-6 pt-4 text-center border-t border-white/5">
            <Link href="/" onClick={playClickSound}
              className="text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
              style={{ color: '#A0A5B5' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C6FF36')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A0A5B5')}>
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Public Portal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If Authenticated, render the Full Content Management Interface
  return (
    <div className="py-8 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs" style={{ color: '#C6FF36' }}>
            <ShieldCheck className="w-4 h-4" />
            OPERATOR AUTHORIZED // SESSION ACTIVE
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
            NEONVERSE // LIVE CONTENT MANAGER
          </h1>
          <p className="text-xs font-mono" style={{ color: '#A0A5B5' }}>
            Edit your portfolio text, skills, projects, and contact channels directly from your browser.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {saveStatus && (
            <div className="px-3 py-1.5 rounded font-mono text-xs flex items-center gap-1.5"
              style={{ background: 'rgba(198,255,54,0.15)', border: '1px solid #C6FF36', color: '#C6FF36' }}>
              <CheckCircle2 className="w-3.5 h-3.5" />
              {saveStatus}
            </div>
          )}

          <button
            onClick={handleSave}
            onMouseEnter={playHoverSound}
            className="nx-btn-primary px-4 py-2 text-xs flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            SAVE TO BROWSER
          </button>

          <button
            onClick={handleExportJSON}
            onMouseEnter={playHoverSound}
            className="nx-btn-outline px-3 py-2 text-xs flex items-center gap-1.5"
            title="Download JSON file of all data"
          >
            <Download className="w-3.5 h-3.5" />
            EXPORT JSON
          </button>

          <button
            onClick={handleLogout}
            onMouseEnter={playHoverSound}
            className="px-3 py-2 rounded text-xs font-mono border transition-colors flex items-center gap-1.5"
            style={{ background: '#050816', borderColor: 'rgba(239,68,68,0.4)', color: '#fca5a5' }}
          >
            <Lock className="w-3.5 h-3.5" />
            LOCK CONSOLE
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-xl nx-glass w-fit">
        {[
          { id: 'profile', label: 'OPERATOR PROFILE', icon: User },
          { id: 'projects', label: 'PROJECTS ARCHIVE', icon: FolderGit2 },
          { id: 'skills', label: 'TECH ARSENAL', icon: Layers },
          { id: 'contact', label: 'DIRECT CHANNELS', icon: Radio },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => {
              playClickSound();
              setActiveTab(id);
            }}
            className="px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2"
            style={activeTab === id
              ? { background: '#C6FF36', color: '#050816', boxShadow: '0 0 15px rgba(198,255,54,0.3)' }
              : { color: '#A0A5B5', background: 'transparent' }}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* TAB 1: OPERATOR PROFILE */}
      {activeTab === 'profile' && (
        <div className="nx-glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="font-display font-black text-xl text-white flex items-center gap-2">
              <User className="w-5 h-5" style={{ color: '#C6FF36' }} />
              HERO &amp; IDENTITY PROFILE
            </h2>
            <span className="font-mono text-xs" style={{ color: '#C6FF36' }}>PRIMARY HERO VIEWPORT</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>FIRST NAME</label>
              <input
                type="text"
                value={siteData.profile.firstName}
                onChange={(e) => handleProfileChange('firstName', e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>LAST NAME</label>
              <input
                type="text"
                value={siteData.profile.lastName}
                onChange={(e) => handleProfileChange('lastName', e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>CURRENT ROLE</label>
              <input
                type="text"
                value={siteData.profile.role}
                onChange={(e) => handleProfileChange('role', e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>ORGANIZATION / COMPANY</label>
              <input
                type="text"
                value={siteData.profile.company}
                onChange={(e) => handleProfileChange('company', e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>ACADEMIC CREDENTIAL / DEGREE</label>
            <input
              type="text"
              value={siteData.profile.degree}
              onChange={(e) => handleProfileChange('degree', e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>EXECUTIVE BIO / ABOUT INTRO</label>
            <textarea
              rows={4}
              value={siteData.profile.bio}
              onChange={(e) => handleProfileChange('bio', e.target.value)}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>
        </div>
      )}

      {/* TAB 2: PROJECTS MANAGER */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display font-black text-xl text-white flex items-center gap-2">
                <FolderGit2 className="w-5 h-5" style={{ color: '#C6FF36' }} />
                FLAGSHIP PROJECTS ARCHIVE ({siteData.projects.length})
              </h2>
              <p className="text-xs font-mono" style={{ color: '#A0A5B5' }}>
                Add new projects or edit existing descriptions, stack, and GitHub links.
              </p>
            </div>
            <button
              onClick={handleAddProject}
              onMouseEnter={playHoverSound}
              className="nx-btn-primary px-4 py-2 text-xs flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              ADD NEW PROJECT
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteData.projects.map((proj, idx) => (
              <div key={proj.id || idx} className="nx-glass rounded-xl p-6 relative space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="font-mono text-xs font-bold" style={{ color: '#C6FF36' }}>
                    PROJECT #{idx + 1}
                  </span>
                  <button
                    onClick={() => handleDeleteProject(idx)}
                    className="p-1.5 text-red-400 hover:text-red-300 transition-colors"
                    title="Delete project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-[#A0A5B5] uppercase mb-1">TITLE</label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-[#A0A5B5] uppercase mb-1">STATUS</label>
                    <input
                      type="text"
                      value={proj.status}
                      onChange={(e) => handleProjectChange(idx, 'status', e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#A0A5B5] uppercase mb-1">SUBTITLE</label>
                  <input
                    type="text"
                    value={proj.subtitle}
                    onChange={(e) => handleProjectChange(idx, 'subtitle', e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#A0A5B5] uppercase mb-1">DESCRIPTION</label>
                  <textarea
                    rows={3}
                    value={proj.desc}
                    onChange={(e) => handleProjectChange(idx, 'desc', e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#A0A5B5] uppercase mb-1">TECH STACK (COMMA-SEPARATED)</label>
                  <input
                    type="text"
                    value={proj.stack}
                    onChange={(e) => handleProjectChange(idx, 'stack', e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#A0A5B5] uppercase mb-1">GITHUB REPO URL</label>
                  <input
                    type="text"
                    value={proj.github}
                    onChange={(e) => handleProjectChange(idx, 'github', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SKILLS MANAGER */}
      {activeTab === 'skills' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display font-black text-xl text-white flex items-center gap-2">
                <Layers className="w-5 h-5" style={{ color: '#C6FF36' }} />
                TECH ARSENAL &amp; PROFICIENCIES ({siteData.skills.length})
              </h2>
              <p className="text-xs font-mono" style={{ color: '#A0A5B5' }}>
                Adjust proficiency sliders, categories, or add new technical capabilities.
              </p>
            </div>
            <button
              onClick={handleAddSkill}
              onMouseEnter={playHoverSound}
              className="nx-btn-primary px-4 py-2 text-xs flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              ADD NEW SKILL
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.skills.map((skill, idx) => (
              <div key={idx} className="nx-glass rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold" style={{ color: '#C6FF36' }}>
                    SKILL #{idx + 1}
                  </span>
                  <button
                    onClick={() => handleDeleteSkill(idx)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono text-[#A0A5B5] mb-1">NAME</label>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => handleSkillChange(idx, 'name', e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#A0A5B5] mb-1">CATEGORY</label>
                    <select
                      value={skill.cat}
                      onChange={(e) => handleSkillChange(idx, 'cat', e.target.value)}
                      style={inputStyle}
                    >
                      <option value="Language">Language</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Database">Database</option>
                      <option value="Tools">Tools</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-mono text-[10px] mb-1">
                    <span style={{ color: '#A0A5B5' }}>PROFICIENCY LEVEL</span>
                    <span style={{ color: '#C6FF36' }}>{skill.level}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={skill.level}
                    onChange={(e) => handleSkillChange(idx, 'level', parseInt(e.target.value))}
                    className="w-full accent-[#C6FF36]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: CONTACT & CHANNELS */}
      {activeTab === 'contact' && (
        <div className="nx-glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="font-display font-black text-xl text-white flex items-center gap-2">
              <Radio className="w-5 h-5" style={{ color: '#C6FF36' }} />
              DIRECT TRANSMISSION CHANNELS
            </h2>
            <span className="font-mono text-xs" style={{ color: '#C6FF36' }}>COMM UPLINK ROUTING</span>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>PRIMARY EMAIL</label>
            <input
              type="email"
              value={siteData.profile.email}
              onChange={(e) => handleProfileChange('email', e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>LINKEDIN PROFILE URL</label>
            <input
              type="url"
              value={siteData.profile.linkedin}
              onChange={(e) => handleProfileChange('linkedin', e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>GITHUB PROFILE URL</label>
            <input
              type="url"
              value={siteData.profile.github}
              onChange={(e) => handleProfileChange('github', e.target.value)}
              style={inputStyle}
            />
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-white/5">
            <button
              onClick={handleReset}
              className="text-xs font-mono text-gray-500 hover:text-red-400 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All to Defaults
            </button>

            <button
              onClick={handleSave}
              className="nx-btn-primary px-6 py-2.5 text-xs flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              SAVE ALL CHANGES
            </button>
          </div>
        </div>
      )}

      {/* Floating Save Bar */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleSave}
          onMouseEnter={playHoverSound}
          className="nx-btn-primary px-6 py-3.5 text-xs flex items-center gap-2.5 shadow-2xl"
        >
          <Save className="w-4 h-4" />
          <span>SAVE SYSTEM CHANGES</span>
        </button>
      </div>

    </div>
  );
}
