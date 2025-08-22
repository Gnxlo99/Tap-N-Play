
import type { Game } from './types';

export const FEATURED_GAME: Game = {
  id: 1,
  title: 'Cyber Odyssey',
  genre: 'Action RPG',
  imageUrl: 'https://picsum.photos/seed/cyber/1600/900',
  rating: 4.8,
  description: 'Explore a vast neon metropolis in a dystopian future. Forge your legend in a world of cyborgs, AI, and corporate conspiracies.'
};

export const MOCK_GAMES: Game[] = [
  {
    id: 2,
    title: 'Void Runners',
    genre: 'Space Racing',
    imageUrl: 'https://picsum.photos/seed/space/500/700',
    rating: 4.5,
    description: 'Compete in ship races through asteroid fields and nebulae.'
  },
  {
    id: 3,
    title: 'Gaelic Empires',
    genre: '4X Strategy',
    imageUrl: 'https://picsum.photos/seed/empire/500/700',
    rating: 4.7,
    description: 'Build a galactic empire, manage resources, and conquer your enemies.'
  },
  {
    id: 4,
    title: 'Project Chimera',
    genre: 'Tactical Shooter',
    imageUrl: 'https://picsum.photos/seed/chimera/500/700',
    rating: 4.6,
    description: 'A squad-based first-person shooter with futuristic weaponry.'
  },
  {
    id: 5,
    title: 'Aethelgard',
    genre: 'Fantasy Adventure',
    imageUrl: 'https://picsum.photos/seed/fantasy/500/700',
    rating: 4.9,
    description: 'Embark on an epic quest to save the kingdom of Aethelgard from darkness.'
  },
  {
    id: 6,
    title: 'Neon Drift',
    genre: 'Arcade Racing',
    imageUrl: 'https://picsum.photos/seed/drift/500/700',
    rating: 4.4,
    description: 'Drift through the streets of a neon-soaked city in this arcade racer.'
  },
  {
    id: 7,
    title: 'Starfall',
    genre: 'Survival',
    imageUrl: 'https://picsum.photos/seed/starfall/500/700',
    rating: 4.3,
    description: 'Survive on a hostile alien planet after a crash landing.'
  },
  {
    id: 8,
    title: 'Quantum League',
    genre: 'Future Sports',
    imageUrl: 'https://picsum.photos/seed/quantum/500/700',
    rating: 4.5,
    description: 'Compete in a fast-paced, gravity-defying future sport.'
  },
  {
    id: 9,
    title: 'The Last Sentinel',
    genre: 'Stealth',
    imageUrl: 'https://picsum.photos/seed/sentinel/500/700',
    rating: 4.8,
    description: 'Infiltrate enemy bases as the last agent of a fallen organization.'
  }
];