import { Link } from 'react-router-dom';
import { MapPin, Droplets } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import {
  liveFeed,
  serviceModules,
  buildingPulseData,
  stats
} from '../data/dummyData';
import { getAllListings } from '../lib/listings';
import { subscribeListings } from '../lib/storage';

const feedKind = {
  new: { label: 'New vacant', className: 'badge-success' },
  promoted: { label: 'Promoted', className: 'badge-info' },
  activity: { label: 'Live now', className: 'badge-warning' },
  trending: { label: 'Trending', className: 'badge-info' },
  alert: { label: 'Pulse', className: 'badge-success' },
  job: { label: 'Inner Job', className: 'badge-warning' },
  service: { label: 'Service', className: 'badge-info' }
};

function Home() {
  const allListings = useSyncExternalStore(subscribeListings, getAllListings, getAllListings);
  const posted = allListings.filter((item) => item.source === 'user');
  const feed = [
    ...posted.slice(0, 5).map((item) => ({
      id: `posted-${item.id}`,
      kind: item.promoted ? 'promoted' : 'new',
      time: item.posted,
      estate: item.estate,
      text: `${item.verified ? 'Verified landlord' : 'New'}: ${item.title} — KSh ${item.price.toLocaleString()}.`,
      listingId: item.id,
      people: item.views || 0
    })),
    ...liveFeed
  ];
  const preview = allListings.slice(0, 3);
  return (
    <div>
      <section className="hero hero-feed">
        <div className="container">
          <p className="eyebrow">Vacant Kenya · Keja Scan</p>
          <h1>You are already walking inside the estate before you physically go there.</h1>
          <p>
            People in Githurai and Baba Dogo still walk building to building asking for a vacant.
            This feed shows the rooms, the prices, the water, and the life of the place — before the walk.
          </p>
          <div className="flow-chips" aria-label="App flow">
            <span className="flow-chip is-current">1. Feed</span>
            <span className="flow-chip">2. Explore</span>
            <span className="flow-chip">3. Mtaa View</span>
            <span className="flow-chip">4. Deep search</span>
          </div>
          <div className="hero-buttons">
            <Link to="/map" className="btn btn-primary">
              <MapPin size={20} />
              Open Mtaa View
            </Link>
            <Link to="/post" className="btn btn-secondary">
              Post a vacancy
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container stats-grid">
          <div>
            <div className="stat-value">{stats.totalListings}</div>
            <div>Vacant rooms mapped</div>
          </div>
          <div>
            <div className="stat-value">{stats.activeUsers}</div>
            <div>People linked to a house</div>
          </div>
          <div>
            <div className="stat-value">{stats.estatesCovered}</div>
            <div>Nairobi estates</div>
          </div>
          <div>
            <div className="stat-value">{stats.jobsPosted}</div>
            <div>Local jobs this week</div>
          </div>
        </div>
      </section>

      <section className="feed-section">
        <div className="container">
          <div className="section-header">
            <h2>Live housing feed</h2>
            <p>The app does not start with a search bar. It starts with what is happening right now.</p>
          </div>
          <div className="feed-list">
            {feed.map((item) => {
              const kind = feedKind[item.kind] || feedKind.new;
              const inner = (
                <>
                  <div className="feed-meta">
                    <span className={`badge ${kind.className}`}>{kind.label}</span>
                    <span>{item.estate}</span>
                    <span>{item.time}</span>
                    {item.people ? <span>{item.people} viewing</span> : null}
                  </div>
                  <p>{item.text}</p>
                </>
              );
              return item.listingId ? (
                <Link key={item.id} to={`/listings/${item.listingId}`} className="card feed-item">
                  {inner}
                </Link>
              ) : (
                <div key={item.id} className="card feed-item">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pulse-section">
        <div className="container">
          <div className="section-header">
            <h2>Eight modules. One estate life.</h2>
            <p>Housing gets you in the door. Services, water, security, and the community board keep you there.</p>
          </div>
          <div className="module-grid">
            {serviceModules.map((mod) => (
              <Link key={mod.id} to={mod.to} className="card module-card">
                <h3>{mod.label}</h3>
                <p>{mod.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="listings-section">
        <div className="container">
          <div className="section-header">
            <h2>Vacant houses near you</h2>
            <p>Exact building. Exact floor. Exact room. Nothing is “general area” anymore.</p>
          </div>
          <div className="listings-grid">
            {preview.map((listing) => (
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
                    <span className="listing-feature">Floor {listing.floor}</span>
                    <span className="listing-feature">{listing.type}</span>
                    <span className="listing-feature">{listing.size}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/listings" className="btn btn-primary">Explore all vacancies</Link>
          </div>
        </div>
      </section>

      <section className="pulse-section">
        <div className="container">
          <div className="section-header">
            <h2>Building Pulse — before you shower</h2>
            <p>Water, power, security, garbage. Updated by the caretaker who actually lives there.</p>
          </div>
          <div className="pulse-grid">
            <div className="card pulse-card">
              <div className="pulse-icon"><Droplets size={28} /></div>
              <h3>Water</h3>
              <div className="badge badge-success">{buildingPulseData.water.status}</div>
            </div>
            <div className="card pulse-card">
              <h3>Electricity</h3>
              <div className="badge badge-success">{buildingPulseData.electricity.status}</div>
            </div>
            <div className="card pulse-card">
              <h3>Security</h3>
              <div className="badge badge-success">{buildingPulseData.security.status}</div>
            </div>
            <div className="card pulse-card">
              <h3>Garbage</h3>
              <div className="badge badge-info">{buildingPulseData.garbage.status}</div>
            </div>
          </div>
          <div className="center-cta">
            <Link to="/community" className="btn btn-primary">Open community board</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
