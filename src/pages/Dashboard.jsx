import { Link, Navigate } from 'react-router-dom';
import { useSyncExternalStore } from 'react';
import { useAuth } from '../context/AuthContext';
import { daysLeft, isExpired, loadPostedListings, relativePosted, subscribeListings } from '../lib/storage';
import { updateListing } from '../lib/listings';

function Dashboard() {
  const { user, isLister, signOut } = useAuth();
  const listings = useSyncExternalStore(subscribeListings, loadPostedListings, () => []);

  if (!user) return <Navigate to="/auth?next=/dashboard" replace />;

  const mine = listings.filter((item) => item.ownerId === user.id);

  if (!isLister) {
    return (
      <div className="page">
        <div className="container narrow">
          <h2>Hi {user.name}</h2>
          <p>You are signed in as a tenant. Save houses from search. Landlord tools need a landlord or agent account.</p>
          <div className="detail-actions">
            <Link to="/listings" className="btn btn-primary">Search houses</Link>
            <button className="btn btn-secondary" type="button" onClick={signOut}>Sign out</button>
          </div>
        </div>
      </div>
    );
  }

  const views = mine.reduce((sum, item) => sum + (item.views || 0), 0);
  const inquiries = mine.reduce((sum, item) => sum + (item.inquiries || 0), 0);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2>Landlord dashboard</h2>
          <p>
            {user.verified ? 'Verified landlord badge is on.' : 'Verify phone and ID to post.'}
            {' '}Signed in as {user.name} · {user.phone}
          </p>
        </div>

        <div className="stats-grid dash-stats">
          <div className="card pulse-card">
            <div className="stat-value dark">{mine.length}</div>
            <div>Your listings</div>
          </div>
          <div className="card pulse-card">
            <div className="stat-value dark">{views}</div>
            <div>Views</div>
          </div>
          <div className="card pulse-card">
            <div className="stat-value dark">{inquiries}</div>
            <div>Inquiries</div>
          </div>
        </div>

        <div className="detail-actions">
          <Link to="/post" className="btn btn-primary">Post a vacancy</Link>
          <button className="btn btn-secondary" type="button" onClick={signOut}>Sign out</button>
        </div>

        <div className="feed-list" style={{ marginTop: 28 }}>
          {mine.length === 0 ? (
            <div className="card feed-item">
              <p>No vacancies yet. Post one from this phone — it appears in Houses and the live feed on this device.</p>
            </div>
          ) : mine.map((item) => (
            <article key={item.id} className="card feed-item">
              <div className="feed-meta">
                {item.verified ? <span className="badge badge-success">Verified</span> : null}
                {item.promoted ? <span className="badge badge-info">Featured</span> : null}
                {isExpired(item) ? <span className="badge badge-danger">Expired / taken</span> : (
                  <span className="badge badge-warning">{daysLeft(item)} days left</span>
                )}
                <span>{item.estate}</span>
                <span>{relativePosted(item)}</span>
              </div>
              <h3>{item.title}</h3>
              <p>KSh {Number(item.price).toLocaleString()}/month · {item.unitsAvailable || 1} unit(s) · {item.views || 0} views · {item.inquiries || 0} messages</p>
              <div className="detail-actions tight">
                <Link to={`/listings/${item.id}`} className="btn btn-secondary">Open</Link>
                <button className="btn btn-secondary" type="button" onClick={() => updateListing(item.id, { postedAt: Date.now(), taken: false })}>
                  Renew 30 days
                </button>
                <button className="btn btn-secondary" type="button" onClick={() => updateListing(item.id, { taken: true })}>
                  Mark taken
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
