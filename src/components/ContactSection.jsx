import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown,
  ChevronUp,
  Globe,
  Share2
} from 'lucide-react';

export default function ContactSection() {
  const { showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Exam Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Are the study materials and PDFs on GovtExamHub truly free?',
      a: 'Yes, 100%! All downloadable summaries, NCERT digests, formula sheets, and solved PYQ compendiums under the Study Materials section are completely free and legal public domain or open-access resources.'
    },
    {
      q: 'How does GovtExamHub verify exam notification dates?',
      a: 'Our editorial desk cross-checks all exam dates with official gazettes and bulletins issued by UPSC, SSC, IBPS, and State Commissions. During prototype demo mode, dates are explicitly marked as "Demo Data" until live API integration is enabled.'
    },
    {
      q: 'How does doorstep book delivery work?',
      a: 'We partner with leading competitive book distributors across India. Books are shipped within 24 hours of confirmation and delivered via courier within 3-5 business days with Cash on Delivery (COD) and tracking support.'
    },
    {
      q: 'Can I take the mock tests multiple times?',
      a: 'Yes, all mock tests and speed sprints are unlimited and free to attempt. You can re-attempt anytime and view detailed question-by-question explanations with correct answer keys.'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill all mandatory fields (Name, Email, Message)', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Demo inquiry recorded! We will review your message.', 'success');
    }, 800);
  };

  return (
    <section id="contact-section" className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5 text-saffron-600" />
            <span>Aspirant Support & Helpline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            Get in Touch With GovtExamHub
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about exam eligibility, need guidance choosing competitive books, or want to suggest new study resources? We’re here to help.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold">Prototype Demonstration Form:</strong> This inquiry form is configured as a demo interface. Messages are logged locally in state for testing and demonstration rather than dispatching live emails.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Message Recorded (Demo)!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. In production, this form connects to our 24/7 Aspirant Helpdesk.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', category: 'Exam Inquiry', message: '' });
                  }}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Verma"
                      required
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. priya.aspirant@example.com"
                      required
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                    >
                      <option value="Exam Inquiry">Exam Notification & Eligibility</option>
                      <option value="Study Material">Study Material & Free PDFs</option>
                      <option value="Book Delivery">Book Order & Doorstep Delivery</option>
                      <option value="Mock Tests">Mock Test Feedback</option>
                      <option value="Partnership">Institutional Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Question regarding UPSC CSAT 2026"
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Message / Query *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your query in detail..."
                    required
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Demo Inquiry...' : 'Submit Inquiry (Demo)'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office, Helpline & Social Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-base text-navy-900">
                Contact Information
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-600">
                  <Mail className="w-5 h-5 text-saffron-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Editorial & Aspirant Email</span>
                    <a href="mailto:support@govtexamhub.in" className="text-saffron-600 hover:underline">
                      support@govtexamhub.in (Demo)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Student Helpline Toll-Free</span>
                    <span>1800-120-XXXX (Mon - Sat, 9:00 AM - 7:00 PM IST)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Hub Office (Demo Headquarters)</span>
                    <span>Mukherjee Nagar Educational Complex, New Delhi 110009, India</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Pill Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                  Connect on Official Channels
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-semibold border border-blue-200 flex items-center gap-1.5 cursor-pointer hover:bg-blue-100">
                    Telegram: @GovtExamHubUpdates
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 font-semibold border border-red-200 flex items-center gap-1.5 cursor-pointer hover:bg-red-100">
                    YouTube: GovtExamHub Official
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1.5 cursor-pointer hover:bg-emerald-100">
                    WhatsApp: Daily Exam Digest
                  </span>
                </div>
              </div>
            </div>

            {/* Aspirant FAQs Accordion */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 text-navy-900 mb-2">
                <HelpCircle className="w-4 h-4 text-saffron-600" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden text-xs"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className="w-full p-3 text-left font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-2 transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-saffron-600" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                      </button>
                      {isOpen && (
                        <div className="p-3 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

