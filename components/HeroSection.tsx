
import React from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../types';
import Icon from './Icon';

interface HeroSectionProps {
  game: Game;
}

const HeroSection: React.FC<HeroSectionProps> = ({ game }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-violet-900/20">
      <img src={game.heroImageUrl} alt={game.title} className="w-full h-[500px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{game.title}</h1>
        <p className="text-lg text-gray-300 mb-6 drop-shadow-md">{game.description}</p>
        <div className="flex items-center space-x-4">
          <Link
            to={`/game/${game.id}`}
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg shadow-violet-600/30 cursor-pointer"
          >
            <Icon icon="fa-play" />
            <span>Play Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;