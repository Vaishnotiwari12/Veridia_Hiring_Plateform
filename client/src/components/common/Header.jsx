// Reusable header for dashboards with title slot and right-side actions
export default function Header({ title, right, onMenuClick }) {
  return (
    <div className="h-16 border-b border-gray-800 flex items-center justify-between px-3 md:px-6 bg-gray-900">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">{right}</div>
    </div>
  );
}
