import {
  Code2,
  Globe,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 size={22} />,
    skills: ["Python", "JavaScript", "SQL", "C++"],
  },

  {
    title: "Frontend",
    icon: <Globe size={22} />,
    skills: ["React", "HTML", "CSS"],
  },

  {
    title: "Backend",
    icon: <Server size={22} />,
    skills: ["FastAPI", "REST APIs", "Node.js"],
  },

  {
    title: "Databases",
    icon: <Database size={22} />,
    skills: ["MySQL", "MongoDB", "SQLite"],
  },

  {
    title: "Tools & Core CS",
    icon: <Wrench size={22} />,
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
    <section id="skills" className="space-y-14">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-4xl font-bold tracking-wide">

          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>

        </h2>

        <div
          className="
            mx-auto mt-3 h-[4px] w-48 rounded-full
            bg-gradient-to-r from-cyan-400 to-violet-500
            shadow-[0_0_25px_rgba(56,189,248,0.7)]
          "
        />

      </div>

      {/* Grid */}
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              group relative overflow-hidden rounded-3xl
              border border-cyan-400/20
              bg-slate-900/50 p-7
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-2
              hover:border-cyan-300/40
              hover:shadow-[0_0_45px_rgba(56,189,248,0.22)]
            "
          >

            {/* Glow Layer */}
            <div
              className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-br
                from-cyan-400/10 via-transparent to-violet-500/10
                opacity-0 blur-2xl
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">

              {/* Top */}
              <div className="mb-6 flex items-center gap-4">

                {/* Icon */}
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl border border-cyan-400/20
                    bg-slate-950/50 text-cyan-300
                    shadow-[0_0_20px_rgba(56,189,248,0.15)]
                  "
                >
                  {group.icon}
                </div>

                {/* Title */}
                <div>

                  <h3 className="text-xl font-semibold text-slate-100">
                    {group.title}
                  </h3>

                  <div className="mt-1 h-[2px] w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

                </div>

              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl border border-cyan-400/20
                      bg-slate-950/60 px-4 py-2
                      text-sm text-slate-200
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-violet-400
                      hover:text-cyan-300
                      hover:shadow-[0_0_18px_rgba(56,189,248,0.18)]
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

      {/* Bottom Text */}
      <div className="text-center">

        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-400">
          Focused on building practical software applications using Python,
          FastAPI, React and strong problem-solving fundamentals through
          hands-on development and continuous learning.
        </p>

      </div>

    </section>
  );
}
