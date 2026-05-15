import { MapPin, ZoomIn, ZoomOut } from 'lucide-react';
import { mapLocations, housingListings } from '../data/dummyData';

function MapView() {
  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>Live Map — Real-Time Vacancy Radar</h2>
          <p>See vacancies as they happen. GPS-verified pins. Nothing fake.</p>
        </div>

        {/* Map Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" style={{ padding: '8px 16px' }}>
              <ZoomOut size={18} />
            </button>
            <button className="btn btn-secondary" style={{ padding: '8px 16px' }}>
              <ZoomIn size={18} />
            </button>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span className="badge badge-success">● Available</span>
            <span className="badge badge-warning">● Few Left</span>
            <span className="badge badge-danger">● Taken</span>
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="map-container" style={{ height: '600px' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(135deg, #e8f4f8 0%, #d4e5ed 100%)' }}>
            {/* Map Background Pattern */}
            <div style={{ 
              position: 'absolute', 
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(15, 52, 96, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15, 52, 96, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />

            {/* Estate Pins */}
            {mapLocations.map((location, index) => (
              <div
                key={location.id}
                className="map-pin"
                style={{
                  position: 'absolute',
                  left: `${20 + (index * 15)}%`,
                  top: `${30 + (index % 3) * 20}%`,
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  background: 'var(--ocean-blue)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(15, 52, 96, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  <MapPin size={16} />
                  {location.estate}
                  <span style={{ background: 'var(--ocean-accent)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem' }}>
                    {location.listings}
                  </span>
                </div>
              </div>
            ))}

            {/* Floating Info Card */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              right: '30px',
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--ocean-blue)', marginBottom: '5px' }}>
                  {housingListings.length} Active Listings
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Across {mapLocations.length} estates in Nairobi
                </div>
              </div>
              <button className="btn btn-primary">
                View All Listings
              </button>
            </div>
          </div>
        </div>

        {/* Estate Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {mapLocations.map(location => (
            <div key={location.id} className="card" style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontWeight: '700', color: 'var(--ocean-blue)', marginBottom: '5px' }}>
                {location.estate}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--ocean-light)' }}>
                {location.listings}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                vacant houses
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MapView;
