import { BrandMark } from './BrandMark'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <BrandMark />
          <p>
            A Phase 2 projects showcase concept, built for the Internlytic
            Technologies front-end internship.
          </p>
        </div>

        <nav aria-label="Footer" className="footer-nav">
          <a href="#projects">Gallery</a>
          <a href="#about">About</a>
          <a href="#main">
            Back to top
            <Icon name="arrowDown" size={13} className="back-to-top-icon" />
          </a>
        </nav>
      </div>

      <div className="container footer-fine">
        <p>
          <span aria-hidden="true" className="footer-dot" />
          Sample data only — interns, projects and links are fictional.
        </p>
        <p>
          Wordmark is a placeholder pending the official Internlytic logo asset.
        </p>
      </div>
    </footer>
  )
}
