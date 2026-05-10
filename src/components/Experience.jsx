export default function Experience() {
  const experiences = [
    {
      role: "Python Developer Intern",

      company: "Infosys Springboard",

      duration: "Oct 2024 — Dec 2024",

      points: [
        "Automated NSE stock report downloads using Python and Selenium, reducing manual effort significantly.",
        "Implemented scheduling and email notification workflows for automated report delivery.",
        "Worked on scripting, automation and data handling workflows in a practical development environment.",
      ],
    },

    {
      role: "AI Data Annotator (Contract)",

      company: "Innodata",

      duration: "Dec 2025 — Mar 2026",

      points: [
        "Annotated and categorized 300,000+ data points for machine learning model training.",
        "Maintained high annotation accuracy and consistency across project sprints.",
        "Worked with structured labeling workflows and large-scale data processing tasks.",
      ],
    },

    {
      role: "Full-Stack Project Developer",

      company: "Personal Projects",

      duration: "2023 — Present",

      points: [
        "Built software projects using React, FastAPI, MySQL and Python.",
        "Developed REST API based applications and interactive frontend interfaces.",
        "Worked on practical projects involving SQL systems, automation and machine learning workflows.",
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

        <div
          className="
            mt-2 h-1 w-24 rounded-full
            bg-gradient-to-r from-cyan-400 to-violet-500
            shadow-[0_0_20px_rgba(56,189,248,0.7)]
            mx-auto md:ml-0
          "
        />

      </div>

      {/* Timeline */}
      <div className="relative border-l border-cyan-400/20 ml-3 space-y-10">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-10"
          >

            {/* Timeline Dot */}
            <div
              className="
                absolute -left-[11px] top-2
                h-5 w-5 rounded-full
                bg-gradient-to-r from-cyan-400 to-violet-500
                shadow-[0_0_20px_rgba(56,189,248,0.6)]
              "
            />

            {/* Card */}
            <div
              className="
                group relative rounded-2xl
                border border-cyan-400/20
                bg-slate-900/40 p-6
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-cyan-400/10 to-violet-500/10
                  opacity-0 blur-2xl
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 space-y-4">

                {/* Top Info */}
                <div className="space-y-1">

                  <h3 className="text-xl font-semibold text-slate-100">
                    {exp.role}
                  </h3>

                  <p className="text-sm font-medium text-cyan-300">
                    {exp.company}
                  </p>

                  <p className="text-xs tracking-wide text-slate-400">
                    {exp.duration}
                  </p>

                </div>

                {/* Points */}
                <div className="space-y-3">

                  {exp.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    >

                      <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-300" />

                      <p>{point}</p>

                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="text-center">

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400">
          Continuously improving development skills through practical projects,
          problem solving and hands-on learning experiences.
        </p>

      </div>
    </section>
  );
}
