import { Link } from "react-router-dom";

const FeaturedOpportunitiesSection = () => {
  return (
    <section id="featured-opportunities" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Featured Opportunities</h2>
        <p className="text-lg text-slate-300/90 mb-8 max-w-3xl mx-auto">
          Discover roles that match your skills and ambitions. Each position offers competitive compensation and clear growth paths.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              id: 1,
              title: "Senior Software Engineer",
              department: "Engineering",
              type: "Full-time",
              location: "San Francisco, CA / Remote",
              salary: "$140k - $180k",
              extra: "+ equity",
              desc: "Lead development of scalable web applications using modern technologies. Join our innovative team building the future of hiring.",
              skills: ["React", "Node.js", "AWS"],
            },
            {
              id: 2,
              title: "Product Manager",
              department: "Product",
              type: "Full-time",
              location: "New York, NY / Hybrid",
              salary: "$120k - $160k",
              extra: "+ bonus",
              desc: "Drive product strategy and execution for our core hiring platform. Shape the future of how companies find talent.",
              skills: ["Strategy", "Analytics", "Leadership"],
            },
            {
              id: 3,
              title: "UX Designer",
              department: "Design",
              type: "Full-time",
              location: "Austin, TX / Remote",
              salary: "$95k - $130k",
              extra: "+ benefits",
              desc: "Create intuitive, user-centered designs that make hiring seamless for both candidates and employers.",
              skills: ["Figma", "Research", "Prototyping"],
            },
          ].map((job) => (
            <div key={job.id} className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 shadow-lg">
              <div className="text-lg font-semibold">{job.title}</div>
              <div className="text-sm text-slate-400 mt-1">{job.department} • {job.type}</div>
              <div className="text-sm text-slate-300 mt-1">{job.location}</div>
              <div className="text-sm text-slate-300 mt-2">{job.salary} <span className="text-green-400">{job.extra}</span></div>
              <p className="text-sm text-slate-300/90 mt-3 leading-relaxed">{job.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {job.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{skill}</span>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/candidate2">
                  <button className="px-4 py-2 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition">
                    Quick Apply
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunitiesSection;
