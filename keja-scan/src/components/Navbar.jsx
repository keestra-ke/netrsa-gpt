import { Link } from 'react-router-dom';
import { Scan, Home, MapPin, Users, Briefcase, ShoppingBag } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <Scan size={24} color="white" />
          </div>
          <span>Keja Scan</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listings">Houses</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/pulse">Building Pulse</Link></li>
          <li><Link to="/jobs">Inner Jobs</Link></li>
        </ul>
        
        <button className="btn btn-primary">
          <Users size={18} />
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
