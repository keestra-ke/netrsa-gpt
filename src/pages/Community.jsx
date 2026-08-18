import { Link } from 'react-router-dom';
import { buildingPulseData, communityNotices, innerJobs } from '../data/dummyData';

function Community() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2>Community board — only people who live here</h2>
          <p>
            Link your residence and alerts go to the building, not the whole internet. Water outage,
            security, lost keys, neighbour sales. This is why the app stays open after you move in.
          </p>
        </div>

        <div className="card pulse-banner">
          <div>
            <h3>Sunrise Block B — Githurai 44</h3>
            <p>Caretaker {buildingPulseData.caretaker.name} is on duty · {buildingPulseData.caretaker.contact}</p>
          </div>
          <div className="detail-badges">
            <span className="badge badge-success">Water {buildingPulseData.water.status}</span>
            <span className="badge badge-success">Power {buildingPulseData.electricity.status}</span>
            <span className="badge badge-success">Security {buildingPulseData.security.status}</span>
          </div>
        </div>

        <div className="split-links">
          <Link to="/pulse" className="btn btn-secondary">Full Building Pulse</Link>
          <Link to="/jobs" className="btn btn-secondary">Inner Jobs</Link>
          <Link to="/marketplace" className="btn btn-secondary">Neighbour Exchange</Link>
        </div>

        <h3 className="subhead">Notices</h3>
        <div className="feed-list">
          {communityNotices.map((notice) => (
            <article key={notice.id} className="card feed-item">
              <div className="feed-meta">
                <span className="badge badge-info">{notice.type}</span>
                <span>{notice.estate}</span>
                <span>{notice.time}</span>
              </div>
              <h3>{notice.title}</h3>
              <p>{notice.body}</p>
            </article>
          ))}
        </div>

        <h3 className="subhead">Work in the estate</h3>
        <div className="service-grid">
          {innerJobs.map((job) => (
            <article key={job.id} className="card">
              <h3>{job.title}</h3>
              <p>{job.employer}</p>
              <p className="muted">{job.pay} · {job.location} · {job.posted}</p>
              <Link to="/jobs" className="btn btn-primary">See Inner Jobs</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;
