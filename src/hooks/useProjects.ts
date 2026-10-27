import { useCallback, useEffect, useMemo, useState } from 'react'
import { getDemoState, loadProjects, type DemoState } from '../lib/projects'
import type { Project } from '../types'

export type GalleryStatus = 'loading' | 'success' | 'error'

type GalleryState = {
  status: GalleryStatus
  projects: Project[]
  error: string | null
}


export function useProjects() {
  const demo = useMemo<DemoState | null>(() => getDemoState(), [])
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<GalleryState>({
    status: 'loading',
    projects: [],
    error: null,
  })

  useEffect(() => {
    const controller = new AbortController()

    loadProjects({
      demo,
      retry: attempt > 0,
      signal: controller.signal,
    })
      .then((projects) => {
        if (controller.signal.aborted) return
        setState({ status: 'success', projects, error: null })
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setState({
          status: 'error',
          projects: [],
          error:
            error instanceof Error
              ? error.message
              : 'The gallery could not be loaded.',
        })
      })

    return () => controller.abort()
  }, [attempt, demo])

  const retry = useCallback(() => {
    setState({ status: 'loading', projects: [], error: null })
    setAttempt((current) => current + 1)
  }, [])

  return { ...state, demo, retry }
}
// 