'use client'
import Link from 'next/link';
import { CartItem } from '@/components/CartItem';
import { OrderSummary } from '@/components/OrderSummary';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div>
      <Link href="/" className="text-body-md text-text-secondary mb-6 inline-block">
        &lt; Back to Catalog
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-primary p-6 rounded-lg">
          <h1 className="text-heading-lg mb-4">Your Cart ({cartItems.length} items)</h1>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          {cartItems.length > 0 && (
            <OrderSummary orderId="#000001" products={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
}
