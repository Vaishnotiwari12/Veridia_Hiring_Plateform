const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Why Choose Veridia?</h2>
        <p className="text-lg text-slate-300/90 mb-8 max-w-3xl mx-auto">
          Our platform is designed with candidates in mind, offering tools and transparency that put you in control of your career journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              id: 1,
              title: "Real-Time Tracking",
              desc: "Monitor your application status with live updates and transparent communication at every stage of the process.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              id: 2,
              title: "Smart Matching",
              desc: "Our AI-powered algorithm connects you with opportunities that align with your skills, experience, and career goals.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
            },
            {
              id: 3,
              title: "Direct Communication",
              desc: "Connect directly with hiring managers and team members through our integrated messaging platform.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
            },
            {
              id: 4,
              title: "Career Development",
              desc: "Access learning resources, mentorship programs, and clear advancement paths to accelerate your growth.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              id: 5,
              title: "Privacy First",
              desc: "Your data is secure with enterprise-grade encryption and complete control over your information sharing.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 15v2m-6 3h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
            },
            {
              id: 6,
              title: "Fast Process",
              desc: "Streamlined hiring process with average time-to-offer of just 12 days, keeping you moving forward quickly.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((card) => (
            <div key={card.id} className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-800/80 transition-all duration-300 cursor-pointer">
              <div className="h-12 w-12 rounded-xl bg-teal-500/20 mb-4 flex items-center justify-center text-teal-300">
                {card.icon}
              </div>
              <div className="font-semibold text-teal-400">{card.title}</div>
              <p className="text-sm text-slate-300/90 mt-2 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
