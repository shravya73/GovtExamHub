import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  Download, 
  ArrowRight, 
  AlertCircle,
  FileCheck2,
  PackageCheck
} from 'lucide-react';

export default function CheckoutModal() {
  const { 
    checkoutModalOpen, 
    setCheckoutModalOpen, 
    cart, 
    cartSubtotal, 
    cartSavings, 
    recordOrder, 
    user, 
    showToast 
  } = useApp();

  const [formData, setFormData] = useState({
    fullName: user ? user.name : 'Rahul Sharma',
    phone: '9876543210',
    email: user ? user.email : 'rahul.aspirant@example.com',
    address: 'Flat 402, Shanti Vihar, Mukherjee Nagar',
    city: 'New Delhi',
    state: 'Delhi',
    pinCode: '110009',
    paymentMethod: 'upi' // 'upi', 'cod', 'card', 'netbanking'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  if (!checkoutModalOpen) return null;

  const freeDeliveryThreshold = 499;
  const deliveryFee = cartSubtotal >= freeDeliveryThreshold ? 0 : 50;
  const grandTotal = cartSubtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.pinCode) {
      showToast('Please fill all required shipping fields', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `GEH-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 4);
      const deliveryFormatted = deliveryDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      const orderData = {
        orderId,
        items: [...cart],
        subtotal: cartSubtotal,
        deliveryFee,
        grandTotal,
        shipping: { ...formData },
        deliveryDate: deliveryFormatted,
        orderDate: new Date().toLocaleDateString('en-IN')
      };

      recordOrder(orderData);
      setCompletedOrder(orderData);
      setIsSubmitting(false);
      showToast(`Order #${orderId} placed successfully!`, 'success');
    }, 1000);
  };

  const handleDownloadInvoice = () => {
    if (!completedOrder) return;
    const invoiceText = 
`============================================================
              GOVTEXAMHUB - OFFICIAL DEMO INVOICE
       One Platform. All Government Exams.
============================================================
Order ID: ${completedOrder.orderId}
Order Date: ${completedOrder.orderDate}
Estimated Doorstep Delivery: ${completedOrder.deliveryDate}

CUSTOMER & DELIVERY DETAILS:
Name: ${completedOrder.shipping.fullName}
Phone: ${completedOrder.shipping.phone}
Address: ${completedOrder.shipping.address}, ${completedOrder.shipping.city}, ${completedOrder.shipping.state} - ${completedOrder.shipping.pinCode}
Payment Method: ${completedOrder.shipping.paymentMethod.toUpperCase()} (Demo Mode)

ORDER ITEMS:
------------------------------------------------------------
${completedOrder.items.map((item, i) => `${i + 1}. ${item.book.title} (x${item.quantity}) - ₹${item.book.price * item.quantity}`).join('\n')}
------------------------------------------------------------
Subtotal: ₹${completedOrder.subtotal}
Delivery Fee: ${completedOrder.deliveryFee === 0 ? 'FREE' : '₹' + completedOrder.deliveryFee}
Total Paid: ₹${completedOrder.grandTotal}

Thank you for choosing GovtExamHub. Best wishes for your competitive exams!
Support: support@govtexamhub.in | Website: https://govtexamhub.in
============================================================`;

    const blob = new Blob([invoiceText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Invoice_${completedOrder.orderId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Invoice downloaded to your device', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-saffron-400" />
            <h3 className="font-bold text-base sm:text-lg">
              {completedOrder ? 'Order Confirmed!' : 'Doorstep Book Delivery Checkout'}
            </h3>
          </div>
          <button
            onClick={() => setCheckoutModalOpen(false)}
            className="p-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Notice Disclaimer */}
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center gap-2 text-xs text-amber-900 font-medium">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Simulation Only:</strong> No real payment is charged. This is a prototype checkout demonstrating book ordering.
          </span>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* 1. ORDER CONFIRMATION SCREEN */}
          {completedOrder ? (
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Demo Order Successfully Placed
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  Thank You, {completedOrder.shipping.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Your competitive exam study package is being packed for shipment.
                </p>
              </div>

              {/* Order Info Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Order ID:</span>
                  <span className="font-mono font-bold text-navy-900">{completedOrder.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Delivery:</span>
                  <span className="font-bold text-slate-900">{completedOrder.deliveryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery Address:</span>
                  <span className="text-slate-800 text-right truncate max-w-[200px]">
                    {completedOrder.shipping.address}, {completedOrder.shipping.city}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900">
                  <span>Total Amount Paid:</span>
                  <span className="text-navy-900">₹{completedOrder.grandTotal}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadInvoice}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-slate-600" />
                  <span>Download Demo Invoice</span>
                </button>
                <button
                  onClick={() => setCheckoutModalOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 text-white font-bold text-xs sm:text-sm shadow-md"
                >
                  Continue Preparing
                </button>
              </div>
            </div>
          ) : (
            /* 2. CHECKOUT FORM */
            <form onSubmit={handlePlaceOrder} className="space-y-5 text-xs sm:text-sm">
              
              {/* Shipping Address Fields */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs flex items-center gap-2 text-navy-900">
                  <Truck className="w-4 h-4 text-saffron-600" />
                  <span>Doorstep Delivery Address</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">
                      Mobile Number (for SMS Tracking) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1 text-xs">
                    Flat / House / Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">PIN Code *</label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs flex items-center gap-2 text-navy-900">
                  <CreditCard className="w-4 h-4 text-saffron-600" />
                  <span>Choose Payment Method (Demo)</span>
                </h4>

                <div className="grid grid-cols-2 gap-2.5">
                  <label className={`p-3 rounded-xl border-2 flex items-center gap-2.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi' ? 'border-saffron-500 bg-saffron-50 text-slate-900 font-bold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="text-saffron-600"
                    />
                    <div className="flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-saffron-600" />
                      <span>Instant UPI / QR</span>
                    </div>
                  </label>

                  <label className={`p-3 rounded-xl border-2 flex items-center gap-2.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod' ? 'border-saffron-500 bg-saffron-50 text-slate-900 font-bold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="text-saffron-600"
                    />
                    <span>Cash on Delivery</span>
                  </label>

                  <label className={`p-3 rounded-xl border-2 flex items-center gap-2.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'card' ? 'border-saffron-500 bg-saffron-50 text-slate-900 font-bold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="text-saffron-600"
                    />
                    <span>Debit / Credit Card</span>
                  </label>

                  <label className={`p-3 rounded-xl border-2 flex items-center gap-2.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'netbanking' ? 'border-saffron-500 bg-saffron-50 text-slate-900 font-bold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                      checked={formData.paymentMethod === 'netbanking'}
                      onChange={handleChange}
                      className="text-saffron-600"
                    />
                    <span>Net Banking</span>
                  </label>
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>Books Total ({cart.length} item{cart.length > 1 ? 's' : ''}):</span>
                  <span className="font-bold text-slate-900">₹{cartSubtotal}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Doorstep Shipping:</span>
                  <span className="font-bold text-emerald-700">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-navy-900 pt-1.5 border-t border-slate-200">
                  <span>Total Payable:</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Confirming Demo Order...' : `Place Demo Order (₹${grandTotal})`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}

