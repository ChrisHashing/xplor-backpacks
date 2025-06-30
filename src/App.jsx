import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Introduction from './components/Introduction/Introduction';
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Rarity = lazy(() => import('./pages/Rarity/Rarity'));
const Mint = lazy(() => import('./pages/Mint/Mint'));
const Roadmap = lazy(() => import('./pages/Roadmap/Roadmap'));
const Faq = lazy(() => import('./pages/Faq/Faq'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  const handleIntroductionComplete = () => {
    setShowIntroduction(false);
  };

  return (
    <Router>
      {!isLoadingComplete ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : showIntroduction ? (
        <Introduction onComplete={handleIntroductionComplete} />
      ) : (
        <div className='main_wrapper'>
          <Header />
          <div className="main_section">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rarity" element={<Rarity />} />
                <Route path="/mint" element={<Mint />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Navbar />
        </div>
      )}
    </Router>
  );
}
