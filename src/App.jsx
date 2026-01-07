import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResizableNavbar from './components/ResizableNavbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AuroraBackground from './components/AuroraBackground';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import './styles/index.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <AuroraBackground showRadialGradient={false} />
      <div className="app">
        <ResizableNavbar />
        <main>
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
      </div>
    </Router>
  );
}

export default App;
