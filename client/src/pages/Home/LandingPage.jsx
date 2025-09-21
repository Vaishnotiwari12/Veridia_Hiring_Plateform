// LandingPage.jsx
// A single, self-contained React component implementing a modern, dark-themed landing page
// It includes: Sticky Header, Hero, Why Choose Us, Featured Jobs, Testimonials (alternating),
// Hiring Process (5 steps), and a multi-column Footer. Built with TailwindCSS classes.
// Drop-in ready for a Vite React app.

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, UserButton, SignInButton, useUser } from "@clerk/clerk-react";

// Import all section components
import HeroSection from "./sections/HeroSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import LifeAtVeridiaSection from "./sections/LifeAtVeridiaSection";
import ComprehensiveBenefitsSection from "./sections/ComprehensiveBenefitsSection";
import FeaturedOpportunitiesSection from "./sections/FeaturedOpportunitiesSection";
import HiringProcessSection from "./sections/HiringProcessSection";
import FAQSection from "./sections/FAQSection";
import CTABannerSection from "./sections/CTABannerSection";
import ContactUsSection from "./sections/ContactUsSection";
import Footer from "./sections/Footer";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, user } = useAuth();
  const { user: clerkUser } = useUser();

  // Get user role from Clerk metadata
  const userRole = clerkUser?.publicMetadata?.role;

  // Demo job cards (replace with real jobs later)
  const jobs = useMemo(
    () => [
      { id: 1, title: "Senior Software Engineer", location: "Remote", salary: "$150k - $180k" },
      { id: 2, title: "Product Designer", location: "Remote", salary: "$110k - $140k" },
      { id: 3, title: "Backend Engineer", location: "Bangalore", salary: "₹25L - ₹40L" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sticky Header/Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/90">
        <div className="max-w-7xl mx-auto h-16 px-3 sm:px-4 md:px-6 flex items-center justify-between gap-4">
          {/* Left: Brand with small icon */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Hexagon logo with thin strokes and center circle (not bold) */}
            <div className="h-8 w-8 sm:h-10 sm:w-10 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagon outline */}
                <path d="M7 3.5 3 10l4 6.5h10L21 10 17 3.5H7z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
                {/* Center circle outline */}
                <circle cx="12" cy="10" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              </svg>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight">
              <a href="#hero" className="hover:opacity-80 transition-opacity" title="Go to top">Veridia</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-semibold text-slate-300">
            <a href="#featured-opportunities" className="hover:text-white transition-colors">Jobs</a>
            <a href="#culture" className="hover:text-white transition-colors">Culture</a>
            <a href="#jobs" className="hover:text-white transition-colors">Benefits</a>
            <a href="#hiring-process" className="hover:text-white transition-colors">Process</a>
          </nav>

          {/* Right: Auth / Apply actions or User Profile */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            {!isSignedIn ? (
              <>
                <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition border border-slate-700 text-sm md:text-base">
                  <SignInButton mode="modal">
                    Login
                  </SignInButton>
                </button>
                <Link to="/candidate2">
                  <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition text-sm md:text-base">
                    Apply Now
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                {/* Regular User Dashboard */}
                {userRole !== 'admin' && (
                  <Link to="/candidate/applications">
                    <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition text-sm md:text-base">
                      Dashboard
                    </button>
                  </Link>
                )}

                {/* Admin Access Button */}
                {userRole === 'admin' && (
                  <button
                    onClick={() => {
                      // Check if user is admin before allowing access
                      if (userRole === 'admin') {
                        window.location.href = '/admin2';
                      } else {
                        alert('Hey! You are not an admin. Please contact your administrator for access.');
                      }
                    }}
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition text-sm md:text-base"
                  >
                    Admin Panel
                  </button>
                )}

                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 md:w-10 md:h-10"
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4">
              <nav className="flex flex-col gap-3">
                <a
                  href="#featured-opportunities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium"
                >
                  Jobs
                </a>
                <a
                  href="#culture"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium"
                >
                  Culture
                </a>
                <a
                  href="#jobs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium"
                >
                  Benefits
                </a>
                <a
                  href="#hiring-process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium"
                >
                  Process
                </a>
                <div className="border-t border-white/10 pt-3 mt-2 flex flex-col sm:hidden gap-2">
                  {!isSignedIn ? (
                    <>
                      <button className="w-full px-4 py-3 rounded-xl bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition border border-slate-700 text-sm">
                        <SignInButton mode="modal">
                          Login
                        </SignInButton>
                      </button>
                      <Link to="/candidate2" onClick={() => setMobileMenuOpen(false)}>
                        <button className="w-full px-4 py-3 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition text-sm">
                          Apply Now
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      {/* Regular User Dashboard */}
                      {userRole !== 'admin' && (
                        <Link to="/candidate/applications" onClick={() => setMobileMenuOpen(false)}>
                          <button className="w-full px-4 py-3 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition text-sm">
                            Dashboard
                          </button>
                        </Link>
                      )}

                      {/* Admin Access Button */}
                      {userRole === 'admin' && (
                        <button
                          onClick={() => {
                            setMobileMenuOpen(false);
                            if (userRole === 'admin') {
                              window.location.href = '/admin2';
                            } else {
                              alert('Hey! You are not an admin. Please contact your administrator for access.');
                            }
                          }}
                          className="w-full px-4 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition text-sm"
                        >
                          Admin Panel
                        </button>
                      )}

                      <div className="flex justify-center pt-2">
                        <UserButton
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-8 h-8"
                            }
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us? */}
      <WhyChooseUsSection />

      {/* Life at Veridia */}
      <LifeAtVeridiaSection />

      {/* Comprehensive Benefits */}
      <ComprehensiveBenefitsSection />

      {/* Featured Opportunities */}
      <FeaturedOpportunitiesSection />

      {/* Our Transparent Hiring Process */}
      <HiringProcessSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Contact Us */}
      <ContactUsSection />

      {/* Ready to Build Your Future */}
      <CTABannerSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
