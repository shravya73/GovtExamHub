import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  ShieldCheck, 
  AlertCircle, 
  GraduationCap, 
  CheckCircle2,
  LogIn,
  UserPlus
} from 'lucide-react';

export default function AuthModal() {
  const { authModalOpen, setAuthModalOpen, user, loginUser, logoutUser, showToast } = useApp();

  const [activeMode, setActiveMode] = useState('login'); // 'login' or 'register'
  const [email, setEmail] = useState('aspirant.demo@govtexamhub.in');
  const [password, setPassword] = useState('GovtJob2026!');
  const [name, setName] = useState('Aman Srivastava');
  const [targetExam, setTargetExam] = useState('UPSC Civil Services (CSE)');

  if (!authModalOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser({
      name: name || 'Demo Aspirant',
      email: email,
      role: 'Government Exam Aspirant',
      targetExam: targetExam,
      joinedDate: 'Joined Oct 2026'
    });
    setAuthModalOpen(false);
  };

  const handleFillDemoAspirant = () => {
    setName('Arjun Sharma');
    setEmail('arjun.upsc@demo.in');
    setPassword('DemoPass123');
    setTargetExam('UPSC CSE & State PCS');
    showToast('Auto-filled demo aspirant credentials', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-saffron-500 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                {user ? 'Aspirant Profile' : activeMode === 'login' ? 'Sign In to GovtExamHub' : 'Create Aspirant Account'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {user ? 'Active Session' : 'Save progress & bookmarks across devices'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setAuthModalOpen(false)}
            className="p-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center gap-2 text-xs text-amber-900 font-medium">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Demo Authentication Mode:</strong> Prototype sandbox. No external authentication server required; sessions are maintained locally.
          </span>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {user ? (
            /* Logged in User Card */
            <div className="space-y-4 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-saffron-100 text-saffron-600 border-2 border-saffron-300 flex items-center justify-center mx-auto text-xl font-extrabold shadow-sm">
                {user.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 text-lg">{user.name}</h4>
                <p className="text-xs text-slate-500">{user.email}</p>
                <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold border border-navy-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Target: {user.targetExam || 'UPSC CSE 2026'}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2">
                <button
                  onClick={() => {
                    logoutUser();
                    setAuthModalOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-bold text-xs transition-colors"
                >
                  Sign Out of Demo Account
                </button>
              </div>
            </div>
          ) : (
            /* Auth Form */
            <div className="space-y-4">
              
              {/* Tabs */}
              <div className="flex border border-slate-200 rounded-xl p-1 bg-slate-50">
                <button
                  onClick={() => setActiveMode('login')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeMode === 'login' ? 'bg-white shadow text-navy-900' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveMode('register')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeMode === 'register' ? 'bg-white shadow text-navy-900' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-3.5 text-xs sm:text-sm">
                {activeMode === 'register' && (
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aman Srivastava"
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-slate-700 mb-1 text-xs">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aspirant@govtexamhub.in"
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1 text-xs">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                {activeMode === 'register' && (
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">
                      Primary Target Exam
                    </label>
                    <select
                      value={targetExam}
                      onChange={(e) => setTargetExam(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                    >
                      <option value="UPSC Civil Services (CSE)">UPSC Civil Services (CSE)</option>
                      <option value="SSC CGL / CHSL">SSC CGL / CHSL</option>
                      <option value="IBPS & SBI Banking PO">IBPS & SBI Banking PO</option>
                      <option value="Railway RRB NTPC">Railway RRB NTPC</option>
                      <option value="State PSC Exams">State PSC Exams</option>
                      <option value="Defence (NDA / CDS)">Defence (NDA / CDS)</option>
                      <option value="Teaching (CTET / UGC NET)">Teaching (CTET / UGC NET)</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{activeMode === 'login' ? 'Sign In as Aspirant' : 'Create Free Account'}</span>
                </button>
              </form>

              {/* Quick Auto-fill button */}
              <div className="pt-2 text-center">
                <button
                  onClick={handleFillDemoAspirant}
                  type="button"
                  className="text-xs text-saffron-700 hover:text-saffron-800 font-semibold hover:underline"
                >
                  ⚡ Autofill Sample Aspirant Credentials
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}

