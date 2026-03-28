/**
 * Sonocrea Onboarding Flow
 * Multi-step onboarding with state management, validation, and summary generation.
 */

(function () {
  'use strict';

  // ── STATE ────────────────────────────────────────────────────────
  const state = {
    currentStep: 1,
    totalSteps: 6,
    data: {
      goals: [],
      sounds: [],
      time: '',
      duration: '',
      frequency: '',
      firstName: '',
      email: '',
    },
  };

  // ── DOM REFS ─────────────────────────────────────────────────────
  const progressBar   = document.getElementById('progressBar');
  const stepLabel     = document.getElementById('stepLabel');
  const skipBtn       = document.getElementById('skipBtn');
  const createAccBtn  = document.getElementById('createAccountBtn');
  const profileForm   = document.getElementById('profileForm');

  // ── NAVIGATION ───────────────────────────────────────────────────

  function goToStep(n) {
    const from = document.getElementById('step' + state.currentStep);
    const to   = document.getElementById('step' + n);

    if (!to) return;

    if (from) {
      from.classList.remove('ob-step--active');
      from.style.display = 'none';
    }

    to.style.display = 'flex';
    // Force reflow for animation
    to.offsetHeight; // eslint-disable-line no-unused-expressions
    to.classList.add('ob-step--active');

    state.currentStep = n;
    updateProgress();

    // Scroll to top of shell
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Announce step to screen readers
    to.setAttribute('aria-live', 'assertive');
    setTimeout(() => to.setAttribute('aria-live', 'polite'), 500);
  }

  function updateProgress() {
    const pct = (state.currentStep / state.totalSteps) * 100;
    progressBar.style.width = pct + '%';
    progressBar.parentElement.setAttribute('aria-valuenow', state.currentStep);

    if (state.currentStep < state.totalSteps) {
      stepLabel.textContent = 'Step ' + state.currentStep + ' of ' + (state.totalSteps - 1);
      skipBtn.style.display = 'inline';
    } else {
      stepLabel.textContent = 'All done!';
      skipBtn.style.display = 'none';
    }
  }

  // ── BUTTON DELEGATION ────────────────────────────────────────────

  document.addEventListener('click', function (e) {
    // Next buttons
    const nextBtn = e.target.closest('.ob-next');
    if (nextBtn) {
      const next = parseInt(nextBtn.dataset.next, 10);
      collectCurrentStepData(state.currentStep);
      if (validateStep(state.currentStep)) {
        goToStep(next);
      }
      return;
    }

    // Back buttons
    const backBtn = e.target.closest('.ob-back');
    if (backBtn) {
      const back = parseInt(backBtn.dataset.back, 10);
      goToStep(back);
      return;
    }
  });

  // Account creation button (step 5 → 6)
  if (createAccBtn) {
    createAccBtn.addEventListener('click', function () {
      collectCurrentStepData(5);
      if (validateStep(5)) {
        buildSummary();
        goToStep(6);
      }
    });
  }

  // Skip button
  if (skipBtn) {
    skipBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const next = state.currentStep < state.totalSteps ? state.currentStep + 1 : state.totalSteps;
      goToStep(next);
    });
  }

  // ── VALIDATION ───────────────────────────────────────────────────

  function validateStep(step) {
    clearErrors();

    if (step === 5) {
      return validateProfileForm();
    }

    // All other steps are optional (selections have defaults)
    return true;
  }

  function validateProfileForm() {
    let valid = true;
    const nameInput     = document.getElementById('ob-name');
    const emailInput    = document.getElementById('ob-email');
    const passwordInput = document.getElementById('ob-password');
    const consentBox    = document.getElementById('ob-consent');

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your first name.');
      valid = false;
    }

    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address.');
      valid = false;
    }

    if (!passwordInput.value || passwordInput.value.length < 8) {
      showError(passwordInput, 'Password must be at least 8 characters.');
      valid = false;
    }

    if (!consentBox.checked) {
      showError(consentBox, 'You must accept the Terms of Use to continue.');
      valid = false;
    }

    return valid;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(input, message) {
    input.classList.add('ob-input--error');
    const err = document.createElement('p');
    err.className = 'ob-error';
    err.textContent = message;
    err.style.cssText = 'color:#e53e3e;font-size:0.8125rem;margin-top:0.25rem;';
    if (input.type === 'checkbox') {
      input.closest('label').insertAdjacentElement('afterend', err);
    } else {
      input.insertAdjacentElement('afterend', err);
    }
  }

  function clearErrors() {
    document.querySelectorAll('.ob-error').forEach(function (el) { el.remove(); });
    document.querySelectorAll('.ob-input--error').forEach(function (el) {
      el.classList.remove('ob-input--error');
    });
  }

  // ── DATA COLLECTION ──────────────────────────────────────────────

  function collectCurrentStepData(step) {
    switch (step) {
      case 2:
        state.data.goals = checkedValues('goals');
        break;
      case 3:
        state.data.sounds = checkedValues('sounds');
        break;
      case 4:
        state.data.time      = radioValue('time');
        state.data.duration  = radioValue('duration');
        state.data.frequency = radioValue('frequency');
        break;
      case 5:
        var nameEl  = document.getElementById('ob-name');
        var emailEl = document.getElementById('ob-email');
        if (nameEl)  state.data.firstName = nameEl.value.trim();
        if (emailEl) state.data.email     = emailEl.value.trim();
        break;
    }
  }

  function checkedValues(name) {
    return Array.from(document.querySelectorAll('input[name="' + name + '"]:checked'))
      .map(function (el) { return el.value; });
  }

  function radioValue(name) {
    var el = document.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : '';
  }

  // ── SELECTION LIMIT (max 3 for sounds) ──────────────────────────

  document.addEventListener('change', function (e) {
    if (e.target.classList.contains('ob-limit-3')) {
      enforceSoundLimit();
    }
  });

  function enforceSoundLimit() {
    var checkboxes = document.querySelectorAll('.ob-limit-3');
    var checked    = document.querySelectorAll('.ob-limit-3:checked');
    var atLimit    = checked.length >= 3;

    checkboxes.forEach(function (cb) {
      var card = cb.closest('.ob-card');
      if (card) {
        if (atLimit && !cb.checked) {
          card.classList.add('ob-card--disabled');
          cb.disabled = true;
        } else {
          card.classList.remove('ob-card--disabled');
          cb.disabled = false;
        }
      }
    });
  }

  // ── KEYBOARD NAVIGATION FOR CARDS ───────────────────────────────

  document.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Enter') {
      var card = e.target.closest('.ob-card');
      if (card) {
        e.preventDefault();
        var input = card.querySelector('input');
        if (input) {
          if (input.type === 'checkbox') {
            if (!input.disabled) input.checked = !input.checked;
            input.dispatchEvent(new Event('change', { bubbles: true }));
          } else if (input.type === 'radio') {
            input.checked = true;
            input.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }
    }
  });

  // ── SUMMARY BUILDER (step 6) ─────────────────────────────────────

  var GOAL_LABELS = {
    stress:     'Stress & anxiety relief',
    focus:      'Focus & productivity',
    sleep:      'Better sleep',
    meditation: 'Meditation & mindfulness',
    mood:       'Mood lift',
    creativity: 'Creativity boost',
    pain:       'Pain & tension management',
    explore:    'Exploration',
  };

  var SOUND_LABELS = {
    nature:    'Nature & forests',
    ocean:     'Ocean & water',
    ambient:   'Ambient music',
    binaural:  'Binaural beats',
    bowls:     'Singing bowls',
    whitenoise:'White & brown noise',
    urban:     'Urban ambience',
    frequency: 'Solfeggio frequencies',
    guided:    'Guided voice & sound',
  };

  var TIME_LABELS = {
    morning:   'Morning',
    afternoon: 'Afternoon',
    evening:   'Evening',
    night:     'Night',
    flexible:  'Flexible',
  };

  var FREQ_LABELS = {
    daily:   'Daily',
    several: 'Several times/week',
    weekly:  'Weekly',
    asneeded:'As needed',
  };

  function buildSummary() {
    // Name
    var nameEl = document.getElementById('userFirstName');
    if (nameEl && state.data.firstName) {
      nameEl.textContent = state.data.firstName;
    }

    // Goals
    var goalsEl = document.getElementById('summaryGoalsText');
    if (goalsEl) {
      var goalStr = state.data.goals
        .map(function (g) { return GOAL_LABELS[g] || g; })
        .join(', ');
      goalsEl.textContent = goalStr || 'General wellness';
    }

    // Sounds
    var soundsEl = document.getElementById('summarySoundsText');
    if (soundsEl) {
      var soundStr = state.data.sounds
        .map(function (s) { return SOUND_LABELS[s] || s; })
        .join(', ');
      soundsEl.textContent = soundStr || 'Mixed soundscapes';
    }

    // Schedule
    var schedEl = document.getElementById('summaryScheduleText');
    if (schedEl) {
      var parts = [];
      if (state.data.frequency) parts.push(FREQ_LABELS[state.data.frequency] || state.data.frequency);
      if (state.data.time)      parts.push(TIME_LABELS[state.data.time] || state.data.time);
      if (state.data.duration)  parts.push(state.data.duration + ' min');
      schedEl.textContent = parts.length ? parts.join(' · ') : 'Flexible';
    }
  }

  // ── INIT ─────────────────────────────────────────────────────────

  function init() {
    // Hide all steps except step 1
    document.querySelectorAll('.ob-step').forEach(function (s) {
      if (parseInt(s.dataset.step, 10) === 1) {
        s.style.display = 'flex';
      } else {
        s.style.display = 'none';
        s.classList.remove('ob-step--active');
      }
    });

    updateProgress();
  }

  init();

})();
