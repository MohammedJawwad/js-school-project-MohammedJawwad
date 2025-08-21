import { useEffect, useState } from "react";
import type { EventData } from "./types";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";

export default function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selected, setSelected] = useState<EventData | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/events.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: EventData[] = await res.json();
        setEvents(data);
      } catch (e) {
        console.error("Failed to load events:", e);
      }
    };
    load();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Timeline events={events} onOpen={(ev) => setSelected(ev)} />
      </main>
      {selected && <EventModal event={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
