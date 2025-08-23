# Accessibility Improvements ♿

This app was enhanced to ensure **Web Accessibility (WCAG 2.1 AA)** compliance.

## Modal

- Used `role="dialog"` + `aria-modal="true"`.
- Focus trapped inside modal when open.
- ESC key closes modal.
- Focus returns to triggering element on close.

## Timeline

- Timeline markers are buttons, keyboard navigable with:
  - `Tab` → move focus
  - `ArrowLeft/Right` → navigate events
- `aria-current="true"` applied to the active event marker.

## Visuals

- Contrast ratio verified ≥4.5:1 for text.
- Focus styles clearly visible.

## Keyboard Navigation

- Markers reachable via Tab / Arrow keys.
- Modal fully operable with keyboard.

✅ Meets WCAG 2.1 AA requirements.
