import { Suspense } from 'react';
import { GameCard } from "@/components/GameCard";
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Game } from '@/utils/endpoint';
import {Filter} from "@/components/Filter";

export default async function Home({ searchParams }: { searchParams: { genre?: string; page?: string } }) {
  const genre = searchParams.genre || "";
  const page = searchParams.page || "1";
  const query = new URLSearchParams({ ...(genre && { genre }), page }).toString();
  // Use the current domain name for the API URL
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/games?${query}`;
  const res = await fetch(apiUrl);
  const { games } = await res.json();
  if (!res.ok) {
    return (
      <div className="text-center text-red-500">
        Failed to load games. Please try again later.
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="bg-white">
          <Filter games={games}/>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[48px]">
        {games.map((game:Game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {games.length === 0 && (
          <p className="col-span-full text-center text-text-secondary">
            No games found.
          </p>
        )}
      </div>
      </div>
    </Suspense>
  )
}
