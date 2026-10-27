type BrandMarkProps = {
  tone?: 'default' | 'light'
}

export function BrandMark({ tone = 'default' }: BrandMarkProps) {
  return (
    <a
      className={`brand brand-${tone}`}
      href="#main"
    >
      <span className="brand-mark" aria-hidden="true">
        <svg fill="none" viewBox="0 0 32 32">
          <path
            d="M10 9h12M16 9v14M10 23h12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.3"
          />
          <circle cx="24.6" cy="8.4" fill="#18B59A" r="2.1" />
        </svg>
      </span>
      <span className="brand-words">
        <span className="brand-name">Internlytic</span>
        <span className="brand-sub">Technologies</span>
      </span>
      <span className="sr-only">— back to top</span>
    </a>
  )
}
