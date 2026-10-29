import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { STUDY_MATERIALS_DATA, MATERIAL_CATEGORIES, SUBJECT_TAGS } from '../data/studyMaterialsData';
import { 
  BookOpen, 
  Search, 
  Download, 
  FileText, 
  ShieldCheck, 
  Star, 
  Eye, 
  CheckCircle,
  Filter,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function StudyMaterialsSection() {
  const { setSelectedMaterialModal, setActiveTab } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMaterials = useMemo(() => {
    return STUDY_MATERIALS_DATA.filter((mat) => {
      // Category filter
      if (selectedCategory !== 'all' && mat.category !== selectedCategory) {
        return false;
      }
      // Subject filter
      if (selectedSubject !== 'All Subjects' && mat.subject !== selectedSubject) {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const mTitle = mat.title.toLowerCase().includes(q);
        const mDesc = mat.description.toLowerCase().includes(q);
        const mSub = mat.subject.toLowerCase().includes(q);
        const mSource = mat.authorOrSource.toLowerCase().includes(q);
        return mTitle || mDesc || mSub || mSource;
      }
      return true;
    });
  }, [selectedCategory, selectedSubject, searchQuery]);

  return (
    <section id="materials-section" className="py-12 lg:py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>100% Free & Legal Public Educational Resources</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              Study Materials & Question Papers
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Access hand-curated subject notes, previous year solved question papers (PYQs), and official syllabus guides. All resources are openly licensed, public domain, or legally free.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('books')}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-saffron-50 hover:bg-saffron-100 border border-saffron-300 text-saffron-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors shrink-0 shadow-sm"
          >
            <span>Explore Recommended Books</span>
            <ArrowRight className="w-4 h-4 text-saffron-600" />
          </button>
        </div>

        {/* Filter and Search Container */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 mb-8 space-y-4">
          
          {/* Search bar & Type filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes, PYQs, Constitution, Budget, formulas..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm bg-white"
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

            {/* Category selection */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {MATERIAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-navy-900 text-white shadow'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] mr-1 shrink-0">
              Subject:
            </span>
            {SUBJECT_TAGS.map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                  selectedSubject === subj
                    ? 'bg-saffron-500 text-white font-bold'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-6 font-medium">
          <span>
            Found <strong className="text-slate-900">{filteredMaterials.length}</strong> study resources
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedSubject !== 'All Subjects') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubject('All Subjects');
                setSearchQuery('');
              }}
              className="text-saffron-600 hover:text-saffron-700 font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group hover:border-saffron-300"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {mat.subject}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {mat.fileFormat} • {mat.fileSize}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{mat.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => setSelectedMaterialModal(mat)}
                  className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-navy-900 transition-colors cursor-pointer leading-snug"
                >
                  {mat.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {mat.description}
                </p>

                {/* Licensing and Source */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate max-w-[200px] sm:max-w-xs">
                    Source: <strong className="text-slate-700">{mat.authorOrSource}</strong>
                  </span>
                  <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded">
                    Legal / Free
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedMaterialModal(mat)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-4 h-4 text-navy-800" />
                  <span>Read / Preview</span>
                </button>

                <button
                  onClick={() => setSelectedMaterialModal(mat)}
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Free PDF</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

