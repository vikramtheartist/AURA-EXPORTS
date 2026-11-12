import React, { createContext, useContext, useState, useEffect } from 'react';

interface WishlistContextType {
  wishlistIds: string[];
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (id: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = 'aura_retail_wishlist_v1';

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // Ignore quota errors
    }
  }, [wishlistIds]);

  const isWishlisted = (id: string) => wishlistIds.includes(id);

  const toggleWishlist = (id: string): boolean => {
    let nextState = false;
    setWishlistIds((prev) => {
      if (prev.includes(id)) {
        nextState = false;
        return prev.filter((item) => item !== id);
      } else {
        nextState = true;
        return [...prev, id];
      }
    });
    return nextState;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        isWishlisted,
        toggleWishlist,
        wishlistCount: wishlistIds.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    // Provide a safe fallback if used outside provider
    return {
      wishlistIds: [],
      isWishlisted: () => false,
      toggleWishlist: () => false,
      wishlistCount: 0,
    };
  }
  return context;
}

