import React from 'react';
import HeroSection from '../components/HeroSection';
import GameGrid from '../components/GameGrid';
import { MOCK_GAMES, FEATURED_GAME } from '../constants';

const HomePage: React.FC = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <HeroSection game={FEATURED_GAME} />
            <GameGrid title="Popular Games" games={MOCK_GAMES} />
            <GameGrid title="New Releases" games={[...MOCK_GAMES].reverse()} />
        </div>
    );
};

export default HomePage;