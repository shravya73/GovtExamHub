import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { BOOKS_DATA, BOOK_CATEGORIES } from '../data/booksData';
import { 
  Search, 
  ShoppingCart, 
  Eye, 
  Star, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  AlertCircle,
  Check
} from 'lucide-react';

export default function BooksMarketplace() {
  const { setSelectedBookModal, addToCart, setIsCartOpen } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'price-low', 'price-high', 'rating'

  const filteredBooks = useMemo(() => {
    let list = BOOKS_DATA.filter((book) => {
      // Category
      if (selectedCategory !== 'all' && book.category !== selectedCategory) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const mTitle = book.title.toLowerCase().includes(q);
        const mAuth = book.author.toLowerCase().includes(q);
        const mPub = book.publisher.toLowerCase().includes(q);
        const mDesc = book.description.toLowerCase().includes(q);
        return mTitle || mAuth || mPub || mDesc;
      }
      return true;
    });

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="books-section" className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Truck className="w-3.5 h-3.5 text-saffron-600" />
              <span>Doorstep Delivery Across 25,000+ PIN Codes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              Competitive Exam Books Store
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Order authentic, latest-edition textbooks for UPSC, SSC, Banking, Railways, and State PSCs with doorstep delivery and demo checkout simulation.
            </p>
          </div>

          {/* Delivery perk pill */}
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Original Publisher Prints</span>
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold">Prototype Demonstration Notice:</strong> This bookstore operates in demonstration mode. No real credit card or bank credentials are required or accepted. All orders placed trigger simulated shipping workflows and demo order receipts.
          </div>
        </div>

        {/* Search, Filter & Sort Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 mb-8 space-y-4 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Laxmikanth, RS Aggarwal, Spectrum, Lucent, Reasoning..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm bg-slate-50/50"
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

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-slate-500 font-semibold shrink-0">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {BOOK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl whitespace-nowrap font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Book Count Counter */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-6 font-medium">
          <span>
            Displaying <strong className="text-slate-900">{filteredBooks.length}</strong> competitive exam titles
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-saffron-600 hover:text-saffron-700 font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Books Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Book Cover Simulation with realistic spine & badges */}
                <div 
                  onClick={() => setSelectedBookModal(book)}
                  className={`h-56 bg-gradient-to-br ${book.coverGradient} p-4 text-white relative cursor-pointer flex flex-col justify-between overflow-hidden border-b-4 ${book.coverAccent}`}
                >
                  {/* Subtle spine texture */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-white/10 border-r border-white/20"></div>

                  <div className="flex items-start justify-between z-10 pl-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm text-amber-300">
                      {book.badgeText || 'Best Seller'}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">
                      -{book.discountPercent}%
                    </span>
                  </div>

                  <div className="z-10 pl-2 my-auto">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-200 block">
                      {book.publisher}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base leading-tight mt-1 group-hover:text-amber-200 transition-colors">
                      {book.title}
                    </h3>
                  </div>

                  <div className="z-10 pl-2 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="truncate max-w-[130px]">{book.author}</span>
                    <span className="text-amber-300 font-mono text-[10px]">{book.edition.slice(0, 15)}</span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 truncate">{book.author}</span>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  <h4 
                    onClick={() => setSelectedBookModal(book)}
                    className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 hover:text-navy-900 cursor-pointer"
                  >
                    {book.title}
                  </h4>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-xl font-extrabold text-slate-900">₹{book.price}</span>
                    <span className="text-xs text-slate-400 line-through">₹{book.mrp}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {book.discountPercent}% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 space-y-2">
                <button
                  onClick={() => addToCart(book, 1)}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => setSelectedBookModal(book)}
                  className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Details & Preview</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

