import type { Project } from '../types'

/**
 * Two existing Phase 2 projects, linked to their public deployments.
 *
 * All links were supplied by the project owner and return a live page.
 * Repository links are omitted rather than pointing at an unverified repo.
 * `createdAt` records when the entry was added to this showcase, not the
 * original build date.
 */  
export const showcaseProjects: Project[] = [
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
