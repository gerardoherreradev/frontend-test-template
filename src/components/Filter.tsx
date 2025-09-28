'use client'

import { Game } from "@/utils/endpoint";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const Filter = ({games}:{games:Game[]}) => {
  const availableFilters: string[] = Array.from(new Set(games.map((game: Game) => game.genre)));
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedGenre, setSelectedGenre] = useState(searchParams.get('genre') || 'All');
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
    router.push(`/?genre=${e.target.value}`);
  }

  const  handleCleanSelection = () => {
    setSelectedGenre('All');
    router.push('/');
    
  }
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <h1 className="text-heading-lg">Top Sellers</h1>
        {availableFilters.length > 1 && (
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="p-2 border border-stroke-primary rounded w-full md:w-auto"
        >
          <option value="All">All</option>
          {availableFilters.map((genre: string) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>)}
        {availableFilters.length <= 1 && (
          <div>
            <button className="w-full px-4 py-2 border border-solid border-[#3B3B3B] rounded text-center text-body-sm font-bold" onClick={handleCleanSelection}>Clear selection</button>
          </div>
        )}
      </div>
  );
};
