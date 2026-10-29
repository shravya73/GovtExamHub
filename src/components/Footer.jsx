import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  Mail, 
  FileText, 
  Lock, 
  AlertCircle, 
  X,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const { setActiveTab } = useApp();
  const [legalModalContent, setLegalModalContent] = useState(null); // 'privacy', 'terms', 'disclaimer'

  const currentYear = 2026;

  const openLegalModal = (type) => {
    setLegalModalContent(type);
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 text-sm">
      
      {/* Top Footer Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex items-center">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">Govt</span>
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-saffron-400">Exam</span>
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-100">Hub</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              GovtExamHub – One Platform. All Government Exams. India’s unified educational portal for exam notifications, free legal study PDFs, realistic mock tests, and competitive exam books delivered right to your doorstep.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div>📍 <strong>National Head:</strong> Mukherjee Nagar Educational Hub, New Delhi 110009</div>
              <div>✉️ <strong>Support:</strong> support@govtexamhub.in (Demo)</div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-saffron-400">
              Exam Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('exams')} className="hover:text-white transition-colors">
                  UPSC Civil Services (CSE)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('exams')} className="hover:text-white transition-colors">
                  SSC CGL & CHSL 2026
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('exams')} className="hover:text-white transition-colors">
                  IBPS & SBI Banking PO
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('exams')} className="hover:text-white transition-colors">
                  Railway RRB NTPC
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('exams')} className="hover:text-white transition-colors">
                  State PSCs (UPPSC, BPSC)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('exams')} className="hover:text-white transition-colors">
                  Defence & Police Exams
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Study Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-saffron-400">
              Free Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('materials')} className="hover:text-white transition-colors">
                  Indian Constitution Notes
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('materials')} className="hover:text-white transition-colors">
                  Modern History Timelines
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('materials')} className="hover:text-white transition-colors">
                  Previous Year Solved Papers
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('mocks')} className="hover:text-white transition-colors">
                  General Studies Mock Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('books')} className="hover:text-white transition-colors">
                  Competitive Exam Books Store
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-saffron-400">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">
                  About GovtExamHub
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">
                  Contact & Student Helpdesk
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('privacy')} className="hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('terms')} className="hover:text-white transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('disclaimer')} className="hover:text-white transition-colors text-left text-amber-300">
                  Government Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Highlight */}
        <div className="mt-12 p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Legal Disclaimer:</strong> GovtExamHub is an educational startup prototype and independent examination resource portal. GovtExamHub is <strong>not affiliated with, endorsed by, or associated with</strong> the Union Public Service Commission (UPSC), Staff Selection Commission (SSC), Railway Recruitment Boards (RRB), IBPS, or any Central/State Government agency. All examination names, logos, and authorities referenced belong to their respective statutory owners. All dates, vacancies, and checkout actions shown on this prototype site are simulated demo data.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} GovtExamHub. Built with precision for Indian competitive exam aspirants.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => openLegalModal('privacy')} className="hover:text-slate-300">Privacy</button>
            <span>•</span>
            <button onClick={() => openLegalModal('terms')} className="hover:text-slate-300">Terms</button>
            <span>•</span>
            <button onClick={() => openLegalModal('disclaimer')} className="hover:text-slate-300">Disclaimers</button>
          </div>
        </div>

      </div>

      {/* Legal Content Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative bg-white text-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[85vh] overflow-y-auto space-y-4 text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-lg font-bold text-navy-900 capitalize">
                {legalModalContent === 'privacy' && 'Privacy Policy'}
                {legalModalContent === 'terms' && 'Terms and Conditions'}
                {legalModalContent === 'disclaimer' && 'Official Government Disclaimer'}
              </h3>
              <button
                onClick={() => setLegalModalContent(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {legalModalContent === 'privacy' && (
              <div className="space-y-3 leading-relaxed text-slate-600">
                <p><strong>1. Information Collection:</strong> GovtExamHub does not sell, lease, or monetize personal user data. In demo mode, accounts and form submissions are retained in browser local storage.</p>
                <p><strong>2. Cookies and Storage:</strong> We use local storage purely to remember your cart items, saved bookmarks, and test preferences.</p>
                <p><strong>3. Security:</strong> Any future production integration will use standard TLS 1.3 encryption and RBI-compliant tokenized payment processors.</p>
              </div>
            )}

            {legalModalContent === 'terms' && (
              <div className="space-y-3 leading-relaxed text-slate-600">
                <p><strong>1. Educational Usage:</strong> All resources, practice quizzes, and syllabi guides provided on GovtExamHub are solely for individual educational reference and competitive exam preparation.</p>
                <p><strong>2. Fair Dealing:</strong> Solved previous years papers are compiled under educational fair dealing provisions with proper attribution to examination boards.</p>
                <p><strong>3. Demo Store:</strong> Physical book purchases are subject to stock availability with participating publishing houses.</p>
              </div>
            )}

            {legalModalContent === 'disclaimer' && (
              <div className="space-y-3 leading-relaxed text-slate-600">
                <p><strong>Independent Status:</strong> GovtExamHub is an educational startup prototype and independent examination resource portal. GovtExamHub is not affiliated with, endorsed by, or associated with UPSC, SSC, RRB, IBPS, or any government recruitment body.</p>
                <p><strong>Candidate Advisory:</strong> While we strive to maintain accurate information, candidates are advised to verify details from official gazettes and commission notifications.</p>
              </div>
            )}

            <div className="pt-3 border-t border-slate-200 text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 rounded-xl bg-navy-900 text-white font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}

