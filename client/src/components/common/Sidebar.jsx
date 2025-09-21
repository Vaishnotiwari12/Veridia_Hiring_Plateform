// Generic sidebar with nav items
import { NavLink } from 'react-router-dom';

export default function Sidebar({ items = [], activeSection, isOpen, onClose }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-60 shrink-0 border-r border-gray-800 p-4 bg-gray-900">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-6">
            {/* Hexagon logo with thin strokes and center circle (matching navbar and footer) */}
            <div className="h-8 w-8 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagon outline */}
                <path d="M7 3.5 3 10l4 6.5h10L21 10 17 3.5H7z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
                {/* Center circle outline */}
                <circle cx="12" cy="10" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              </svg>
            </div>
            <div className="font-semibold">Veridia</div>
          </div>
          <nav className="space-y-1">
            {items.map((it) => (
              <NavLink
                key={`${it.to}-${it.label}`}
                to={it.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive || activeSection === it.active
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                  }`
                }
              >
                {it.icon && <span className="mr-2">{it.icon}</span>}
                {it.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-60 bg-gray-900 border-r border-gray-800 p-4 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3.5 3 10l4 6.5h10L21 10 17 3.5H7z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
                  <circle cx="12" cy="10" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                </svg>
              </div>
              <div className="font-semibold">Veridia</div>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <nav className="space-y-1">
            {items.map((it) => (
              <NavLink
                key={`${it.to}-${it.label}`}
                to={it.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive || activeSection === it.active
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                  }`
                }
              >
                {it.icon && <span className="mr-2">{it.icon}</span>}
                {it.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
