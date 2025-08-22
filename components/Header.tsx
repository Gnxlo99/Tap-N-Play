import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-[#0a0a0a] border-b border-gray-800/50">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Go to homepage">
          <img src="/images/logo.png" alt="Tap N Play" className="h-8 w-auto" />
        </Link>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon icon="fa-search" className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search for games..."
            className="w-full bg-gray-900/50 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;