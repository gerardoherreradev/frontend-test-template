'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Game } from '@/utils/endpoint';

interface CartItemProps {
  item: Game;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-stroke-secondary last:border-b-0">
      <Image src={item.image} alt={item.name} width={96} height={96} className="w-24 h-24 object-cover rounded" />
      <div className="flex-grow">
        <h3 className="text-body-lg font-bold">{item.name}</h3>
        <p className="text-body-md text-text-secondary">{item.genre}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-body-lg font-bold">${item.price}</p>
        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-body-sm mt-2">
          Remove
        </button>
      </div>
    </div>
  );
};
