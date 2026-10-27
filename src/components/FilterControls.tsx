import type { Track } from '../types'
import { trackSlug } from '../types'
import { Icon } from './Icon'

export type TrackFilter = Track | 'all'

type FilterControlsProps = {
  active: TrackFilter
  counts?: Record<Track, number>
  onChange: (track: TrackFilter) => void
  tracks: Track[]
  total: number
}

export function FilterControls({
  active,
  counts,
  onChange,
  tracks,
  total,
}: FilterControlsProps) {
  return (
    <div className="filter-controls">
      <span className="filter-label">
        <Icon name="filter" size={15} />
        Track
      </span>

      <div aria-label="Filter projects by track" className="chip-row" role="group">
        <button
          aria-pressed={active === 'all'}
          className={`filter-chip${active === 'all' ? ' is-active' : ''}`}
          onClick={() => onChange('all')}
          type="button"
        >
          All projects
          {counts ? <span className="chip-count">{total}</span> : null}
        </button>

        {tracks.map((track) => (
          <button
            aria-pressed={active === track}
            className={`filter-chip${active === track ? ' is-active' : ''}`}
            data-track={trackSlug(track)}
            key={track}
            onClick={() => onChange(track)}
            type="button"
          >
            {track}
            {counts ? <span className="chip-count">{counts[track]}</span> : null}
          </button>
        ))}
      </div>
    </div>
  )
}
