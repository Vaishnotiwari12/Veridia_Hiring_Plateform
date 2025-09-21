import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const CTABannerSection = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Build Your Future with Veridia?</h2>
        <p className="text-slate-300/90 mb-8 max-w-3xl mx-auto">
          Join a company that values your growth, respects your time, and provides the tools you need to succeed. Your next career milestone starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {isSignedIn ? (
            <Link to="/candidate/applications" className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center">
              Go to Dashboard
            </Link>
          ) : (
            <a href="http://localhost:5173/candidate2" className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center">
              Apply Now - Start Today
            </a>
          )}
          <a href="#featured-opportunities" className="bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center">
            Browse All Positions
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">247</div>
            <div className="text-sm text-slate-300 mt-2">Open Positions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">94%</div>
            <div className="text-sm text-slate-300 mt-2">Employee Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">12</div>
            <div className="text-sm text-slate-300 mt-2">Days Avg. Hiring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">500+</div>
            <div className="text-sm text-slate-300 mt-2">Successful Hires</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
