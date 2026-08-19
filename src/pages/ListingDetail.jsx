import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { getListing } from '../data/dummyData';
import BookingFlow from '../components/BookingFlow';

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
  const listing = getListing(id);
  const [booking, setBooking] = useState(false);

  if (!listing) {
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

        <div className="detail-badges">
          {listing.verified ? <span className="badge badge-success">Verified listing</span> : null}
          {listing.promoted ? <span className="badge badge-info">Promoted</span> : null}
          {listing.landlordOnPlot ? <span className="badge badge-info">Landlord lives on plot</span> : null}
          {listing.viewingNow ? <span className="badge badge-warning">{listing.viewingNow} viewing now</span> : null}
          {listing.expiresInDays ? <span className="badge badge-warning">Expires in {listing.expiresInDays} days</span> : null}
        </div>

        <div className="detail-grid">
          <section className="card">
            <h3>Physical structure</h3>
            <Row label="Building / plot" value={listing.plotName || listing.location} />
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
            <p className="muted">Deposit can sit in escrow until you confirm you have arrived. No walking with cash to a stranger.</p>
          </section>

          <section className="card">
            <h3>Who owns this</h3>
            <Row label="Landlord" value={listing.landlord || 'On file'} />
            <Row label="Caretaker" value={`${listing.caretaker}${listing.caretakerPhone ? ` · ${listing.caretakerPhone}` : ''}`} />
            <Row label="Agency" value={listing.agency || 'None — direct to caretaker'} />
          </section>

          <section className="card">
            <h3>Real life utilities</h3>
            <Row label="Water" value={listing.waterDetail || listing.water} />
            <Row label="Electricity" value={listing.electricityDetail || listing.electricity} />
            <Row label="Wi-Fi" value={listing.wifi || 'Ask caretaker'} />
            <Row label="Security" value={listing.security} />
            <Row label="Noise" value={listing.noise || '—'} />
            <Row label="Safety score" value={listing.safetyRating ? `${listing.safetyRating} / 5` : '—'} />
          </section>

          <section className="card">
            <h3>How far</h3>
            <Row label="Matatu" value={listing.matatuDistance || '—'} />
            <Row label="Hospital" value={listing.hospitalDistance || '—'} />
            <Row label="School" value={listing.schoolDistance || '—'} />
          </section>

          <section className="card">
            <h3>Property rules</h3>
            <Row label="Gate" value={listing.rules?.gate || 'Ask caretaker'} />
            <Row label="Visitors" value={listing.rules?.visitors || 'Ask caretaker'} />
            <Row label="Quiet hours" value={listing.rules?.quietHours || 'Ask caretaker'} />
            <Row label="Shared spaces" value={listing.rules?.cleanliness || 'Ask caretaker'} />
          </section>
        </div>

        <div className="detail-actions">
          <button className="btn btn-primary" type="button" onClick={() => setBooking(true)}>
            Talk to caretaker &amp; pay deposit
          </button>
          <Link to="/map" className="btn btn-secondary">See it on Mtaa View</Link>
        </div>
      </div>

      {booking ? <BookingFlow listing={listing} onClose={() => setBooking(false)} /> : null}
    </div>
  );
}

export default ListingDetail;
