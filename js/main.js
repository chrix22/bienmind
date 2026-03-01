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

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Contact form: basic client-side feedback ───────────────────────
const form = document.querySelector('.contact__form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = '#4a7c59';

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
}

// ── Fade-in on scroll ─────────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.card, .focus-item, .builder-card, .standard'
);

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    io.observe(el);
  });
}
