'use strict';

// ── OpenClaw Model Registry ─────────────────────────────────────────
// Centralised list of supported AI models available for services
// published on BienMind. Add or update models here to propagate
// changes across the site automatically.

const OPENCLAW_MODELS = [
  // ── Google Gemini ─────────────────────────────────────────────────
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    badge: 'New',
    description: 'Google\'s most capable model, with advanced multimodal reasoning and a 1 M-token context window.',
    tags: ['Multimodal', 'Long context', 'Reasoning'],
    apiId: 'gemini-2.5-pro',
  },
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    badge: 'New',
    description: 'High-speed, cost-efficient multimodal model ideal for real-time wellness applications.',
    tags: ['Fast', 'Efficient', 'Multimodal'],
    apiId: 'gemini-2.5-flash',
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'Google',
    badge: null,
    description: 'Next-generation Flash model with enhanced performance across text, audio, image, and video.',
    tags: ['Multimodal', 'Balanced'],
    apiId: 'gemini-2.0-flash',
  },
  {
    id: 'gemini-2.0-flash-lite',
    name: 'Gemini 2.0 Flash-Lite',
    provider: 'Google',
    badge: null,
    description: 'Lightweight and affordable, optimised for high-volume, latency-sensitive wellness tasks.',
    tags: ['Lightweight', 'Cost-effective'],
    apiId: 'gemini-2.0-flash-lite',
  },
  {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    badge: null,
    description: 'Versatile multimodal model with a 2 M-token context window for deep document analysis.',
    tags: ['Long context', 'Multimodal'],
    apiId: 'gemini-1.5-pro',
  },
  {
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    badge: null,
    description: 'Fast and versatile Gemini model tuned for diverse, high-throughput tasks at lower cost.',
    tags: ['Fast', 'Versatile'],
    apiId: 'gemini-1.5-flash',
  },
];

// ── Render model cards ──────────────────────────────────────────────
function renderModelCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = OPENCLAW_MODELS.map(model => `
    <article class="model-card" data-provider="${model.provider.toLowerCase()}">
      <div class="model-card__header">
        <span class="model-card__provider">${model.provider}</span>
        ${model.badge ? `<span class="model-card__badge">${model.badge}</span>` : ''}
      </div>
      <h3 class="model-card__name">${model.name}</h3>
      <p class="model-card__desc">${model.description}</p>
      <ul class="model-card__tags">
        ${model.tags.map(tag => `<li>${tag}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

// Initialise when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderModelCards('models-grid');

  // Apply the same fade-in animation used by main.js for other cards
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

    document.querySelectorAll('.model-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      io.observe(el);
    });
  }
});
