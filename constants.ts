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
  instructions: 'Tap the screen or press the Spacebar to make the character jump. Your goal is to navigate through the gaps in the obstacles. Each pair of obstacles you successfully pass will increase your score. The game ends if you hit an obstacle, the top, or the bottom of the screen.',
  aspectRatio: '9 / 16',
  nativeWidth: 360,
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
  aspectRatio: '9 / 16',
  nativeWidth: 400,
};

const NUMBER_MERGE_GAME: Game = {
  id: 'number-merge',
  title: 'Number Merge',
  genre: 'Puzzle / Strategy',
  imageUrl: '/images/number-merge-card.png',
  heroImageUrl: '/images/number-merge-hero.jpg',
  rating: 4.7,
  description: 'A captivating puzzle game where you slide and combine numbered tiles to reach the highest possible number. Plan your moves carefully to avoid filling the board!',
  playUrl: '/number-merge.html',
  instructions: 'Use your arrow keys or swipe (on touch devices) to move all tiles in a direction. When two tiles with the same number touch, they merge into one, doubling their value. A new tile (either a 2 or a 4) appears on the board after every move. The game ends when the board is full and no more moves are possible. Your goal is to achieve the highest score and create the highest numbered tile.',
  aspectRatio: '1 / 1',
  nativeWidth: 500,
};

export const FEATURED_GAME: Game = JUMP_AND_RUN_GAME;

export const MOCK_GAMES: Game[] = [JUMP_AND_RUN_GAME, COLOR_JUMP_GAME, NUMBER_MERGE_GAME];
