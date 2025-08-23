import type { EventData } from "../types";
import EventMarker from "./EventMarker";
import { useRef } from "react";

interface Props {
  events: EventData[];
  onOpen: (ev: EventData, triggerEl?: HTMLElement) => void;
}

export default function Timeline({ events, onOpen }: Props) {
  const markerRefs = useRef<(HTMLElement | null)[]>([]);

  const handleKeyNav = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      markerRefs.current[(idx + 1) % events.length]?.focus();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      markerRefs.current[(idx - 1 + events.length) % events.length]?.focus();
    }
  };

  return (
    <section
      id="timeline"
      aria-busy={events.length === 0}
      aria-label="Historical events timeline"
      role="listbox"
    >
      {events.map((ev, i) => (
        <EventMarker
          key={`${ev.year}-${i}-${ev.title}`}
          ev={ev}
          onOpen={onOpen}
          refCallback={(el) => (markerRefs.current[i] = el)}
          onArrowNav={(e) => handleKeyNav(e, i)}
        />
      ))}
    </section>
  );
}
