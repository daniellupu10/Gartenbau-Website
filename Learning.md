# Learning Loop Log

## Iteration: 2026-01-27
**Context:** Redesigning the website with premium interactive scroll (Lenis + Framer Motion) and Google Calendar booking integration.

### New Patterns & Conventions
- **Inertia Scrolling**: Identified the pattern of wrapping the entire application in a `SmoothScrollProvider` using `Lenis` to achieve the premium mechanical feel found in creative agencies like `stokt`.
- **Dynamic Headers**: Using `suppressHydrationWarning` on the `<html>` tag to avoid common hydration mismatches when using multiple custom font providers and scroll handlers.

### Solutions to Problems
- **Hydration Errors**: Fixed "Hydration failed" overlays by identifying mismatches in the `<html>` tag class list and language attributes during early dev server runs.
- **Port Conflicts**: Resolved issues where `next dev` failed because port 3000 was held by a zombie process. Used `netstat -ano` and `taskkill` to clear the environment.

### Architectural Decisions
- **Integrated Booking Funnel**: Decided to alias the `/contact` route to the new `/termin` booking page. This creates a more focused conversion path than a standard contact form, aligning with the "Home Visit" business model.
- **Calendar Mock Mode**: Implemented a `MOCK_MODE` toggle in the calendar library that activates automatically if environment variables are missing. This allows local development and UI testing to proceed without immediate API access.

### Dependencies
- **lenis**: Fundamental for inertial smooth scrolling.
- **framer-motion**: Used for scroll-triggered reveal animations and hero transitions.
- **googleapis**: Official SDK for Google Calendar integration.
- **date-fns**: Essential for complex date manipulation (buffers, slot generation).

### Edge Cases & Gotchas
- **Travel Time Buffer**: The implementation of a 1-hour buffer *before* and *after* appointments required careful overlap logic: `(slotStart < bufferEnd) && (slotEnd > bufferStart)`.
- **Browser Subagent Limits**: Discovered that the internal browser subagent can fail if the `$HOME` environment variable is not explicitly set in the execution context, even if the dev server is running perfectly on the host.

### Impact
Future iterations can now leverage the `SmoothScrollProvider` and the existing Calendar API routes to expand location-based lead generation or add more interactive storytelling elements.
