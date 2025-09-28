'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Game } from '@/utils/endpoint';

interface CartContextType {
  cartItems: Game[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: string) => void;
  isItemInCart: (gameId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Game[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cartItems]);

  const addToCart = (game: Game) => {
    setCartItems((prevItems) => [...prevItems, game]);
  };

  const removeFromCart = (gameId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== gameId));
  };

  const isItemInCart = (gameId: string) => {
    return cartItems.some((item) => item.id === gameId);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};