import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Marketplace from './pages/Marketplace';
import MapView from './pages/MapView';
import BuildingPulse from './pages/BuildingPulse';
import InnerJobs from './pages/InnerJobs';

const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/pulse" element={<BuildingPulse />} />
            <Route path="/jobs" element={<InnerJobs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
