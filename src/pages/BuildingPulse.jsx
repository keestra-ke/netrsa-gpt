import { Droplets, Zap, Shield, Trash2, User } from 'lucide-react';
import { buildingPulseData } from '../data/dummyData';

function BuildingPulse() {
  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>Building Pulse — Live Estate Status</h2>
          <p>Know the real conditions before you move. Updated by verified caretakers.</p>
        </div>

        {/* Main Pulse Dashboard */}
        <div className="card" style={{ padding: '40px', marginBottom: '40px', background: 'linear-gradient(135deg, var(--ocean-dark) 0%, var(--ocean-blue) 100%)', color: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Sunrise Block B — Githurai 44</h3>
              <p style={{ opacity: 0.9 }}>Updated 30 minutes ago by Mama Akinyi</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span className="badge badge-success">Water: Constant</span>
              <span className="badge badge-success">Electricity: Stable</span>
            </div>
          </div>
        </div>

        {/* Utility Status Grid */}
        <div className="pulse-grid">
          <div className="card pulse-card">
            <div className="pulse-icon">💧</div>
            <h3>Water Status</h3>
            <div className="badge badge-success">{buildingPulseData.water.status}</div>
            <div className="pulse-status">Updated {buildingPulseData.water.lastUpdate}</div>
            <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Tank full. No rationing this week. Next collection: Monday 6AM.
            </p>
          </div>

          <div className="card pulse-card">
            <div className="pulse-icon">⚡</div>
            <h3>Electricity</h3>
            <div className="badge badge-success">{buildingPulseData.electricity.status}</div>
            <div className="pulse-status">Updated {buildingPulseData.electricity.lastUpdate}</div>
            <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Token meters. Average cost: Ksh 350/week per room. No blackouts reported.
            </p>
          </div>

          <div className="card pulse-card">
            <div className="pulse-icon">🛡️</div>
            <h3>Security</h3>
            <div className="badge badge-success">{buildingPulseData.security.status}</div>
            <div className="pulse-status">Updated {buildingPulseData.security.lastUpdate}</div>
            <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Gate closes at 10PM. Night guard on duty. CCTV at entrance.
            </p>
          </div>

          <div className="card pulse-card">
            <div className="pulse-icon">🗑️</div>
            <h3>Garbage Collection</h3>
            <div className="badge badge-info">{buildingPulseData.garbage.status}</div>
            <div className="pulse-status">{buildingPulseData.garbage.lastUpdate}</div>
            <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Fee: Ksh 200/month. Collected every Tuesday and Friday morning.
            </p>
          </div>
        </div>

        {/* Caretaker Info */}
        <div className="card" style={{ marginTop: '40px', padding: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--ocean-light) 0%, var(--ocean-accent) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: 'white'
            }}>
              👤
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--ocean-blue)' }}>Caretaker on Duty</h3>
              <div style={{ fontSize: '1.2rem', fontWeight: '600', margin: '5px 0' }}>{buildingPulseData.caretaker.name}</div>
              <div style={{ color: 'var(--text-secondary)' }}>Contact: {buildingPulseData.caretaker.contact}</div>
              <div style={{ marginTop: '10px' }}>
                <span className="badge badge-success">✓ Verified Caretaker</span>
                <span className="badge badge-info" style={{ marginLeft: '10px' }}>★ 4.8/5 Rating</span>
              </div>
            </div>
            <button className="btn btn-primary">Contact Now</button>
          </div>
        </div>

        {/* Recent Updates Timeline */}
        <div className="card" style={{ marginTop: '40px', padding: '30px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--ocean-blue)', marginBottom: '20px' }}>Recent Updates</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'start', padding: '15px', background: 'var(--ocean-surface)', borderRadius: '8px' }}>
              <Droplets size={20} color="var(--ocean-light)" />
              <div>
                <div style={{ fontWeight: '600' }}>Water tank refilled</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Today at 6:30 AM • Full capacity restored</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'start', padding: '15px', background: 'var(--ocean-surface)', borderRadius: '8px' }}>
              <Zap size={20} color="var(--ocean-light)" />
              <div>
                <div style={{ fontWeight: '600' }}>Electricity stable</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Yesterday at 2:00 PM • No outages in past 7 days</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'start', padding: '15px', background: 'var(--ocean-surface)', borderRadius: '8px' }}>
              <Shield size={20} color="var(--ocean-light)" />
              <div>
                <div style={{ fontWeight: '600' }}>Security gate repaired</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>3 days ago • Auto-lock system now working</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'start', padding: '15px', background: 'var(--ocean-surface)', borderRadius: '8px' }}>
              <Trash2 size={20} color="var(--ocean-light)" />
              <div>
                <div style={{ fontWeight: '600' }}>Garbage schedule updated</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>1 week ago • Now collecting Tue & Fri</div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Issue CTA */}
        <div className="card" style={{ marginTop: '40px', textAlign: 'center', padding: '40px', background: 'linear-gradient(135deg, var(--ocean-surface) 0%, var(--white) 100%)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--ocean-blue)', marginBottom: '15px' }}>
            Notice an Issue?
          </h3>
          <p style={{ maxWidth: '500px', margin: '0 auto 30px', color: 'var(--text-secondary)' }}>
            Report water problems, electricity issues, or security concerns. Your feedback helps improve the estate for everyone.
          </p>
          <button className="btn btn-primary">Report Issue</button>
        </div>
      </div>
    </div>
  );
}

export default BuildingPulse;
