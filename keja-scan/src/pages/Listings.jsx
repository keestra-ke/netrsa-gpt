import { useState } from 'react';
import { MapPin, Filter, Search } from 'lucide-react';
import { housingListings } from '../data/dummyData';

function Listings() {
  const [filterType, setFilterType] = useState('All');
  
  const filteredListings = filterType === 'All' 
    ? housingListings 
    : housingListings.filter(l => l.type === filterType);

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>Find Your Next Home</h2>
          <p>Browse all verified vacant houses across Nairobi estates</p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--white)', padding: '10px 20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Search size={20} color="var(--ocean-blue)" />
            <input 
              type="text" 
              placeholder="Search by estate..." 
              style={{ border: 'none', outline: 'none', fontSize: '1rem' }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['All', 'Single Room', 'Bedsitter', 'One Bedroom', 'Two Bedroom'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`btn ${filterType === type ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
          Showing {filteredListings.length} {filteredListings.length === 1 ? 'listing' : 'listings'}
        </div>

        {/* Listings Grid */}
        <div className="listings-grid">
          {filteredListings.map(listing => (
            <div key={listing.id} className="card listing-card">
              <img src={listing.image} alt={listing.title} className="listing-image" />
              <div className="listing-details">
                <div className="listing-price">Ksh {listing.price.toLocaleString()}/month</div>
                <div className="listing-location">
                  <MapPin size={16} />
                  {listing.location}
                </div>
                <div style={{ fontWeight: '600', marginBottom: '10px' }}>{listing.title}</div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '15px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <div>🏠 {listing.type}</div>
                  <div>📍 Floor {listing.floor}</div>
                  <div>📐 {listing.size}</div>
                  <div>👤 Caretaker: {listing.caretaker}</div>
                </div>

                <div className="listing-features">
                  {listing.features.map((feature, idx) => (
                    <span key={idx} className="listing-feature">✓ {feature}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                  <span className={`badge ${listing.water === 'Constant' ? 'badge-success' : 'badge-warning'}`}>
                    💧 {listing.water}
                  </span>
                  <span className={`badge ${listing.electricity === 'Stable' ? 'badge-success' : 'badge-info'}`}>
                    ⚡ {listing.electricity}
                  </span>
                  <span className={`badge ${listing.security === 'Excellent' ? 'badge-success' : listing.security === 'Good' ? 'badge-info' : 'badge-warning'}`}>
                    🛡️ {listing.security}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button className="btn btn-primary" style={{ flex: 1, padding: '10px' }}>Contact</button>
                  <button className="btn btn-secondary" style={{ flex: 1, padding: '10px' }}>View Details</button>
                </div>

                <div style={{ marginTop: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                  Posted {listing.posted} • {listing.views} views
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listings;
