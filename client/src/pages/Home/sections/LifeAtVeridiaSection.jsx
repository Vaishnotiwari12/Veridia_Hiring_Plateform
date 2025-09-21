const LifeAtVeridiaSection = () => {
  return (
    <section id="culture" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Life at Veridia</h2>
        <p className="text-lg text-slate-300/90 mb-8 max-w-3xl mx-auto">
          Experience our vibrant culture where innovation meets collaboration, and every voice is valued.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300",
              title: "Team Collaboration",
              desc: "Work together on exciting projects that foster creativity and teamwork.",
            },
            {
              id: 2,
              image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300",
              title: "Innovation Hub",
              desc: "Explore cutting-edge tools and ideas in our dedicated innovation spaces.",
            },
            {
              id: 3,
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300",
              title: "Office Vibes",
              desc: "Enjoy a welcoming environment designed for productivity and fun.",
            },
            {
              id: 4,
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300",
              title: "Mentorship",
              desc: "Grow with guidance from experienced leaders and peers.",
            },
            {
              id: 5,
              image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300",
              title: "Celebrations",
              desc: "Celebrate milestones and successes as a united team.",
            },
            {
              id: 6,
              image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300",
              title: "Work-Life Balance",
              desc: "Maintain balance with flexible schedules and wellness programs.",
            },
          ].map((item) => (
            <div key={item.id} className="group relative cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105 shadow-lg backdrop-blur-sm"
              />
              <div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-400/90 mt-8 text-center">
          Hover over the images to discover more about our culture and values.
        </p>
      </div>
    </section>
  );
};

export default LifeAtVeridiaSection;
