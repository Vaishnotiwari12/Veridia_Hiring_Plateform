// Minimal public layout with a top bar containing logo
export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Hexagon logo with thin strokes and center circle (matching navbar and footer) */}
            <div className="h-8 w-8 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagon outline */}
                <path d="M7 3.5 3 10l4 6.5h10L21 10 17 3.5H7z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
                {/* Center circle outline */}
                <circle cx="12" cy="10" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              </svg>
            </div>
            <div className="font-semibold">Veridia Hiring</div>
          </div>
          <div></div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
