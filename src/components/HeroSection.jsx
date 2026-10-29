import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Compass, 
  BookOpen, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Truck, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Award,
  Users,
  Search
} from 'lucide-react';

export default function HeroSection() {
  const { setActiveTab, setSearchModalOpen } = useApp();

  const quickCategories = [
    { name: 'UPSC CSE', tab: 'exams' },
    { name: 'SSC CGL', tab: 'exams' },
    { name: 'Banking PO / Clerk', tab: 'exams' },
    { name: 'Railway NTPC', tab: 'exams' },
    { name: 'State PSCs', tab: 'exams' },
    { name: 'NDA / CDS Defence', tab: 'exams' },
    { name: 'Teaching (CTET)', tab: 'exams' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-navy-700/60">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/15 border border-saffron-500/30 text-saffron-400 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-saffron-400" />
              <span>India's Dedicated Government Competitive Exam Portal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your Government Job <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-orange-400 to-amber-300">
                Journey Starts Here!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Discover exam updates, prepare smarter with quality study materials, practice mock tests, and get your favorite competitive exam books delivered to your doorstep.
            </p>

            {/* Two Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setActiveTab('exams')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-base shadow-lg shadow-saffron-500/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Explore Exams</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('materials')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-navy-800/90 hover:bg-navy-700 text-white border border-slate-600 font-bold text-base shadow-md transition-all duration-200 hover:border-saffron-400 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-saffron-400" />
                <span>Start Preparing</span>
              </button>
            </div>

            {/* Quick Search Shortcut */}
            <div className="pt-2">
              <div 
                onClick={() => setSearchModalOpen(true)}
                className="cursor-pointer max-w-xl mx-auto lg:mx-0 flex items-center justify-between p-2 pl-4 bg-navy-950/70 border border-navy-700/80 hover:border-saffron-500/50 rounded-2xl shadow-inner group transition-all"
              >
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Search className="w-4 h-4 text-saffron-400" />
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                    Search UPSC CSE, SSC syllabus, RS Aggarwal, Polity notes...
                  </span>
                </div>
                <span className="bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow transition-colors">
                  Search
                </span>
              </div>
            </div>

            {/* Quick Exam Categories Chips */}
            <div className="pt-3">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Popular Target Exams:
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {quickCategories.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(item.tab)}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-navy-800/90 hover:bg-navy-700 hover:text-saffron-300 border border-navy-700 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual EdTech Illustration & Aspirant Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Graphic */}
              <div className="relative rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700/80 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Header of banner */}
                <div className="flex items-center justify-between border-b border-navy-700 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-saffron-500/20 border border-saffron-500/40 flex items-center justify-center text-saffron-400 font-bold">
                      <Award className="w-5 h-5 text-saffron-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Aspirant Prep Dashboard</h4>
                      <p className="text-xs text-slate-400">Target Year: 2026 Competitive Exams</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Verified Portal
                  </span>
                </div>

                {/* Progress & Highlights Card */}
                <div className="space-y-3">
                  
                  {/* Notification Item */}
                  <div 
                    onClick={() => setActiveTab('exams')}
                    className="p-3 rounded-xl bg-navy-950/60 border border-navy-700/60 hover:border-saffron-500/50 cursor-pointer transition-all flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="font-semibold text-white">UPSC CSE Prelims 2026</span>
                        <span className="text-saffron-400 font-bold">Demo Notice</span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Eligibility: Degree | Exam Date: May 24, 2026</p>
                    </div>
                  </div>

                  {/* Study Material Item */}
                  <div 
                    onClick={() => setActiveTab('materials')}
                    className="p-3 rounded-xl bg-navy-950/60 border border-navy-700/60 hover:border-saffron-500/50 cursor-pointer transition-all flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="font-semibold text-white">Free Legal PDFs & PYQs</span>
                        <span className="text-emerald-400 font-semibold text-[10px]">100% Free</span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Indian Polity Mindmaps, Modern History Timeline</p>
                    </div>
                  </div>

                  {/* Mock Test Item */}
                  <div 
                    onClick={() => setActiveTab('mocks')}
                    className="p-3 rounded-xl bg-navy-950/60 border border-navy-700/60 hover:border-saffron-500/50 cursor-pointer transition-all flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="font-semibold text-white">Speed Mock Test Engine</span>
                        <span className="text-amber-400 font-semibold text-[10px]">Timer + Review</span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Instant score, accuracy & negative marking calculation</p>
                    </div>
                  </div>

                  {/* Books Delivery Item */}
                  <div 
                    onClick={() => setActiveTab('books')}
                    className="p-3 rounded-xl bg-navy-950/60 border border-navy-700/60 hover:border-saffron-500/50 cursor-pointer transition-all flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-saffron-500/20 text-saffron-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="font-semibold text-white">Doorstep Book Store</span>
                        <span className="text-saffron-400 font-semibold text-[10px]">Pan-India</span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Laxmikanth, RS Aggarwal, Spectrum with Cash on Delivery</p>
                    </div>
                  </div>

                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-5 pt-4 border-t border-navy-700/70 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Free Open Resources</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-saffron-400" />
                    <span>Pan-India Aspirant Community</span>
                  </div>
                </div>

              </div>

              {/* Floating Pill Accent Top Right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-r from-saffron-500 to-orange-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg items-center gap-1.5 animate-bounce">
                <span>🔥 Live Demo 2026</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Feature Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-navy-800">
          
          <div 
            onClick={() => setActiveTab('exams')}
            className="p-4 rounded-xl bg-navy-800/40 border border-navy-700/60 hover:border-saffron-500/40 transition-all cursor-pointer group"
          >
            <div className="text-saffron-400 font-extrabold text-2xl mb-1">15+</div>
            <div className="text-sm font-semibold text-white group-hover:text-saffron-300 transition-colors">Exam Categories</div>
            <p className="text-xs text-slate-400 mt-1">UPSC, SSC, Banking, Railways & PSCs</p>
          </div>

          <div 
            onClick={() => setActiveTab('materials')}
            className="p-4 rounded-xl bg-navy-800/40 border border-navy-700/60 hover:border-saffron-500/40 transition-all cursor-pointer group"
          >
            <div className="text-emerald-400 font-extrabold text-2xl mb-1">100%</div>
            <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">Free Legal PDFs</div>
            <p className="text-xs text-slate-400 mt-1">NCERT digests & previous year questions</p>
          </div>

          <div 
            onClick={() => setActiveTab('mocks')}
            className="p-4 rounded-xl bg-navy-800/40 border border-navy-700/60 hover:border-saffron-500/40 transition-all cursor-pointer group"
          >
            <div className="text-amber-400 font-extrabold text-2xl mb-1">Timed</div>
            <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">Interactive Quizzes</div>
            <p className="text-xs text-slate-400 mt-1">Detailed solutions & negative marking</p>
          </div>

          <div 
            onClick={() => setActiveTab('books')}
            className="p-4 rounded-xl bg-navy-800/40 border border-navy-700/60 hover:border-saffron-500/40 transition-all cursor-pointer group"
          >
            <div className="text-saffron-400 font-extrabold text-2xl mb-1">Doorstep</div>
            <div className="text-sm font-semibold text-white group-hover:text-saffron-300 transition-colors">Book Delivery</div>
            <p className="text-xs text-slate-400 mt-1">Fast delivery to 25,000+ Indian PINs</p>
          </div>

        </div>

      </div>
    </section>
  );
}

