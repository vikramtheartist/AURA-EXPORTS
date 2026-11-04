import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface QuoteModalInitialData {
  category?: string;
  product?: string;
  requirement?: string;
  quantity?: string;
  destinationCountry?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  initialData: QuoteModalInitialData | null;
  openQuoteModal: (data?: QuoteModalInitialData) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<QuoteModalInitialData | null>(null);

  const openQuoteModal = (data?: QuoteModalInitialData) => {
    if (data) {
      setInitialData(data);
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  // Support global custom events so any vanilla link or button can open the modal
  useEffect(() => {
    const handleGlobalOpen = (e: Event) => {
      const customEvent = e as CustomEvent<QuoteModalInitialData>;
      openQuoteModal(customEvent.detail);
    };

    window.addEventListener('aura:open-quote-modal', handleGlobalOpen);
    return () => {
      window.removeEventListener('aura:open-quote-modal', handleGlobalOpen);
    };
  }, []);

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        initialData,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
