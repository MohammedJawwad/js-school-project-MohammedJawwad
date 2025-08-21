import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { EventData } from "../types";

interface Props {
  event: EventData;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: Props) {
  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
        <h2>{event.title}</h2>
        <p className="modal-meta"><strong>{event.year}</strong> • {event.category}</p>
        <img
          src={event.imageURL || "/assets/placeholder.jpg"}
          alt={event.title}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/assets/placeholder.jpg";
          }}
        />
        <p>{event.description}</p>
      </div>
    </div>,
    modalRoot
  );
}
