
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import GameOverlay from './components/GameOverlay';
import type { Game } from './types';

const App: React.FC = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onPlayGame={setActiveGame} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />

      {activeGame && (
        <GameOverlay game={activeGame} onClose={() => setActiveGame(null)} />
      )}
    </div>
  );
};

export default App;
