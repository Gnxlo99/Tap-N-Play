
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
                    Welcome to Tap N Play, your ultimate destination for free online games. Whether you're looking for thrilling action, mind-bending puzzles, or immersive RPGs, we have something for everyone. Our vast collection of browser games is constantly updated, so there's always a new adventure waiting for you. No downloads, no installations—just pure, instant fun. Start playing now and join a community of gamers from around the world!
                </p>
            </section>
            <GameGrid title="Our Games" games={MOCK_GAMES} />
        </div>
    );
};

export default HomePage;