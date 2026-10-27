import { useEffect, useRef } from 'react'
import { formatProjectDate, initialsFor, safeExternalUrl } from '../lib/format'
import type { Project } from '../types'
import { Icon } from './Icon'

type ProjectDialogProps = {
  onClose: () => void
  project: Project | null
}

export function ProjectDialog({ onClose, project }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project) {
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null

      if (!dialog.open) dialog.showModal()
      document.body.classList.add('has-dialog')
      window.requestAnimationFrame(() => closeButtonRef.current?.focus())
    } else if (dialog.open) {
      dialog.close()
    }
  }, [project])

  useEffect(() => {
    return () => {
      document.body.classList.remove('has-dialog')
    }
  }, [])

  function handleClose() {
    document.body.classList.remove('has-dialog')
    previousFocusRef.current?.focus()
    onClose()
  }

  const liveUrl = project ? safeExternalUrl(project.liveUrl) : null
  const githubUrl = project ? safeExternalUrl(project.githubUrl) : null

  return (
    <dialog
      aria-labelledby="project-dialog-title"
      className="project-dialog"
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          dialogRef.current.close()
        }
      }}
      onClose={handleClose}
      ref={dialogRef}
    >
      {project ? (
        <div className="dialog-shell">
          <header className="dialog-bar">
            <span className="dialog-kicker">
              <span aria-hidden="true" className="dialog-kicker-dot" />
              Project detail
              <span aria-hidden="true">/</span>
              Phase 2
            </span>
            <button
              aria-label="Close project details"
              className="dialog-close"
              onClick={() => dialogRef.current?.close()}
              ref={closeButtonRef}
              type="button"
            >
              <Icon name="close" size={17} />
              <span>Close</span>
            </button>
          </header>

          <div className="dialog-scroll">
            <figure className="dialog-media">
              <img
                alt={project.thumbnailAlt}
                height="500"
                src={project.thumbnailUrl}
                width="800"
              />
            </figure>

            <div className="dialog-content">
              <div className="dialog-flags">
                <span className="flag flag-live">Live project</span>
                <span className="flag flag-track">{project.track}</span>
              </div>

              <h2 id="project-dialog-title">{project.projectTitle}</h2>

              <div className="intern-row intern-row-lg">
                <span aria-hidden="true" className="intern-avatar">
                  {initialsFor(project.internName)}
                </span>
                <span className="intern-copy">
                  <strong>{project.internName}</strong>
                  <span>Phase 2 intern</span>
                </span>
              </div>

              <p className="dialog-lede">{project.longDescription}</p>

              <div className="dialog-grid">
                <div className="dialog-block">
                  <h3>Technology stack</h3>
                  <ul
                    aria-label={`Technologies used in ${project.projectTitle}`}
                    className="tech-list tech-list-lg"
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>

                <dl className="dialog-meta">
                  <div>
                    <dt>
                      <Icon name="calendar" size={14} />
                      Added
                    </dt>
                    <dd>{formatProjectDate(project.createdAt)}</dd>
                  </div>
                  <div>
                    <dt>
                      <Icon name="check" size={14} />
                      Status
                    </dt>
                    <dd>Live deployment</dd>
                  </div>
                </dl>
              </div>

              <div className="dialog-links">
                <h3>Explore this project</h3>
                {liveUrl || githubUrl ? (
                  <div className="dialog-link-row">
                    {liveUrl ? (
                      <a
                        className="btn btn-primary"
                        href={liveUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View project
                        <Icon name="arrowUpRight" size={15} />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                    {githubUrl ? (
                      <a
                        className="btn btn-secondary"
                        href={githubUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Icon name="layers" size={15} />
                        GitHub repository
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <p className="dialog-note">
                    <Icon name="info" size={16} />
                    No public live demo or repository has been added to this
                    record yet. Link buttons appear here automatically when a
                    project includes a valid URL.
                  </p>
                )}
              </div>

              <div className="dialog-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => dialogRef.current?.close()}
                  type="button"
                >
                  Back to the gallery
                  <Icon name="arrowRight" size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
