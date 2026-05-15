import React, { useState } from 'react';
import { MapPin, Home, Users, Briefcase, ShoppingBag, Activity, Menu, X, Phone, CheckCircle } from 'lucide-react';

// --- DUMMY DATA ---
const LISTINGS = [
  { id: 1, title: "Spacious Bedsitter", location: "Githurai 44", price: 5500, beds: 1, baths: 1, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400", tag: "Verified" },
  { id: 2, title: "Modern 1 Bedroom", location: "Baba Dogo", price: 9500, beds: 1, baths: 1, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400", tag: "New" },
  { id: 3, title: "Single Room", location: "Kasarani", price: 3500, beds: 0, baths: 1, img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400", tag: "Hot" },
  { id: 4, title: "Luxury Apartment", location: "Roysambu", price: 15000, beds: 2, baths: 1, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400", tag: "Premium" },
];

const MARKETPLACE = [
  { id: 1, title: "Used Sofa Set", price: 8000, location: "Githurai", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=300" },
  { id: 2, title: "Gas Cooker 2-Burner", price: 2500, location: "Baba Dogo", img: "https://images.unsplash.com/photo-1584269600519-112d071b35e6?auto=format&fit=crop&q=80&w=300" },
  { id: 3, title: "Office Desk", price: 4000, location: "Kasarani", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=300" },
  { id: 4, title: "Fridge (Double Door)", price: 12000, location: "Pipeline", img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=300" },
];

const JOBS = [
  { id: 1, title: "Plumber Needed", type: "Urgent", location: "Kayole", poster: "Caretaker John" },
  { id: 2, title: "Cleaning Lady", type: "Part-time", location: "Githurai", poster: "Mama Akinyi" },
  { id: 3, title: "Electrician", type: "Contract", location: "Roysambu", poster: "Estate Mgmt" },
];

const BUILDING_PULSE = {
  water: "Low (Rationing)",
  electricity: "Stable",
  security: "Normal",
  garbage: "Collected at 7:00 AM",
  caretaker: "Mama Wanjiku (On Duty)"
};

// --- COMPONENTS ---

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'listings', label: 'Houses', icon: <MapPin size={18} /> },
    { id: 'market', label: 'Market', icon: <ShoppingBag size={18} /> },
    { id: 'jobs', label: 'Jobs', icon: <Briefcase size={18} /> },
    { id: 'pulse', label: 'Pulse', icon: <Activity size={18} /> },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>KS</div>
        <span>KEJA SCAN</span>
      </div>
      
      {/* Desktop Nav */}
      <div style={styles.desktopNav}>
        {navItems.map(item => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              ...styles.navBtn,
              backgroundColor: activeTab === item.id ? '#0ea5e9' : 'transparent',
              color: activeTab === item.id ? '#fff' : '#e0f2fe'
            }}
          >
            {item.icon}
            <span style={{marginLeft: '8px'}}>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div style={styles.mobileNav}>
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
              style={{
                ...styles.mobileNavBtn,
                backgroundColor: activeTab === item.id ? '#0ea5e9' : '#1e293b',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setActiveTab }) => (
  <div style={styles.hero}>
    <h1 style={styles.heroTitle}>Scan the Kejas.<br/>Find Your Place.</h1>
    <p style={styles.heroSub}>The digital life of the Kenyan estate. Verify rooms, check water status, and find local jobs before you move.</p>
    <div style={styles.heroBtns}>
      <button onClick={() => setActiveTab('listings')} style={styles.primaryBtn}>Find a House</button>
      <button onClick={() => setActiveTab('market')} style={styles.secondaryBtn}>Browse Market</button>
    </div>
  </div>
);

const ListingCard = ({ item }) => (
  <div style={styles.card}>
    <div style={styles.cardImgWrapper}>
      <img src={item.img} alt={item.title} style={styles.cardImg} />
      <span style={styles.tag}>{item.tag}</span>
    </div>
    <div style={styles.cardBody}>
      <h3 style={styles.cardTitle}>{item.title}</h3>
      <div style={styles.cardMeta}>
        <MapPin size={14} color="#0ea5e9" /> {item.location}
      </div>
      <div style={styles.cardPrice}>Ksh {item.price.toLocaleString()}/mo</div>
      <button style={styles.cardBtn}>View Details</button>
    </div>
  </div>
);

const MarketCard = ({ item }) => (
  <div style={styles.card}>
    <img src={item.img} alt={item.title} style={styles.cardImg} />
    <div style={styles.cardBody}>
      <h3 style={styles.cardTitle}>{item.title}</h3>
      <div style={styles.cardMeta}>
        <MapPin size={14} color="#0ea5e9" /> {item.location}
      </div>
      <div style={styles.cardPrice}>Ksh {item.price.toLocaleString()}</div>
      <button style={styles.cardBtn}>Contact Seller</button>
    </div>
  </div>
);

const PulseWidget = () => (
  <div style={styles.pulseBox}>
    <h3 style={styles.sectionTitle}>🏢 Building Pulse (Live)</h3>
    <div style={styles.pulseGrid}>
      <div style={styles.pulseItem}><span style={styles.pulseLabel}>💧 Water:</span> <span style={{color: '#fbbf24'}}>{BUILDING_PULSE.water}</span></div>
      <div style={styles.pulseItem}><span style={styles.pulseLabel}>⚡ Power:</span> <span style={{color: '#4ade80'}}>{BUILDING_PULSE.electricity}</span></div>
      <div style={styles.pulseItem}><span style={styles.pulseLabel}>🛡️ Security:</span> <span style={{color: '#4ade80'}}>{BUILDING_PULSE.security}</span></div>
      <div style={styles.pulseItem}><span style={styles.pulseLabel}>🗑️ Garbage:</span> {BUILDING_PULSE.garbage}</div>
      <div style={styles.pulseItem}><span style={styles.pulseLabel}>👮 Caretaker:</span> {BUILDING_PULSE.caretaker}</div>
    </div>
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <>
            <Hero setActiveTab={setActiveTab} />
            <div style={styles.container}>
              <PulseWidget />
              <h2 style={styles.sectionTitle}>🔥 Trending Houses</h2>
              <div style={styles.grid}>
                {LISTINGS.map(item => <ListingCard key={item.id} item={item} />)}
              </div>
              
              <h2 style={styles.sectionTitle}>🛒 Second-Hand Market</h2>
              <div style={styles.grid}>
                {MARKETPLACE.map(item => <MarketCard key={item.id} item={item} />)}
              </div>
            </div>
          </>
        );
      case 'listings':
        return (
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Available Rooms in Nairobi</h2>
            <div style={styles.grid}>
              {LISTINGS.map(item => <ListingCard key={item.id} item={item} />)}
              {LISTINGS.map(item => <ListingCard key={`dup-${item.id}`} item={item} />)}
            </div>
          </div>
        );
      case 'market':
        return (
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Neighbour Exchange</h2>
            <p style={{color: '#94a3b8', marginBottom: '20px'}}>Buy and sell safely within your verified estate.</p>
            <div style={styles.grid}>
              {MARKETPLACE.map(item => <MarketCard key={item.id} item={item} />)}
              {MARKETPLACE.map(item => <MarketCard key={`dup-${item.id}`} item={item} />)}
            </div>
          </div>
        );
      case 'jobs':
        return (
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Inner Jobs Board</h2>
            <div style={styles.jobList}>
              {JOBS.map(job => (
                <div key={job.id} style={styles.jobCard}>
                  <div>
                    <h3 style={styles.jobTitle}>{job.title}</h3>
                    <div style={styles.jobMeta}>{job.location} • Posted by {job.poster}</div>
                  </div>
                  <span style={styles.jobType}>{job.type}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'pulse':
        return (
          <div style={styles.container}>
            <PulseWidget />
            <div style={styles.mapPlaceholder}>
              <MapPin size={48} color="#0ea5e9" />
              <h3>Live Estate Map</h3>
              <p>Interactive map showing water lines, security posts, and vacant rooms coming soon.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.app}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={styles.content}>
        {renderContent()}
      </div>
      <footer style={styles.footer}>
        <p>© 2025 Keja Scan. The Digital Life of the Kenyan Estate.</p>
      </footer>
    </div>
  );
}

// --- STYLES (Ocean Blue Fluid Theme) ---

const styles = {
  app: { minHeight: '100vh', backgroundColor: '#0f172a', color: '#f1f5f9', fontFamily: 'system-ui, sans-serif' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#1e293b', borderBottom: '1px solid #334155', position: 'sticky', top: 0, zIndex: 50 },
  logo: { display: 'flex', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#38bdf8' },
  logoIcon: { width: '40px', height: '40px', backgroundColor: '#0ea5e9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginRight: '10px', fontSize: '1.2rem' },
  desktopNav: { display: 'none', gap: '10px' },
  mobileToggle: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'block' },
  mobileNav: { position: 'absolute', top: '70px', left: 0, right: 0, backgroundColor: '#1e293b', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid #334155' },
  navBtn: { display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', color: '#e0f2fe', cursor: 'pointer', transition: 'all 0.2s' },
  mobileNavBtn: { display: 'flex', alignItems: 'center', padding: '0.8rem', borderRadius: '6px', border: 'none', color: '#fff', cursor: 'pointer', width: '100%', textAlign: 'left' },
  hero: { textAlign: 'center', padding: '4rem 1rem', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', borderBottom: '1px solid #334155' },
  heroTitle: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem' },
  heroBtns: { display: 'flex', gap: '1rem', justifyContent: 'center' },
  primaryBtn: { padding: '0.8rem 1.5rem', backgroundColor: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  secondaryBtn: { padding: '0.8rem 1.5rem', backgroundColor: 'transparent', border: '2px solid #0ea5e9', color: '#0ea5e9', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' },
  sectionTitle: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', marginTop: '2rem', color: '#f1f5f9' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' },
  card: { backgroundColor: '#1e293b', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155', transition: 'transform 0.2s' },
  cardImgWrapper: { position: 'relative' },
  cardImg: { width: '100%', height: '180px', objectFit: 'cover' },
  tag: { position: 'absolute', top: '10px', right: '10px', backgroundColor: '#0ea5e9', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' },
  cardBody: { padding: '1rem' },
  cardTitle: { fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' },
  cardMeta: { display: 'flex', alignItems: 'center', gap: '5px', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' },
  cardPrice: { fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '1rem' },
  cardBtn: { width: '100%', padding: '0.6rem', backgroundColor: '#334155', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  pulseBox: { backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155', marginBottom: '2rem' },
  pulseGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' },
  pulseItem: { backgroundColor: '#0f172a', padding: '0.8rem', borderRadius: '6px' },
  pulseLabel: { fontWeight: 'bold', color: '#94a3b8' },
  jobList: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  jobCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' },
  jobTitle: { fontSize: '1.1rem', fontWeight: 'bold' },
  jobMeta: { color: '#94a3b8', fontSize: '0.9rem', marginTop: '5px' },
  jobType: { backgroundColor: '#0ea5e9', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' },
  mapPlaceholder: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem', backgroundColor: '#1e293b', borderRadius: '12px', border: '1px dashed #334155', textAlign: 'center' },
  footer: { textAlign: 'center', padding: '2rem', color: '#64748b', borderTop: '1px solid #334155', marginTop: '2rem' }
};

// Responsive adjustments
if (typeof window !== 'undefined') {
  const width = window.innerWidth;
  if (width >= 768) {
    styles.desktopNav.display = 'flex';
    styles.mobileToggle.display = 'none';
  }
}
