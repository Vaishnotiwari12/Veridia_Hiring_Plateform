import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const HeroSection = () => {
  const { isSignedIn } = useAuth();

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Abstract gradient background accents */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/40 via-slate-950 to-slate-950" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 text-center">
        <h1 className="text-6xl sm:text-8xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
          Build Your Future with Veridia
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-slate-300/95 max-w-4xl mx-auto leading-relaxed">
          Connecting talented professionals with forward-thinking companies through innovative hiring solutions.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#featured-opportunities">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 transform hover:scale-105">
              Explore Opportunities
            </button>
          </a>
          {isSignedIn ? (
            <Link to="/candidate/applications">
              <button className="px-8 py-4 rounded-2xl bg-transparent border-2 border-teal-500 text-teal-400 font-bold hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Go to Dashboard
              </button>
            </Link>
          ) : (
            <Link to="/candidate2">
              <button className="px-8 py-4 rounded-2xl bg-transparent border-2 border-teal-500 text-teal-400 font-bold hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Start Your Application
              </button>
            </Link>
          )}
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400">247</div>
            <div className="text-lg text-slate-300 mt-2">Active Job Openings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">12</div>
            <div className="text-lg text-slate-300 mt-2">Days Average Time-to-Hire</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400">94%</div>
            <div className="text-lg text-slate-300 mt-2">Employee Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
