import { BrandMark } from './BrandMark'

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />

        <nav aria-label="Primary" className="primary-nav">
          <a href="#projects">Gallery</a>
          <a href="#about">About</a>
        </nav>

        <span className="phase-chip">
          <span aria-hidden="true" className="phase-dot" />
          Phase 2 / 2026
        </span>
      </div>
    </header>
  )
}
