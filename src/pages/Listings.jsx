import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { housingListings, listingExtras } from '../data/dummyData';

function Listings() {
  const [params] = useSearchParams();
  const [filterType, setFilterType] = useState('All');
  const [query, setQuery] = useState(params.get('estate') || '');

  const filteredListings = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return housingListings.filter((listing) => {
      const extra = listingExtras[listing.id] || {};
      const matchesType = filterType === 'All' || listing.type === filterType;
      const haystack = `${listing.title} ${listing.location} ${listing.estate} ${extra.plotName || ''}`.toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      return matchesType && matchesQuery;
    });
  }, [filterType, query]);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2>Deep search — vacant rooms in Nairobi</h2>
          <p>Type Githurai, Baba Dogo, Kayole, Kasarani. Then open the room. Floor number matters.</p>
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
          {['All', 'Single Room', 'Bedsitter', 'One Bedroom', 'Two Bedroom'].map((type) => (
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

        <p className="muted">Showing {filteredListings.length} {filteredListings.length === 1 ? 'listing' : 'listings'}</p>

        <div className="listings-grid">
          {filteredListings.map((listing) => {
            const extra = listingExtras[listing.id] || {};
            return (
              <article key={listing.id} className="card listing-card">
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
                    <span className="listing-feature">{listing.size}</span>
                    <span className="listing-feature">{listing.caretaker}</span>
                  </div>
                  <div className="detail-badges">
                    <span className={`badge ${listing.water === 'Constant' ? 'badge-success' : 'badge-warning'}`}>
                      Water {listing.water}
                    </span>
                    <span className="badge badge-info">Power {listing.electricity}</span>
                    {extra.landlordOnPlot ? <span className="badge badge-info">Landlord on plot</span> : null}
                  </div>
                  <div className="detail-actions tight">
                    <Link to={`/listings/${listing.id}`} className="btn btn-primary">View the room</Link>
                  </div>
                  <p className="muted center-note">Posted {listing.posted} · {listing.views} views</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Listings;
