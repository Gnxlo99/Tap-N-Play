import type { Game } from './types';

const JUMP_AND_RUN_GAME: Game = {
  id: 'jump-and-run',
  title: 'Jump & Run',
  genre: 'Endless Runner',
  imageUrl: 'https://picsum.photos/seed/runner/500/700',
  heroImageUrl: 'https://picsum.photos/seed/jumpgame/1600/900',
  rating: 4.6,
  description: 'Tap to jump and avoid the obstacles. How long can you survive in this fast-paced endless runner?',
  playUrl: '/jump-and-run.html',
  instructions: 'Tap the screen or press the Spacebar to make the character jump. Your goal is to navigate through the gaps in the obstacles. Each pair of obstacles you successfully pass will increase your score. The game ends if you hit an obstacle, the top, or the bottom of the screen.'
};

const SPACE_SHOOTER_GAME: Game = {
  id: 'space-shooter',
  title: 'Space Shooter',
  genre: 'Arcade',
  imageUrl: 'https://picsum.photos/seed/shooter/500/700',
  heroImageUrl: 'https://picsum.photos/seed/spacegame/1600/900',
  rating: 4.8,
  description: 'Pilot your starship and defend the galaxy from endless waves of alien invaders. A classic arcade experience!',
  playUrl: '/space-shooter.html',
  instructions: 'Use the Arrow Keys or drag on the screen to move your ship. Press the Spacebar or tap to shoot. Destroy enemy ships to score points. The game ends if an enemy ship hits you.'
};

const PUZZLE_BLOCKS_GAME: Game = {
  id: 'puzzle-blocks',
  title: 'Puzzle Blocks',
  genre: 'Puzzle',
  imageUrl: 'https://picsum.photos/seed/puzzle/500/700',
  heroImageUrl: 'https://picsum.photos/seed/puzzlegame/1600/900',
  rating: 4.5,
  description: 'A classic tile-matching puzzle game. Arrange the falling blocks to clear lines and score points. How high can you score?',
  playUrl: '/puzzle-blocks.html',
  instructions: 'Use Arrow Keys to move the blocks. Up Arrow rotates, Left/Right moves sideways, and Down Arrow speeds up the descent. Clear horizontal lines to score points. The game ends when the blocks stack up to the top.'
};

const FLAPPY_BIRD_CLONE_GAME: Game = {
  id: 'flappy-bird-clone',
  title: 'Flappy Bird Clone',
  genre: 'Skill',
  imageUrl: 'https://picsum.photos/seed/flappy/500/700',
  heroImageUrl: 'https://picsum.photos/seed/flappygame/1600/900',
  rating: 4.2,
  description: 'Navigate the bird through the pipes. It\'s simple, frustrating, and incredibly addictive. Can you beat your high score?',
  playUrl: '/flappy-bird-clone.html',
  instructions: 'Tap the screen or press the Spacebar to make the bird flap its wings and fly upwards. Navigate through the gaps in the pipes to score points. Hitting a pipe or the ground ends the game.'
};

export const FEATURED_GAME: Game = JUMP_AND_RUN_GAME;

export const MOCK_GAMES: Game[] = [JUMP_AND_RUN_GAME, SPACE_SHOOTER_GAME, PUZZLE_BLOCKS_GAME, FLAPPY_BIRD_CLONE_GAME];