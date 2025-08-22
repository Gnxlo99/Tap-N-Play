
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import GamePage from './pages/GamePage';

const App: React.FC = () => {
  const location = useLocation();
  const isGamePage = location.pathname.startsWith('/play/');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans flex flex-col">
      {!isGamePage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/play/:gameId" element={<GamePage />} />
        </Routes>
      </main>
      {!isGamePage && <Footer />}
    </div>
  );
};

export default App;
