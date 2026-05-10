const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "C++",],
  },

  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },

  {
    title: "Backend",
    skills: ["FastAPI", "REST APIs", "Node.js"],
  },

  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools & Core CS",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "DSA",
      "OOPs",
      "DBMS",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-10">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div
          className="
            mx-auto mt-2 h-[3px] w-40 rounded-full
            bg-gradient-to-r from-cyan-400 to-violet-500
            shadow-[0_0_20px_rgba(56,189,248,0.7)]
          "
        />

      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              group relative rounded-2xl
              border border-cyan-400/20
              bg-slate-900/40 p-6
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]
            "
          >

            {/* Glow */}
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r
                from-cyan-400/10 to-violet-500/10
                opacity-0 blur-2xl
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">

              {/* Title */}
              <h3 className="mb-5 text-lg font-semibold text-cyan-300">
                {group.title}
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl border border-cyan-400/20
                      bg-slate-950/50 px-3 py-2
                      text-sm text-slate-200
                      transition-all duration-300
                      hover:border-violet-400
                      hover:text-cyan-300
                      hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="text-center">

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400">
          Focused on building clean software applications using Python,
          FastAPI, React and strong problem-solving fundamentals.
        </p>

      </div>

    </section>
  );
}
