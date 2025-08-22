
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_GAMES } from '../constants';
import Icon from '../components/Icon';

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = MOCK_GAMES.find(g => g.id === gameId);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
        <h1 className="text-4xl font-bold mb-4">404 - Game Not Found</h1>
        <p className="text-lg text-gray-400 mb-8">Oops! The game you're looking for doesn't exist.</p>
        <Link to="/" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 flex items-center space-x-2">
          <Icon icon="fa-home" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col bg-black">
      <div className="flex-shrink-0 bg-[#101010] p-3 flex items-center justify-between shadow-md z-10 border-b border-gray-800">
        <div className="flex items-center space-x-3">
            <Icon icon="fa-gamepad" className="text-violet-400 text-xl" />
            <h1 className="text-lg font-bold text-white">{game.title}</h1>
        </div>
        <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors flex items-center space-x-2 text-sm">
          <Icon icon="fa-times" />
          <span>Close</span>
        </Link>
      </div>
      <div className="flex-grow relative bg-black">
         <iframe
          src={game.playUrl}
          title={game.title}
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GamePage;
