import type { Project } from '../types'

/**
 * Five existing Phase 2 projects, linked to their public deployments.
 *
 * All links were supplied by the project owner and return a live page.
 * Repository links are omitted rather than pointing at an unverified repo.
 * `createdAt` records when the entry was added to this showcase, not the
 * original build date.
 */
export const showcaseProjects: Project[] = [
  {
    id: 'fashion-store',
    projectTitle: 'Fashion Store',
    internName: 'Jhon',
    track: 'E-commerce',
    description:
      'A responsive clothing storefront with men’s, women’s and children’s collections, product cards and cart controls.',
    longDescription:
      'Fashion Store was built to practise scale: a storefront that stays coherent when the catalogue grows. The live site carries three collections, reusable product and navigation components, and a grid that moves from a wide desktop layout to a single readable column on phones.',
    thumbnailUrl: 'thumbnails/fashion-store.jpg',
    thumbnailAlt:
      'Screenshot of the Fashion Store homepage with a colourful hero and a three-column men’s collection grid.',
    liveUrl: 'https://fashion-shop2468.netlify.app/',
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    approvalStatus: 'approved',
    createdAt: '2026-10-27T00:00:00.000Z',
  },
  {
    id: 'shopsy',
    projectTitle: 'Shopsy',
    internName: 'Jhon',
    track: 'E-commerce',
    description:
      'A shopping interface focused on clear discovery, promotion carousels and touch-friendly product browsing.',
    longDescription:
      'Shopsy is a component-first shopping UI built around effortless browsing. Category navigation, a rotating promotion area and consistent product cards share one spacing system, and the controls are sized for touch first. The live build covers kidswear, menswear, womenswear, electronics and a trending-products shelf.',
    thumbnailUrl: 'thumbnails/shopsy.jpg',
    thumbnailAlt:
      'Screenshot of the Shopsy storefront with an orange promotion banner, category navigation and sunglasses artwork.',
    liveUrl: 'https://shopsy-12345.netlify.app/',
    githubUrl: null,
    technologies: ['React', 'Tailwind CSS', 'HTML5'],
    approvalStatus: 'approved',
    createdAt: '2026-10-27T00:00:00.000Z',
  },
  {
    id: 'tcj-space',
    projectTitle: 'TCJ-Space',
    internName: 'Jhon',
    track: 'Web app',
    description:
      'A satellite information site that turns dense material into a calm, scannable layout.',
    longDescription:
      'TCJ-Space presents satellite services without overwhelming the reader. The design leans on hierarchy: quiet navigation, strong section headings and a dark, image-led hero. The live site introduces satellite services, a technology overview and supporting detail sections across a responsive layout.',
    thumbnailUrl: 'thumbnails/tcj-space.jpg',
    thumbnailAlt:
      'Screenshot of the TCJ-Space homepage with a dark starfield, glowing Earth and satellite service cards.',
    liveUrl: 'https://tcj-space1.netlify.app/',
    githubUrl: null,
    technologies: ['React', 'Tailwind CSS', 'HTML5'],
    approvalStatus: 'approved',
    createdAt: '2026-10-27T00:00:00.000Z',
  },
  {
    id: 'week-02-portfolio',
    projectTitle: 'Jhon Portfolio',
    internName: 'Jhon',
    track: 'Web app',
    description:
      'A cinematic 3D portfolio for a front-end developer, built around a considered, responsive interface.',
    longDescription:
      'This portfolio turns a personal introduction into a layered, cinematic experience. A 3D identity card, restrained motion and an editorial type system carry selected work, an about section and contact details. The build focuses on responsive layouts, keyboard access and reduced-motion support.',
    thumbnailUrl: 'thumbnails/week-02-portfolio.jpg',
    thumbnailAlt:
      'Screenshot of Jhon’s dark green portfolio homepage with a serif headline and a floating developer identity card.',
    liveUrl: 'https://week-02-portfolio.netlify.app/',
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'Vite', 'CSS 3D'],
    approvalStatus: 'approved',
    createdAt: '2026-10-27T00:00:00.000Z',
  },
  {
    id: 'github-finder',
    projectTitle: 'GitHub Profile Finder',
    internName: 'Jhon',
    track: 'Web app',
    description:
      'A focused GitHub profile finder with live profile data, repositories and honest API states.',
    longDescription:
      'handle. searches any public GitHub account and turns the response into a readable profile: avatar, bio, public numbers and the most recently updated repositories. Loading, not-found, rate-limit and offline states are handled explicitly, and a new search always abandons an older request. No token is required or exposed.',
    thumbnailUrl: 'thumbnails/github-finder.jpg',
    thumbnailAlt:
      'Screenshot of the handle. GitHub profile finder with an editorial headline and a dark profile search panel.',
    liveUrl: 'https://week-03-github-finder.netlify.app/',
    githubUrl: null,
    technologies: ['React', 'TypeScript', 'Vite', 'GitHub REST API'],
    approvalStatus: 'approved',
    createdAt: '2026-10-27T00:00:00.000Z',
  },
]
