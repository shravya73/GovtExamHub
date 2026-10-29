import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HomeSections from './components/HomeSections';
import ExamUpdatesSection from './components/ExamUpdatesSection';
import StudyMaterialsSection from './components/StudyMaterialsSection';
import MockTestsSection from './components/MockTestsSection';
import BooksMarketplace from './components/BooksMarketplace';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Modals
import ExamDetailsModal from './components/ExamDetailsModal';
import MaterialPreviewModal from './components/MaterialPreviewModal';
import BookDetailsModal from './components/BookDetailsModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import GlobalSearchModal from './components/GlobalSearchModal';
import AuthModal from './components/AuthModal';
import ToastContainer from './components/ToastContainer';

function MainContent() {
  const { activeTab } = useApp();

  return (
    <main className="flex-1 min-h-[80vh]">
      {activeTab === 'home' && (
        <>
          <HeroSection />
          <HomeSections />
        </>
      )}

      {activeTab === 'exams' && <ExamUpdatesSection />}
      {activeTab === 'materials' && <StudyMaterialsSection />}
      {activeTab === 'mocks' && <MockTestsSection />}
      {activeTab === 'books' && <BooksMarketplace />}
      {activeTab === 'about' && <AboutSection />}
      {activeTab === 'contact' && <ContactSection />}
    </main>
  );
}

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-saffron-500 selection:text-white">
        <Navbar />
        <MainContent />
        <Footer />

        {/* Global Overlays & Modals */}
        <ExamDetailsModal />
        <MaterialPreviewModal />
        <BookDetailsModal />
        <CartDrawer />
        <CheckoutModal />
        <GlobalSearchModal />
        <AuthModal />
        <ToastContainer />
      </div>
    </AppProvider>
  );
}

