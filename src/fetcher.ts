import { EventData } from "./types.js";

export async function loadEvents(): Promise<EventData[]> {
  try {
    const res = await fetch("data/events.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Error loading events:", err);
    return [];
  }
}
