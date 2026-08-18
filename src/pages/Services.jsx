import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { serviceDirectory } from '../data/dummyData';

const filters = [
  { id: 'all', label: 'All services' },
  { id: 'movers', label: 'Movers' },
  { id: 'vibarua', label: 'Vibarua' },
  { id: 'water', label: 'Water' },
  { id: 'security', label: 'Security' },
  { id: 'network', label: 'Network' },
  { id: 'locksmith', label: 'Door breaker' },
  { id: 'venues', label: 'Venues' }
];

function Services() {
  const [params, setParams] = useSearchParams();
  const moduleId = params.get('module') || 'all';

  const items = useMemo(
    () => (moduleId === 'all' ? serviceDirectory : serviceDirectory.filter((item) => item.module === moduleId)),
    [moduleId]
  );

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2>Estate services — they come to the exact house</h2>
          <p>
            Movers, vibarua, water vendors, Nyumba Kumi, signal reports, meeting halls, and a door breaker
            for 2AM. Book on M-Pesa. Ratings stay on the person, not in a WhatsApp chat that disappears.
          </p>
        </div>

        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`btn ${moduleId === filter.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setParams(filter.id === 'all' ? {} : { module: filter.id })}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="muted">{items.length} listed in demo data · Nairobi estates</p>

        <div className="service-grid">
          {items.map((item) => (
            <article key={item.id} className="card">
              <div className="feed-meta">
                <span className="badge badge-info">{item.module}</span>
                <span>{item.estate}</span>
                <span>{item.available}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="service-rate">
                <strong>{item.rate}</strong>
                <span>★ {item.rating}</span>
              </div>
              <button className="btn btn-primary" type="button">Request via M-Pesa</button>
            </article>
          ))}
        </div>

        <p className="muted center-cta">
          Need a house first? <Link to="/listings">Deep search vacancies</Link> or open <Link to="/map">Mtaa View</Link>.
        </p>
      </div>
    </div>
  );
}

export default Services;
