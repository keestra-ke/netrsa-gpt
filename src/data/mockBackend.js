// DEMO ONLY — simulated backend for the "Contact Before Booking" and
// "Deposit Escrow" flows described in vacant_kenya_concept.md (§4.5, §4.9).
//
// There is no real database, M-Pesa Daraja API, or escrow account here. These
// functions fake network latency with timers and return plausible responses so
// the end-to-end money flow can be demonstrated "as if everything is wired up".
// Swap these out for real API calls (Daraja STK Push, escrow ledger, chat
// service) when the backend is built.

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function receiptCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 10; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// Simulated caretaker conversation. In production this is a real chat/thread
// service scoped to the listing and the two verified users.
export function caretakerScript(listing) {
  const name = listing.caretaker || 'Caretaker';
  return [
    { from: 'you', text: `Habari ${name}, is the ${listing.type} at ${listing.plotName || listing.location} still vacant?` },
    { from: 'them', text: `Yes, still available. Rent is KSh ${listing.price.toLocaleString()}/month, deposit KSh ${(listing.deposit || listing.price).toLocaleString()}. You can view today.` },
    { from: 'you', text: 'Poa. I want to secure it. Can I place the deposit in escrow before I come?' },
    { from: 'them', text: 'Yes — pay into the app escrow. I only get it once you arrive and confirm. Karibu.' },
  ];
}

// Simulated M-Pesa STK Push. Real version calls Safaricom Daraja
// `/mpesa/stkpush/v1/processrequest` and waits for the callback.
export async function initiateStkPush({ phone, amount }) {
  await delay(1400);
  const normalized = String(phone).replace(/\s+/g, '');
  const valid = /^(?:\+?254|0)7\d{8}$/.test(normalized);
  if (!valid) {
    const error = new Error('Enter a valid Safaricom number, e.g. 0790 123 456');
    error.code = 'INVALID_PHONE';
    throw error;
  }
  return {
    checkoutRequestId: `ws_CO_${Date.now()}`,
    merchant: 'VACANT KENYA ESCROW',
    amount,
    phone: normalized,
    prompt: `M-PESA: Enter your PIN to send KSh ${amount.toLocaleString()} to VACANT KENYA ESCROW for the room deposit.`,
  };
}

// Simulated PIN authorization + escrow hold. Real version reconciles the Daraja
// callback and credits the platform escrow ledger (not the caretaker yet).
export async function authorizeAndHoldInEscrow({ pin, amount, listing }) {
  await delay(1800);
  if (!/^\d{4}$/.test(String(pin))) {
    const error = new Error('M-Pesa PIN is 4 digits.');
    error.code = 'INVALID_PIN';
    throw error;
  }
  return {
    status: 'held_in_escrow',
    receipt: `Q${receiptCode()}`,
    amount,
    heldAt: new Date().toISOString(),
    caretaker: listing.caretaker,
    message: `KSh ${amount.toLocaleString()} received and held in escrow. Funds are NOT released to ${listing.caretaker} until you confirm you have arrived.`,
  };
}

// Simulated escrow release after the tenant verifies the place on-site.
export async function confirmArrivalReleaseEscrow({ receipt, listing }) {
  await delay(1500);
  return {
    status: 'released',
    receipt,
    releasedTo: listing.caretaker,
    message: `Deposit released to ${listing.caretaker}. Your tenancy is recorded and your deposit is now portable to your next move.`,
  };
}
