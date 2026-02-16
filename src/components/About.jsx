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

        {/* LEFT CARD — MAIN DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-6 shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]"
        >
          {/* Glowing animated frame */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="space-y-4 relative z-10">
            <p className="text-sm text-slate-200 leading-relaxed">
              Hi, I’m <span className="text-cyan-300 font-semibold">Kandarp Dubey</span>,
              a passionate developer who loves building{" "}
              <span className="text-cyan-300">full-stack applications</span>,
              exploring <span className="text-cyan-300">ML-driven solutions</span>,
              and solving challenging problems with meaningful impact.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              My goal is to create products that are reliable, efficient and
              beautifully engineered — combining strong backend logic, scalable
              architecture, and smooth user experiences.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              I’ve completed an internship at{" "}
              <span className="text-cyan-300 font-medium">Infosys Springboard</span>,
              where I worked on automating large-scale report generation pipelines
              and improved performance significantly.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              I actively practice{" "}
              <span className="text-cyan-300 font-medium">DSA</span> & competitive programming,
              solving hundreds of problems on LeetCode and other platforms to
              continuously sharpen my thinking.
            </p>

            <p className="text-sm italic text-slate-400 pt-2">
              “Always exploring. Always improving.”
            </p>
          </div>
        </motion.div>

        {/* RIGHT SECTION — HIGHLIGHTS + STATS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >

          {/* Highlights Box */}
          <div className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-5 shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-sm font-semibold text-cyan-300 tracking-wide flex items-center gap-2 relative z-10">
              <Sparkles size={16} /> Quick Highlights
            </h3>

            <ul className="space-y-2 text-sm text-slate-200 relative z-10">
              <li className="flex gap-2"><ChevronRight size={14} className="text-cyan-300" /> B.Tech CSE (IoT) · 2022–2026</li>
              <li className="flex gap-2"><ChevronRight size={14} className="text-cyan-300" /> Infosys Springboard — Automation Intern</li>
              <li className="flex gap-2"><ChevronRight size={14} className="text-cyan-300" /> 600+ LeetCode Problems</li>
              <li className="flex gap-2"><ChevronRight size={14} className="text-cyan-300" /> 5⭐ HackerRank — Problem Solving</li>
            </ul>
          </div>

          {/* Goals Box */}
          <div className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-5 shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-sm font-semibold text-cyan-300 tracking-wide flex items-center gap-2 relative z-10">
              <Target size={16} /> Current Focus
            </h3>

            <p className="text-xs text-slate-200 leading-relaxed relative z-10">
              Improving system architecture skills and working on projects based on{" "}
              <span className="text-cyan-300">backend engineering</span> and{" "}
              <span className="text-cyan-300">ML-powered applications</span>.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
