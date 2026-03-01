'use strict';

// ── Sticky header shadow ───────────────────────────────────────────
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Mobile menu toggle ─────────────────────────────────────────────
const toggle = document.querySelector('.nav__toggle');
toggle.addEventListener('click', () => {
  header.classList.toggle('menu-open');
  const expanded = header.classList.contains('menu-open');
  toggle.setAttribute('aria-expanded', String(expanded));
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Language picker ────────────────────────────────────────────────
const langBtn      = document.getElementById('langBtn');
const langLabel    = document.getElementById('langLabel');
const langDropdown = document.getElementById('langDropdown');
const langOptions  = langDropdown.querySelectorAll('.lang-picker__option');

const LANG_LABELS = { en: 'EN', fr: 'FR', es: 'ES', de: 'DE' };

function setLang(lang) {
  // Apply translations
  window.i18n.apply(lang);

  // Update picker UI
  langLabel.textContent = LANG_LABELS[lang] || lang.toUpperCase();
  langOptions.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Persist
  try { localStorage.setItem('bm-lang', lang); } catch (_) {}
}

langBtn.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = langDropdown.classList.toggle('is-open');
  langBtn.setAttribute('aria-expanded', String(isOpen));
});

langOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    setLang(btn.dataset.lang);
    langDropdown.classList.remove('is-open');
    langBtn.setAttribute('aria-expanded', 'false');
  });
});

// Close dropdown on outside click
document.addEventListener('click', () => {
  langDropdown.classList.remove('is-open');
  langBtn.setAttribute('aria-expanded', 'false');
});

// Close dropdown on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    langDropdown.classList.remove('is-open');
    langBtn.setAttribute('aria-expanded', 'false');
  }
});

// ── Contact form: client-side feedback ────────────────────────────
const form = document.querySelector('.contact__form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn      = form.querySelector('[type="submit"]');
    const lang     = document.documentElement.lang || 'en';
    const sentText = window.i18n.t(lang, 'contact.form.sent');
    const origText = window.i18n.t(lang, 'contact.form.submit');

    btn.textContent = sentText;
    btn.disabled    = true;
    btn.style.background = '#4a7c59';

    setTimeout(() => {
      btn.textContent      = origText;
      btn.disabled         = false;
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
}

// ── Fade-in on scroll ──────────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.card, .focus-item, .builder-card, .standard'
);

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    io.observe(el);
  });
}

// ── Initialise language ────────────────────────────────────────────
(function initLang() {
  let saved = 'en';
  try { saved = localStorage.getItem('bm-lang') || 'en'; } catch (_) {}
  const validLangs = ['en', 'fr', 'es', 'de'];
  setLang(validLangs.includes(saved) ? saved : 'en');
})();
