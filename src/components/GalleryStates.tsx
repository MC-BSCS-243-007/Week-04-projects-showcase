import type { TrackFilter } from './FilterControls'
import { Icon } from './Icon'

export function LoadingGallery() {
  return (
    <div aria-hidden="true" className="project-grid">
      {Array.from({ length: 6 }, (_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-media" />
          <div className="skeleton-body">
            <div className="skeleton-line skeleton-line-sm" />
            <div className="skeleton-line skeleton-line-lg" />
            <div className="skeleton-line" />
            <div className="skeleton-line skeleton-line-md" />
            <div className="skeleton-tags">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

type GalleryErrorProps = {
  demo: string | null
  message: string
  onRetry: () => void
}

export function GalleryError({ demo, message, onRetry }: GalleryErrorProps) {
  return (
    <div
      aria-labelledby="gallery-error-title"
      className="state-card state-error"
      role="alert"
    >
      <span aria-hidden="true" className="state-icon">
        <Icon name="alert" size={25} />
      </span>
      <p className="state-kicker">Connection interrupted</p>
      <h3 id="gallery-error-title">The gallery could not be loaded.</h3>
      <p className="state-copy">
        {message} Check your connection and try again — your search and filters
        are still here.
      </p>
      {demo === 'error' ? (
        <p className="state-hint">
          <Icon name="info" size={15} />
          Previewing the error state. Retrying restores the gallery.
        </p>
      ) : null}
      <button className="btn btn-primary" onClick={onRetry} type="button">
        <Icon name="refresh" size={15} />
        Try again
      </button>
    </div>
  )
}

type EmptyGalleryProps = {
  demo: string | null
}

export function EmptyGallery({ demo }: EmptyGalleryProps) {
  return (
    <div
      aria-labelledby="gallery-empty-title"
      className="state-card state-empty"
    >
      <span aria-hidden="true" className="state-icon">
        <Icon name="layers" size={25} />
      </span>
      <p className="state-kicker">Nothing published yet</p>
      <h3 id="gallery-empty-title">The gallery is waiting for its first project.</h3>
      <p className="state-copy">
        Only work cleared for public display appears here. Once new projects
        are approved, they will fill this space.
      </p>
      {demo === 'empty' ? (
        <p className="state-hint">
          <Icon name="info" size={15} />
          Previewing the empty gallery state.
        </p>
      ) : null}
    </div>
  )
}

type NoResultsProps = {
  onReset: () => void
  query: string
  track: TrackFilter
}

export function NoResults({ onReset, query, track }: NoResultsProps) {
  const description = [
    query ? `“${query.trim()}”` : null,
    track !== 'all' ? `the ${track} track` : null,
  ]
    .filter(Boolean)
    .join(' in ')

  return (
    <div
      aria-labelledby="gallery-no-results-title"
      className="state-card state-empty"
    >
      <span aria-hidden="true" className="state-icon">
        <Icon name="search" size={25} />
      </span>
      <p className="state-kicker">No matches</p>
      <h3 id="gallery-no-results-title">
        No projects found{description ? ` for ${description}` : ''}.
      </h3>
      <p className="state-copy">
        Try a different spelling, search by the creator’s name, or widen the
        track filter.
      </p>
      <button className="btn btn-primary" onClick={onReset} type="button">
        Clear search and filters
      </button>
    </div>
  )
}
