const modalEl = document.getElementById("modal");
let lastFocused = null;
export function openModal(ev) {
    if (!modalEl)
        return;
    lastFocused = document.activeElement;
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
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", closeModal);
    modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl)
            closeModal();
    });
}
export function closeModal() {
    if (!modalEl)
        return;
    modalEl.classList.remove("open");
    modalEl.innerHTML = "";
    if (lastFocused)
        lastFocused.focus();
}
