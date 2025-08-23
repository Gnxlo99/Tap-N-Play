import type { Game } from './types';

const JUMP_AND_RUN_GAME: Game = {
  id: 'jump-and-run',
  title: 'Jump & Run',
  genre: 'Endless Runner',
  imageUrl: '/images/jump-and-run-card.png',
  heroImageUrl: '/images/jump-and-run-hero.jpg',
  rating: 4.6,
  description: 'Tap to jump and avoid the obstacles. How long can you survive in this fast-paced endless runner?',
  playUrl: '/jump-and-run.html',
  instructions: 'Tap the screen or press the Spacebar to make the character jump. Your goal is to navigate through the gaps in the obstacles. Each pair of obstacles you successfully pass will increase your score. The game ends if you hit an obstacle, the top, or the bottom of the screen.'
};

const COLOR_JUMP_GAME: Game = {
  id: 'color-jump',
  title: 'Color Jump',
  genre: 'Skill / Arcade',
  imageUrl: '/images/color-jump-card.png',
  heroImageUrl: '/images/color-jump-hero.jpg',
  rating: 4.8,
  description: 'Test your reflexes in this vibrant arcade game. Tap to jump and pass through obstacles of the same color as your ball. One wrong move and it\'s game over!',
  playUrl: '/color-jump.html',
  instructions: 'Tap the screen to make the ball jump. You can only pass through the part of the obstacle that matches your ball\'s color. Hitting a different color will end the game. Pass through color changers to switch your color and keep going. The higher you go, the higher your score!',
};

export const FEATURED_GAME: Game = JUMP_AND_RUN_GAME;

export const MOCK_GAMES: Game[] = [JUMP_AND_RUN_GAME, COLOR_JUMP_GAME];