import { Link } from 'react-router-dom';
import { Scan, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo" style={{ marginBottom: '20px', display: 'inline-flex' }}>
              <div className="logo-icon" style={{ marginRight: '10px' }}>
                <Scan size={24} color="white" />
              </div>
              <span>Keja Scan</span>
            </Link>
            <p style={{ opacity: 0.8, lineHeight: 1.8 }}>
              Vacant Kenya. A live map of houses, caretakers, water, work, and community —
              so you are already walking the estate before you physically go there.
            </p>
          </div>
          
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/post">Post a vacancy</Link></li>
              <li><Link to="/listings">Houses</Link></li>
              <li><Link to="/map">Mtaa View</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/jobs">Inner Jobs</Link></li>
              <li><Link to="/marketplace">Neighbour Exchange</Link></li>
            </ul>
          </div>
          
          <div>
            <h3>Estates Covered</h3>
            <ul>
              <li>Githurai 44 & 45</li>
              <li>Baba Dogo</li>
              <li>Huruma & Mathare</li>
              <li>Kasarani Mwiki</li>
              <li>Kayole Komarock</li>
              <li>Roysambu & Pipeline</li>
            </ul>
          </div>
          
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} /> info@kejascans.co.ke
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} /> +254 700 XXX XXX
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} /> Nairobi, Kenya
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="#" style={{ opacity: 0.8 }}><Facebook size={20} /></a>
              <a href="#" style={{ opacity: 0.8 }}><Twitter size={20} /></a>
              <a href="#" style={{ opacity: 0.8 }}><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Keja Scan Kenya. Scan. Find. Move. Live.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
