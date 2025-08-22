import type { Game } from './types';

const JUMP_AND_RUN_GAME: Game = {
  id: 'jump-and-run',
  title: 'Jump & Run',
  genre: 'Endless Runner',
  imageUrl: '/images/jump-and-run-card.png',
  heroImageUrl: '/images/jump-and-run-hero.jpg',
  rating: 4.6,
  description: 'Tap to jump and avoid the obstacles. How long can you survive in this fast-paced endless runner?',
  playUrl: '/games/jump-and-run.html',
  instructions: 'Tap the screen or press the Spacebar to make the character jump. Your goal is to navigate through the gaps in the obstacles. Each pair of obstacles you successfully pass will increase your score. The game ends if you hit an obstacle, the top, or the bottom of the screen.'
};

export const FEATURED_GAME: Game = JUMP_AND_RUN_GAME;

export const MOCK_GAMES: Game[] = [JUMP_AND_RUN_GAME];