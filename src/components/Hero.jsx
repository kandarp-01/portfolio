import {
  Linkedin,
  Github,
  Code,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex min-h-[85vh] flex-col-reverse
        items-center justify-center gap-14
        pt-10 text-center
        md:flex-row md:justify-between md:text-left
      "
    >

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/3 -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

      {/* LEFT CONTENT */}
      <div className="max-w-2xl space-y-6">

        {/* Top Badge */}
        <div
          className="
            inline-flex items-center gap-2 rounded-full
            border border-cyan-400/20
            bg-slate-900/50 px-4 py-2
            text-xs text-cyan-300
            backdrop-blur-xl
            shadow-[0_0_20px_rgba(56,189,248,0.25)]
          "
        >
          <Sparkles size={14} />
          Python Developer • FastAPI • Problem Solver
        </div>

        {/* Heading */}
        <div className="space-y-3">

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Kandarp Dubey
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
            Software Developer focused on Python, FastAPI,
            React and problem solving.
          </p>

        </div>

        {/* Description */}
        <p className="max-w-2xl leading-relaxed text-slate-400">
          I enjoy building clean and responsive web applications,
          REST APIs, automation tools and practical software projects
          using modern technologies and strong development fundamentals.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">

          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
            🚀 600+ LeetCode Problems
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
            🎯 GATE 2026 Qualified
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
            ⚡ FastAPI & React
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">

          <a
            href="#projects"
            className="
              rounded-xl bg-gradient-to-r
              from-cyan-400 to-violet-500
              px-6 py-3 font-semibold text-slate-950
              transition-all duration-300
              hover:scale-105
              shadow-[0_0_25px_rgba(56,189,248,0.35)]
            "
          >
            View Projects
          </a>

          <a
            href="/Kandarp_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 rounded-xl
              border border-cyan-400/30
              px-6 py-3 font-semibold text-cyan-300
              transition-all duration-300
              hover:border-violet-400
              hover:text-violet-300
              hover:scale-105
            "
          >
            Resume
            <ExternalLink size={16} />
          </a>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 pt-3 md:justify-start">

          <a
            href="https://linkedin.com/in/kandarp1401/"
            target="_blank"
            rel="noreferrer"
            className="
              text-cyan-300 transition-all duration-300
              hover:scale-110 hover:text-violet-300
            "
          >
            <Linkedin size={26} />
          </a>

          <a
            href="https://github.com/kandarp-01"
            target="_blank"
            rel="noreferrer"
            className="
              text-cyan-300 transition-all duration-300
              hover:scale-110 hover:text-violet-300
            "
          >
            <Github size={26} />
          </a>

          <a
            href="https://leetcode.com/u/kandarp_14/"
            target="_blank"
            rel="noreferrer"
            className="
              text-cyan-300 transition-all duration-300
              hover:scale-110 hover:text-violet-300
            "
          >
            <Code size={26} />
          </a>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative group">

        {/* Glow */}
        <div
          className="
            absolute inset-0 rounded-[2rem]
            bg-gradient-to-r from-cyan-400/25 to-violet-500/25
            opacity-0 blur-2xl
            transition-all duration-700
            group-hover:opacity-100
          "
        />

        {/* Frame */}
        <div
          className="
            relative rounded-[2rem] p-[3px]
            bg-gradient-to-r
            from-cyan-300 via-slate-700 to-violet-500
          "
        >

          <div className="overflow-hidden rounded-[2rem] bg-slate-950/80 backdrop-blur-xl shadow-2xl">

            <img
              src={profile}
              alt="Kandarp Dubey"
              className="
                h-72 w-72 object-cover
                transition-transform duration-700
                group-hover:scale-105
                md:h-80 md:w-80
              "
            />

          </div>
        </div>
      </div>
    </section>
  );
}
