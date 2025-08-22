
import React from 'react';
import type { Game } from '../types';
import Icon from './Icon';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <div 
      onClick={() => onPlay(game)}
      className="block group relative rounded-xl overflow-hidden bg-[#181818] shadow-lg transition-all duration-300 hover:shadow-violet-500/30 hover:scale-105 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPlay(game)}
    >
      <img src={game.imageUrl} alt={game.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
          <p className="text-sm text-violet-300 mb-4">{game.genre}</p>
          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <div className="flex items-center space-x-1 text-yellow-400">
              <Icon icon="fa-star" />
              <span className="font-bold text-white">{game.rating}</span>
            </div>
            <div className="bg-violet-600 rounded-full w-12 h-12 flex items-center justify-center text-white transition-colors">
              <Icon icon="fa-play" className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
