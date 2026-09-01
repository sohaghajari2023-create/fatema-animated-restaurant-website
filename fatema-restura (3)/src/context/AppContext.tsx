import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type AppContextType = {
  cartCount: number;
  addToCart: (itemName?: string) => void;
  isBookingModalOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toastMessage: string | null;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const addToCart = useCallback((itemName?: string) => {
    setCartCount(c => c + 1);
    const msg = itemName ? `${itemName} কার্টে যোগ করা হয়েছে!` : "কার্টে যোগ করা হয়েছে!";
    setToastMessage(msg);
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  }, []);

  return (
    <AppContext.Provider value={{
      cartCount,
      addToCart,
      isBookingModalOpen,
      openBookingModal: () => setIsBookingModalOpen(true),
      closeBookingModal: () => setIsBookingModalOpen(false),
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toastMessage
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}

