import { Link } from '../lib/router'

/**
 * Brand mark — "Road & Board".
 * A "T" split in two: the crossbar is the dispatch board, the stem is the road
 * running toward you, striped with safety-orange lane dashes.
 * ("You run the road. We run the board.")
 * Theme-aware: tile uses ink, glyph uses bg, so it inverts with the theme.
 * Static copies: public/favicon.svg, public/logo.svg, public/logo-mark.svg.
 */
export function LogoMark({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect width="48" height="48" rx="12" className="fill-ink" />
      <rect x="9" y="9.5" width="30" height="7" rx="1.75" className="fill-bg" />
      <path d="M20.25 19.5h7.5L33 38.5H15z" className="fill-bg" />
      <g className="logo-lanes fill-accent">
        <path d="M23.1 21.5h1.8l.25 3.5h-2.3z" />
        <path d="M22.7 27.4h2.6l.35 4.1h-3.3z" />
        <path d="M22.2 34.1h3.6l.45 4.4h-4.5z" />
      </g>
    </svg>
  )
}

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Truckify — home">
      <LogoMark className="size-8 transition-transform duration-700 ease-out-expo group-hover:rotate-[-6deg]" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-semibold tracking-[-0.04em]">
          Truckify<span className="text-accent">.</span>
        </span>
        <span className="label mt-1 text-[0.6rem] text-ink-faint">Dispatch Desk</span>
      </span>
    </Link>
  )
}
