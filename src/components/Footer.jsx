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
              The Digital Life of the Kenyan Estate. Find vacant houses, track utilities, 
              connect with neighbors, and build your community reputation.
            </p>
          </div>
          
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/listings">Find a House</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
              <li><Link to="/map">Live Map</Link></li>
              <li><Link to="/pulse">Building Pulse</Link></li>
              <li><Link to="/jobs">Inner Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3>Estates Covered</h3>
            <ul>
              <li>Githurai 44 & 45</li>
              <li>Baba Dogo</li>
              <li>Kasarani Mwiki</li>
              <li>Kayole Komarock</li>
              <li>Roysambu</li>
              <li>Pipeline</li>
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
          <p>&copy; 2025 Keja Scan. All rights reserved. | Scan. Find. Move.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
