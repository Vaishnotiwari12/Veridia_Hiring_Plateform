const FAQSection = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-slate-300/90 mb-8 max-w-3xl mx-auto">
          Get answers to common questions about our hiring process, company culture, and career opportunities.
        </p>
        <div className="space-y-4">
          {[
            {
              id: 1,
              question: "How long does the hiring process take?",
              answer: "Our streamlined process typically takes 7-12 business days from application to offer. We prioritize transparency and quick communication to respect your time while ensuring the right fit for both parties.",
              color: "bg-blue-500",
            },
            {
              id: 2,
              question: "What makes Veridia's culture unique?",
              answer: "We foster a culture of innovation, transparency, and continuous learning. Our remote-first approach, 20% innovation time, and comprehensive professional development programs create an environment where every team member can thrive and grow.",
              color: "bg-yellow-500",
            },
            {
              id: 3,
              question: "Do you offer remote work opportunities?",
              answer: "Yes! We're a remote-first company with team members across the globe. We also have office spaces in major cities for those who prefer hybrid work arrangements. All positions offer flexible work options.",
              color: "bg-green-500",
            },
            {
              id: 4,
              question: "What career growth opportunities are available?",
              answer: "We provide clear career progression paths, mentorship programs, and a $5,000 annual learning budget. Our employees regularly advance to senior roles, with many transitioning between departments to explore new interests and skills.",
              color: "bg-blue-500",
            },
          ].map((faq) => {
            const colors = ['#3b82f6', '#f59e0b', '#10b981', '#3b82f6']; // Blue, Yellow, Green, Blue
            return (
              <div key={faq.id} className="bg-transparent border-2 rounded-2xl p-6" style={{ borderColor: colors[faq.id - 1] }}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-100">{faq.question}</h3>
                  <button
                    onClick={() => {
                      const answer = document.getElementById(`faq-${faq.id}`);
                      answer.classList.toggle('hidden');
                    }}
                    className="text-slate-400 text-2xl focus:outline-none"
                  >
                    ▼
                  </button>
                </div>
                <div id={`faq-${faq.id}`} className="hidden mt-4">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
