import { Linkedin, Github, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        mt-20 py-10 text-center
        relative border-t border-cyan-400/20 bg-slate-900/40 backdrop-blur-xl
        shadow-[0_0_35px_rgba(56,189,248,0.4)]
      "
    >

      {/* Glow Accent Line */}
      <div
        className="
          mx-auto mb-6 h-[3px] w-40 rounded-full
          bg-gradient-to-r from-cyan-400 to-violet-500
          shadow-[0_0_25px_rgba(56,189,248,0.7)]
        "
      />

      {/* Name */}
      <h3 className="text-xl font-semibold drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
        <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
          Kandarp Dubey
        </span>
      </h3>

      <p className="text-sm text-slate-300 mt-1 tracking-wide">
        Full-Stack Developer • ML Enthusiast
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-5">
        <a
          href="https://linkedin.com/in/kandarp1401/"
          target="_blank"
          className="transition hover:scale-125"
        >
          <Linkedin
            size={24}
            className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] hover:text-violet-300 transition"
          />
        </a>

        <a
          href="https://github.com/kandarp-01"
          target="_blank"
          className="transition hover:scale-125"
        >
          <Github
            size={24}
            className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] hover:text-violet-300 transition"
          />
        </a>

        <a
          href="https://leetcode.com/u/kandarp_14/"
          target="_blank"
          className="transition hover:scale-125"
        >
          <Code
            size={24}
            className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] hover:text-violet-300 transition"
          />
        </a>
      </div>

      {/* Divider */}
      <div
        className="
          mx-auto mt-6 h-[1px] w-full max-w-md
          bg-gradient-to-r from-cyan-400/40 to-violet-500/40
          shadow-[0_0_12px_rgba(56,189,248,0.6)]
        "
      />

      {/* Copyright */}
      <p className="text-xs text-slate-400 mt-4 tracking-wide">
        © {new Date().getFullYear()} Kandarp Dubey — All Rights Reserved
      </p>

    </footer>
  );
}
