
import type { Game } from './types';

const JUMP_AND_RUN_GAME: Game = {
  id: 'jump-and-run',
  title: 'Jump & Run',
  genre: 'Endless Runner',
  imageUrl: 'https://picsum.photos/seed/runner/500/700',
  heroImageUrl: 'https://picsum.photos/seed/jumpgame/1600/900',
  rating: 4.6,
  description: 'Tap to jump and avoid the obstacles. How long can you survive in this fast-paced endless runner?',
  playUrl: '/jump-and-run.html'
};

export const FEATURED_GAME: Game = JUMP_AND_RUN_GAME;

export const MOCK_GAMES: Game[] = [JUMP_AND_RUN_GAME];
