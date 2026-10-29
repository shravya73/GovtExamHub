import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  ShoppingCart, 
  Bookmark, 
  User, 
  Menu, 
  X, 
  BookOpen, 
  GraduationCap, 
  Flame, 
  FileCheck2, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const { 
    activeTab, 
    setActiveTab, 
    setSearchModalOpen, 
    setIsCartOpen, 
    cartCount, 
    savedExams, 
    user, 
    setAuthModalOpen 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'exams', label: 'Exams', badge: 'Active' },
    { id: 'materials', label: 'Study Materials', badge: 'Free' },
    { id: 'mocks', label: 'Mock Tests', badge: 'Quizzes' },
    { id: 'books', label: 'Books', badge: 'Delivery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-navy-800 text-white shadow-lg transition-all duration-200">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-800 to-navy-950 text-xs py-1.5 px-4 border-b border-navy-700/50 flex items-center justify-between overflow-hidden">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron-500"></span>
            </span>
            <span className="font-semibold text-saffron-400">DEMO ALERT:</span>
            <span className="truncate max-w-xs sm:max-w-md md:max-w-xl text-slate-300">
              UPSC CSE 2026 Prelims, SSC CGL 2026 & RRB NTPC test dates demo calendar released. Refer official recruitment boards for gazette notifications.
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-slate-400 text-xs">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('materials')}>
              📚 Free NCERT Summaries
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('books')}>
              🚚 Free Doorstep Delivery Over ₹499
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-orange-600 flex items-center justify-center shadow-md shadow-saffron-500/20 group-hover:scale-105 transition-transform duration-200 ring-2 ring-white/10">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">Govt</span>
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-saffron-400">Exam</span>
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-100">Hub</span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold -mt-1 hidden sm:block">
                One Platform. All Government Exams.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-white bg-white/10 font-semibold shadow-inner' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                      isActive 
                        ? 'bg-saffron-500 text-white' 
                        : 'bg-navy-800 text-saffron-400 border border-saffron-500/30'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-saffron-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Icons & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center gap-2 bg-navy-800/80 hover:bg-navy-700 text-slate-300 hover:text-white px-3 py-2 rounded-xl text-xs sm:text-sm border border-navy-700 transition-all duration-150"
              title="Search exams, notes, mock tests & books"
            >
              <Search className="w-4 h-4 text-saffron-400" />
              <span className="hidden md:inline text-slate-400">Search exams, books...</span>
              <kbd className="hidden md:inline-block bg-navy-950 text-slate-400 px-1.5 py-0.5 rounded text-[10px] font-mono border border-navy-700">
                Ctrl+K
              </kbd>
            </button>

            {/* Saved Exams Bookmark Button */}
            <button
              onClick={() => handleNavClick('exams')}
              className="relative p-2.5 rounded-xl bg-navy-800/80 hover:bg-navy-700 text-slate-300 hover:text-white border border-navy-700 transition-colors"
              title="Saved / Bookmarked Exams"
            >
              <Bookmark className="w-4 h-4 text-slate-300 hover:text-saffron-400 transition-colors" />
              {savedExams.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-saffron-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md">
                  {savedExams.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-navy-800/80 hover:bg-navy-700 text-slate-300 hover:text-white border border-navy-700 transition-colors"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 text-slate-300 hover:text-saffron-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-saffron-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile / Auth Button */}
            <button
              onClick={() => setAuthModalOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-saffron-500/20 transition-all duration-150"
            >
              <User className="w-4 h-4" />
              <span>{user ? user.name.split(' ')[0] : 'Sign In'}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-navy-800 text-slate-300 hover:text-white border border-navy-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-saffron-500/20 text-saffron-400 font-bold border border-saffron-500/30' 
                      : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-navy-800 text-saffron-400 border border-saffron-500/30 font-semibold">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-navy-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white py-2.5 rounded-xl text-sm font-bold shadow-md"
            >
              <User className="w-4 h-4" />
              <span>{user ? `Account (${user.name})` : 'Aspirant Login / Register'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

