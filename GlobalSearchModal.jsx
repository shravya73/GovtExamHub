import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/examsData';
import { STUDY_MATERIALS_DATA } from '../data/studyMaterialsData';
import { BOOKS_DATA } from '../data/booksData';
import { MOCK_TESTS_DATA } from '../data/mockTestsData';
import { 
  Search, 
  X, 
  Calendar, 
  BookOpen, 
  Truck, 
  Award, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function GlobalSearchModal() {
  const { 
    searchModalOpen, 
    setSearchModalOpen, 
    setSelectedExamModal, 
    setSelectedMaterialModal, 
    setSelectedBookModal, 
    setActiveTab 
  } = useApp();

  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      if (e.key === 'Escape' && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchModalOpen, setSearchModalOpen]);

  if (!searchModalOpen) return null;

  const q = query.trim().toLowerCase();

  // Search results grouping
  const matchedExams = q ? EXAMS_DATA.filter((e) => 
    e.name.toLowerCase().includes(q) || 
    e.category.toLowerCase().includes(q) ||
    e.conductingAuthority.toLowerCase().includes(q)
  ).slice(0, 3) : [];

  const matchedMaterials = q ? STUDY_MATERIALS_DATA.filter((m) => 
    m.title.toLowerCase().includes(q) || 
    m.subject.toLowerCase().includes(q)
  ).slice(0, 3) : [];

  const matchedBooks = q ? BOOKS_DATA.filter((b) => 
    b.title.toLowerCase().includes(q) || 
    b.author.toLowerCase().includes(q) ||
    b.category.toLowerCase().includes(q)
  ).slice(0, 3) : [];

  const matchedTests = q ? MOCK_TESTS_DATA.filter((t) => 
    t.title.toLowerCase().includes(q) || 
    t.targetExam.toLowerCase().includes(q)
  ).slice(0, 2) : [];

  const hasResults = matchedExams.length > 0 || matchedMaterials.length > 0 || matchedBooks.length > 0 || matchedTests.length > 0;

  const handleSelectExam = (exam) => {
    setSelectedExamModal(exam);
    setSearchModalOpen(false);
  };

  const handleSelectMaterial = (mat) => {
    setSelectedMaterialModal(mat);
    setSearchModalOpen(false);
  };

  const handleSelectBook = (book) => {
    setSelectedBookModal(book);
    setSearchModalOpen(false);
  };

  const handleSelectTest = () => {
    setActiveTab('mocks');
    setSearchModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-3 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-saffron-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across exams, free notes, books, mock tests..."
            className="w-full bg-transparent text-sm sm:text-base font-semibold focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold px-2 py-1"
            >
              Clear
            </button>
          ) : (
            <kbd className="hidden sm:inline-block bg-slate-200 text-slate-500 px-2 py-0.5 rounded text-[11px] font-mono">
              ESC
            </kbd>
          )}
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5 text-xs sm:text-sm">
          {!query.trim() ? (
            <div className="py-8 text-center text-slate-400 space-y-3">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <div>
                <p className="font-semibold text-slate-600">Quickly search anything on GovtExamHub</p>
                <p className="text-xs text-slate-400 mt-1">Try typing "UPSC", "Polity", "Laxmikanth", "Reasoning", "SSC CGL", "CTET"</p>
              </div>

              {/* Quick Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['UPSC CSE', 'SSC CGL', 'Indian Polity', 'RS Aggarwal', 'Mock Test'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : !hasResults ? (
            <div className="py-8 text-center text-slate-400">
              <p className="font-semibold text-slate-700">No results found for "{query}"</p>
              <p className="text-xs mt-1">Check spelling or try broader terms like "Banking", "History", or "Book".</p>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Exam Hits */}
              {matchedExams.length > 0 && (
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-navy-800" />
                    <span>Government Exam Notifications ({matchedExams.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedExams.map((e) => (
                      <div
                        key={e.id}
                        onClick={() => handleSelectExam(e)}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-navy-50/80 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors group"
                      >
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-navy-900">{e.name}</div>
                          <div className="text-xs text-slate-500">{e.conductingAuthority} • Exam: {e.examDate}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-navy-900 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Study Materials Hits */}
              {matchedMaterials.length > 0 && (
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free Study Materials & Notes ({matchedMaterials.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedMaterials.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => handleSelectMaterial(m)}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/80 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors group"
                      >
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-emerald-900">{m.title}</div>
                          <div className="text-xs text-slate-500">{m.subject} • {m.fileFormat} ({m.fileSize})</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-900 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Books Hits */}
              {matchedBooks.length > 0 && (
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-saffron-600" />
                    <span>Competitive Exam Books ({matchedBooks.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedBooks.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => handleSelectBook(b)}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-saffron-50/80 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors group"
                      >
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-saffron-900">{b.title}</div>
                          <div className="text-xs text-slate-500">By {b.author} • ₹{b.price} ({b.discountPercent}% OFF)</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-saffron-900 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mock Test Hits */}
              {matchedTests.length > 0 && (
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                    <span>Interactive Mock Tests ({matchedTests.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedTests.map((t) => (
                      <div
                        key={t.id}
                        onClick={handleSelectTest}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/80 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors group"
                      >
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-amber-900">{t.title}</div>
                          <div className="text-xs text-slate-500">{t.targetExam} • {t.durationMinutes} mins • {t.totalQuestions} Questions</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-900 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500">
          GovtExamHub Search indexes notifications, free legal notes, mock quizzes, and books.
        </div>

      </div>
    </div>
  );
}

