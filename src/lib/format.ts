import type { Project } from '../types'

const projectDate = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export function formatProjectDate(isoDate: string) {
  const date = new Date(isoDate)
  return Number.isNaN(date.getTime()) ? '' : projectDate.format(date)
}

export function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

export function normalizeSearch(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

/** Search is limited to the two fields the brief specifies. */
export function matchesProjectQuery(project: Project, query: string) {
  const needle = normalizeSearch(query)
  if (!needle) return true

  return (
    normalizeSearch(project.projectTitle).includes(needle) ||
    normalizeSearch(project.internName).includes(needle)
  )
}

/** Only allow ordinary external links into rendered anchors. */
export function safeExternalUrl(value: string | null) {
  if (!value) return null

  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
      ? url.href
      : null
  } catch {
    return null
  }
}

export function pluralize(count: number, singular: string, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`
}
// 