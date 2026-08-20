import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { getAllListings } from '../lib/listings';
import { subscribeListings } from '../lib/storage';

function Listings() {
  const [params] = useSearchParams();
  const [filterType, setFilterType] = useState('All');
  const [query, setQuery] = useState(params.get('estate') || '');
  const allListings = useSyncExternalStore(subscribeListings, getAllListings, getAllListings);

  const types = useMemo(() => {
    const unique = [...new Set(allListings.map((item) => item.type))];
    return ['All', ...unique];
  }, [allListings]);

  const filteredListings = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return allListings.filter((listing) => {
      const matchesType = filterType === 'All' || listing.type === filterType;
      const haystack = `${listing.title} ${listing.location} ${listing.estate} ${listing.plotName || ''}`.toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      return matchesType && matchesQuery;
    });
  }, [allListings, filterType, query]);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2>Deep search — vacant rooms in Nairobi</h2>
          <p>Landlords post here. Listings expire after 30 days unless renewed. Type Githurai, Baba Dogo, Kayole, Kasarani.</p>
        </div>

        <div className="filter-row">
          <label className="search-box">
            <Search size={20} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by estate, plot, or area..."
            />
          </label>
          {types.slice(0, 8).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilterType(type)}
              className={`btn ${filterType === type ? 'btn-primary' : 'btn-secondary'}`}
            >
              {type}
            </button>
          ))}
        </div>

        <p className="muted">
          Showing {filteredListings.length} {filteredListings.length === 1 ? 'listing' : 'listings'}
          {' · '}
          <Link to="/post">Post a vacancy</Link>
        </p>

        <div className="listings-grid">
          {filteredListings.map((listing) => (
            <Link key={listing.id} to={`/listings/${listing.id}`} className="card listing-card listing-link">
              <img src={listing.image} alt={listing.title} className="listing-image" />
              <div className="listing-details">
                <div className="listing-price">KSh {listing.price.toLocaleString()}/month</div>
                <div className="listing-location">
                  <MapPin size={16} />
                  {listing.location}
                </div>
                <div className="listing-title">{listing.title}</div>
                <div className="listing-features">
                  <span className="listing-feature">{listing.type}</span>
                  <span className="listing-feature">Floor {listing.floor}</span>
                  {listing.unitsAvailable > 1 ? (
                    <span className="listing-feature">{listing.unitsAvailable} units</span>
                  ) : (
                    <span className="listing-feature">{listing.size}</span>
                  )}
                </div>
                <div className="detail-badges">
                  {listing.verified ? <span className="badge badge-success">Verified landlord</span> : null}
                  {listing.source === 'user' ? <span className="badge badge-info">Posted here</span> : null}
                  <span className={`badge ${listing.water === 'Constant' ? 'badge-success' : 'badge-warning'}`}>
                    Water {listing.water}
                  </span>
                </div>
                <div className="detail-actions tight">
                  <span className="btn btn-primary">View the room</span>
                </div>
                <p className="muted center-note">Posted {listing.posted} · {listing.views || 0} views</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listings;
