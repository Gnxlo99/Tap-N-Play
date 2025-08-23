import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerHeight = 96; // Corresponds to h-24

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
      <div className="flex items-center justify-center h-24 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" aria-label="Go to homepage">
          <img 
            src="/images/logo.png" 
            alt="Tap N Play" 
            className="h-20 w-auto transition-transform duration-300 hover:scale-105" 
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
