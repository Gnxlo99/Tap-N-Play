import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: 'fa-house', label: 'Home', path: '/' },
    { icon: 'fa-compass', label: 'Explore', path: '/explore' },
    { icon: 'fa-star', label: 'Popular', path: '/popular' },
    { icon: 'fa-gamepad', label: 'Genres', path: '/genres' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center text-lg rounded-lg p-3 transition-all duration-200 ${
      isActive
        ? 'text-white bg-violet-600/30 font-semibold'
        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
    }`;
    
  const NavContent = () => (
    <div className="h-full flex flex-col p-6">
       <div className="text-2xl font-bold text-white mb-10 flex items-center justify-between">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
             <img 
                src="/images/logo.png" 
                alt="Tap N Play" 
                className="h-14 w-auto transition-transform duration-300 hover:scale-105" 
             />
          </Link>
          <button
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
              aria-label="Close menu"
           >
              <Icon icon="fa-times" className="text-2xl" />
           </button>
        </div>
        <nav className="space-y-4">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider px-3">Menu</h3>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/'}
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon={item.icon} className="w-6 text-center text-xl mr-4" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
    </div>
  );


  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden bg-[#101010]/80 border-b border-gray-800/50 sticky top-0 z-40 backdrop-blur-md h-20 flex items-center justify-start relative px-4 sm:px-6">
        <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-300 hover:text-violet-400 transition-colors"
            aria-label="Open menu"
          >
            <Icon icon="fa-bars" className="text-2xl" />
        </button>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/" aria-label="Go to homepage">
            <img 
                src="/images/logo.png" 
                alt="Tap N Play" 
                className="h-12 w-auto" 
            />
            </Link>
        </div>
      </header>

      {/* Sidebar */}
      <aside 
         className={`fixed top-0 left-0 h-full w-64 bg-[#101010] border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
         } lg:translate-x-0`}
         aria-hidden={!isMenuOpen}
      >
        <NavContent />
      </aside>

       {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
