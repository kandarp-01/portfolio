import { useState } from "react";

const skillData = [
  { category: "Programming Languages", skills: [
    { name: "Python", level: 95 },
    { name: "C++", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C", level: 80 },
    { name: "SQL", level: 90 },
  ]},
  { category: "Web Development", skills: [
    { name: "React", level: 90 },
    { name: "FastAPI", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "HTML / CSS", level: 95 },
  ]},
  { category: "Data & Machine Learning", skills: [
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 90 },
    { name: "Scikit-learn", level: 85 },
    { name: "Matplotlib", level: 80 },
    { name: "NLP", level: 70 },
  ]},
  { category: "Databases & Tools", skills: [
    { name: "MySQL", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "SQLite", level: 80 },
    { name: "Git / GitHub", level: 95 },
  ]},
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="space-y-6">
      {/* Title */}
      <div className="relative mb-6">
        <h2 className="text-3xl font-semibold tracking-wide text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-500 bg-clip-text text-transparent">
            Skills & Technical Expertise
          </span>
        </h2>

        {/* neon underline */}
        <div className="mx-auto mt-2 h-[3px] w-40 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_25px_rgba(56,189,248,0.7)]" />
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillData.map((group, index) => (
          <div
            key={group.category}
            className="group relative cursor-pointer rounded-2xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur-xl transition-transform hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(56,189,248,0.7)]"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Glowing animated frame */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl transition-opacity duration-500 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            />

            <h3 className="mb-4 text-lg font-semibold text-cyan-300 tracking-wide">
              {group.category}
            </h3>

            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between text-xs text-slate-300">
                    <span>{skill.name}</span>
                    <span className="text-cyan-300">{skill.level}%</span>
                  </div>

                  {/* neon animated bar */}
                  <div className="relative h-2 w-full rounded-full bg-slate-700/50">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.7)] transition-all duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
