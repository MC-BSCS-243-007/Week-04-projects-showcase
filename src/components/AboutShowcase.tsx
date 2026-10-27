import { Icon } from './Icon'

const principles = [
  {
    title: 'Public work only',
    copy: 'Only projects cleared for public display are listed. A production version would read approved rows from Supabase through row-level security.',
  },
  {
    title: 'Search, then browse',
    copy: 'Search reads project titles and creator names. Track filters narrow the archive without hiding where the work came from.',
  },
  {
    title: 'Detail in place',
    copy: 'Every card opens into a focused project view — description, stack, links and project details, without losing the gallery.',
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
            is a working archive for that work: calm, searchable and built
            around the projects themselves.
          </p>

          <p className="about-copy-text">
            Each entry follows the shape of a real submission record — creator,
            track, summary, stack and links. The five projects here are existing
            live deployments; external links render only when a project supplies
            a valid public URL.
          </p>

          <div className="about-facts">
            <div>
              <strong>02</strong>
              <span>Tracks</span>
            </div>
            <div>
              <strong>05</strong>
              <span>Live projects</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Public links</span>
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
            <strong>Data &amp; privacy.</strong> This gallery runs on five
            existing public projects. There is no production Internlytic
            database connection; a production version would read only approved
            rows from Supabase through row-level security, link each project to
            its creator by reference, and keep private details out of the
            browser.
          </p>
        </div>
      </div>
    </section>
  )
}
