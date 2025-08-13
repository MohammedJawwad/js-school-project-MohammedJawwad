// ---- Task 3: Vanilla JS Interactivity ----

const timelineEl = document.getElementById('timeline');
const modalEl = document.getElementById('modal');

let lastFocused = null;
let keydownHandler = null;


document.addEventListener('DOMContentLoaded', () => {
  loadEvents();
});


async function loadEvents() {
  try {
    const res = await fetch('data/events.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const events = await res.json();

    
    events.forEach(ev => {
      const img = new Image();
      img.src = ev.imageURL;
    });

    renderTimeline(events);
    timelineEl.setAttribute('aria-busy', 'false');
  } catch (err) {
    console.error('Error loading events:', err);
    timelineEl.innerHTML = `<p style="color:#b00020">Failed to load events. Please try again.</p>`;
    timelineEl.setAttribute('aria-busy', 'false');
  }
}


function renderTimeline(events) {
  timelineEl.innerHTML = '';

  events.forEach((ev) => {
    const article = document.createElement('article');
    article.className = 'event-card';
    article.tabIndex = 0; 
    article.setAttribute('role', 'button');
    article.setAttribute('aria-label', `${ev.year}: ${ev.title} — ${ev.category}`);

    article.innerHTML = `
      <div class="card-head">
        <span class="badge">${escapeHTML(ev.category)}</span>
        <span class="year">${escapeHTML(ev.year)}</span>
      </div>
      <figure>
        <img src="${ev.imageURL}" alt="${escapeHTML(ev.title)}"
             onerror="this.onerror=null;this.src='assets/placeholder.jpg';">
        <figcaption>${escapeHTML(ev.title)}</figcaption>
      </figure>
      <p class="desc">${escapeHTML(ev.description)}</p>
    `;

    
    article.addEventListener('click', () => openModal(ev));
    article.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(ev);
      }
    });

    timelineEl.appendChild(article);
  });
}

// Open modal with details
function openModal(ev) {
  lastFocused = document.activeElement;

  modalEl.innerHTML = `
    <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
      <button class="close-btn" aria-label="Close dialog" id="closeModalBtn">✕</button>
      <h2 id="modal-title">${escapeHTML(ev.title)}</h2>
      <p class="meta"><strong>${escapeHTML(ev.year)}</strong> • ${escapeHTML(ev.category)}</p>
      <img src="${ev.imageURL}" alt="${escapeHTML(ev.title)}"
           onerror="this.onerror=null;this.src='assets/placeholder.jpg';">
      <p id="modal-desc">${escapeHTML(ev.description)}</p>
    </div>
  `;

  modalEl.classList.add('open');
  modalEl.setAttribute('aria-hidden', 'false');

  const dialog = modalEl.querySelector('.dialog');
  const closeBtn = modalEl.querySelector('#closeModalBtn');


  const focusable = dialog.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0] || closeBtn;
  const last = focusable[focusable.length - 1] || closeBtn;
  (first || closeBtn).focus();


  keydownHandler = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
    } else if (e.key === 'Tab') {
      if (focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  document.addEventListener('keydown', keydownHandler);

  
  closeBtn.addEventListener('click', closeModal);
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal(); 
  });
}


function closeModal() {
  modalEl.classList.remove('open');
  modalEl.setAttribute('aria-hidden', 'true');
  modalEl.innerHTML = '';
  if (keydownHandler) document.removeEventListener('keydown', keydownHandler);
  if (lastFocused) lastFocused.focus();
}

// Simple HTML escape
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (m) => (
    { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[m]
  ));
}
