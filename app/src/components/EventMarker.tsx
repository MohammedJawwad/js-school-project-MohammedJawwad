import type { EventData } from "../types";

interface Props {
  ev: EventData;
  onOpen: (ev: EventData, triggerEl?: HTMLElement) => void;
  refCallback?: (el: HTMLElement | null) => void;
  onArrowNav?: (e: React.KeyboardEvent) => void;
}

export default function EventMarker({ ev, onOpen, refCallback, onArrowNav }: Props) {
  return (
    <article
      className="event-card"
      role="option"
      tabIndex={0}
      aria-label={`${ev.year}: ${ev.title} — ${ev.category}`}
      ref={refCallback}
      onClick={(e) => onOpen(ev, e.currentTarget as HTMLElement)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(ev, e.currentTarget as HTMLElement);
        } else if (onArrowNav) {
          onArrowNav(e);
        }
      }}
    >
      <div className="card-head">
        <span className="badge">{ev.category}</span>
        <span className="year" aria-current="date">
          {ev.year}
        </span>
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
