import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Scan, Users, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Feed', end: true },
  { to: '/listings', label: 'Houses' },
  { to: '/map', label: 'Mtaa View' },
  { to: '/services', label: 'Services' },
  { to: '/community', label: 'Community' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <NavLink to="/" className="logo" onClick={() => setIsOpen(false)}>
          <div className="logo-icon">
            <Scan size={24} color="white" />
          </div>
          <span>Keja Scan</span>
        </NavLink>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn btn-primary nav-signin" type="button">
            <Users size={18} />
            Link my residence
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
              <NavLink to={item.to} end={item.end} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
