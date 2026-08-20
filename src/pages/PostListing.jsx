import { useMemo, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { mapLocations } from '../data/dummyData';
import { useAuth } from '../context/AuthContext';
import { addListing } from '../lib/listings';

const FEATURES = ['Parking', 'Security', 'Water available', 'WiFi', 'Balcony', 'Generator', 'Furnished'];
const TYPES = ['Single Room', 'Bedsitter', 'One Bedroom', 'Two Bedroom', 'Apartment', 'House', 'Land', 'Event venue'];
const CONTACTS = [
  { id: 'call', label: 'Phone call' },
  { id: 'chat', label: 'In-app chat' },
  { id: 'whatsapp', label: 'WhatsApp' }
];

function readPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(1, 640 / img.width);
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.62));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function PostListing() {
  const { user, isLister } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [photos, setPhotos] = useState([]);
  const [features, setFeatures] = useState(['Water available']);
  const [contacts, setContacts] = useState(['call', 'whatsapp']);
  const [form, setForm] = useState({
    title: '',
    type: 'Bedsitter',
    price: '',
    deposit: '',
    city: 'Nairobi',
    estate: 'Githurai',
    plotName: '',
    floor: '1',
    size: '',
    unitsAvailable: '1',
    description: '',
    water: 'Constant',
    electricity: 'Token',
    featured: false
  });

  const pin = useMemo(
    () => mapLocations.find((item) => item.estate === form.estate) || mapLocations[0],
    [form.estate]
  );

  if (!user) return <Navigate to="/auth?next=/post" replace />;
  if (!isLister) {
    return (
      <div className="page">
        <div className="container narrow">
          <h2>Switch to a landlord account</h2>
          <p>Tenants search. Only landlords and agents can post a vacancy.</p>
          <Link to="/auth?next=/post" className="btn btn-primary">Create landlord account</Link>
        </div>
      </div>
    );
  }

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggle(list, setter, id) {
    setter(list.includes(id) ? list.filter((item) => item !== id) : [...list, id]);
  }

  async function onPhotos(event) {
    const files = [...event.target.files].slice(0, 6);
    const next = [];
    for (const file of files) {
      next.push(await readPhoto(file));
    }
    setPhotos(next);
  }

  function submit(event) {
    event.preventDefault();
    if (!form.title.trim() || !form.price) {
      setError('Add a title and monthly rent.');
      return;
    }
    if (!user.verified) {
      setError('Verify phone and ID before posting. That badge is how tenants trust you.');
      return;
    }
    const listing = {
      id: `u-${Date.now()}`,
      ownerId: user.id,
      source: 'user',
      title: form.title.trim(),
      type: form.type,
      price: Number(form.price),
      deposit: Number(form.deposit || form.price),
      city: form.city,
      estate: form.estate,
      location: `${form.estate}${form.plotName ? `, ${form.plotName}` : ''}`,
      plotName: form.plotName.trim() || form.estate,
      floor: Number(form.floor) || 1,
      size: form.size.trim() || 'Ask on viewing',
      bathrooms: form.type === 'Single Room' ? 'Shared' : 1,
      rooms: form.type.includes('Two') ? 2 : 1,
      unitsAvailable: Number(form.unitsAvailable) || 1,
      water: form.water,
      electricity: form.electricity,
      wifi: features.includes('WiFi') ? 'Available' : 'Ask landlord',
      security: features.includes('Security') ? 'Good' : 'Ask landlord',
      features,
      contactMethods: contacts,
      photos,
      image: photos[0] || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      description: form.description.trim(),
      lat: pin.lat,
      lng: pin.lng,
      landlord: user.name,
      caretaker: user.name,
      caretakerPhone: user.phone,
      landlordOnPlot: user.role === 'landlord',
      agency: user.role === 'agent' ? user.name : null,
      paymentMethod: 'M-Pesa',
      verified: Boolean(user.verified),
      promoted: form.featured,
      views: 0,
      inquiries: 0,
      taken: false,
      postedAt: Date.now()
    };
    addListing(listing);
    navigate(`/listings/${listing.id}`);
  }

  return (
    <div className="page">
      <div className="container narrow">
        <div className="section-header">
          <h2>Post a vacancy</h2>
          <p>Same-day photos, exact estate pin, and a 30-day expiry unless you renew. No agent middleman.</p>
        </div>

        <form className="card form-card" onSubmit={submit}>
          <label>
            Property title
            <input value={form.title} onChange={(e) => setField('title', e.target.value)} placeholder="1 Bedroom Apartment in Roysambu" required />
          </label>
          <label>
            Property type
            <select value={form.type} onChange={(e) => setField('type', e.target.value)}>
              {TYPES.map((type) => <option key={type}>{type}</option>)}
            </select>
          </label>
          <div className="form-row">
            <label>
              Rent (KSh / month)
              <input type="number" min="0" value={form.price} onChange={(e) => setField('price', e.target.value)} placeholder="15000" required />
            </label>
            <label>
              Deposit (KSh)
              <input type="number" min="0" value={form.deposit} onChange={(e) => setField('deposit', e.target.value)} placeholder="15000" />
            </label>
          </div>
          <div className="form-row">
            <label>
              City
              <input value={form.city} onChange={(e) => setField('city', e.target.value)} />
            </label>
            <label>
              Estate
              <select value={form.estate} onChange={(e) => setField('estate', e.target.value)}>
                {mapLocations.map((item) => <option key={item.estate}>{item.estate}</option>)}
              </select>
            </label>
          </div>
          <label>
            Building / plot name
            <input value={form.plotName} onChange={(e) => setField('plotName', e.target.value)} placeholder="Kimani Plot" />
          </label>
          <div className="form-row">
            <label>
              Floor
              <input type="number" min="0" value={form.floor} onChange={(e) => setField('floor', e.target.value)} />
            </label>
            <label>
              Size
              <input value={form.size} onChange={(e) => setField('size', e.target.value)} placeholder="4m x 5m" />
            </label>
            <label>
              Units vacant
              <input type="number" min="1" value={form.unitsAvailable} onChange={(e) => setField('unitsAvailable', e.target.value)} />
            </label>
          </div>
          <label>
            Photos (interior, exterior, bathroom, kitchen — up to 6)
            <input type="file" accept="image/*" multiple onChange={onPhotos} />
          </label>
          {photos.length > 0 && (
            <div className="photo-row">
              {photos.map((src, index) => (
                <img key={index} src={src} alt={`Listing photo ${index + 1}`} />
              ))}
            </div>
          )}
          <fieldset>
            <legend>Features</legend>
            <div className="check-grid">
              {FEATURES.map((item) => (
                <label key={item} className="check">
                  <input
                    type="checkbox"
                    checked={features.includes(item)}
                    onChange={() => toggle(features, setFeatures, item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="form-row">
            <label>
              Water
              <select value={form.water} onChange={(e) => setField('water', e.target.value)}>
                <option>Constant</option>
                <option>Rationed</option>
              </select>
            </label>
            <label>
              Electricity
              <select value={form.electricity} onChange={(e) => setField('electricity', e.target.value)}>
                <option>Stable</option>
                <option>Token</option>
                <option>Shared meter</option>
              </select>
            </label>
          </div>
          <fieldset>
            <legend>How tenants contact you</legend>
            <div className="check-grid">
              {CONTACTS.map((item) => (
                <label key={item.id} className="check">
                  <input
                    type="checkbox"
                    checked={contacts.includes(item.id)}
                    onChange={() => toggle(contacts, setContacts, item.id)}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>
          <label>
            Description
            <textarea rows="4" value={form.description} onChange={(e) => setField('description', e.target.value)} placeholder="Gate time, tank days, nearest matatu..." />
          </label>
          <div className="map-preview">
            <strong>Map pin · {form.estate}</strong>
            <p>Lat {pin.lat}, Lng {pin.lng}. Live Google Maps pins come after the Maps API key is added.</p>
          </div>
          <label className="check">
            <input type="checkbox" checked={form.featured} onChange={(e) => setField('featured', e.target.checked)} />
            Feature this listing (demo — live price KSh 500/week)
          </label>
          {error ? <p className="form-error">{error}</p> : null}
          <button className="btn btn-primary" type="submit">Publish vacancy</button>
        </form>
      </div>
    </div>
  );
}

export default PostListing;
