import { showcaseProjects } from '../data/projects'
import type { Project } from '../types'

const DEMO_STATES = ['loading', 'empty', 'error'] as const

export type DemoState = (typeof DEMO_STATES)[number]

const NORMAL_DELAY = 520
const ERROR_DELAY = 700
const LOADING_DEMO_DELAY = 12_000

export function getDemoState(): DemoState | null {
  if (typeof window === 'undefined') return null

  const value = new URLSearchParams(window.location.search).get('demo')
  return DEMO_STATES.includes(value as DemoState) ? (value as DemoState) : null
}

function abortableDelay(milliseconds: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException('The request was aborted.', 'AbortError'))
      return
    }

    const timer = window.setTimeout(() => {
      signal.removeEventListener('abort', handleAbort)
      resolve()
    }, milliseconds)

    function handleAbort() {
      window.clearTimeout(timer)
      reject(new DOMException('The request was aborted.', 'AbortError'))
    }

    signal.addEventListener('abort', handleAbort, { once: true })
  })
}

type LoadProjectsOptions = {
  demo?: DemoState | null
  retry?: boolean
  signal: AbortSignal
}

/**
 * Stands in for the future Supabase query. The small delay makes the demo's
 * loading state visible; `demo=empty` and `demo=error` make those states
 * reviewable without changing the gallery records.
 */
export async function loadProjects({
  demo = null,
  retry = false,
  signal,
}: LoadProjectsOptions): Promise<Project[]> {
  const delay =
    demo === 'loading'
      ? LOADING_DEMO_DELAY
      : demo === 'error'
        ? ERROR_DELAY
        : NORMAL_DELAY

  await abortableDelay(delay, signal)

  if (demo === 'error' && !retry) {
    throw new Error('The gallery service did not respond.')
  }

  if (demo === 'empty') return []

  return showcaseProjects
    .filter((project) => project.approvalStatus === 'approved')
    .slice()
    .sort(
      (first, second) =>
        new Date(second.createdAt).getTime() -
        new Date(first.createdAt).getTime(),
    )
}
