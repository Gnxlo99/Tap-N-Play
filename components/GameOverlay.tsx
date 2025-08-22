
import React from 'react';
import type { Game } from '../types';
import Icon from './Icon';

interface GameOverlayProps {
  game: Game;
  onClose: () => void;
}

const GameOverlay: React.FC<GameOverlayProps> = ({ game, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
      <div className="bg-[#101010] rounded-2xl shadow-2xl shadow-violet-900/40 w-full max-w-lg h-[90vh] max-h-[800px] flex flex-col overflow-hidden border border-gray-800">
        <header className="flex-shrink-0 bg-[#181818] p-3 flex items-center justify-between z-10 border-b border-gray-700">
          <div className="flex items-center space-x-3">
              <Icon icon="fa-gamepad" className="text-violet-400 text-xl" />
              <h1 className="text-lg font-bold text-white">{game.title}</h1>
          </div>
          <button 
            onClick={onClose} 
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold w-10 h-10 rounded-full transition-colors flex items-center justify-center text-sm"
            aria-label="Close game"
          >
            <Icon icon="fa-times" />
          </button>
        </header>
        <div className="flex-grow relative bg-black">
           <iframe
            src={game.playUrl}
            title={game.title}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GameOverlay;
