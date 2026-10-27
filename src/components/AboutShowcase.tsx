import { Icon } from './Icon'

const principles = [
  {
    title: 'Approved first',
    copy: 'Only records marked as approved enter the gallery. The demo filters sample data the same way a live query would.',
  },
  {
    title: 'Search, then browse',
    copy: 'Search reads project titles and intern names. Track filters narrow the cohort without hiding where the work came from.',
  },
  {
    title: 'Detail in place',
    copy: 'Every card opens into a focused project view — description, stack, links and submission details, without losing the gallery.',
  },
]

export function AboutShowcase() {
  return (
    <section
      aria-labelledby="about-title"
      className="about-section"
      id="about"
    >
      <div aria-hidden="true" className="about-decor">
        <span className="about-ring about-ring-a" />
        <span className="about-ring about-ring-b" />
        <span className="about-grid" />
      </div>

      <div className="container about-inner">
        <div className="about-copy">
          <p className="eyebrow eyebrow-light">
            <span aria-hidden="true" className="eyebrow-dot" />
            About the showcase
            <span aria-hidden="true" className="eyebrow-rule" />
            <span className="mono">Concept</span>
          </p>

          <h2 id="about-title">
            A gallery built for <em>the work.</em>
          </h2>

          <p className="about-lede">
            Phase 2 is where interns move from exercises to products. This page
            is a concept for the archive that work deserves: calm, searchable
            and built around the people behind each project.
          </p>

          <p className="about-copy-text">
            Each entry follows the shape of a real submission record — creator,
            track, summary, stack and links. External links only render when a
            project supplies a valid URL, so the gallery never invents a
            destination.
          </p>

          <div className="about-facts">
            <div>
              <strong>04</strong>
              <span>Tracks</span>
            </div>
            <div>
              <strong>08</strong>
              <span>Sample projects</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Approved only</span>
            </div>
          </div>
        </div>

        <div className="about-panel">
          <ol className="about-principles">
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <span aria-hidden="true" className="principle-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container">
        <div className="data-note">
          <span aria-hidden="true" className="data-note-icon">
            <Icon name="sparkle" size={18} />
          </span>
          <p>
            <strong>Data &amp; privacy.</strong> This demo runs entirely on
            clearly labelled sample records. A production version would read
            only approved rows from Supabase through row-level security, link
            each project to its intern by reference, and keep private intern
            details out of the browser.
          </p>
        </div>
      </div>
    </section>
  )
}
