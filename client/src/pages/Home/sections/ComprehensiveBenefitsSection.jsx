//comprehensive benefits section
const ComprehensiveBenefitsSection = () => {
  return (
    <section id="jobs" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Comprehensive Benefits</h2>
        <p className="text-lg text-slate-300/90 mb-8 max-w-3xl mx-auto">
          We invest in your success with competitive compensation and benefits that support your professional and personal growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "Competitive Salary",
              desc: "Market-leading compensation packages with annual reviews and performance-based increases.",
              extra: "Equity participation for all employees",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20m10-10H2" />
                </svg>
              ),
            },
            {
              id: 2,
              title: "Health & Wellness",
              desc: "Comprehensive health insurance, dental, vision, and mental health support programs.",
              extra: "$2,000 annual wellness stipend",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
            },
            {
              id: 3,
              title: "Learning Budget",
              desc: "$5,000 annual professional development budget for courses, conferences, and certifications.",
              extra: "Mentorship programs available",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
            },
            {
              id: 4,
              title: "Flexible Work",
              desc: "Remote-first culture with flexible hours and unlimited PTO policy for work-life balance.",
              extra: "Home office setup stipend",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              ),
            },
            {
              id: 5,
              title: "Innovation Time",
              desc: "20% time for personal projects and innovation initiatives that drive company growth.",
              extra: "Patent bonus program",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
            },
            {
              id: 6,
              title: "Family Support",
              desc: "Parental leave, childcare assistance, and family-friendly policies that support life transitions.",
              extra: "Adoption assistance program",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.id} className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-800/80 transition-all duration-300 cursor-pointer">
              <div className="h-12 w-12 rounded-xl bg-teal-500/20 mb-4 flex items-center justify-center text-teal-300">
                {item.icon}
              </div>
              <div className="font-semibold text-slate-100">{item.title}</div>
              <p className="text-sm text-slate-300/90 mt-2 leading-relaxed">
                {item.desc}
              </p>
              <p className="text-xs mt-2" style={{ color: item.id === 1 ? '#22c55e' : item.id === 2 ? '#ef4444' : item.id === 3 ? '#eab308' : item.id === 4 ? '#3b82f6' : item.id === 5 ? '#22c55e' : '#ef4444' }}>
                + {item.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveBenefitsSection;
