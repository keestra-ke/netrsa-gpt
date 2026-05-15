import { Link } from 'react-router-dom';
import { MapPin, Droplets, Zap, Shield, ShoppingBag, Briefcase, Users, TrendingUp } from 'lucide-react';
import { housingListings, marketplaceItems, buildingPulseData, innerJobs, stats } from '../data/dummyData';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Scan the Kejas.<br />Find Your Place.</h1>
          <p>The Digital Life of the Kenyan Estate. Find vacant houses, track utilities, connect with neighbors — all before you physically go there.</p>
          <div className="hero-buttons">
            <Link to="/listings" className="btn btn-primary">
              <MapPin size={20} />
              Find a House
            </Link>
            <Link to="/marketplace" className="btn btn-secondary">
              <ShoppingBag size={20} />
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--ocean-blue)', padding: '30px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--ocean-accent)' }}>{stats.totalListings}</div>
              <div style={{ opacity: 0.9 }}>Active Listings</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--ocean-accent)' }}>{stats.activeUsers}</div>
              <div style={{ opacity: 0.9 }}>Verified Users</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--ocean-accent)' }}>{stats.estatesCovered}</div>
              <div style={{ opacity: 0.9 }}>Estates Covered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--ocean-accent)' }}>{stats.jobsPosted}</div>
              <div style={{ opacity: 0.9 }}>Inner Jobs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Pulse Preview */}
      <section className="pulse-section">
        <div className="container">
          <div className="section-header">
            <h2>Building Pulse — Live Estate Status</h2>
            <p>Know the real conditions before you move. Updated by verified caretakers.</p>
          </div>
          <div className="pulse-grid">
            <div className="card pulse-card">
              <div className="pulse-icon">💧</div>
              <h3>Water</h3>
              <div className="badge badge-success">{buildingPulseData.water.status}</div>
              <div className="pulse-status">{buildingPulseData.water.lastUpdate}</div>
            </div>
            <div className="card pulse-card">
              <div className="pulse-icon">⚡</div>
              <h3>Electricity</h3>
              <div className="badge badge-success">{buildingPulseData.electricity.status}</div>
              <div className="pulse-status">{buildingPulseData.electricity.lastUpdate}</div>
            </div>
            <div className="card pulse-card">
              <div className="pulse-icon">🛡️</div>
              <h3>Security</h3>
              <div className="badge badge-success">{buildingPulseData.security.status}</div>
              <div className="pulse-status">{buildingPulseData.security.lastUpdate}</div>
            </div>
            <div className="card pulse-card">
              <div className="pulse-icon">🗑️</div>
              <h3>Garbage</h3>
              <div className="badge badge-info">{buildingPulseData.garbage.status}</div>
              <div className="pulse-status">{buildingPulseData.garbage.lastUpdate}</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/pulse" className="btn btn-primary">View Full Building Pulse</Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="listings-section">
        <div className="container">
          <div className="section-header">
            <h2>Vacant Houses Near You</h2>
            <p>GPS-verified listings. Real photos. No guesswork.</p>
          </div>
          <div className="listings-grid">
            {housingListings.slice(0, 3).map(listing => (
              <div key={listing.id} className="card listing-card">
                <img src={listing.image} alt={listing.title} className="listing-image" />
                <div className="listing-details">
                  <div className="listing-price">Ksh {listing.price.toLocaleString()}/month</div>
                  <div className="listing-location">
                    <MapPin size={16} />
                    {listing.location}
                  </div>
                  <div style={{ fontWeight: '600', marginBottom: '10px' }}>{listing.title}</div>
                  <div className="listing-features">
                    <span className="listing-feature">🏠 {listing.type}</span>
                    <span className="listing-feature">📍 Floor {listing.floor}</span>
                    <span className="listing-feature">📐 {listing.size}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <span className="badge badge-info">💧 {listing.water}</span>
                    <span className="badge badge-info">⚡ {listing.electricity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/listings" className="btn btn-primary">View All Houses</Link>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="marketplace-section">
        <div className="container">
          <div className="section-header">
            <h2>Second-Hand Marketplace</h2>
            <p>Buy and sell within your estate. Verified neighbors. Safe transactions.</p>
          </div>
          <div className="marketplace-grid">
            {marketplaceItems.slice(0, 4).map(item => (
              <div key={item.id} className="card marketplace-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-price">Ksh {item.price.toLocaleString()}</div>
                <div style={{ fontWeight: '600', margin: '8px 0' }}>{item.title}</div>
                <div className="item-location">
                  <MapPin size={14} />
                  {item.location}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '5px' }}>
                  {item.condition}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/marketplace" className="btn btn-primary">Browse All Items</Link>
          </div>
        </div>
      </section>

      {/* Inner Jobs Preview */}
      <section style={{ padding: '60px 0', background: 'var(--ocean-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Inner Jobs — Work in Your Estate</h2>
            <p>Verified local jobs. No travel needed. Trusted employers.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {innerJobs.slice(0, 2).map(job => (
              <div key={job.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{job.title}</div>
                    <div style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>{job.employer}</div>
                  </div>
                  <span className={`badge ${job.verified === 'Gold' ? 'badge-success' : job.verified === 'Blue' ? 'badge-info' : 'badge-warning'}`}>
                    {job.verified === 'Gold' ? '🏆 Institution' : job.verified === 'Blue' ? '🛡️ Caretaker' : '✓ Tenant'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                  <span className="badge badge-info">{job.type}</span>
                  <span className="badge badge-success">{job.pay}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <MapPin size={14} />
                  {job.location} • Posted {job.posted}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/jobs" className="btn btn-primary">View All Jobs</Link>
          </div>
        </div>
      </section>

      {/* Live Map Preview */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Live Map — Real-Time Vacancy Radar</h2>
            <p>See vacancies as they happen. GPS-verified pins. Nothing fake.</p>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={64} style={{ color: 'var(--ocean-light)', marginBottom: '20px' }} />
              <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '10px' }}>Interactive Map View</h3>
              <p style={{ maxWidth: '400px', margin: '0 auto' }}>
                Explore all estates on our live map. See real-time vacancy pins, prices, and availability.
              </p>
              <Link to="/map" className="btn btn-primary" style={{ marginTop: '30px' }}>
                Open Live Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="features-grid">
        <div className="container">
          <div className="section-header">
            <h2>How Keja Scan Works</h2>
            <p>From search to move-in — everything in one place.</p>
          </div>
          <div className="features-grid" style={{ padding: '40px 0' }}>
            <div className="card feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Scan</h3>
              <p>Browse verified listings with real photos, GPS locations, and complete utility information.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">✅</div>
              <h3>Verify</h3>
              <p>Contact caretakers, book viewings, and verify everything before you pay.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Move In</h3>
              <p>Pay deposit securely via escrow, link your residence, and join your building community.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Connect</h3>
              <p>Access jobs, marketplace, services, and build your reputation as a good tenant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, var(--ocean-dark) 0%, var(--ocean-blue) 100%)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '20px' }}>
            Stop Walking. Start Seeing.
          </h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px' }}>
            Join thousands of Kenyans who are finding better houses, saving money, and building stronger communities.
          </p>
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <Link to="/listings" className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--ocean-blue)' }}>
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
