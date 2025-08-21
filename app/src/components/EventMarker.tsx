import type { EventData } from "../types";

interface Props {
  ev: EventData;
  onOpen: (ev: EventData) => void;
}

export default function EventMarker({ ev, onOpen }: Props) {
  return (
    <article
      className="event-card"
      role="button"
      tabIndex={0}
      aria-label={`${ev.year}: ${ev.title} — ${ev.category}`}
      onClick={() => onOpen(ev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(ev);
        }
      }}
    >
      <div className="card-head">
        <span className="badge">{ev.category}</span>
        <span className="year">{ev.year}</span>
      </div>
      <figure>
        <img
          src={ev.imageURL || "/assets/placeholder.jpg"}
          alt={ev.title}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/assets/placeholder.jpg";
          }}
        />
        <figcaption>{ev.title}</figcaption>
      </figure>
      <p className="desc">{ev.description}</p>
    </article>
  );
}
