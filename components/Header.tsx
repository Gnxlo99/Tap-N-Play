import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerHeight = 80; // Corresponds to h-20

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > headerHeight) {
        // Scrolling down and past the header
        setVisible(false);
      } else {
        // Scrolling up or at the top
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-30 bg-[#0a0a0a] border-b border-gray-800/50 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Go to homepage">
          <img src="/images/logo.png" alt="Tap N Play" className="h-16 w-auto" />
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