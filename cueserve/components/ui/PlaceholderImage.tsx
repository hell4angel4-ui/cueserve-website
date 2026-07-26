interface PlaceholderImageProps {
  label: string;
  className?: string;
}

// Stand-in for real photography/exports (design.md §9 lists these as
// pending asset exports). Clearly marked so it's obvious what to swap.
export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-gradient-to-br from-primary-400 via-sky to-navy text-white/70 ${className}`}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-70">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
