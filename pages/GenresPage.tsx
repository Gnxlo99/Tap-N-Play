
import React from 'react';
import GameGrid from '../components/GameGrid';
import { MOCK_GAMES } from '../constants';
import type { Game } from '../types';

const GenresPage: React.FC = () => {
    const gamesByGenre = MOCK_GAMES.reduce<Record<string, Game[]>>((acc, game) => {
        // Handle multiple genres, e.g., "Puzzle / Strategy"
        const genres = game.genre.split(' / ');
        genres.forEach(genre => {
            if (!acc[genre]) {
                acc[genre] = [];
            }
            acc[genre].push(game);
        });
        return acc;
    }, {});

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Browse by Genre</h1>
                <p className="mt-4 text-xl text-gray-400">Find your next favorite game in your preferred category.</p>
            </header>
            <div className="space-y-12">
                {Object.entries(gamesByGenre).map(([genre, games]) => (
                    <GameGrid key={genre} title={genre} games={games} />
                ))}
            </div>
        </div>
    );
};

export default GenresPage;
