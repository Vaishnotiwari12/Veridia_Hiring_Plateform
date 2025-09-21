const HiringProcessSection = () => {
  return (
    <section id="hiring-process" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Our Transparent Hiring Process</h2>
        <p className="text-lg text-slate-300/90 mb-8 max-w-3xl mx-auto">
          Know exactly what to expect at each stage. Our streamlined process respects your time while ensuring the right fit.
        </p>
        <div className="relative">
          {/* Central vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {[
              {
                id: 1,
                title: "Application Submission",
                desc: "Submit your application through our streamlined platform. Upload your resume and answer a few key questions about your experience and interests.",
                timeline: "Instant confirmation",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                  </svg>
                ),
              },
              {
                id: 2,
                title: "Initial Review",
                desc: "Our hiring team reviews your application against role requirements. You'll receive an update within 2 business days with next steps.",
                timeline: "1-2 business days",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                ),
              },
              {
                id: 3,
                title: "Phone/Video Screen",
                desc: "A 30-minute conversation with a hiring manager to discuss your background, the role, and answer any questions you have about Veridia.",
                timeline: "30 minutes",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
              },
              {
                id: 4,
                title: "Team Interviews",
                desc: "Meet with 2-3 team members in focused interviews covering technical skills, cultural fit, and collaboration style.",
                timeline: "2-3 hours total",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                id: 5,
                title: "Final Decision",
                desc: "We'll make our decision within 2 business days and extend an offer with competitive compensation and benefits package.",
                timeline: "2 business days",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                ),
              },
            ].map((step) => (
              <div key={step.id} className={`relative flex items-center ${step.id % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {/* Step marker on the central line */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 h-8 w-8 rounded-full flex items-center justify-center text-white text-xs ${step.id === 1 ? 'bg-blue-500' : step.id === 2 ? 'bg-yellow-500' : step.id === 3 ? 'bg-green-500' : step.id === 4 ? 'bg-blue-500' : 'bg-yellow-500'}`}>
                  {step.id}
                </div>
                {/* Icon and Card */}
                <div className={`flex-1 max-w-md ${step.id % 2 === 1 ? 'mr-0' : 'ml-0'}`}>
                  <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4 shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-700 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-6 w-6 text-teal-300">
                        {step.icon}
                      </div>
                      <div className="font-semibold text-slate-100">{step.title}</div>
                    </div>
                    <p className="text-sm text-slate-300/90 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                    <p className={`text-xs mt-2 font-medium ${step.id === 1 ? 'text-blue-400' : step.id === 2 ? 'text-yellow-400' : step.id === 3 ? 'text-green-400' : step.id === 4 ? 'text-blue-400' : 'text-yellow-400'}`}>
                      Timeline: {step.timeline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcessSection;
