import { openModal } from "./modal.js";
const timelineEl = document.getElementById("timeline");
export function renderTimeline(events) {
    if (!timelineEl)
        return;
    timelineEl.innerHTML = "";
    events.forEach((ev) => {
        const article = document.createElement("article");
        article.className = "event-card";
        article.tabIndex = 0;
        article.setAttribute("role", "button");
        article.setAttribute("aria-label", `${ev.year}: ${ev.title}`);
        article.innerHTML = `
      <div class="card-head">
        <span class="badge">${ev.category}</span>
        <span class="year">${ev.year}</span>
      </div>
      <figure>
        <img src="${ev.imageURL}" alt="${ev.title}">
        <figcaption>${ev.title}</figcaption>
      </figure>
      <p class="desc">${ev.description}</p>
    `;
        article.addEventListener("click", () => openModal(ev));
        article.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(ev);
            }
        });
        timelineEl.appendChild(article);
    });
}
