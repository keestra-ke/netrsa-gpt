import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const roles = [
  { id: 'tenant', title: 'Tenant', blurb: 'Search houses, save rooms, talk to caretakers.' },
  { id: 'landlord', title: 'Landlord', blurb: 'Post vacancies, upload photos, see views and messages.' },
  { id: 'agent', title: 'Agent', blurb: 'List for more than one landlord. Same posting tools.' }
];

function Auth() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const next = new URLSearchParams(location.search).get('next') || '/dashboard';

  const [role, setRole] = useState('landlord');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  function sendOtp(event) {
    event.preventDefault();
    if (!name.trim() || !/^0[17]\d{8}$/.test(phone.replace(/\s/g, ''))) {
      setError('Enter your name and a Kenyan phone like 0712 345678.');
      return;
    }
    setError('');
    setOtpSent(true);
  }

  function verify(event) {
    event.preventDefault();
    if (otp.trim() !== '1234') {
      setError('Use demo code 1234. Live SMS OTP comes after Africa’s Talking is connected.');
      return;
    }
    if (role !== 'tenant' && !/^\d{6,8}$/.test(idNumber.trim())) {
      setError('Enter a 6–8 digit ID number for the verified landlord badge.');
      return;
    }
    signIn({
      id: `u-${Date.now()}`,
      name: name.trim(),
      phone: phone.replace(/\s/g, ''),
      role,
      idNumber: idNumber.trim() || null,
      verified: true,
      createdAt: Date.now()
    });
    navigate(next);
  }

  return (
    <div className="page">
      <div className="container narrow">
        <div className="section-header">
          <h2>Join Keja Scan</h2>
          <p>Tenants search. Landlords and agents post vacancies. Phone + ID keeps fake listings down.</p>
        </div>

        <div className="role-grid">
          {roles.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`card role-card ${role === item.id ? 'is-selected' : ''}`}
              onClick={() => setRole(item.id)}
            >
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
            </button>
          ))}
        </div>

        <form className="card form-card" onSubmit={otpSent ? verify : sendOtp}>
          <label>
            Your name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Mama Akinyi" required />
          </label>
          <label>
            M-Pesa / phone
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0712 345678" required />
          </label>
          {role !== 'tenant' && (
            <label>
              National ID
              <input value={idNumber} onChange={(e) => setIdNumber(e.target.value)} placeholder="12345678" />
            </label>
          )}
          {otpSent && (
            <label>
              SMS code (demo: 1234)
              <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="1234" required />
            </label>
          )}
          {error ? <p className="form-error">{error}</p> : null}
          <button className="btn btn-primary" type="submit">
            {otpSent ? 'Verify and continue' : 'Send demo code'}
          </button>
          <p className="muted">This phone stays on this device until we add a real backend. No password.</p>
        </form>

        <p className="muted"><Link to="/listings">Skip and browse houses</Link></p>
      </div>
    </div>
  );
}

export default Auth;
