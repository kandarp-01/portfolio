import { Trophy, Award, Star, BadgeCheck } from "lucide-react";

const achievementSections = [
  {
    category: "Competitive Programming",
    icon: <Star size={20} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]" />,
    items: [
      "600+ Problems Solved on LeetCode",
      "5⭐ HackerRank in Problem Solving",
      "5⭐ HackerRank in Python & C++",
    ],
  },
  {
    category: "Certifications",
    icon: <BadgeCheck size={20} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]" />,
    items: [
      "Google — Generative AI Specialization",
      "Microsoft Azure — SQL Fundamentals",
      "Infosys — Web Development Fundamentals",
      "IBM — Generative AI & AI Fundamentals",
    ],
  },
  {
    category: "Achievements",
    icon: <Award size={20} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]" />,
    items: [
      "Intern — Infosys Springboard",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-10">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Achievements & Certifications
          </span>
        </h2>
        <div className="mx-auto mt-2 h-[3px] w-44 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {achievementSections.map((section, index) => (
          <div
            key={index}
            className="
              group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-6
              shadow-[0_0_35px_rgba(56,189,248,0.6)]
              transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(56,189,248,1)]
            "
          >
            {/* Neon glow overlay */}
            <div
              className="
                absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl
                opacity-0 group-hover:opacity-100 transition-opacity duration-700
              "
            />

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold tracking-wide bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
                {section.icon}
                {section.category}
              </div>

              <ul className="space-y-2 text-sm text-slate-300">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-slate-200">
                    <Trophy size={15} className="text-violet-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
