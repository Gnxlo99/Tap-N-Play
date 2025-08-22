
import React from 'react';
import type { Game } from '../types';
import GameCard from './GameCard';

interface GameGridProps {
  title: string;
  games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ title, games }) => {
  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GameGrid;