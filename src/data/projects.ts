import type { Project } from '../types'

/**
 * Illustrative sample data for the demo gallery.
 *
 * Names, projects, dates and thumbnails are fictional. External project links
 * are intentionally omitted rather than pointing at invented destinations.
 * Replace this array with approved records from Supabase when the real data
 * source is available.
 */
export const sampleProjects: Project[] = [
  {
    id: 'pulse-analytics',
    projectTitle: 'Pulse Analytics',
    internName: 'Maya Chen',
    track: 'Dashboard',
    description:
      'A live operations dashboard that turns messy product metrics into a clear weekly story.',
    longDescription:
      'Pulse pulls product, support and revenue signals into one weekly view. The interface pairs a compact metric rail with a readable trend chart, then lets teams annotate what changed and why. The sample focuses on hierarchy, dense data without clutter, and a calm visual system.',
    thumbnailUrl: 'thumbnails/pulse-analytics.svg',
    thumbnailAlt:
      'Illustration of a teal and deep green analytics dashboard with metric cards and a trend chart.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'D3', 'Vite'],
    approvalStatus: 'approved',
    createdAt: '2026-10-24T09:30:00.000Z',
  },
  {
    id: 'atelier-commerce',
    projectTitle: 'Atelier Commerce',
    internName: 'Noah Williams',
    track: 'E-commerce',
    description:
      'A calm storefront concept for a small furniture studio, built around editorial product pages.',
    longDescription:
      'Atelier explores a slower kind of online shop: generous product photography, honest material notes and a checkout flow that stays out of the way. The sample covers the storefront grid, a product detail layout and the small states that make a shop feel finished.',
    thumbnailUrl: 'thumbnails/atelier-commerce.svg',
    thumbnailAlt:
      'Illustration of an editorial e-commerce storefront with product cards and a large product feature.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
    approvalStatus: 'approved',
    createdAt: '2026-10-23T14:10:00.000Z',
  },
  {
    id: 'northline-travel',
    projectTitle: 'Northline Travel',
    internName: 'Aisha Rahman',
    track: 'Web app',
    description:
      'A trip planner that keeps routes, stays and small discoveries in one place.',
    longDescription:
      'Northline turns a loose list of places into a route you can actually follow. The interface combines a map-first canvas with lightweight itinerary cards, so changing a stop never means losing the shape of the trip. The sample prioritises mobile map interaction and clear empty states.',
    thumbnailUrl: 'thumbnails/northline-travel.svg',
    thumbnailAlt:
      'Illustration of a travel planning interface with a dotted map route and destination cards.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'MapLibre', 'Vite'],
    approvalStatus: 'approved',
    createdAt: '2026-10-21T11:45:00.000Z',
  },
  {
    id: 'orbit-weather',
    projectTitle: 'Orbit Weather',
    internName: 'Diego Alvarez',
    track: 'Mobile',
    description:
      'A pocket forecast with hourly detail and a glanceable weekly outlook.',
    longDescription:
      'Orbit is a weather concept built around one question: what do I need to know before I leave? A single large condition card answers it first, with hourly detail and a weekly range tucked underneath. The sample explores gesture-friendly navigation, dark surfaces and legible type at small sizes.',
    thumbnailUrl: 'thumbnails/orbit-weather.svg',
    thumbnailAlt:
      'Illustration of two mobile weather screens with a large forecast orb and hourly forecast rows.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React Native', 'Expo', 'Reanimated'],
    approvalStatus: 'approved',
    createdAt: '2026-10-20T16:20:00.000Z',
  },
  {
    id: 'mosaic-notes',
    projectTitle: 'Mosaic Notes',
    internName: 'Sofia Rossi',
    track: 'Web app',
    description:
      'A collaborative canvas for notes, tasks and half-formed ideas.',
    longDescription:
      'Mosaic gives a small team one place to arrange thinking instead of filing it away. Notes can live as loose cards, stack into lists or move across a shared board while everyone sees the same changes. The sample focuses on keyboard movement, local persistence and a quiet editing surface.',
    thumbnailUrl: 'thumbnails/mosaic-notes.svg',
    thumbnailAlt:
      'Illustration of a notes board with several columns of cards and a highlighted note.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'IndexedDB', 'CSS'],
    approvalStatus: 'approved',
    createdAt: '2026-10-18T10:05:00.000Z',
  },
  {
    id: 'signal-studio',
    projectTitle: 'Signal Studio',
    internName: 'Ethan Park',
    track: 'Web app',
    description:
      'A listening room for an independent audio studio, with episodes and show notes.',
    longDescription:
      'Signal is a home for long-form audio that treats listening as the main event. Episodes sit beside a persistent player, transcripts and show notes, with a waveform that makes the shape of a conversation visible. The sample leans on deep surfaces, generous line height and a focused player state.',
    thumbnailUrl: 'thumbnails/signal-studio.svg',
    thumbnailAlt:
      'Illustration of a dark audio studio page with a teal waveform and episode list.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'Web Audio', 'Vite'],
    approvalStatus: 'approved',
    createdAt: '2026-10-16T13:35:00.000Z',
  },
  {
    id: 'ledger-finance',
    projectTitle: 'Ledger Finance',
    internName: 'Priya Nair',
    track: 'Dashboard',
    description:
      'A personal finance dashboard that makes monthly habits visible.',
    longDescription:
      'Ledger replaces a wall of transactions with a monthly picture: what came in, what left and what is left to decide. A balance card anchors the page, a distribution ring explains the split and a compact ledger keeps the detail close. The sample prioritises legible numbers and careful empty states.',
    thumbnailUrl: 'thumbnails/ledger-finance.svg',
    thumbnailAlt:
      'Illustration of a finance dashboard with a balance card, donut chart and transaction rows.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'Recharts', 'Vite'],
    approvalStatus: 'approved',
    createdAt: '2026-10-14T08:50:00.000Z',
  },
  {
    id: 'tides-wellness',
    projectTitle: 'Tides Wellness',
    internName: 'Lucas Meyer',
    track: 'Mobile',
    description:
      'A gentle wellness app for breathing breaks and daily routines.',
    longDescription:
      'Tides is a small, low-pressure companion for taking a breath between tasks. The core screen is a slow expanding ring with a single instruction, backed by a short routine list and a quiet history view. The sample explores reduced motion, soft contrast and one-handed controls.',
    thumbnailUrl: 'thumbnails/tides-wellness.svg',
    thumbnailAlt:
      'Illustration of a mobile wellness screen with a large concentric breathing ring and routine chips.',
    liveUrl: null,
    githubUrl: null,
    technologies: ['React Native', 'Expo', 'SVG'],
    approvalStatus: 'approved',
    createdAt: '2026-10-12T15:15:00.000Z',
  },
]
