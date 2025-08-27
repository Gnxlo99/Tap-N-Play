import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_GAMES } from '../constants';
import Icon from '../components/Icon';

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = MOCK_GAMES.find(g => g.id === gameId);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!gameContainerRef.current) return;

    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen().catch(err => {
        // Silently fail for now, browser might show a message.
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };


  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-white bg-[#0a0a0a] px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Game Not Found</h1>
        <p className="text-lg text-gray-400 mb-8 text-center">Oops! The game you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 flex items-center space-x-2">
          <Icon icon="fa-home" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const gameAspectRatio = game.aspectRatio || '9 / 16';
  const isSquareGame = gameAspectRatio === '1 / 1';
  const gameWidth = game.nativeWidth || (isSquareGame ? 500 : 360);

  const containerClasses = isSquareGame
    ? 'flex flex-col items-center gap-8'
    : 'flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-12';

  const gameColumnStyles: React.CSSProperties = {
    maxWidth: `${gameWidth}px`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className={containerClasses}>
        
        {/* Game Column */}
        <div className="w-full flex-shrink-0" style={gameColumnStyles}>
           <div 
              ref={gameContainerRef}
              className="relative bg-black rounded-2xl shadow-2xl shadow-violet-900/40 overflow-hidden border border-gray-800" 
              style={{ aspectRatio: gameAspectRatio }}
            >
              <iframe
                src={game.playUrl}
                title={game.title}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
              ></iframe>
               <button
                    onClick={toggleFullscreen}
                    className="absolute top-3 right-3 z-10 bg-black/40 text-white hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                    <Icon icon={isFullscreen ? "fa-compress" : "fa-expand"} className="text-lg" />
                </button>
           </div>
        </div>

        {/* Details Column */}
        <div className={`w-full max-w-2xl ${isSquareGame ? 'lg:text-center' : ''}`}>
          <div className={isSquareGame ? '' : 'lg:sticky top-24'}>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-3">{game.title}</h1>
            
            <div className={`flex items-center space-x-4 mb-6 ${isSquareGame ? 'justify-center' : ''}`}>
              <span className="inline-block bg-gray-800 text-violet-300 text-sm font-semibold px-3 py-1 rounded-full">{game.genre}</span>
              <div className="flex items-center space-x-1 text-yellow-400">
                <Icon icon="fa-star" />
                <span className="font-bold text-white text-lg">{game.rating}</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8">{game.description}</p>
            
            <div className="bg-[#101010] border border-gray-800 rounded-lg p-6 text-left">
                <h2 className="text-2xl font-bold text-white mb-4">How to Play</h2>
                <p className="text-gray-400 leading-relaxed">{game.instructions}</p>
            </div>
            
            <div className="mt-8">
                <Link to="/" className={`text-violet-400 hover:text-violet-300 font-semibold flex items-center space-x-2 transition-colors ${isSquareGame ? 'justify-center' : ''}`}>
                    <Icon icon="fa-arrow-left" />
                    <span>Back to All Games</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
