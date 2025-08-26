
import React from 'react';
import HeroSection from '../components/HeroSection';
import GameGrid from '../components/GameGrid';
import { MOCK_GAMES, FEATURED_GAME } from '../constants';

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
        </div>
    );
};

export default HomePage;
