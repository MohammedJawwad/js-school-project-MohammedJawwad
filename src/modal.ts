import { EventData } from "./types.js";

const modalEl = document.getElementById("modal") as HTMLElement;
let lastFocused: HTMLElement | null = null;

export function openModal(ev: EventData): void {
  if (!modalEl) return;
  lastFocused = document.activeElement as HTMLElement;

  modalEl.innerHTML = `
    <div class="dialog">
      <button class="close-btn" id="closeModalBtn">✕</button>
      <h2>${ev.title}</h2>
      <p class="meta"><strong>${ev.year}</strong> • ${ev.category}</p>
      <img src="${ev.imageURL}" alt="${ev.title}">
      <p>${ev.description}</p>
    </div>
  `;

  modalEl.classList.add("open");

  const closeBtn = document.getElementById("closeModalBtn");
  closeBtn?.addEventListener("click", closeModal);
  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) closeModal();
  });
}

export function closeModal(): void {
  if (!modalEl) return;
  modalEl.classList.remove("open");
  modalEl.innerHTML = "";
  if (lastFocused) lastFocused.focus();
}
