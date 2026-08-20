const USER_KEY = 'kejascan-user';
const LISTINGS_KEY = 'kejascan-listings';

function emit(name) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(name));
  }
}

export function loadUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || 'null');
  } catch {
    return null;
  }
}

export function saveUser(user) {
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
  else localStorage.removeItem(USER_KEY);
  emit('keja-user');
}

export function loadPostedListings() {
  try {
    const rows = JSON.parse(localStorage.getItem(LISTINGS_KEY) || '[]');
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

export function savePostedListings(listings) {
  localStorage.setItem(LISTINGS_KEY, JSON.stringify(listings));
  emit('keja-listings');
}

export function daysLeft(listing) {
  const posted = listing.postedAt || Date.now();
  const age = (Date.now() - posted) / (1000 * 60 * 60 * 24);
  return Math.max(0, Math.ceil(30 - age));
}

export function isExpired(listing) {
  return Boolean(listing.taken) || daysLeft(listing) <= 0;
}

export function relativePosted(listing) {
  if (listing.posted) return listing.posted;
  const posted = listing.postedAt || Date.now();
  const mins = Math.max(1, Math.round((Date.now() - posted) / 60000));
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? '' : 's'} ago`;
}

export function subscribeUser(callback) {
  window.addEventListener('keja-user', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('keja-user', callback);
    window.removeEventListener('storage', callback);
  };
}

export function subscribeListings(callback) {
  window.addEventListener('keja-listings', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('keja-listings', callback);
    window.removeEventListener('storage', callback);
  };
}
