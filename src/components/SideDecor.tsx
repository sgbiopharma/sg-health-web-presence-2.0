/**
 * SideDecor — fixed, non-interactive subtle decorative shapes
 * pinned to the left/right edges of the viewport. Adds visual
 * interest without affecting layout or interactivity.
 */
export function SideDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Left side */}
      {/* Soft gradient blobs */}
      <div className="absolute -left-32 top-[8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse [animation-duration:8s]" />
      <div className="absolute -left-24 top-[55%] h-64 w-64 rounded-full bg-[image:var(--gradient-primary)] opacity-[0.09] blur-3xl" />
      <div className="absolute -right-32 top-[18%] h-80 w-80 rounded-full bg-[image:var(--gradient-primary)] opacity-[0.10] blur-3xl" />
      <div className="absolute -right-24 top-[68%] h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse [animation-duration:10s]" />

      {/* Medical cross — left top */}
      <svg className="absolute left-3 top-[14%] h-14 w-14 text-primary/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
      </svg>

      {/* Pill capsule — left middle */}
      <svg className="absolute left-6 top-[38%] h-12 w-20 -rotate-[28deg] text-primary/25" viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="4" width="76" height="24" rx="12" />
        <line x1="40" y1="4" x2="40" y2="28" />
      </svg>

      {/* Heartbeat / ECG line — left lower */}
      <svg className="absolute left-2 top-[62%] h-10 w-28 text-primary/25" viewBox="0 0 120 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 16h20l6-10 8 20 6-14 8 8h72" />
      </svg>

      {/* Dots column — left bottom */}
      <div className="absolute left-5 top-[82%] flex flex-col gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/10" />
      </div>

      {/* Stethoscope-ish ring — right top */}
      <svg className="absolute right-4 top-[12%] h-16 w-16 text-primary/20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="32" cy="44" r="10" />
        <path d="M14 8v14c0 8 6 14 14 14M50 8v14c0 8-6 14-14 14" strokeLinecap="round" />
        <circle cx="14" cy="6" r="2.5" fill="currentColor" />
        <circle cx="50" cy="6" r="2.5" fill="currentColor" />
      </svg>

      {/* Capsule — right middle */}
      <svg className="absolute right-5 top-[36%] h-10 w-16 rotate-[35deg] text-primary/25" viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="4" width="76" height="24" rx="12" />
        <line x1="40" y1="4" x2="40" y2="28" />
      </svg>

      {/* Dot grid — right lower-mid */}
      <div className="absolute right-6 top-[55%] grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-primary/30" />
        ))}
      </div>

      {/* DNA-ish wave — right bottom */}
      <svg className="absolute right-3 top-[78%] h-20 w-12 text-primary/20" viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M5 5 Q 35 20 5 40 Q 35 60 5 75" />
        <path d="M35 5 Q 5 20 35 40 Q 5 60 35 75" />
      </svg>
    </div>
  );
}