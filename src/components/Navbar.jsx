import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scan, Users, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/listings', label: 'Houses' },
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/map', label: 'Map' },
  { to: '/pulse', label: 'Building Pulse' },
  { to: '/jobs', label: 'Inner Jobs' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <div className="logo-icon">
            <Scan size={24} color="white" />
          </div>
          <span>Keja Scan</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn btn-primary nav-signin" type="button">
            <Users size={18} />
            Sign In
          </button>
          <button
            className="nav-toggle"
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="mobile-nav">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
