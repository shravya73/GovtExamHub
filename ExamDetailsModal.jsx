import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  UserCheck, 
  GraduationCap, 
  Award, 
  Bookmark, 
  AlertTriangle, 
  Layers, 
  BookOpen, 
  Banknote,
  CheckCircle2
} from 'lucide-react';

export default function ExamDetailsModal() {
  const { selectedExamModal, setSelectedExamModal, toggleSaveExam, isExamSaved } = useApp();

  if (!selectedExamModal) return null;

  const exam = selectedExamModal;
  const isSaved = isExamSaved(exam.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex items-start justify-between border-b border-navy-700">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-saffron-500 text-white">
                {exam.category.toUpperCase()}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/10 text-slate-200 border border-white/20">
                {exam.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
              {exam.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Conducting Body: <span className="text-saffron-300 font-semibold">{exam.conductingAuthority}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveExam(exam.id)}
              className={`p-2 rounded-xl transition-colors border ${
                isSaved 
                  ? 'bg-saffron-500 border-saffron-400 text-white' 
                  : 'bg-navy-800/80 hover:bg-navy-700 border-navy-600 text-slate-300'
              }`}
              title={isSaved ? 'Remove from bookmarks' : 'Bookmark this exam'}
            >
              <Bookmark className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={() => setSelectedExamModal(null)}
              className="p-2 rounded-xl bg-navy-800/80 hover:bg-navy-700 text-slate-300 hover:text-white border border-navy-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-5 py-2.5 flex items-center gap-2.5 text-xs text-amber-900 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Demo Data Notice:</strong> Dates and vacancies are sample projections for prototype demonstration. Always refer to official government notifications before taking action.
          </span>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-saffron-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-medium">Application Deadline</div>
                <div className="font-bold text-slate-900 mt-0.5">{exam.applicationDeadline}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-medium">Scheduled Exam Date</div>
                <div className="font-bold text-slate-900 mt-0.5">{exam.examDate}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 sm:col-span-2 md:col-span-1">
              <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-medium">Estimated Vacancies</div>
                <div className="font-bold text-slate-900 mt-0.5">{exam.vacancies}</div>
              </div>
            </div>

          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-navy-900">
              Overview
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              {exam.description}
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-saffron-600" />
              <span>Eligibility & Age Limit</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-slate-700">Educational Qualification:</span>
                <p className="text-slate-600 mt-0.5">{exam.eligibility}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Age Requirements:</span>
                <p className="text-slate-600 mt-0.5">{exam.ageLimit}</p>
              </div>
            </div>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-200 flex flex-wrap gap-4">
              <span>Mode: <strong>{exam.examMode}</strong></span>
              <span>Application Fee: <strong>{exam.applicationFee}</strong></span>
            </div>
          </div>

          {/* Selection Process Stages */}
          {exam.stages && exam.stages.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-navy-800" />
                <span>Selection Process & Exam Stages</span>
              </h4>
              <div className="space-y-2">
                {exam.stages.map((stage, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-navy-50/50 border border-navy-100 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-navy-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">{stage.name}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{stage.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Syllabus Topics */}
          {exam.syllabus && (
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-saffron-600" />
                <span>Syllabus Highlights</span>
              </h4>
              <ul className="space-y-2">
                {exam.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Verify all details on the official commission recruitment portal.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setSelectedExamModal(null)}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 font-semibold text-slate-700 text-xs sm:text-sm transition-colors"
            >
              Close
            </button>
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Official Recruitment Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

