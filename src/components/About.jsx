export default function About() {
  return (
    <section id="about" className="space-y-10">

      {/* Heading */}
      <div className="text-center md:text-left">

        <h2 className="text-3xl font-semibold tracking-wide">

          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            About Me
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

      {/* Content */}
      <div
        className="
          group relative overflow-hidden rounded-3xl
          border border-cyan-400/20
          bg-slate-900/40 p-8
          backdrop-blur-xl
          transition-all duration-300
          hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
        "
      >

        {/* Glow */}
        <div
          className="
            absolute inset-0 rounded-3xl
            bg-gradient-to-r from-cyan-400/10 to-violet-500/10
            opacity-0 blur-2xl
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[2fr_1fr]">

          {/* Left Side */}
          <div className="space-y-5 text-slate-300">

            <p className="leading-relaxed">
              I am a final-year Computer Science student with a strong interest
              in Python development, backend systems and problem solving.
              I enjoy building practical software projects and learning through
              hands-on development.
            </p>

            <p className="leading-relaxed">
              My experience includes developing full-stack applications using
              React and FastAPI, building automation workflows using Python,
              and working on machine learning projects involving NLP and text
              classification.
            </p>

            <p className="leading-relaxed">
              I have solved 600+ LeetCode problems and continuously work on
              improving my development fundamentals, coding skills and practical
              understanding of software engineering concepts.
            </p>

          </div>

          {/* Right Side */}
          <div className="space-y-4">

            {/* Info Cards */}
            <div
              className="
                rounded-2xl border border-cyan-400/20
                bg-slate-950/40 p-5
              "
            >
              <h3 className="text-sm font-semibold tracking-wide text-cyan-300">
                Education
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                B.Tech in Computer Science Engineering
              </p>

              <p className="mt-1 text-xs text-slate-400">
                AKTU • 2022 — 2026
              </p>
            </div>

            <div
              className="
                rounded-2xl border border-cyan-400/20
                bg-slate-950/40 p-5
              "
            >
              <h3 className="text-sm font-semibold tracking-wide text-cyan-300">
                Interests
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">

                {[
                  "Backend Development",
                  "Problem Solving",
                  "Python",
                  "APIs",
                  "Web Development",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-xl border border-cyan-400/20
                      px-3 py-2 text-xs text-slate-300
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
