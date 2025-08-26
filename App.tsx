
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import GamePage from './pages/GamePage';
import ExplorePage from './pages/ExplorePage';
import PopularPage from './pages/PopularPage';
import GenresPage from './pages/GenresPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans">
      <Sidebar />
      <div className="lg:ml-64 flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/game/:gameId" element={<GamePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
