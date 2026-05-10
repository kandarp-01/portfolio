import { Sparkles, ChevronRight, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="space-y-10">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 md:ml-0 mx-auto shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
      </motion.div>

      {/* Main Layout */}
      <div className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-6 shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="space-y-4 relative z-10">

            <p className="text-sm text-slate-200 leading-relaxed">
              Hi, I’m{" "}
              <span className="text-cyan-300 font-semibold">
                Kandarp Dubey
              </span>
              , a backend-focused software developer passionate about building{" "}
              <span className="text-cyan-300">
                scalable web applications
              </span>{" "}
              and solving real-world problems through clean architecture and
              efficient systems.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              I work primarily with{" "}
              <span className="text-cyan-300">
                Python, FastAPI, React, SQL
              </span>{" "}
              and enjoy creating production-ready applications with strong
              backend logic, REST APIs, automation, and modern UI experiences.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              During my internship at{" "}
              <span className="text-cyan-300 font-medium">
                Infosys Springboard
              </span>
              , I automated NSE stock report workflows using Python and Selenium,
              significantly reducing manual effort and improving efficiency.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              I also worked as an{" "}
              <span className="text-cyan-300 font-medium">
                AI Data Annotator at Innodata
              </span>
              , contributing to large-scale ML training pipelines by labeling
              and validating over 300,000+ data points with high accuracy.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              I actively practice{" "}
              <span className="text-cyan-300 font-medium">
                Data Structures & Algorithms
              </span>
              , solving 600+ problems on LeetCode and strengthening my
              problem-solving and system design skills.
            </p>

            <p className="text-sm italic text-slate-400 pt-2">
              “Building impactful systems through code, logic, and continuous learning.”
            </p>

          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >

          {/* Highlights */}
          <div className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-5 shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-sm font-semibold text-cyan-300 tracking-wide flex items-center gap-2 relative z-10">
              <Sparkles size={16} />
              Quick Highlights
            </h3>

            <ul className="space-y-2 text-sm text-slate-200 relative z-10 mt-3">

              <li className="flex gap-2">
                <ChevronRight size={14} className="text-cyan-300" />
                B.Tech CSE · 2022–2026
              </li>

              <li className="flex gap-2">
                <ChevronRight size={14} className="text-cyan-300" />
                Qualified GATE 2026 — Computer Science
              </li>

              <li className="flex gap-2">
                <ChevronRight size={14} className="text-cyan-300" />
                600+ LeetCode Problems Solved
              </li>

              <li className="flex gap-2">
                <ChevronRight size={14} className="text-cyan-300" />
                FastAPI & Backend Development Enthusiast
              </li>

            </ul>
          </div>

          {/* Focus */}
          <div className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-5 shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-sm font-semibold text-cyan-300 tracking-wide flex items-center gap-2 relative z-10">
              <Target size={16} />
              Current Focus
            </h3>

            <p className="text-xs text-slate-200 leading-relaxed relative z-10 mt-3">
              Currently focused on backend engineering, scalable API development,
              system design fundamentals, and building AI-enabled production-grade applications.
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
