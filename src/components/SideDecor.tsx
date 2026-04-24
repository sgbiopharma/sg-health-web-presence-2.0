/**
 * SideDecor — fixed, non-interactive subtle decorative shapes
 * pinned to the left/right edges of the viewport. Adds visual
 * interest without affecting layout or interactivity.
 */
export function SideDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Left side */}
      <div className="absolute -left-32 top-[12%] h-72 w-72 rounded-full bg-primary/8 blur-3xl animate-pulse [animation-duration:8s]" />
      <div className="absolute -left-20 top-[55%] h-56 w-56 rounded-full bg-[image:var(--gradient-primary)] opacity-[0.07] blur-3xl" />
      <svg
        className="absolute left-2 top-[30%] h-24 w-24 text-primary/15"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 10v80M10 50h80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="absolute left-4 top-[70%] flex flex-col gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/10" />
      </div>

      {/* Right side */}
      <div className="absolute -right-32 top-[20%] h-80 w-80 rounded-full bg-[image:var(--gradient-primary)] opacity-[0.08] blur-3xl" />
      <div className="absolute -right-24 top-[65%] h-64 w-64 rounded-full bg-primary/8 blur-3xl animate-pulse [animation-duration:10s]" />
      <svg
        className="absolute right-3 top-[15%] h-20 w-20 text-primary/15"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" />
      </svg>
      <div className="absolute right-4 top-[45%] grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-primary/25" />
        ))}
      </div>
    </div>
  );
}