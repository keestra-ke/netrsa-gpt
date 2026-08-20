import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetail from './pages/ListingDetail';
import Marketplace from './pages/Marketplace';
import MapView from './pages/MapView';
import BuildingPulse from './pages/BuildingPulse';
import InnerJobs from './pages/InnerJobs';
import Services from './pages/Services';
import Community from './pages/Community';
import Auth from './pages/Auth';
import PostListing from './pages/PostListing';
import Dashboard from './pages/Dashboard';
import RemoteHint from './components/RemoteHint';
import TvRouteFocus from './components/TvRouteFocus';

const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename={basename}>
        <div className="app">
          <TvRouteFocus />
          <Navbar />
          <RemoteHint />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/listings/:id" element={<ListingDetail />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/services" element={<Services />} />
              <Route path="/community" element={<Community />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/pulse" element={<BuildingPulse />} />
              <Route path="/jobs" element={<InnerJobs />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/post" element={<PostListing />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
