
import React from 'react';
import GameGrid from '../components/GameGrid';
import { MOCK_GAMES } from '../constants';

const ExplorePage: React.FC = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Explore All Games</h1>
                <p className="mt-4 text-xl text-gray-400">Browse our full collection of exciting games.</p>
            </header>
            <GameGrid title="All Games" games={MOCK_GAMES} />
        </div>
    );
};

export default ExplorePage;
