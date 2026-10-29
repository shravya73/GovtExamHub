import React from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/examsData';
import { STUDY_MATERIALS_DATA } from '../data/studyMaterialsData';
import { BOOKS_DATA } from '../data/booksData';
import { MOCK_TESTS_DATA } from '../data/mockTestsData';
import { 
  ArrowRight, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Truck, 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Award,
  ChevronRight,
  Eye,
  FileText,
  ShoppingCart
} from 'lucide-react';

export default function HomeSections() {
  const { 
    setActiveTab, 
    setSelectedExamModal, 
    setSelectedMaterialModal, 
    setSelectedBookModal, 
    addToCart 
  } = useApp();

  const featuredExams = EXAMS_DATA.slice(0, 3);
  const featuredMaterials = STUDY_MATERIALS_DATA.slice(0, 4);
  const featuredBooks = BOOKS_DATA.slice(0, 4);

  return (
    <div className="space-y-16 py-12">
      
      {/* 1. FEATURED EXAM UPDATES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
              <span>Latest Government Exam Notifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Upcoming & Active Notifications
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('exams')}
            className="flex items-center gap-1.5 text-saffron-600 hover:text-saffron-700 font-bold text-sm group self-start sm:self-auto"
          >
            <span>View All Exams</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-navy-50 text-navy-800 border border-navy-100 text-[10px]">
                    {exam.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    Demo Data
                  </span>
                </div>

                <div className="text-xs text-slate-500 mb-1">{exam.conductingAuthority}</div>
                <h3 
                  onClick={() => setSelectedExamModal(exam)}
                  className="font-bold text-slate-900 text-base leading-snug group-hover:text-navy-900 cursor-pointer"
                >
                  {exam.name}
                </h3>

                <div className="my-4 py-3 border-t border-b border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Deadline:</span>
                    <strong className="text-amber-700">{exam.applicationDeadline}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Exam Date:</span>
                    <strong className="text-blue-700">{exam.examDate}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedExamModal(exam)}
                className="w-full py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Eye className="w-4 h-4 text-saffron-400" />
                <span>View Syllabus & Details</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 2. SPEED MOCK TEST INTERACTIVE SPOTLIGHT BANNER */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-navy-700">
          <div className="absolute top-0 right-0 w-80 h-80 bg-saffron-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 text-xs font-bold border border-saffron-500/30">
                <TrendingUp className="w-4 h-4" />
                <span>CBT Interface • Negative Marking • Immediate Feedback</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Benchmark Your Preparation with Real Exam Simulation Quizzes
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Take our timed 10-minute speed sprints covering Indian Constitution, Quantitative shortcuts, and General Awareness. Instant accuracy analytics and step-by-step solution keys.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Negative Marking Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Question Palette Navigation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Free to Practice
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center w-full max-w-sm space-y-4">
                <div className="text-saffron-400 font-bold text-xs uppercase tracking-wider">
                  Featured Daily Test
                </div>
                <div className="font-extrabold text-white text-lg">
                  General Awareness & Constitution Sprint
                </div>
                <div className="flex items-center justify-center gap-3 text-xs text-slate-300">
                  <span>10 Questions</span>
                  <span>•</span>
                  <span>10 Minutes</span>
                  <span>•</span>
                  <span>20 Marks</span>
                </div>
                <button
                  onClick={() => setActiveTab('mocks')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg transition-all"
                >
                  Start Demo Test Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREE STUDY MATERIALS PREVIEW */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Public Domain & Legally Open Educational Access</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Free Legal Notes & Previous Solved Papers
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('materials')}
            className="flex items-center gap-1.5 text-saffron-600 hover:text-saffron-700 font-bold text-sm group self-start sm:self-auto"
          >
            <span>Explore All Materials</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col justify-between group hover:border-saffron-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {mat.subject}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">
                    {mat.fileFormat} • {mat.fileSize}
                  </span>
                </div>

                <h3 
                  onClick={() => setSelectedMaterialModal(mat)}
                  className="font-bold text-slate-900 text-sm leading-snug group-hover:text-navy-900 cursor-pointer line-clamp-2"
                >
                  {mat.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                  {mat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700">100% Free PDF</span>
                <button
                  onClick={() => setSelectedMaterialModal(mat)}
                  className="px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors"
                >
                  Preview Notes
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMPETITIVE EXAM BOOKS SPOTLIGHT */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Truck className="w-3.5 h-3.5 text-saffron-600" />
              <span>Doorstep Delivery Across 25,000+ PIN Codes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Best Selling Competitive Books
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('books')}
            className="flex items-center gap-1.5 text-saffron-600 hover:text-saffron-700 font-bold text-sm group self-start sm:self-auto"
          >
            <span>Visit Bookstore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all p-4 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Book Mini Cover */}
                <div 
                  onClick={() => setSelectedBookModal(book)}
                  className={`h-48 rounded-xl bg-gradient-to-br ${book.coverGradient} p-3 text-white flex flex-col justify-between cursor-pointer border-b-2 ${book.coverAccent}`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold uppercase bg-black/40 px-2 py-0.5 rounded text-amber-300">
                      {book.badgeText || 'Best Seller'}
                    </span>
                    <span className="text-[9px] font-bold bg-emerald-500 px-1.5 py-0.5 rounded">
                      -{book.discountPercent}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-amber-200 font-semibold">{book.publisher}</span>
                    <h4 className="font-extrabold text-xs sm:text-sm leading-tight mt-0.5 line-clamp-2">
                      {book.title}
                    </h4>
                  </div>
                  <div className="text-[10px] text-slate-300 truncate">
                    {book.author}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 truncate">{book.author}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg font-extrabold text-slate-900">₹{book.price}</span>
                    <span className="text-xs text-slate-400 line-through">₹{book.mrp}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 flex items-center gap-2">
                <button
                  onClick={() => addToCart(book, 1)}
                  className="flex-1 py-2 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => setSelectedBookModal(book)}
                  className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY ASPIRANTS CHOOSE GOVTEXAMHUB */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-700 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200">
              Aspirant-First Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              Why Aspirants Trust GovtExamHub
            </h3>
            <p className="text-sm text-slate-600">
              Designed from the ground up to eliminate misinformation, clickbait dates, and predatory study subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base">Direct Official Links</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every exam card links directly to the official government recruitment portal (upsc.gov.in, ssc.gov.in, ibps.in) so you never miss official gazettes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base">Legally Free Resources</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No paywalls on standard government digests, constitutional extracts, or previous year question papers. Download freely for non-commercial study.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-saffron-50 text-saffron-700 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base">Pan-India Doorstep Delivery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Access genuine, brand-new editions of textbooks with Cash on Delivery and postal delivery reaching even the remotest tehsils and villages.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

