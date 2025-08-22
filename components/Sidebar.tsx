
import React from 'react';
import Icon from './Icon';

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: 'fa-house', label: 'Home' },
    { icon: 'fa-compass', label: 'Explore' },
    { icon: 'fa-star', label: 'Popular' },
    { icon: 'fa-gamepad', label: 'Genres' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#101010] border-r border-gray-800 p-6 flex-col hidden lg:flex">
      <div>
        <div className="text-2xl font-bold text-white mb-10 flex items-center">
          <Icon icon="fa-meteor" className="text-violet-400 mr-3" />
          <span>Nexo</span>
        </div>
        <nav className="space-y-4">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Menu</h3>
          {navItems.map((item) => (
            <a key={item.label} href="#" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg p-2 transition-all duration-200">
              <Icon icon={item.icon} className="w-6 text-center text-lg mr-3" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;