import type { SVGProps } from 'react'

export type IconName =
  | 'search'
  | 'close'
  | 'arrowUpRight'
  | 'arrowRight'
  | 'arrowDown'
  | 'grid'
  | 'layers'
  | 'sparkle'
  | 'alert'
  | 'refresh'
  | 'user'
  | 'filter'
  | 'calendar'
  | 'info'
  | 'check'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

export function Icon({ name, size = 18, ...rest }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      {name === 'search' ? (
        <>
          <circle cx="10.5" cy="10.5" r="6.2" />
          <path d="m15.2 15.2 4.3 4.3" />
        </>
      ) : null}
      {name === 'close' ? (
        <>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </>
      ) : null}
      {name === 'arrowUpRight' ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : null}
      {name === 'arrowRight' ? (
        <>
          <path d="M4 12h16" />
          <path d="m14 6 6 6-6 6" />
        </>
      ) : null}
      {name === 'arrowDown' ? (
        <>
          <path d="M12 4v16" />
          <path d="m6 14 6 6 6-6" />
        </>
      ) : null}
      {name === 'grid' ? (
        <>
          <rect height="6.5" rx="1.5" width="6.5" x="4" y="4" />
          <rect height="6.5" rx="1.5" width="6.5" x="13.5" y="4" />
          <rect height="6.5" rx="1.5" width="6.5" x="4" y="13.5" />
          <rect height="6.5" rx="1.5" width="6.5" x="13.5" y="13.5" />
        </>
      ) : null}
      {name === 'layers' ? (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </>
      ) : null}
      {name === 'sparkle' ? (
        <>
          <path d="M12 3v4" />
          <path d="M12 17v4" />
          <path d="M3 12h4" />
          <path d="M17 12h4" />
          <path d="m5.6 5.6 2.8 2.8" />
          <path d="m15.6 15.6 2.8 2.8" />
          <path d="m18.4 5.6-2.8 2.8" />
          <path d="m8.4 15.6-2.8 2.8" />
        </>
      ) : null}
      {name === 'alert' ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5v5.5" />
          <path d="M12 16.5h.01" />
        </>
      ) : null}
      {name === 'refresh' ? (
        <>
          <path d="M20 11a8 8 0 0 0-14.9-3" />
          <path d="M4 4v4h4" />
          <path d="M4 13a8 8 0 0 0 14.9 3" />
          <path d="M20 20v-4h-4" />
        </>
      ) : null}
      {name === 'user' ? (
        <>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c.8-3.5 3.5-5.4 7-5.4s6.2 1.9 7 5.4" />
        </>
      ) : null}
      {name === 'filter' ? (
        <>
          <path d="M4 6h16" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </>
      ) : null}
      {name === 'calendar' ? (
        <>
          <rect height="15" rx="2.5" width="16" x="4" y="5.5" />
          <path d="M8 3.5v4" />
          <path d="M16 3.5v4" />
          <path d="M4 10h16" />
        </>
      ) : null}
      {name === 'info' ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10.5V17" />
          <path d="M12 7h.01" />
        </>
      ) : null}
      {name === 'check' ? <path d="m5 12.5 4.2 4.2L19 7" /> : null}
    </svg>
  )
}
