'use client';

import { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal, 
  Play, 
  Layers, 
  Plus, 
  Send, 
  Calendar, 
  User, 
  DollarSign, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessSound } from '../lib/cyberSound';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'architecture' | 'tech'
  
  // Interactive Simulator States
  // 1. Taskify Kanban state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Integrate LLM API router', status: 'done', priority: 'High' },
    { id: 2, title: 'Build Cyberpunk HUD theme', status: 'progress', priority: 'Critical' },
    { id: 3, title: 'Implement MongoDB Sharding', status: 'backlog', priority: 'Medium' },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // 2. Splitr state
  const [expenses, setExpenses] = useState([
    { id: 1, desc: 'Cloud Server Infrastructure', amount: 120, paidBy: 'Himanshu' },
    { id: 2, desc: 'AI Vision API Credits', amount: 45, paidBy: 'Alex' },
  ]);
  const [newExpenseDesc, setNewExpenseDesc] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');

  // 3. Prescripto state
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sarah Lin (Neurology)');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  // 4. WhatsApp Clone chat state
  const [chatMessages, setChatMessages] = useState([
    { sender: 'AI Protocol', text: 'Connection encrypted. Welcome to NEON Chat.', time: '12:00' },
    { sender: 'Operator', text: 'Taskify and Splitr pipelines are operational.', time: '12:01' },
  ]);
  const [chatInput, setChatInput] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Taskify handler
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    playClickSound();
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTaskInput, status: 'progress', priority: 'Normal' },
    ]);
    setNewTaskInput('');
  };

  const handleToggleTaskStatus = (id) => {
    playClickSound();
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          const next = t.status === 'backlog' ? 'progress' : t.status === 'progress' ? 'done' : 'backlog';
          return { ...t, status: next };
        }
        return t;
      })
    );
  };

  // Splitr handler
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpenseDesc.trim() || !newExpenseAmount) return;
    playSuccessSound();
    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        desc: newExpenseDesc,
        amount: parseFloat(newExpenseAmount),
        paidBy: 'Himanshu',
      },
    ]);
    setNewExpenseDesc('');
    setNewExpenseAmount('');
  };

  // Chat handler
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    playClickSound();
    const newMsg = {
      sender: 'Himanshu',
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput('');

    // Automated simulated reply
    setTimeout(() => {
      playSuccessSound();
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'Core System',
          text: `[ACK] Packet verified: "${newMsg.text.slice(0, 20)}..." received with 0% loss.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-cyber-darker border-2 border-cyber-neon-green rounded-xl shadow-neon-green overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hud-corner-tl"></div>
        <div className="hud-corner-tr"></div>
        <div className="hud-corner-bl"></div>
        <div className="hud-corner-br"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyber-neon-green/30 bg-cyber-card">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-neon-green animate-ping"></span>
            <div>
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                {project.title}
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyber-neon-green/15 text-cyber-neon-green border border-cyber-neon-green/40">
                  LIVE INTERACTIVE
                </span>
              </h3>
              <p className="text-xs font-mono text-cyber-neon-cyan">{project.subtitle}</p>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            onMouseEnter={playHoverSound}
            className="p-1.5 rounded-lg border border-gray-700 hover:border-cyber-neon-green text-gray-400 hover:text-cyber-neon-green transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-gray-800 bg-cyber-black/70 px-6 gap-4">
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('demo');
            }}
            className={`py-3 text-xs font-mono font-bold tracking-wider border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'demo'
                ? 'border-cyber-neon-green text-cyber-neon-green'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            INTERACTIVE SIMULATOR
          </button>

          <button
            onClick={() => {
              playClickSound();
              setActiveTab('architecture');
            }}
            className={`py-3 text-xs font-mono font-bold tracking-wider border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'border-cyber-neon-cyan text-cyber-neon-cyan'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            ARCHITECTURE &amp; FEATURES
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto flex-1 font-sans">
          
          {activeTab === 'demo' && (
            <div className="space-y-6">
              
              <div className="p-3 bg-cyber-dark rounded border border-cyber-neon-green/20 text-xs font-mono text-cyber-neon-green flex items-center justify-between">
                <span>SIMULATOR ENVIRONMENT: LOADED</span>
                <span className="text-gray-400">STATUS: LIVE INTERACTION READY</span>
              </div>

              {/* 1. Taskify Interactive Simulator */}
              {project.id === 'taskify' && (
                <div className="space-y-4">
                  <form onSubmit={handleAddTask} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add high-priority task..."
                      value={newTaskInput}
                      onChange={(e) => setNewTaskInput(e.target.value)}
                      className="flex-1 bg-cyber-dark border border-gray-700 focus:border-cyber-neon-green rounded px-3 py-2 text-sm text-white font-mono outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-cyber-neon-green text-black font-mono font-bold text-xs rounded hover:bg-white flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" /> ADD TASK
                    </button>
                  </form>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {['backlog', 'progress', 'done'].map((column) => (
                      <div key={column} className="bg-cyber-dark/80 p-3 rounded border border-gray-800">
                        <div className="text-xs font-mono font-bold text-gray-300 uppercase mb-2 flex items-center justify-between border-b border-gray-800 pb-1">
                          <span>{column}</span>
                          <span className="text-cyber-neon-green">
                            {tasks.filter((t) => t.status === column).length}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {tasks
                            .filter((t) => t.status === column)
                            .map((task) => (
                              <div
                                key={task.id}
                                onClick={() => handleToggleTaskStatus(task.id)}
                                className="p-2.5 bg-cyber-card border border-gray-700/80 hover:border-cyber-neon-cyan rounded text-xs cursor-pointer transition-colors"
                              >
                                <div className="text-white font-medium mb-1">{task.title}</div>
                                <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                                  <span className="text-cyber-neon-cyan">#{task.priority}</span>
                                  <span className="text-gray-500">Click to advance &gt;</span>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Splitr Interactive Simulator */}
              {project.id === 'splitr' && (
                <div className="space-y-4">
                  <div className="p-4 bg-cyber-dark rounded border border-gray-800 flex flex-col sm:flex-row justify-between gap-4 items-center font-mono">
                    <div>
                      <span className="text-xs text-gray-400">TOTAL GROUP SPENDING:</span>
                      <div className="text-2xl font-bold text-cyber-neon-green">
                        ${expenses.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
                      </div>
                    </div>
                    <div className="text-xs text-cyber-neon-cyan">
                      <Sparkles className="w-4 h-4 inline mr-1 text-cyber-neon-yellow" />
                      AI Settlement: Optimized into 1 transaction
                    </div>
                  </div>

                  <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <input
                      type="text"
                      placeholder="Expense title (e.g. Server hosting)"
                      value={newExpenseDesc}
                      onChange={(e) => setNewExpenseDesc(e.target.value)}
                      className="sm:col-span-6 bg-cyber-dark border border-gray-700 focus:border-cyber-neon-green rounded px-3 py-2 text-sm text-white font-mono outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Amount ($)"
                      value={newExpenseAmount}
                      onChange={(e) => setNewExpenseAmount(e.target.value)}
                      className="sm:col-span-3 bg-cyber-dark border border-gray-700 focus:border-cyber-neon-green rounded px-3 py-2 text-sm text-white font-mono outline-none"
                    />
                    <button
                      type="submit"
                      className="sm:col-span-3 px-4 py-2 bg-cyber-neon-cyan text-black font-mono font-bold text-xs rounded hover:bg-white flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" /> SPLIT BILL
                    </button>
                  </form>

                  <div className="space-y-2 pt-2">
                    {expenses.map((exp) => (
                      <div
                        key={exp.id}
                        className="flex justify-between items-center p-3 bg-cyber-dark/80 rounded border border-gray-800 text-xs font-mono"
                      >
                        <span className="text-white font-bold">{exp.desc}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400">Paid by {exp.paidBy}</span>
                          <span className="text-cyber-neon-green font-bold">${exp.amount.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Prescripto Interactive Simulator */}
              {project.id === 'prescripto' && (
                <div className="space-y-4">
                  {appointmentBooked ? (
                    <div className="p-6 bg-cyber-neon-green/10 border border-cyber-neon-green rounded-lg text-center space-y-2 font-mono">
                      <CheckCircle2 className="w-12 h-12 text-cyber-neon-green mx-auto" />
                      <h4 className="text-lg font-bold text-white">APPOINTMENT CONFIRMED</h4>
                      <p className="text-xs text-cyber-neon-cyan">
                        Slot reserved with {selectedDoctor} at {selectedSlot}.
                      </p>
                      <button
                        onClick={() => setAppointmentBooked(false)}
                        className="mt-3 px-4 py-1.5 bg-cyber-neon-green text-black font-mono font-bold text-xs rounded"
                      >
                        BOOK ANOTHER SLOT
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1">SELECT SPECIALIST</label>
                        <select
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                          className="w-full bg-cyber-dark border border-gray-700 text-white rounded p-2 text-sm font-mono outline-none"
                        >
                          <option>Dr. Sarah Lin (Neurology &amp; AI Diagnostics)</option>
                          <option>Dr. Mark Vance (Cardiovascular Systems)</option>
                          <option>Dr. Elena Rostova (General Health)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1">AVAILABLE TIME SLOTS</label>
                        <div className="flex flex-wrap gap-2">
                          {['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`px-3 py-1.5 rounded text-xs font-mono border ${
                                selectedSlot === slot
                                  ? 'bg-cyber-neon-green text-black border-cyber-neon-green font-bold'
                                  : 'bg-cyber-dark text-gray-400 border-gray-800 hover:border-gray-600'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          playSuccessSound();
                          setAppointmentBooked(true);
                        }}
                        className="w-full py-2.5 bg-cyber-neon-green text-black font-mono font-bold text-xs rounded hover:bg-white flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" /> CONFIRM DOCTOR APPOINTMENT
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* 4. WhatsApp Clone Interactive Simulator */}
              {project.id === 'whatsapp' && (
                <div className="border border-gray-800 rounded bg-cyber-dark flex flex-col h-72">
                  <div className="p-3 bg-cyber-card border-b border-gray-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyber-neon-green"></span>
                      <span className="text-xs font-mono font-bold text-white">Live Encrypted Channel</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyber-neon-cyan">WEBSOCKET: CONNECTED</span>
                  </div>

                  <div className="flex-1 p-3 overflow-y-auto space-y-2">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex flex-col ${msg.sender === 'Himanshu' ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded px-3 py-1.5 text-xs font-mono ${
                            msg.sender === 'Himanshu'
                              ? 'bg-cyber-neon-green text-black font-medium'
                              : 'bg-cyber-card border border-gray-700 text-gray-200'
                          }`}
                        >
                          <div className="text-[9px] opacity-70 mb-0.5">{msg.sender}</div>
                          <div>{msg.text}</div>
                        </div>
                        <span className="text-[8px] font-mono text-gray-500 mt-0.5">{msg.time}</span>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSendMessage} className="p-2 border-t border-gray-800 flex gap-2">
                    <input
                      type="text"
                      placeholder="Type encrypted message..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="flex-1 bg-cyber-black border border-gray-700 focus:border-cyber-neon-green rounded px-3 py-1.5 text-xs text-white font-mono outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-cyber-neon-green text-black font-mono font-bold text-xs rounded hover:bg-white flex items-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs text-cyber-neon-green uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> ARCHITECTURAL BLUEPRINT
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-cyber-neon-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> CORE CAPABILITIES &amp; HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded bg-cyber-dark/60 border border-gray-800 text-xs">
                      <span className="text-cyber-neon-green font-bold font-mono">0{i + 1}.</span>
                      <span className="text-gray-300 font-sans">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-cyber-neon-purple uppercase tracking-widest mb-2">
                  TECHNOLOGY ARSENAL
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded bg-cyber-dark text-cyber-neon-cyan border border-cyber-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Real GitHub and Live Actions */}
        <div className="px-6 py-4 bg-cyber-card border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-gray-400">
            VERIFIED REPOSITORY: <span className="text-cyber-neon-green">{project.githubUrl}</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-4 py-2 bg-cyber-dark hover:bg-cyber-black text-white hover:text-cyber-neon-green border border-gray-700 hover:border-cyber-neon-green rounded font-mono text-xs font-bold transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB REPO</span>
            </a>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="px-4 py-2 bg-cyber-neon-green hover:bg-white text-black rounded font-mono text-xs font-bold transition-all"
            >
              CLOSE VIEWER
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
