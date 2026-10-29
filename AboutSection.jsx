import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  Target, 
  ShieldCheck, 
  BookOpen, 
  Clock, 
  Truck, 
  Award, 
  Users, 
  HeartHandshake,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function AboutSection() {
  const { setActiveTab } = useApp();

  const corePillars = [
    {
      icon: Clock,
      title: 'Timely & Verified Updates',
      desc: 'Centralized exam calendar, eligibility standards, and direct links to official recruitment portals.'
    },
    {
      icon: BookOpen,
      title: 'Free Legal Study Materials',
      desc: 'Open-access NCERT digests, Indian Constitution summaries, and previous years’ solved question papers.'
    },
    {
      icon: Target,
      title: 'Exam-Level Mock Tests',
      desc: 'CBT-style test interface with negative marking, speed timers, and comprehensive analytical explanations.'
    },
    {
      icon: Truck,
      title: 'Doorstep Book Delivery',
      desc: 'Authentic publications from Laxmikanth to RS Aggarwal delivered securely across all Indian PIN codes.'
    }
  ];

  return (
    <section id="about-section" className="py-12 lg:py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-saffron-600" />
            <span>About GovtExamHub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Empowering Every Aspirant Across India
          </h2>

          {/* Exact required description from prompt */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white shadow-xl relative overflow-hidden text-left border border-navy-700">
            <div className="text-saffron-400 font-bold text-xs uppercase tracking-wider mb-2">
              Our Vision & Mission
            </div>
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-slate-100">
              “GovtExamHub aims to simplify government exam preparation by bringing exam updates, study resources, mock tests, and competitive exam books together on one platform. Our mission is to help aspirants save time, access reliable information, and prepare confidently for their dream government jobs.”
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
              The 4 Pillars of GovtExamHub
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Engineered specifically for candidates from rural towns to urban coaching hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-saffron-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-saffron-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment to Integrity & Transparency */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-navy-900 font-bold text-base sm:text-lg">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <span>Our Commitment to Transparency & Educational Integrity</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>Independent Platform:</strong> GovtExamHub is an educational service created to curate publicly accessible resources and assist students. We do not represent UPSC, SSC, RRB, IBPS, or any State Public Service Commission. All trademarks and official recruitment logos belong to their respective government bodies.
            </p>
            <p>
              <strong>Anti-Clickbait Policy:</strong> We explicitly label unannounced dates as demo/tentative projections and urge all students to verify deadlines on official portals before taking career decisions.
            </p>
            <p>
              <strong>Legally Compliant Material:</strong> Every study capsule hosted on GovtExamHub complies strictly with open-access licensing, public domain legislative texts, and fair-dealing provisions for non-commercial educational review.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4" /> 100% Free Public PDFs
              </span>
              <span className="flex items-center gap-1.5 text-blue-700">
                <CheckCircle2 className="w-4 h-4" /> Open Mock Quizzes
              </span>
            </div>

            <button
              onClick={() => setActiveTab('contact')}
              className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition-colors"
            >
              Get in Touch with our Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

