import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            {/* Hexagon logo with thin strokes and center circle (matching navbar) */}
            <a href="#hero" className="h-8 w-8 grid place-items-center hover:opacity-80 transition-opacity" title="Go to top">
              <svg viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagon outline */}
                <path d="M7 3.5 3 10l4 6.5h10L21 10 17 3.5H7z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
                {/* Center circle outline */}
                <circle cx="12" cy="10" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              </svg>
            </a>
            <div className="text-lg font-extrabold">Veridia</div>
          </div>
          <p className="text-sm text-slate-400 mt-3 max-w-sm">
            Building careers with clarity, speed, and care.
          </p>
        </div>
        {/* Company */}
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#jobs" className="hover:text-white">Jobs</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        {/* Candidates */}
        <div>
          <div className="font-semibold mb-3">Candidates</div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/candidate2" className="hover:text-white">Apply</Link></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <div className="font-semibold mb-3">Follow Us</div>
          <div className="flex items-center gap-3 text-slate-300">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.764 0 5-2.238 5-5v-14c0-2.762-2.236-5-5-5Zm-11 19h-3v-10h3v10Zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75ZM20 19h-3v-5.604c0-1.337-.026-3.057-1.862-3.057-1.862 0-2.146 1.454-2.146 2.957v5.704h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.036 0 3.6 2.001 3.6 4.604v5.587Z"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19.633 7.997c.013.177.013.355.013.533 0 5.42-4.125 11.664-11.664 11.664-2.317 0-4.47-.678-6.28-1.85.322.038.63.051.966.051 1.918 0 3.68-.654 5.083-1.757-1.793-.025-3.304-1.217-3.827-2.842.253.038.506.063.772.063.38 0 .759-.051 1.113-.14-1.868-.38-3.273-2.018-3.273-3.992v-.051c.544.304 1.174.494 1.842.519-1.09-.73-1.805-1.966-1.805-3.367 0-.747.203-1.43.557-2.026 2.011 2.466 5.02 4.084 8.41 4.26-.064-.304-.102-.62-.102-.936 0-2.28 1.842-4.135 4.122-4.135 1.185 0 2.255.494 3.007 1.29.936-.177 1.83-.519 2.629-.981-.305.95-.95 1.755-1.793 2.255.834-.089 1.63-.317 2.371-.633-.557.834-1.262 1.566-2.07 2.153Z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Veridia. All rights reserved.</div>

          {/* Made with love section */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Made with</span>
            <div className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <span>by</span>
            <span className="font-semibold text-slate-300">Vaishno Tiwari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;