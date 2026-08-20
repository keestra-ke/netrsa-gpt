const SELECTOR = [
  'a[href]:not([href="#"]):not([href=""])',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

function isVisible(el) {
  if (!(el instanceof HTMLElement)) return false;
  if (el.closest('[hidden], [aria-hidden="true"], [inert]')) return false;
  const style = window.getComputedStyle(el);
  if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) {
    return false;
  }
  const rect = el.getBoundingClientRect();
  return rect.width >= 2 && rect.height >= 2;
}

function focusables(root = document) {
  return [...root.querySelectorAll(SELECTOR)].filter(
    (el) => isVisible(el) && !el.classList.contains('nav-toggle')
  );
}

function inDirection(from, to, dir) {
  const a = from.getBoundingClientRect();
  const b = to.getBoundingClientRect();
  const ax = a.left + a.width / 2;
  const ay = a.top + a.height / 2;
  const bx = b.left + b.width / 2;
  const by = b.top + b.height / 2;

  if (dir === 'left') return bx < ax - 8 || b.right <= a.left + 8;
  if (dir === 'right') return bx > ax + 8 || b.left >= a.right - 8;
  if (dir === 'up') return by < ay - 8 || b.bottom <= a.top + 8;
  if (dir === 'down') return by > ay + 8 || b.top >= a.bottom - 8;
  return false;
}

function overlapPerp(a, b, dir) {
  if (dir === 'left' || dir === 'right') {
    return Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  }
  return Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
}

function score(from, to, dir) {
  const a = from.getBoundingClientRect();
  const b = to.getBoundingClientRect();
  const ax = a.left + a.width / 2;
  const ay = a.top + a.height / 2;
  const bx = b.left + b.width / 2;
  const by = b.top + b.height / 2;
  const overlap = overlapPerp(a, b, dir);

  let forward;
  let sideways;
  if (dir === 'right') {
    forward = Math.max(8, b.left - a.right, bx - ax);
    sideways = Math.abs(by - ay);
  } else if (dir === 'left') {
    forward = Math.max(8, a.left - b.right, ax - bx);
    sideways = Math.abs(by - ay);
  } else if (dir === 'down') {
    forward = Math.max(8, b.top - a.bottom, by - ay);
    sideways = Math.abs(bx - ax);
  } else {
    forward = Math.max(8, a.top - b.bottom, ay - by);
    sideways = Math.abs(bx - ax);
  }

  const aligned = overlap > 4 ? 0 : sideways * 6;
  return forward + aligned - overlap * 0.5;
}

function move(dir) {
  const items = focusables();
  if (!items.length) return false;
  const active = document.activeElement;
  const from = items.includes(active) ? active : null;
  if (!from) {
    focusEl(items[0]);
    return true;
  }

  let best = null;
  let bestScore = Infinity;
  for (const item of items) {
    if (item === from) continue;
    if (!inDirection(from, item, dir)) continue;
    const next = score(from, item, dir);
    if (next < bestScore) {
      bestScore = next;
      best = item;
    }
  }

  if (!best) {
    if (dir === 'down' || dir === 'right') {
      best = items[0] === from ? items[1] : items[0];
    } else {
      const last = items[items.length - 1];
      best = last === from ? items[items.length - 2] : last;
    }
  }

  if (!best) return false;
  focusEl(best);
  return true;
}

function focusEl(el) {
  el.focus({ preventScroll: true });
  el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
}

function typingInField(el, key) {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  if (tag === 'SELECT') return key.startsWith('Arrow');
  const editable = tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
  if (!editable) return false;
  if (tag === 'INPUT' && ['checkbox', 'radio', 'button', 'submit', 'file'].includes(el.type)) {
    return false;
  }
  if (key === 'ArrowLeft' || key === 'ArrowRight') return true;
  if (tag === 'TEXTAREA' && (key === 'ArrowUp' || key === 'ArrowDown')) return true;
  return false;
}

function detectTv() {
  try {
    if (window.KejaNative && typeof window.KejaNative.isTv === 'function' && window.KejaNative.isTv()) {
      return true;
    }
  } catch {
    /* native bridge not ready */
  }
  if (window.__KEJA_TV) return true;
  const ua = navigator.userAgent || '';
  if (/Leanback|Android TV|GoogleTV|BRAVIA|AFT|SmartTV|HbbTV|TV Safari|CrKey/i.test(ua)) return true;
  if (/Android/i.test(ua) && /TV/i.test(ua)) return true;
  return false;
}

function applyTvClass() {
  const tv = detectTv();
  document.documentElement.classList.toggle('tv-mode', tv);
  document.body?.classList.toggle('tv-mode', tv);
  return tv;
}

export function focusPageStart() {
  applyTvClass();
  if (!document.documentElement.classList.contains('tv-mode')) return;
  const main = document.querySelector('main');
  const items = focusables(main || document);
  if (items.length) focusEl(items[0]);
}

export function initRemoteNavigation() {
  applyTvClass();
  window.addEventListener('keja-tv', applyTvClass);
  window.addEventListener('keja-route', () => {
    window.setTimeout(focusPageStart, 80);
  });
  window.addEventListener('load', applyTvClass);

  document.addEventListener(
    'keydown',
    (event) => {
      const key = event.key;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', ' ', 'Escape', 'Backspace'].includes(key)) {
        document.documentElement.classList.add('remote-nav');
      }

      if (key === 'Escape' || key === 'BrowserBack') {
        if (window.history.length > 1) {
          event.preventDefault();
          window.history.back();
        }
        return;
      }

      if (key === 'PageDown') {
        event.preventDefault();
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        return;
      }
      if (key === 'PageUp') {
        event.preventDefault();
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
        return;
      }

      if (typingInField(document.activeElement, key)) return;

      const dir = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right'
      }[key];

      if (dir && move(dir)) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true
  );

  const start = () => {
    applyTvClass();
    const active = document.activeElement;
    if (
      document.documentElement.classList.contains('tv-mode')
      && (!active || active === document.body || active === document.documentElement)
    ) {
      const items = focusables();
      if (items.length) focusEl(items[0]);
    }
  };

  if (document.readyState === 'complete') start();
  else window.addEventListener('DOMContentLoaded', start);
  window.setTimeout(start, 600);
}
