import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { mapLocations, serviceDirectory, communityNotices } from '../data/dummyData';
import { getAllListings } from '../lib/listings';
import { subscribeListings } from '../lib/storage';

const layers = [
  { id: 'housing', label: 'Housing' },
  { id: 'services', label: 'Services' },
  { id: 'community', label: 'Community' }
];

function MapView() {
  const [layer, setLayer] = useState('housing');
  const allListings = useSyncExternalStore(subscribeListings, getAllListings, getAllListings);
  const byEstate = allListings.reduce((acc, item) => {
    acc[item.estate] = (acc[item.estate] || 0) + (item.unitsAvailable || 1);
    return acc;
  }, {});

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2>Mtaa View — live vacancy radar</h2>
          <p>
            Pins are buildings, not “Nairobi general”. Switch layers: vacant rooms, services that come to the
            house, and notices from people who actually live there.
          </p>
        </div>

        <div className="filter-row">
          {layers.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`btn ${layer === item.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setLayer(item.id)}
            >
              {item.label}
            </button>
          ))}
          <span className="badge badge-success">Available</span>
          <span className="badge badge-warning">Few left</span>
          <span className="badge badge-danger">Busy</span>
        </div>

        <div className="map-container mtaa-map">
          <div className="mtaa-grid" />
          {layer === 'housing' && mapLocations.map((location, index) => (
            <Link
              key={location.id}
              to={`/listings?estate=${encodeURIComponent(location.estate)}`}
              className={`map-pin pin-${location.status || 'open'}`}
              style={{ left: `${12 + (index % 4) * 22}%`, top: `${18 + Math.floor(index / 4) * 28}%` }}
            >
              <MapPin size={16} />
              {location.estate}
              <span>{byEstate[location.estate] || location.listings}</span>
            </Link>
          ))}
          {layer === 'services' && serviceDirectory.filter((item) => ['water', 'locksmith', 'movers', 'security'].includes(item.module)).slice(0, 8).map((item, index) => (
            <Link
              key={item.id}
              to={`/services?module=${item.module}`}
              className="map-pin pin-service"
              style={{ left: `${10 + (index % 4) * 22}%`, top: `${20 + Math.floor(index / 4) * 32}%` }}
            >
              {item.module} · {item.estate}
            </Link>
          ))}
          {layer === 'community' && communityNotices.map((notice, index) => (
            <Link
              key={notice.id}
              to="/community"
              className="map-pin pin-community"
              style={{ left: `${14 + (index % 3) * 28}%`, top: `${22 + Math.floor(index / 3) * 30}%` }}
            >
              {notice.type}: {notice.estate}
            </Link>
          ))}
          <div className="mtaa-legend">
            <div>
              <strong>{allListings.length} vacancies on this device</strong>
              <p>Demo rooms plus anything a landlord posted here. Pins update when you publish a vacancy.</p>
            </div>
            <Link to="/listings" className="btn btn-primary">Deep search</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapView;
