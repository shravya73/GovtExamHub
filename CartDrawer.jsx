import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  Truck, 
  ArrowRight, 
  ShieldCheck, 
  Tag
} from 'lucide-react';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    cartCount, 
    cartSubtotal, 
    cartSavings, 
    setCheckoutModalOpen 
  } = useApp();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 499;
  const isFreeDelivery = cartSubtotal >= freeDeliveryThreshold;
  const deliveryFee = isFreeDelivery ? 0 : 50;
  const grandTotal = cartSubtotal + deliveryFee;

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setCheckoutModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200">
          
          {/* Top Header */}
          <div className="p-4 sm:p-5 bg-navy-900 text-white flex items-center justify-between border-b border-navy-800">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-saffron-400" />
              <h3 className="font-bold text-base sm:text-lg">
                Your Aspirant Cart ({cartCount})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-xl hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-slate-50 p-3 px-5 border-b border-slate-200 text-xs">
            {isFreeDelivery ? (
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Congratulations! Your order qualifies for FREE Doorstep Delivery!</span>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-slate-700 font-medium">
                  <span>Add <strong>₹{freeDeliveryThreshold - cartSubtotal}</strong> more for Free Shipping</span>
                  <span>₹{cartSubtotal} / ₹{freeDeliveryThreshold}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-saffron-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <ShoppingCart className="w-8 h-8 text-slate-400" />
                </div>
                <h4 className="font-bold text-slate-700 text-base">Your cart is empty</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Browse our competitive exam books collection and add your preparation material to doorstep delivery.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold"
                >
                  Browse Exam Books
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.book.id}
                  className="p-3.5 rounded-xl border border-slate-200/90 bg-white flex gap-3 shadow-sm hover:border-slate-300 transition-colors"
                >
                  {/* Book Tiny Cover Badge */}
                  <div className={`w-14 h-20 rounded-lg bg-gradient-to-b ${item.book.coverGradient} p-1.5 text-white flex flex-col justify-between shrink-0 shadow text-[8px] font-bold`}>
                    <span className="text-amber-300 uppercase">{item.book.category}</span>
                    <span className="line-clamp-2 leading-tight">{item.book.title}</span>
                  </div>

                  {/* Info and Steppers */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">
                          {item.book.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.book.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 truncate">{item.book.author}</div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="font-extrabold text-slate-900 text-sm">
                        ₹{item.book.price * item.quantity}
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-slate-600 hover:bg-slate-200 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-xs px-1 text-slate-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-slate-600 hover:bg-slate-200 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout & Bill Summary Bottom */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="font-semibold text-slate-900">₹{cartSubtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Doorstep Delivery</span>
                  <span className={isFreeDelivery ? 'text-emerald-700 font-bold' : 'text-slate-900 font-semibold'}>
                    {isFreeDelivery ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                {cartSavings > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Total Discount Savings</span>
                    <span>-₹{cartSavings}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Grand Total</span>
                  <span className="text-navy-900">₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={handleProceedCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

