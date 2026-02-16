import { Linkedin, Github, Code } from "lucide-react";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="home" className="relative mt-16 flex flex-col items-center text-center md:flex-row md:text-left md:items-center md:justify-between gap-10 px-4">

      {/* Background Accent */}
      <div className="pointer-events-none absolute -z-10 left-1/3 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -z-10 right-1/3 bottom-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

      {/* LEFT TEXT SECTION */}
      <div className="max-w-2xl space-y-5">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Kandarp Dubey
          </span>
        </h1>

        <p className="text-lg text-slate-300">
          Full-Stack Developer | Machine Learning Enthusiast | Problem Solver
        </p>

        <p className="text-slate-400 max-w-xl">
          Crafting impactful digital experiences with a blend of efficient backend engineering,
          modern frontend design, and intelligent data-driven solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>

          <a
            href="/Kandarp_Resume.pdf"
            download
            className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:border-violet-400 hover:text-violet-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 pt-4 justify-center md:justify-start">
          <a href="https://linkedin.com/in/kandarp1401/" target="_blank" className="hover:scale-110 transition">
            <Linkedin size={26} className="text-cyan-300" />
          </a>
          <a href="https://github.com/kandarp-01" target="_blank" className="hover:scale-110 transition">
            <Github size={26} className="text-cyan-300" />
          </a>
          <a href="https://leetcode.com/u/kandarp_14/" target="_blank" className="hover:scale-110 transition">
            <Code size={26} className="text-cyan-300" />
          </a>
        </div>
      </div>

      {/* RIGHT PHOTO 3D GLASS FRAME */}
      <div className="relative group">

        {/* Glow layer */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 to-violet-500/30 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100"></div>

        {/* Frame */}
        <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-cyan-300 via-slate-700 to-violet-500">
          <div className="rounded-3xl overflow-hidden bg-slate-950/80 backdrop-blur-xl shadow-xl">
            <img
              src={profile}
              alt="Profile"
              className="h-72 w-72 object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
