import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Lock, Phone, ShieldCheck, X } from 'lucide-react';
import {
  authorizeAndHoldInEscrow,
  caretakerScript,
  confirmArrivalReleaseEscrow,
  initiateStkPush,
} from '../data/mockBackend';

const STEPS = ['chat', 'deposit', 'pin', 'held', 'released'];

function StepDots({ current }) {
  const activeIndex = STEPS.indexOf(current);
  return (
    <div className="flow-chips" style={{ margin: '0 0 20px' }}>
      {['Talk', 'Deposit', 'Authorize', 'Escrow', 'Released'].map((label, i) => (
        <span key={label} className={`flow-chip${i <= activeIndex ? ' is-current' : ''}`}>
          {label}
        </span>
      ))}
    </div>
  );
}

function BookingFlow({ listing, onClose }) {
  const amount = listing.deposit || listing.price;
  const [step, setStep] = useState('chat');
  const [messages, setMessages] = useState([]);
  const [phone, setPhone] = useState('0790 123 456');
  const [pin, setPin] = useState('');
  const [stk, setStk] = useState(null);
  const [escrow, setEscrow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (step !== 'chat') return undefined;
    const script = caretakerScript(listing);
    setMessages([]);
    const timers = script.map((msg, i) =>
      setTimeout(() => setMessages((prev) => [...prev, msg]), 500 + i * 900),
    );
    return () => timers.forEach(clearTimeout);
  }, [step, listing]);

  async function sendStkPush() {
    setError('');
    setLoading(true);
    try {
      const res = await initiateStkPush({ phone, amount });
      setStk(res);
      setStep('pin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function authorize() {
    setError('');
    setLoading(true);
    try {
      const res = await authorizeAndHoldInEscrow({ pin, amount, listing });
      setEscrow(res);
      setStep('held');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function releaseEscrow() {
    setError('');
    setLoading(true);
    try {
      const res = await confirmArrivalReleaseEscrow({ receipt: escrow.receipt, listing });
      setEscrow((prev) => ({ ...prev, ...res }));
      setStep('released');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <span className="badge badge-warning">Demo · simulated M-Pesa &amp; escrow</span>
        <h3 className="subhead" style={{ marginTop: 12 }}>
          Secure {listing.title}
        </h3>
        <StepDots current={step} />

        {error ? <p className="flow-error">{error}</p> : null}

        {step === 'chat' && (
          <div>
            <p className="muted">
              <ShieldCheck size={16} /> Contact the caretaker first — you agree terms before any money moves.
            </p>
            <div className="chat-box">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-bubble chat-${msg.from}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="detail-actions tight">
              <button
                className="btn btn-primary"
                type="button"
                disabled={messages.length < 4}
                onClick={() => setStep('deposit')}
              >
                Agree terms &amp; place deposit
              </button>
            </div>
          </div>
        )}

        {step === 'deposit' && (
          <div>
            <p className="muted">
              Deposit <strong>KSh {amount.toLocaleString()}</strong> goes into platform escrow — not to
              a stranger. It is only released after you arrive and confirm.
            </p>
            <label className="field-label" htmlFor="mpesa-phone">
              <Phone size={16} /> M-Pesa number
            </label>
            <input
              id="mpesa-phone"
              className="field-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XX XXX XXX"
            />
            <div className="detail-actions tight">
              <button className="btn btn-primary" type="button" disabled={loading} onClick={sendStkPush}>
                {loading ? <Loader2 size={16} className="spin" /> : null}
                Send M-Pesa prompt
              </button>
            </div>
          </div>
        )}

        {step === 'pin' && stk && (
          <div>
            <div className="phone-prompt">
              <p className="phone-prompt-title">MPESA</p>
              <p>{stk.prompt}</p>
              <p className="phone-prompt-meta">Business: {stk.merchant}</p>
            </div>
            <label className="field-label" htmlFor="mpesa-pin">
              <Lock size={16} /> Enter M-Pesa PIN (any 4 digits for demo)
            </label>
            <input
              id="mpesa-pin"
              className="field-input"
              value={pin}
              inputMode="numeric"
              maxLength={4}
              type="password"
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
              placeholder="••••"
            />
            <div className="detail-actions tight">
              <button className="btn btn-primary" type="button" disabled={loading} onClick={authorize}>
                {loading ? <Loader2 size={16} className="spin" /> : null}
                Authorize KSh {amount.toLocaleString()}
              </button>
            </div>
          </div>
        )}

        {step === 'held' && escrow && (
          <div>
            <div className="flow-success">
              <ShieldCheck size={40} />
              <h4>Held in escrow</h4>
              <p>{escrow.message}</p>
              <p className="phone-prompt-meta">M-Pesa receipt: {escrow.receipt}</p>
            </div>
            <p className="muted">
              Now go view the room. When you have arrived and it matches the listing, release the deposit.
            </p>
            <div className="detail-actions tight">
              <button className="btn btn-primary" type="button" disabled={loading} onClick={releaseEscrow}>
                {loading ? <Loader2 size={16} className="spin" /> : null}
                I&apos;ve arrived — release deposit
              </button>
            </div>
          </div>
        )}

        {step === 'released' && escrow && (
          <div className="flow-success">
            <CheckCircle2 size={44} color="#10b981" />
            <h4>Deposit released</h4>
            <p>{escrow.message}</p>
            <p className="phone-prompt-meta">M-Pesa receipt: {escrow.receipt}</p>
            <div className="detail-actions tight">
              <button className="btn btn-primary" type="button" onClick={onClose}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingFlow;
