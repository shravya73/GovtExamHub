import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ShoppingCart, 
  Star, 
  Truck, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  IndianRupee,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function BookDetailsModal() {
  const { selectedBookModal, setSelectedBookModal, addToCart, setIsCartOpen } = useApp();

  if (!selectedBookModal) return null;

  const book = selectedBookModal;

  const handleBuyNow = () => {
    addToCart(book, 1);
    setSelectedBookModal(null);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex items-start justify-between border-b border-navy-700">
          <div className="space-y-1 pr-6">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-saffron-500 text-white">
              {book.badgeText || 'Competitive Exam Reference'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
              {book.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              By <strong className="text-saffron-300">{book.author}</strong> • Published by {book.publisher}
            </p>
          </div>

          <button
            onClick={() => setSelectedBookModal(null)}
            className="p-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white border border-navy-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Notice */}
        <div className="bg-amber-50 border-b border-amber-200 px-5 py-2 flex items-center gap-2 text-xs text-amber-900 font-medium">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Marketplace Demo Notice:</strong> This is a prototype book catalog with demo doorstep checkout simulation.
          </span>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Cover Simulation Card */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className={`w-44 h-60 rounded-xl bg-gradient-to-b ${book.coverGradient} p-4 shadow-xl flex flex-col justify-between text-white border-2 ${book.coverAccent} relative overflow-hidden group`}>
                <div className="absolute top-2 right-2 text-[9px] font-extrabold uppercase bg-black/40 px-2 py-0.5 rounded">
                  Original
                </div>
                <div>
                  <div className="text-[10px] tracking-wider uppercase text-amber-300 font-bold">
                    {book.category.toUpperCase()}
                  </div>
                  <div className="font-extrabold text-sm leading-tight mt-1">
                    {book.title}
                  </div>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <div className="text-[10px] text-slate-300">{book.author}</div>
                  <div className="text-[9px] text-amber-400 font-mono mt-0.5">{book.edition}</div>
                </div>
              </div>

              {/* Delivery info */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 w-full">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Truck className="w-4 h-4 text-saffron-600" />
                  <span>Pan-India Delivery (3-5 Days)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Genuine Print Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Information Details */}
            <div className="md:col-span-8 space-y-4">
              
              {/* Pricing Block */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900">₹{book.price}</span>
                    <span className="text-sm text-slate-400 line-through">M.R.P: ₹{book.mrp}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Save {book.discountPercent}% OFF
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Inclusive of all taxes. Free shipping on orders over ₹499.</div>
                </div>

                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-900">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{book.rating}</span>
                  <span className="text-slate-400 font-normal">({book.reviewsCount.toLocaleString()} ratings)</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 text-navy-900">
                  Book Overview
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Book Highlights */}
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500 mb-2">
                  Key Features & Syllabus Mapping
                </h4>
                <div className="space-y-1.5">
                  {book.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Specs */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-xs border-t border-slate-200">
                <div className="p-2 rounded-lg bg-slate-50 text-center">
                  <div className="text-slate-400 text-[10px]">Edition</div>
                  <div className="font-bold text-slate-800 truncate">{book.edition}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 text-center">
                  <div className="text-slate-400 text-[10px]">Pages</div>
                  <div className="font-bold text-slate-800">{book.pages} Pages</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 text-center">
                  <div className="text-slate-400 text-[10px]">Language</div>
                  <div className="font-bold text-slate-800">{book.language}</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => setSelectedBookModal(null)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 font-semibold text-slate-700 text-xs sm:text-sm"
          >
            Back to Marketplace
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                addToCart(book, 1);
              }}
              className="px-4 py-2.5 rounded-xl border border-navy-800 text-navy-900 hover:bg-navy-50 font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleBuyNow}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Buy Now (₹{book.price})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

