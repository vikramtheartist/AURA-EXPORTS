import React, { createContext, useContext, useState, useEffect } from 'react';
import { RetailSpiceProduct, RetailProductVariant } from '../data/retailSpicesCatalog';

export interface CartItem {
  id: string; // unique item key: `${productId}-${variantId}`
  productId: string;
  product: RetailSpiceProduct;
  variantId: string;
  variant: RetailProductVariant;
  quantity: number;
}

export type CurrencyCode = 'INR' | 'USD' | 'AED';

interface RetailCartContextType {
  items: CartItem[];
  itemCount: number;
  subtotalINR: number;
  subtotalUSD: number;
  subtotalAED: number;
  freeShippingThresholdINR: number;
  freeShippingThresholdUSD: number;
  freeShippingThresholdAED: number;
  isFreeShipping: boolean;
  amountNeededForFreeShippingINR: number;
  amountNeededForFreeShippingUSD: number;
  isCartDrawerOpen: boolean;
  isCheckoutOpen: boolean;
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  addToCart: (product: RetailSpiceProduct, variantId: string, quantity?: number) => void;
  buyNow: (product: RetailSpiceProduct, variantId: string, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

const RetailCartContext = createContext<RetailCartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'aura_retail_cart_items_v1';
const CURRENCY_STORAGE_KEY = 'aura_retail_currency_v1';

export const RetailCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore parse errors
    }
    return [];
  });

  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    try {
      const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (saved === 'INR' || saved === 'AED' || saved === 'USD') return saved;
    } catch {
      // fallback
    }
    return 'INR';
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, c);
    } catch {
      // Ignore
    }
  };

  const freeShippingThresholdINR = 1499;
  const freeShippingThresholdUSD = 75;
  const freeShippingThresholdAED = 275;

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalINR = items.reduce((sum, item) => sum + (Math.round(item.variant.priceUSD * 85)) * item.quantity, 0);
  const subtotalUSD = items.reduce((sum, item) => sum + item.variant.priceUSD * item.quantity, 0);
  const subtotalAED = items.reduce((sum, item) => sum + item.variant.priceAED * item.quantity, 0);

  const isFreeShipping = 
    currency === 'INR' 
      ? subtotalINR >= freeShippingThresholdINR 
      : currency === 'USD' 
        ? subtotalUSD >= freeShippingThresholdUSD 
        : subtotalAED >= freeShippingThresholdAED;

  const amountNeededForFreeShippingINR = Math.max(0, freeShippingThresholdINR - subtotalINR);
  const amountNeededForFreeShippingUSD = Math.max(0, freeShippingThresholdUSD - subtotalUSD);

  const openCart = () => setIsCartDrawerOpen(true);
  const closeCart = () => setIsCartDrawerOpen(false);

  const openCheckout = () => {
    setIsCartDrawerOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  const addToCart = (product: RetailSpiceProduct, variantId: string, quantity = 1) => {
    const variant = product.variants.find((v) => v.id === variantId) || product.variants[0];
    const itemId = `${product.id}-${variant.id}`;

    setItems((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          product,
          variantId: variant.id,
          variant,
          quantity,
        },
      ];
    });

    setIsCartDrawerOpen(true);
  };

  const buyNow = (product: RetailSpiceProduct, variantId: string, quantity = 1) => {
    addToCart(product, variantId, quantity);
    setIsCartDrawerOpen(false);
    setIsCheckoutOpen(true);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <RetailCartContext.Provider
      value={{
        items,
        itemCount,
        subtotalINR,
        subtotalUSD,
        subtotalAED,
        freeShippingThresholdINR,
        freeShippingThresholdUSD,
        freeShippingThresholdAED,
        isFreeShipping,
        amountNeededForFreeShippingINR,
        amountNeededForFreeShippingUSD,
        isCartDrawerOpen,
        isCheckoutOpen,
        currency,
        setCurrency,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
        addToCart,
        buyNow,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </RetailCartContext.Provider>
  );
};

export function useRetailCart() {
  const context = useContext(RetailCartContext);
  if (!context) {
    throw new Error('useRetailCart must be used within a RetailCartProvider');
  }
  return context;
}
