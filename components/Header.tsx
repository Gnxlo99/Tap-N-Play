import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-[#0a0a0a] border-b border-gray-800/50">
      <div className="flex items-center justify-center h-28 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" aria-label="Go to homepage">
          <img 
            src="/images/logo.png" 
            alt="Tap N Play" 
            className="h-24 w-auto transition-transform duration-300 hover:scale-105" 
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
