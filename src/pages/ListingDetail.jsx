import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { bumpInquiries, bumpViews, getListingById } from '../lib/listings';

function Row({ label, value }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ListingDetail() {
  const { id } = useParams();
  const listing = getListingById(id);

  useEffect(() => {
    if (listing && listing.source === 'user' && !listing.expired) bumpViews(id);
  }, [id, listing]);

  if (!listing || listing.expired) {
    return (
      <div className="page">
        <div className="container">
          <h2>This room is gone</h2>
          <p>It may already be taken, or the listing expired after 30 days.</p>
          <Link to="/listings" className="btn btn-primary">Back to houses</Link>
        </div>
      </div>
    );
  }

  const phone = (listing.caretakerPhone || '').replace(/\s/g, '');
  const wa = phone.replace(/^0/, '254');
  const methods = listing.contactMethods || ['call', 'whatsapp'];

  function inquire() {
    bumpInquiries(id);
  }

  return (
    <div className="page">
      <div className="container">
        <p className="eyebrow">Exact place · Floor {listing.floor} · {listing.estate}</p>
        <h2>{listing.title}</h2>
        <p className="listing-location">
          <MapPin size={16} />
          {listing.plotName || listing.location}
        </p>

        <img src={listing.image} alt={listing.title} className="detail-hero-img" />
        {listing.photos?.length > 1 && (
          <div className="photo-row">
            {listing.photos.slice(1).map((src, index) => (
              <img key={index} src={src} alt={`Photo ${index + 2}`} />
            ))}
          </div>
        )}

        <div className="detail-badges">
          {listing.verified ? <span className="badge badge-success">Verified landlord</span> : null}
          {listing.promoted ? <span className="badge badge-info">Featured</span> : null}
          {listing.unitsAvailable > 1 ? <span className="badge badge-info">{listing.unitsAvailable} units available</span> : null}
          {listing.landlordOnPlot ? <span className="badge badge-info">Landlord lives on plot</span> : null}
          {listing.expiresInDays ? <span className="badge badge-warning">Expires in {listing.expiresInDays} days</span> : null}
        </div>

        {listing.description ? <p className="muted">{listing.description}</p> : null}

        <div className="detail-grid">
          <section className="card">
            <h3>Physical structure</h3>
            <Row label="Building / plot" value={listing.plotName || listing.location} />
            <Row label="City" value={listing.city || 'Nairobi'} />
            <Row label="Estate" value={listing.estate} />
            <Row label="Floor" value={listing.floor} />
            <Row label="Room type" value={listing.type} />
            <Row label="Size" value={listing.size} />
            <Row label="Bathroom" value={listing.bathrooms} />
          </section>

          <section className="card">
            <h3>Money</h3>
            <Row label="Rent" value={`KSh ${listing.price.toLocaleString()} / month`} />
            <Row label="Deposit" value={listing.deposit ? `KSh ${listing.deposit.toLocaleString()}` : 'Ask caretaker'} />
            <Row label="Pay" value={listing.paymentMethod || 'M-Pesa'} />
          </section>

          <section className="card">
            <h3>Who owns this</h3>
            <Row label="Landlord" value={listing.landlord || 'On file'} />
            <Row label="Caretaker" value={`${listing.caretaker}${listing.caretakerPhone ? ` · ${listing.caretakerPhone}` : ''}`} />
            <Row label="Agency" value={listing.agency || 'None — direct to caretaker'} />
          </section>

          <section className="card">
            <h3>Features</h3>
            <p>{(listing.features || []).join(', ') || 'Ask on viewing'}</p>
            <Row label="Water" value={listing.waterDetail || listing.water} />
            <Row label="Electricity" value={listing.electricityDetail || listing.electricity} />
            <Row label="Wi-Fi" value={listing.wifi || 'Ask caretaker'} />
          </section>
        </div>

        <div className="detail-actions">
          {methods.includes('call') && phone ? (
            <a className="btn btn-primary" href={`tel:${phone}`} onClick={inquire}>Call</a>
          ) : (
            <button className="btn btn-primary" type="button" onClick={inquire}>Talk to caretaker first</button>
          )}
          {methods.includes('whatsapp') && wa.length >= 10 ? (
            <a className="btn btn-secondary" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" onClick={inquire}>WhatsApp</a>
          ) : null}
          {methods.includes('chat') ? (
            <Link to="/dashboard" className="btn btn-secondary" onClick={inquire}>In-app chat</Link>
          ) : null}
          <Link to="/map" className="btn btn-secondary">See it on Mtaa View</Link>
        </div>
      </div>
    </div>
  );
}

export default ListingDetail;
