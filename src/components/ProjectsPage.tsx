import { useMemo, useState } from 'react'
import { useProjects } from '../hooks/useProjects'
import { matchesProjectQuery, pluralize } from '../lib/format'
import type { Project, Track } from '../types'
import { TRACKS } from '../types'
import {
  EmptyGallery,
  GalleryError,
  LoadingGallery,
  NoResults,
} from './GalleryStates'
import { FilterControls, type TrackFilter } from './FilterControls'
import { Icon } from './Icon'
import { ProjectCard } from './ProjectCard'
import { ProjectDialog } from './ProjectDialog'
import { SearchBar } from './SearchBar'

const DEMO_COPY = {
  loading: 'Previewing the loading state. The gallery holds this view for twelve seconds.',
  empty: 'Previewing the empty gallery state. No projects are shown.',
  error: 'Previewing the error state. Retrying will restore the gallery.',
} as const

export function ProjectsPage() {
  const { demo, error, projects, retry, status } = useProjects()
  const [query, setQuery] = useState('')
  const [track, setTrack] = useState<TrackFilter>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const counts = useMemo(() => {
    const next = Object.fromEntries(TRACKS.map((item) => [item, 0])) as Record<
      Track,
      number
    >
    for (const project of projects) next[project.track] += 1
    return next
  }, [projects])

  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          matchesProjectQuery(project, query) &&
          (track === 'all' || project.track === track),
      ),
    [projects, query, track],
  )

  const isFiltering = query.trim().length > 0 || track !== 'all'

  let summary = 'Loading projects…'
  if (status === 'success') {
    if (projects.length === 0) {
      summary = 'No projects have been published yet.'
    } else if (visibleProjects.length === 0) {
      summary = 'No projects match the current search and filter.'
    } else if (isFiltering) {
      summary = `Showing ${visibleProjects.length} of ${pluralize(projects.length, 'project')}.`
    } else {
      summary = `${pluralize(projects.length, 'project')} from the Phase 2 archive.`
    }
  } else if (status === 'error') {
    summary = 'The gallery is unavailable.'
  }

  function resetFilters() {
    setQuery('')
    setTrack('all')
  }

  let demoMessage = demo ? DEMO_COPY[demo] : ''
  if (demo === 'loading' && status === 'success') {
    demoMessage = 'Loading preview complete. The gallery is now shown.'
  }
  if (demo === 'error' && status === 'success') {
    demoMessage =
      'The gallery is restored. Reloading this URL replays the error state.'
  }

  return (
    <section
      aria-labelledby="gallery-title"
      className="gallery-section"
      id="projects"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">
            <span aria-hidden="true" className="eyebrow-dot" />
            The archive
            <span aria-hidden="true" className="eyebrow-rule" />
            <span className="mono">Phase 2 / 2026</span>
          </p>

          <div className="section-head-row">
            <h2 id="gallery-title">
              The Phase 2 <em>gallery.</em>
            </h2>
            <p className="section-note">
              A working gallery built around the way the real showcase will
              read. Search the archive, narrow by track, then open a project for
              the full story.
            </p>
          </div>
        </div>

        {demo ? (
          <div className="demo-strip">
            <Icon name="info" size={16} />
            <p>{demoMessage}</p>
            <a href={window.location.pathname}>
              Normal gallery
              <Icon name="arrowRight" size={14} />
            </a>
          </div>
        ) : null}

        <div className="gallery-toolbar">
          <SearchBar onChange={setQuery} value={query} />

          <FilterControls
            active={track}
            counts={status === 'success' ? counts : undefined}
            onChange={setTrack}
            total={projects.length}
            tracks={[...TRACKS]}
          />

          <div className="toolbar-foot">
            <p aria-live="polite" className="result-summary" role="status">
              {summary}
            </p>
            {isFiltering ? (
              <button
                className="reset-link"
                onClick={resetFilters}
                type="button"
              >
                <Icon name="close" size={13} />
                Reset view
              </button>
            ) : null}
          </div>
        </div>

        <div className="gallery-body">
          {status === 'loading' ? <LoadingGallery /> : null}

          {status === 'error' ? (
            <GalleryError
              demo={demo}
              message={error ?? 'The gallery could not be loaded.'}
              onRetry={retry}
            />
          ) : null}

          {status === 'success' && projects.length === 0 ? (
            <EmptyGallery demo={demo} />
          ) : null}

          {status === 'success' &&
          projects.length > 0 &&
          visibleProjects.length === 0 ? (
            <NoResults onReset={resetFilters} query={query} track={track} />
          ) : null}

          {status === 'success' && visibleProjects.length > 0 ? (
            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  index={index}
                  key={project.id}
                  onOpen={setSelected}
                  project={project}
                />
              ))}
            </div>
          ) : null}
        </div>

        <p className="sample-note">
          <Icon name="info" size={15} />
          Five existing Phase 2 projects, each linked to its public deployment.
          Only work cleared for public display should appear in a production
          gallery.
        </p>
      </div>

      <ProjectDialog onClose={() => setSelected(null)} project={selected} />
    </section>
  )
}
