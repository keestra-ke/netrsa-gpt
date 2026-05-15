import { Briefcase, Award, Clock, MapPin } from 'lucide-react';
import { innerJobs } from '../data/dummyData';

function InnerJobs() {
  const getVerifiedBadge = (level) => {
    switch(level) {
      case 'Gold': return { text: '🏆 Institution Verified', class: 'badge-success' };
      case 'Blue': return { text: '🛡️ Caretaker Approved', class: 'badge-info' };
      case 'Green': return { text: '✓ Tenant Verified', class: 'badge-warning' };
      default: return { text: 'Unverified', class: 'badge-danger' };
    }
  };

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>Inner Jobs — Work in Your Estate</h2>
          <p>Verified local jobs. No travel needed. Trusted employers.</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ocean-light)' }}>{innerJobs.length}</div>
            <div style={{ color: 'var(--text-secondary)' }}>Active Jobs</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ocean-light)' }}>3</div>
            <div style={{ color: 'var(--text-secondary)' }}>Verification Levels</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ocean-light)' }}>100%</div>
            <div style={{ color: 'var(--text-secondary)' }}>Local Opportunities</div>
          </div>
        </div>

        {/* Trust Levels Info */}
        <div className="card" style={{ marginBottom: '40px', padding: '30px', background: 'linear-gradient(135deg, var(--ocean-surface) 0%, var(--white) 100%)' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--ocean-blue)', marginBottom: '20px' }}>Job Verification Levels</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
              <span className="badge badge-success" style={{ fontSize: '0.9rem' }}>🏆 Institution</span>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '5px' }}>Gold Badge</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Schools, supermarkets, clinics, churches. Verified with official documents.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
              <span className="badge badge-info" style={{ fontSize: '0.9rem' }}>🛡️ Caretaker</span>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '5px' }}>Blue Shield</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Approved by your building caretaker. Extra layer of trust.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
              <span className="badge badge-warning" style={{ fontSize: '0.9rem' }}>✓ Tenant</span>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '5px' }}>Green Tick</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Posted by verified tenants in your building. Physical familiarity.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {innerJobs.map(job => {
            const badge = getVerifiedBadge(job.verified);
            return (
              <div key={job.id} className="card" style={{ padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.3rem', color: 'var(--ocean-blue)', margin: 0 }}>{job.title}</h3>
                      <span className={`badge ${badge.class}`}>{badge.text}</span>
                    </div>
                    <div style={{ fontWeight: '600', marginBottom: '10px' }}>{job.employer}</div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>{job.description}</p>
                    
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Briefcase size={16} color="var(--ocean-light)" />
                        <span style={{ fontSize: '0.9rem' }}>{job.type}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Award size={16} color="var(--success)" />
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--success)' }}>{job.pay}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={16} color="var(--ocean-light)" />
                        <span style={{ fontSize: '0.9rem' }}>Posted {job.posted}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={16} color="var(--ocean-light)" />
                        <span style={{ fontSize: '0.9rem' }}>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary" style={{ padding: '12px 30px' }}>
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Post Job CTA */}
        <div className="card" style={{ marginTop: '40px', textAlign: 'center', padding: '40px', background: 'linear-gradient(135deg, var(--ocean-dark) 0%, var(--ocean-blue) 100%)', color: 'white' }}>
          <Briefcase size={48} style={{ marginBottom: '20px', opacity: 0.9 }} />
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
            Have a Job to Offer?
          </h3>
          <p style={{ maxWidth: '500px', margin: '0 auto 30px', opacity: 0.9 }}>
            Post a job and reach verified tenants in your estate. Whether you need a cleaner, fundi, or shop assistant — find trusted help nearby.
          </p>
          <button className="btn btn-primary" style={{ background: 'white', color: 'var(--ocean-blue)' }}>
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default InnerJobs;
