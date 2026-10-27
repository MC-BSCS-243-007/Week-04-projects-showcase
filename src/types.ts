export const TRACKS = ['Web app', 'E-commerce'] as const

export type Track = (typeof TRACKS)[number]

export type ApprovalStatus = 'approved' | 'pending'

export type Project = {
  id: string
  projectTitle: string
  internName: string
  track: Track
  description: string
  longDescription: string
  thumbnailUrl: string
  thumbnailAlt: string
  liveUrl: string | null
  githubUrl: string | null
  technologies: string[]
  approvalStatus: ApprovalStatus
  createdAt: string
}

export function trackSlug(track: Track) {
  return track.toLowerCase().replace(/\s+/g, '-')
}
