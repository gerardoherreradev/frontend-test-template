'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Game } from '@/utils/endpoint';

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  const { addToCart, removeFromCart, isItemInCart } = useCart();
  const inCart = isItemInCart(game.id);

  const handleToggleCart = () => {
    if (inCart) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
  };

  return (
    <div className="bg-white border-[0.5px] border-[#8F8F8F] border-solid rounded-lg overflow-hidden flex flex-col p-[24px]">
      <div className="relative">
        <Image src={game.image} alt={game.name} width={332} height={240} className="w-full h-[240px] object-cover rounded-tl-lg rounded-tr-lg " />
        {game.isNew && (
          <span className="bg-[#F5F5F4] absolute top-[12px] left-[12px] bg-brand-primary text-[#3B3B3B] w-[57px] h-[32px] text-body-sm px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow h-[128px] mt-[20px]">
        <p className="text-text-secondary text-body-sm uppercase">{game.genre}</p>
        <div className="flex items-baseline w-full justify-between">

        <h3 className="text-heading-sm mt-1 font-bold">{game.name}</h3>
          <p className="text-heading-sm font-bold">${game.price}</p>
        </div>

        <div className="flex justify-between items-center pt-4 w-full">
          <button
            onClick={handleToggleCart}
            className={`w-full px-4 py-2 border border-solid border-[#3B3B3B] rounded text-center text-body-sm font-bold ${
              inCart
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-brand-primary hover:bg-gray-700 text-text-on-brand'
            }`}
          >
            {inCart ? 'Remove' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};