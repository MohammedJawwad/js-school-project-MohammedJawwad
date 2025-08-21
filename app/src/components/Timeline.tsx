import type { EventData } from "../types";
import EventMarker from "./EventMarker";

interface Props {
  events: EventData[];
  onOpen: (ev: EventData) => void;
}

export default function Timeline({ events, onOpen }: Props) {
  return (
    <section id="timeline" aria-busy={events.length === 0}>
      {events.map((ev, i) => (
        <EventMarker key={`${ev.year}-${i}-${ev.title}`} ev={ev} onOpen={onOpen} />
      ))}
    </section>
  );
}
