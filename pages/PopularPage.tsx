
import React from 'react';
import GameGrid from '../components/GameGrid';
import { MOCK_GAMES } from '../constants';
import type { Game } from '../types';

const PopularPage = () => {
    const popularGames: Game[] = MOCK_GAMES.filter(game => game.rating >= 4.7);

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Popular Games</h1>
                <p className="mt-4 text-xl text-gray-400">Check out the games our community is loving right now.</p>
            </header>
            <GameGrid title="Top Rated" games={popularGames} />
        </div>
    );
};

export default PopularPage;

