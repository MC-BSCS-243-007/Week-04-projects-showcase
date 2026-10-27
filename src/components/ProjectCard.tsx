import { initialsFor, safeExternalUrl } from '../lib/format'
import type { Project } from '../types'
import { trackSlug } from '../types'
import { Icon } from './Icon'

type ProjectCardProps = {
  index: number
  onOpen: (project: Project) => void
  project: Project
}

export function ProjectCard({ index, onOpen, project }: ProjectCardProps) {
  const liveUrl = safeExternalUrl(project.liveUrl)
  const githubUrl = safeExternalUrl(project.githubUrl)
  const visibleTechnologies = project.technologies.slice(0, 3)
  const hiddenTechnologies = project.technologies.length - visibleTechnologies.length

  return (
    <article
      className="project-card"
      data-project={project.id}
      data-track={trackSlug(project.track)}
    >
      <div className="card-media">
        <img
          alt={project.thumbnailAlt}
          height="500"
          loading={index < 3 ? 'eager' : 'lazy'}
          src={project.thumbnailUrl}
          width="800"
        />
      </div>

      <div className="card-body">
        <div className="intern-row">
          <span aria-hidden="true" className="intern-avatar">
            {initialsFor(project.internName)}
          </span>
          <span className="intern-copy">
            <strong>{project.internName}</strong>
            <span>
              Phase 2 intern <span className="live-word">· live</span>
            </span>
          </span>
          <span className="track-pill">{project.track}</span>
        </div>

        <h3 className="project-title">{project.projectTitle}</h3>
        <p className="project-description">{project.description}</p>

        <ul
          aria-label={`Technologies used in ${project.projectTitle}`}
          className="tech-list"
        >
          {visibleTechnologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {hiddenTechnologies > 0 ? (
            <li className="tech-more">+{hiddenTechnologies}</li>
          ) : null}
        </ul>

        <div className="card-footer">
          <button
            className="card-open"
            onClick={() => onOpen(project)}
            type="button"
          >
            View project
            <span className="sr-only"> — {project.projectTitle}</span>
            <Icon name="arrowRight" size={15} />
          </button>

          {liveUrl || githubUrl ? (
            <div className="card-links">
              {liveUrl ? (
                <a
                  className="icon-link"
                  href={liveUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon name="arrowUpRight" size={14} />
                  Live
                  <span className="sr-only">
                    {' '}
                    for {project.projectTitle} (opens in a new tab)
                  </span>
                </a>
              ) : null}
              {githubUrl ? (
                <a
                  className="icon-link"
                  href={githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon name="layers" size={14} />
                  GitHub
                  <span className="sr-only">
                    {' '}
                    repository for {project.projectTitle} (opens in a new tab)
                  </span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
