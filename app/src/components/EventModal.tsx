import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { EventData } from "../types";

interface Props {
  event: EventData;
  onClose: () => void;
  triggerEl?: HTMLElement | null;
}

export default function EventModal({ event, onClose, triggerEl }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];
        if (focusableEls.length > 0) {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      if (triggerEl) triggerEl.focus();
      else prevFocus?.focus();
    };
  }, [onClose, triggerEl]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div
      className="modal-overlay"
      role="presentation"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        ref={modalRef}
      >
        <button
          className="modal-close"
          aria-label="Close"
          onClick={onClose}
          ref={closeBtnRef}
        >
          ✕
        </button>
        <h2 id="modal-title">{event.title}</h2>
        <p className="modal-meta" id="modal-desc">
          <strong>{event.year}</strong> • {event.category}
        </p>
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
