
import React from 'react';
import HeroSection from '../components/HeroSection';
import GameGrid from '../components/GameGrid';
import { MOCK_GAMES, FEATURED_GAME } from '../constants';
import Icon from '../components/Icon';

const HomePage: React.FC = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <HeroSection game={FEATURED_GAME} />
            <section className="my-12 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Discover Your Next Favorite Game</h2>
                <p className="text-gray-400 leading-relaxed">
                    Welcome to Tap N Play, where the fun is just a click away. Dive into a curated selection of instant-play games perfect for any moment. Test your reflexes, solve clever puzzles, and chase high scores. Forget downloads and installations—your next gaming adventure starts right now!
                </p>
            </section>
            <GameGrid title="Our Games" games={MOCK_GAMES} />
            <section className="my-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-white">Nuevas Aventuras Próximamente...</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden bg-[#181818] h-80 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-gray-700/50 transition-all duration-300 hover:border-violet-500/50 hover:bg-[#202020] cursor-default">
                            <Icon icon="fa-lock" className="text-5xl text-gray-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-400">Próximamente</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
