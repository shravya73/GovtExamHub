import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  // Modals for details
  const [selectedExamModal, setSelectedExamModal] = useState(null);
  const [selectedMaterialModal, setSelectedMaterialModal] = useState(null);
  const [selectedBookModal, setSelectedBookModal] = useState(null);

  // User state
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('govtexamhub_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Saved/Bookmarked exams
  const [savedExams, setSavedExams] = useState(() => {
    try {
      const saved = localStorage.getItem('govtexamhub_saved_exams');
      return saved ? JSON.parse(saved) : ['upsc-cse-2026', 'ssc-cgl-2026'];
    } catch {
      return ['upsc-cse-2026', 'ssc-cgl-2026'];
    }
  });

  // Cart items: [ { book: {...}, quantity: 1 } ]
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('govtexamhub_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Order history
  const [orderHistory, setOrderHistory] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('govtexamhub_orders');
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch {
      return [];
    }
  });

  // Toasts
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('govtexamhub_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('govtexamhub_saved_exams', JSON.stringify(savedExams));
    } catch (e) {
      console.error(e);
    }
  }, [savedExams]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleSaveExam = (examId) => {
    setSavedExams((prev) => {
      if (prev.includes(examId)) {
        showToast('Exam removed from saved bookmarks', 'info');
        return prev.filter((id) => id !== examId);
      } else {
        showToast('Exam saved to bookmarks!', 'success');
        return [...prev, examId];
      }
    });
  };

  const isExamSaved = (examId) => savedExams.includes(examId);

  const addToCart = (book, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        showToast(`Updated "${book.title.slice(0, 24)}..." quantity to ${existing.quantity + quantity}`, 'info');
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        showToast(`Added "${book.title.slice(0, 24)}..." to your cart!`, 'success');
        return [...prev, { book, quantity }];
      }
    });
  };

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.book.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (bookId) => {
    setCart((prev) => prev.filter((item) => item.book.id !== bookId));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('govtexamhub_user', JSON.stringify(userData));
    showToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('govtexamhub_user');
    showToast('Signed out successfully', 'info');
  };

  const recordOrder = (orderData) => {
    const updated = [orderData, ...orderHistory];
    setOrderHistory(updated);
    localStorage.setItem('govtexamhub_orders', JSON.stringify(updated));
    clearCart();
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.book.price * item.quantity, 0);
  const cartMrpTotal = cart.reduce((total, item) => total + item.book.mrp * item.quantity, 0);
  const cartSavings = cartMrpTotal - cartSubtotal;

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab: (tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        searchModalOpen,
        setSearchModalOpen,
        isCartOpen,
        setIsCartOpen,
        checkoutModalOpen,
        setCheckoutModalOpen,
        authModalOpen,
        setAuthModalOpen,
        selectedExamModal,
        setSelectedExamModal,
        selectedMaterialModal,
        setSelectedMaterialModal,
        selectedBookModal,
        setSelectedBookModal,
        user,
        loginUser,
        logoutUser,
        savedExams,
        toggleSaveExam,
        isExamSaved,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        cartMrpTotal,
        cartSavings,
        orderHistory,
        recordOrder,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

