import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GamerShop | Your Favorite Games',
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${roboto.className} bg-background text-text-primary flex flex-col min-h-screen`}>
        <CartProvider>
          <Header />
          <main className="container mx-auto p-4 md:p-8 flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
