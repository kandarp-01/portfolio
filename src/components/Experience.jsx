export default function Experience() {
  const experiences = [
    {
      role: "Python Developer Intern",
      company: "Infosys Springboard",
      duration: "October 2024 – December 2024",
      details: [
        "Automated NSE stock report downloads using Python and Selenium, reducing manual effort by ~40%.",
        "Implemented scheduling and email notification system for automatic report delivery.",
        "Eliminated repetitive manual workflows for a team of analysts through automation.",
      ],
    },

    {
      role: "AI Data Annotator (Contract)",
      company: "Innodata",
      duration: "December 2025 – March 2026",
      details: [
        "Labeled and categorized 300,000+ data points for training production ML models.",
        "Maintained 95%+ annotation accuracy consistently across all sprints.",
        "Delivered all assigned tasks within deadlines during the 3-month contract period.",
      ],
    },

    {
      role: "Full-Stack & ML Developer",
      company: "Personal Projects",
      duration: "2023 – Present",
      details: [
        "Built full-stack applications using React, FastAPI, SQLite, and MongoDB.",
        "Developed machine learning solutions including toxic comment classification with 87% accuracy.",
        "Focused on scalable backend systems, REST APIs, and problem-solving using DSA.",
      ],
    },
  ];

  return (
    <section id="experience" className="space-y-10">

      {/* Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="mt-2 h-1 w-24 mx-auto md:ml-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
      </div>

      {/* Timeline */}
      <div className="relative ml-4 space-y-10 border-l border-cyan-400/30">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10 group">

            {/* Neon Dot */}
            <div
              className="
                absolute -left-[11px] top-1 w-5 h-5 rounded-full
                bg-gradient-to-r from-cyan-400 to-violet-500
                shadow-[0_0_25px_rgba(56,189,248,0.9)]
                transition-all duration-500
                group-hover:shadow-[0_0_45px_rgba(56,189,248,1)]
              "
            />

            {/* Card */}
            <div
              className="
                group relative rounded-2xl border border-cyan-400/30
                bg-slate-900/40 backdrop-blur-xl p-6
                shadow-[0_0_35px_rgba(56,189,248,0.6)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_0_55px_rgba(56,189,248,1)]
              "
            >

              {/* Glow Overlay */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-cyan-400/25 to-violet-600/25
                  blur-2xl opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-700
                "
              />

              <div className="relative z-10 space-y-1">

                {/* Role */}
                <h3 className="text-lg font-semibold text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
                  {exp.role}
                </h3>

                {/* Company */}
                <p className="text-sm text-violet-300 font-medium">
                  {exp.company}
                </p>

                {/* Duration */}
                <p className="text-xs text-slate-400 mt-1">
                  {exp.duration}
                </p>

                {/* Details */}
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {exp.details.map((d, i) => (
                    <li
                      key={i}
                      className="leading-relaxed flex gap-2"
                    >
                      <span className="text-cyan-300">▹</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
