import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ResizableNavbar from './components/ResizableNavbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AuroraBackground from './components/AuroraBackground';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import DemoModal from './components/DemoModal';
import { DemoProvider, useDemo } from './contexts/DemoContext';
import { initPerformanceTier } from './utils/performanceTier';
import './styles/index.css';
import './styles/components.css';

// Initialize performance tier immediately (before React hydration)
if (typeof window !== 'undefined') {
  initPerformanceTier();
}

function DemoModalWrapper() {
  const { isOpen, closeDemo } = useDemo();
  return <DemoModal isOpen={isOpen} onClose={closeDemo} />;
}

function App() {
  return (
    <DemoProvider>
      <Router>
        <AuroraBackground showRadialGradient={false} />
        <div className="app">
          <ResizableNavbar />
          <main style={{ paddingTop: 'var(--nav-h)' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              {/* Placeholder routes */}
              <Route path="/resources" element={<HomePage />} />
              <Route path="/demo" element={<HomePage />} />
              <Route path="/login" element={<HomePage />} />
              <Route path="/review" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
          <DemoModalWrapper />
        </div>
      </Router>
    </DemoProvider>
  );
}

export default App;
