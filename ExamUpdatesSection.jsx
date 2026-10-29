import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA, EXAM_CATEGORIES } from '../data/examsData';
import { 
  Search, 
  Filter, 
  Calendar, 
  GraduationCap, 
  ExternalLink, 
  Bookmark, 
  Eye, 
  AlertCircle, 
  Building,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ExamUpdatesSection() {
  const { setSelectedExamModal, toggleSaveExam, isExamSaved, savedExams } = useApp();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all' or 'saved'

  // Filtered exams
  const filteredExams = useMemo(() => {
    return EXAMS_DATA.filter((exam) => {
      // Category filter
      if (selectedCategory !== 'all' && exam.category !== selectedCategory) {
        return false;
      }
      // Saved filter
      if (filterMode === 'saved' && !savedExams.includes(exam.id)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = exam.name.toLowerCase().includes(query);
        const matchAuth = exam.conductingAuthority.toLowerCase().includes(query);
        const matchElig = exam.eligibility.toLowerCase().includes(query);
        const matchDesc = exam.description.toLowerCase().includes(query);
        return matchName || matchAuth || matchElig || matchDesc;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, filterMode, savedExams]);

  return (
    <section id="exams-section" className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
            <span>Central & State Recruitment Notifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            Government Exam Notifications & Updates
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Stay ahead with verified notifications, eligibility details, and tentative calendars for UPSC, SSC, Banking, Railways, State PSC, Defence & Teaching exams.
          </p>
        </div>

        {/* Demo Warning Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50/90 border border-amber-300 text-amber-900 flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold">Prototype Demonstration Notice:</strong> Exam dates and vacancy numbers shown below are simulated projections and demo data. Always cross-verify with official gazettes and recruitment authority websites via the provided official links.
          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-4">
          
          {/* Top Row: Search input & Bookmark toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by exam name (e.g. UPSC CSE, SSC CGL, RRB NTPC, Banking, CTET)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent text-sm bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setFilterMode(filterMode === 'all' ? 'saved' : 'all')}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border flex items-center justify-center gap-2 ${
                  filterMode === 'saved'
                    ? 'bg-saffron-50 border-saffron-500 text-saffron-700 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${filterMode === 'saved' ? 'fill-current text-saffron-600' : ''}`} />
                <span>Saved Bookmarks ({savedExams.length})</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {EXAM_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    isSelected
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-6 font-medium">
          <span>
            Showing <strong className="text-slate-900">{filteredExams.length}</strong> exam notifications
            {selectedCategory !== 'all' && ` in ${EXAM_CATEGORIES.find(c => c.id === selectedCategory)?.name}`}
            {filterMode === 'saved' && ' (Saved Bookmarks only)'}
          </span>
          {(searchQuery || selectedCategory !== 'all' || filterMode !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterMode('all');
              }}
              className="text-saffron-600 hover:text-saffron-700 font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Exam Cards Grid */}
        {filteredExams.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No exams match your search</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search keywords or clearing the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterMode('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-semibold"
            >
              Show All Exams
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam) => {
              const isSaved = isExamSaved(exam.id);
              return (
                <div
                  key={exam.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  {/* Top Bar with Category & Bookmark */}
                  <div className="p-5 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-50 text-navy-800 border border-navy-100">
                        {exam.category.toUpperCase()}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          Demo Data
                        </span>
                        <button
                          onClick={() => toggleSaveExam(exam.id)}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            isSaved
                              ? 'bg-saffron-50 text-saffron-600 border-saffron-200'
                              : 'text-slate-400 hover:text-saffron-600 border-slate-100 hover:border-slate-300'
                          }`}
                          title={isSaved ? 'Remove bookmark' : 'Bookmark exam'}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Conducting Authority */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1.5">
                      <Building className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                      <span className="truncate">{exam.conductingAuthority}</span>
                    </div>

                    {/* Exam Name */}
                    <h3 
                      onClick={() => setSelectedExamModal(exam)}
                      className="font-bold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-navy-700 transition-colors cursor-pointer"
                    >
                      {exam.name}
                    </h3>
                  </div>

                  {/* Middle Info Block */}
                  <div className="px-5 py-3 space-y-2.5 border-t border-b border-slate-100 bg-slate-50/50 text-xs">
                    
                    {/* Eligibility */}
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-700">Eligibility: </span>
                        <span className="text-slate-600 line-clamp-1">{exam.eligibility}</span>
                      </div>
                    </div>

                    {/* Application Deadline */}
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-700">Last Date: </span>
                        <span className="text-amber-700 font-bold">{exam.applicationDeadline}</span>
                      </div>
                    </div>

                    {/* Exam Date */}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-700">Exam Date: </span>
                        <span className="text-blue-700 font-bold">{exam.examDate}</span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="p-4 bg-white flex items-center gap-2">
                    <button
                      onClick={() => setSelectedExamModal(exam)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-4 h-4 text-saffron-400" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={exam.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-navy-900 transition-colors"
                      title="Visit official recruitment portal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

