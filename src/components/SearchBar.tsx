import { useEffect, useRef } from 'react'
import { Icon } from './Icon'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      const target = event.target as HTMLElement | null
      const isTyping =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'SELECT' ||
        target?.isContentEditable

      if (isTyping || document.querySelector('dialog[open]')) return

      event.preventDefault()
      inputRef.current?.focus()
    }

    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  function clearSearch() {
    onChange('')
    inputRef.current?.focus()
  }

  return (
    <div className="search-bar">
      <label className="sr-only" htmlFor="gallery-search">
        Search projects by title or intern name
      </label>
      <Icon className="search-icon" name="search" size={19} />
      <input
        autoComplete="off"
        id="gallery-search"
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && value) {
            event.preventDefault()
            onChange('')
          }
        }}
        placeholder="Search projects or interns"
        ref={inputRef}
        spellCheck={false}
        type="search"
        value={value}
      />
      {value ? (
        <button
          aria-label="Clear search"
          className="search-clear"
          onClick={clearSearch}
          type="button"
        >
          <Icon name="close" size={15} />
        </button>
      ) : (
        <kbd aria-hidden="true" className="search-kbd">
          /
        </kbd>
      )}
    </div>
  )
}
