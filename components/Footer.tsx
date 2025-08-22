import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
        <div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Tap N Play. All rights reserved.</p>
          <div className="flex space-x-4 text-sm mt-2 justify-center">
            <a href="#" className="text-gray-500 hover:text-violet-400">Terms of Service</a>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-violet-400">Privacy Policy</Link>
            <a href="mailto:contact@tapnplay.online" className="text-gray-500 hover:text-violet-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;