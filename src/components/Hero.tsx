import { showcaseProjects } from '../data/projects'
import { Icon } from './Icon'

const previewProjects = showcaseProjects.slice(0, 3)

export function Hero() {
  return (
    <section aria-labelledby="page-title" className="hero">
      <div aria-hidden="true" className="hero-decor">
        <span className="hero-grid" />
        <span className="hero-orbit hero-orbit-a" />
        <span className="hero-orbit hero-orbit-b" />
        <span className="hero-letter">P2</span>
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" className="eyebrow-dot" />
            <span>Internlytic Technologies</span>
            <span aria-hidden="true" className="eyebrow-rule" />
            <span className="mono">Phase 2 projects</span>
          </p>

          <h1 id="page-title">
            Work worth a
            <br />
            <em>closer look.</em>
          </h1>

          <p className="hero-lede">
            A curated gallery of interfaces and products built through Phase 2.
            Search the archive, open a project, and step into its live
            deployment.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Browse the gallery
              <Icon name="arrowDown" size={16} />
            </a>
            <a className="text-link" href="#about">
              About the showcase
              <Icon name="arrowRight" size={15} />
            </a>
          </div>

          <ul className="hero-facts">
            <li>
              <Icon name="grid" size={15} />
              Web app track
            </li>
            <li>
              <Icon name="check" size={15} />
              Live deployments
            </li>
            <li>
              <Icon name="layers" size={15} />
              Two projects
            </li>
          </ul>
        </div>

        <div aria-hidden="true" className="hero-visual">
          <div className="hero-stack">
            {previewProjects.map((project, index) => (
              <figure
                className={`hero-preview hero-preview-${index + 1}`}
                key={project.id}
              >
                <img alt="" src={project.thumbnailUrl} />
                <figcaption>
                  <span>{project.track}</span>
                  <strong>{project.projectTitle}</strong>
                </figcaption>
              </figure>
            ))}
            <span className="hero-seal">
              <span>Phase 2</span>
              <strong>2026</strong>
            </span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="hero-ribbon">
        <div className="container ribbon-inner">
          <span>Front-end development</span>
          <i />
          <span>Interface design</span>
          <i />
          <span>Product thinking</span>
          <i />
          <span>Phase 2 archive</span>
        </div>
      </div>
    </section>
  )
}
