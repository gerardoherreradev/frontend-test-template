'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="bg-[#EEEEEE] text-text-on-brand sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-heading-md">
          GamerShop
        </Link>
        <Link href="/cart" className="relative">
          <Image src="/cart.png" alt="Shopping Cart" width={24} height={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};