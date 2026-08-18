import { useState } from 'react';
import { MapPin, ShoppingBag, Filter } from 'lucide-react';
import { marketplaceItems } from '../data/dummyData';

function Marketplace() {
  const [filterCategory, setFilterCategory] = useState('All');
  
  const categories = ['All', ...new Set(marketplaceItems.map(item => item.category))];
  const filteredItems = filterCategory === 'All' 
    ? marketplaceItems 
    : marketplaceItems.filter(item => item.category === filterCategory);

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>Second-Hand Marketplace</h2>
          <p>Buy and sell within your estate. Verified neighbors. Safe transactions.</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ocean-light)' }}>{marketplaceItems.length}</div>
            <div style={{ color: 'var(--text-secondary)' }}>Active Listings</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ocean-light)' }}>{categories.length - 1}</div>
            <div style={{ color: 'var(--text-secondary)' }}>Categories</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ocean-light)' }}>100%</div>
            <div style={{ color: 'var(--text-secondary)' }}>Verified Sellers</div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`btn ${filterCategory === category ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="marketplace-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="card marketplace-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-price">Ksh {item.price.toLocaleString()}</div>
              <div style={{ fontWeight: '600', margin: '8px 0' }}>{item.title}</div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <span className="badge badge-info">{item.category}</span>
                <span className="badge badge-success">{item.condition}</span>
              </div>
              <div className="item-location">
                <MapPin size={14} />
                {item.location}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '5px' }}>
                Seller: {item.seller} • Posted {item.posted}
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '15px' }}>
                Contact Seller
              </button>
            </div>
          ))}
        </div>

        {/* CTA for Sellers */}
        <div className="card" style={{ marginTop: '60px', textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, var(--ocean-surface) 0%, var(--white) 100%)' }}>
          <ShoppingBag size={48} style={{ color: 'var(--ocean-light)', marginBottom: '20px' }} />
          <h3 style={{ fontSize: '1.8rem', color: 'var(--ocean-blue)', marginBottom: '15px' }}>
            Have Something to Sell?
          </h3>
          <p style={{ maxWidth: '500px', margin: '0 auto 30px', color: 'var(--text-secondary)' }}>
            List your items and reach verified buyers in your estate. Safe, local, and trusted.
          </p>
          <button className="btn btn-primary">
            List Item for Sale
          </button>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
