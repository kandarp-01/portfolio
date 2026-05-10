import {
  Trophy,
  Award,
  Star,
  BadgeCheck,
} from "lucide-react";

const achievementSections = [
  {
    category: "Competitive Programming",

    icon: (
      <Star
        size={20}
        className="text-cyan-300"
      />
    ),

    items: [
      "Solved 600+ LeetCode problems",
      "5★ HackerRank in Problem Solving",
      "5★ HackerRank in Python",
      "Strong understanding of DSA, OOPs and DBMS",
    ],
  },

  {
    category: "Certifications",

    icon: (
      <BadgeCheck
        size={20}
        className="text-cyan-300"
      />
    ),

    items: [
      "IBM — Python for Data Science, AI & Development",
      "IBM — Generative AI: Prompt Engineering Basics",
      "Microsoft Azure — SQL Fundamentals",
      "IBM — Introduction to Artificial Intelligence",
    ],
  },

  {
    category: "Achievements",

    icon: (
      <Award
        size={20}
        className="text-cyan-300"
      />
    ),

    items: [
      "Qualified GATE 2026 — Computer Science",
      "Python Developer Intern at Infosys Springboard",
      "Worked on annotation of 300k+ data points at Innodata",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-10">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-3xl font-semibold tracking-wide">

          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Achievements & Certifications
          </span>

        </h2>

        <div
          className="
            mx-auto mt-2 h-[3px] w-52 rounded-full
            bg-gradient-to-r from-cyan-400 to-violet-500
            shadow-[0_0_20px_rgba(56,189,248,0.7)]
          "
        />

      </div>

      {/* Grid */}
      <div className="grid gap-6 lg:grid-cols-3">

        {achievementSections.map((section) => (
          <div
            key={section.category}
            className="
              group relative overflow-hidden rounded-2xl
              border border-cyan-400/20
              bg-slate-900/40 p-6
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
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

            <div className="relative z-10">

              {/* Title */}
              <div className="mb-5 flex items-center gap-3">

                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl border border-cyan-400/20
                    bg-slate-950/40
                  "
                >
                  {section.icon}
                </div>

                <h3 className="text-lg font-semibold text-slate-100">
                  {section.category}
                </h3>

              </div>

              {/* Items */}
              <div className="space-y-4">

                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <Trophy
                      size={15}
                      className="mt-[4px] text-cyan-300"
                    />

                    <p className="text-sm leading-relaxed text-slate-300">
                      {item}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="text-center">

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400">
          Focused on continuously improving technical skills through
          problem solving, development projects and practical learning.
        </p>

      </div>
    </section>
  );
}
