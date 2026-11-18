'use client';

import { useState } from 'react';
import { Send, Linkedin, Github, Mail, Terminal, CheckCircle2, AlertCircle, ShieldCheck, Radio } from 'lucide-react';
import { playHoverSound, playClickSound, playSuccessSound } from '../lib/cyberSound';

const inputStyle = {
  width: '100%',
  background: 'rgba(5,8,22,0.9)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '6px',
  padding: '10px 14px',
  fontSize: '14px',
  color: '#fff',
  fontFamily: 'JetBrains Mono, monospace',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    playClickSound();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setFormStatus('error');
      return;
    }
    setFormStatus('transmitting');
    setErrorMessage('');
    setTimeout(() => { playSuccessSound(); setFormStatus('transmitted'); }, 1500);
  };

  const handleReset = () => { playClickSound(); setFormData({ name: '', email: '', subject: '', message: '' }); setFormStatus('idle'); };

  const mailtoUrl = `mailto:himanshut9988@gmail.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from NEONVERSE')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

  const focusInput = e => { e.target.style.borderColor = 'rgba(198,255,54,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(198,255,54,0.15)'; };
  const blurInput = e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ borderTop: '1px solid rgba(198,255,54,0.08)' }}>
      <div className="absolute inset-0 nx-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(198,255,54,0.04)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest mb-4"
            style={{ background: '#080D1C', border: '1px solid rgba(198,255,54,0.3)', color: '#C6FF36' }}>
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            CONTACT.SYS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            GET IN <span className="text-glow-lime" style={{ color: '#C6FF36' }}>TOUCH</span>
          </h2>
          <div className="mt-3 w-20 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #C6FF36, transparent)' }} />
          <p className="mt-4 font-mono text-xs tracking-widest uppercase" style={{ color: '#A0A5B5' }}>
            // TRANSMIT ENCRYPTED DISPATCHES & CONNECT DIRECTLY
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="nx-glass rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 opacity-50"
                style={{ background: 'linear-gradient(90deg, rgba(198,255,54,0), #C6FF36, rgba(198,255,54,0))' }} />

              <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase tracking-widest" style={{ color: '#C6FF36' }}>
                <Radio className="w-4 h-4 animate-pulse" /> DIRECT ACCESS NODES
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#A0A5B5' }}>
                Whether you have an upcoming project, are interested in AI software solutions, or want to discuss full-stack engineering, my channel is open.
              </p>

              {/* Contact buttons */}
              <div className="space-y-3">
                {[
                  { href: 'https://www.linkedin.com/in/himanshu-tiwari/', Icon: Linkedin, label: 'LINKEDIN PROFILE', sub: 'linkedin.com/in/himanshu-tiwari', action: 'CONNECT >', color: '#0077B5' },
                  { href: 'https://github.com/himanshutiwari', Icon: Github, label: 'GITHUB REPOSITORIES', sub: 'github.com/himanshutiwari', action: 'EXPLORE >', color: '#C6FF36' },
                  { href: 'mailto:himanshut9988@gmail.com', Icon: Mail, label: 'OFFICIAL EMAIL', sub: 'himanshut9988@gmail.com', action: 'DISPATCH >', color: '#A3FF12' },
                ].map(({ href, Icon, label, sub, action, color }) => (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={playClickSound} onMouseEnter={playHoverSound}
                    className="w-full p-3.5 rounded flex items-center justify-between group transition-all duration-300"
                    style={{ background: 'rgba(5,8,22,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => { playHoverSound(); e.currentTarget.style.borderColor = 'rgba(198,255,54,0.4)'; e.currentTarget.style.background = 'rgba(198,255,54,0.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(5,8,22,0.8)'; }}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${color}15`, border: `1px solid ${color}40`, color }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left font-mono">
                        <div className="text-white text-xs font-bold">{label}</div>
                        <div className="text-[10px]" style={{ color: '#A0A5B5' }}>{sub}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold group-hover:translate-x-1 transition-transform" style={{ color: '#C6FF36' }}>
                      {action}
                    </span>
                  </a>
                ))}
              </div>

              {/* Status */}
              <div className="mt-8 pt-4 flex items-center justify-between font-mono text-[10px]"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#A0A5B5' }}>
                <span className="flex items-center gap-1.5" style={{ color: '#C6FF36' }}>
                  <ShieldCheck className="w-3.5 h-3.5" /> PGP 4096-BIT ENCRYPTION
                </span>
                <span>STATUS: READY</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="nx-glass rounded-xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 opacity-50"
                style={{ background: 'linear-gradient(90deg, rgba(198,255,54,0), #C6FF36, rgba(198,255,54,0))' }} />

              {/* Form header */}
              <div className="flex items-center justify-between pb-4 mb-6"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" style={{ color: '#C6FF36' }} />
                  <span className="font-mono text-xs text-white font-bold tracking-wider">TRANSMISSION TERMINAL</span>
                </div>
                <span className="font-mono text-[10px]" style={{ color: '#C6FF36' }}>PORT: 443 // SECURE</span>
              </div>

              {/* Success state */}
              {formStatus === 'transmitted' ? (
                <div className="py-10 text-center space-y-4 font-mono">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ background: 'rgba(198,255,54,0.1)', border: '2px solid #C6FF36', color: '#C6FF36', boxShadow: '0 0 20px rgba(198,255,54,0.3)' }}>
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">TRANSMISSION SUCCESSFUL</h4>
                  <p className="text-sm max-w-md mx-auto font-sans" style={{ color: '#A0A5B5' }}>
                    Thank you, <strong style={{ color: '#C6FF36' }}>{formData.name}</strong>. Your message is received. Response coming to <strong style={{ color: '#A3FF12' }}>{formData.email}</strong>.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <a href={mailtoUrl} onClick={playClickSound}
                      className="nx-btn-outline px-4 py-2 text-xs inline-flex items-center">OPEN IN MAIL CLIENT</a>
                    <button onClick={handleReset}
                      className="nx-btn-primary px-4 py-2 text-xs">SEND ANOTHER</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3 rounded flex items-center gap-2 text-xs font-mono"
                      style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.5)', color: '#fca5a5' }}>
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>
                        NAME <span style={{ color: '#C6FF36' }}>*</span>
                      </label>
                      <input type="text" name="name" required value={formData.name}
                        onChange={handleChange} placeholder="e.g. Alex Mercer"
                        style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>
                        EMAIL <span style={{ color: '#C6FF36' }}>*</span>
                      </label>
                      <input type="email" name="email" required value={formData.email}
                        onChange={handleChange} placeholder="e.g. alex@domain.io"
                        style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>SUBJECT</label>
                    <input type="text" name="subject" value={formData.subject}
                      onChange={handleChange} placeholder="e.g. Collaboration on AI Full-Stack Platform"
                      style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase mb-1.5" style={{ color: '#A0A5B5' }}>
                      MESSAGE <span style={{ color: '#C6FF36' }}>*</span>
                    </label>
                    <textarea name="message" rows={5} required value={formData.message}
                      onChange={handleChange} placeholder="Enter project details, technical scope, or inquiries..."
                      style={{ ...inputStyle, resize: 'none' }} onFocus={focusInput} onBlur={blurInput} />
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={formStatus === 'transmitting'}
                      onMouseEnter={playHoverSound}
                      className="w-full py-4 font-mono font-bold tracking-wider text-sm nx-clip flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
                      style={{ background: '#C6FF36', color: '#050816', boxShadow: '0 0 25px rgba(198,255,54,0.4)' }}
                      onMouseEnter={e => { playHoverSound(); if (formStatus !== 'transmitting') { e.currentTarget.style.background = '#A3FF12'; e.currentTarget.style.boxShadow = '0 0 40px rgba(198,255,54,0.65)'; } }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#C6FF36'; e.currentTarget.style.boxShadow = '0 0 25px rgba(198,255,54,0.4)'; }}>
                      {formStatus === 'transmitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#050816] border-t-transparent rounded-full animate-spin" />
                          TRANSMITTING...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          TRANSMIT DISPATCH VIA NEONVERSE
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center pt-1">
                    <span className="text-xs font-mono" style={{ color: '#A0A5B5' }}>
                      Prefer direct client?{' '}
                      <a href={mailtoUrl} className="transition-colors" style={{ color: '#C6FF36' }}
                        onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                        onClick={playClickSound}>
                        Launch local mail program
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
