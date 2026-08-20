import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Scan, Users, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/', label: 'Feed', end: true },
  { to: '/listings', label: 'Houses' },
  { to: '/map', label: 'Mtaa View' },
  { to: '/services', label: 'Services' },
  { to: '/community', label: 'Community' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLister } = useAuth();

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
          {isLister && (
            <li><NavLink to="/post">Post</NavLink></li>
          )}
        </ul>

        <div className="nav-actions">
          <NavLink to={user ? '/dashboard' : '/auth'} className="btn btn-primary nav-signin" onClick={() => setIsOpen(false)}>
            <Users size={18} />
            {user ? (isLister ? 'Dashboard' : user.name) : 'Sign in'}
          </NavLink>
          <button
            className="nav-toggle"
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            tabIndex={-1}
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
          {isLister && (
            <li><NavLink to="/post" onClick={() => setIsOpen(false)}>Post vacancy</NavLink></li>
          )}
          <li>
            <NavLink to={user ? '/dashboard' : '/auth'} onClick={() => setIsOpen(false)}>
              {user ? 'Dashboard' : 'Sign in'}
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
