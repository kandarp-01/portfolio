import {
  Linkedin,
  Github,
  Code,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative mt-24 overflow-hidden
        border-t border-cyan-400/20
        bg-slate-900/40 backdrop-blur-xl
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-52 w-52 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">

          {/* Left Content */}
          <div className="space-y-4 text-center md:text-left">

            {/* Name */}
            <div>
              <h3 className="text-2xl font-bold tracking-wide">
                <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
                  Kandarp Dubey
                </span>
              </h3>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
                Backend-focused software developer passionate about building
                scalable APIs, automation systems, and AI-powered applications
                with clean architecture and efficient backend engineering.
              </p>
            </div>

            {/* Quick Info */}
            <div className="space-y-2 text-sm text-slate-400">

              <p>📍 Lucknow, India</p>

              <a
                href="mailto:kandarp1415@gmail.com"
                className="flex items-center justify-center gap-2 transition hover:text-cyan-300 md:justify-start"
              >
                <Mail size={16} />
                kandarp1415@gmail.com
              </a>

              <p>🚀 Open to Backend & Software Developer Roles</p>

            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center gap-5">

            {/* Social Icons */}
            <div className="flex gap-5">

              <a
                href="https://linkedin.com/in/kandarp1401/"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl border border-cyan-400/20
                  bg-slate-900/40 p-3
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400
                  hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]
                "
              >
                <Linkedin
                  size={22}
                  className="text-cyan-300 hover:text-violet-300"
                />
              </a>

              <a
                href="https://github.com/kandarp-01"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl border border-cyan-400/20
                  bg-slate-900/40 p-3
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400
                  hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]
                "
              >
                <Github
                  size={22}
                  className="text-cyan-300 hover:text-violet-300"
                />
              </a>

              <a
                href="https://leetcode.com/u/kandarp_14/"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl border border-cyan-400/20
                  bg-slate-900/40 p-3
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400
                  hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]
                "
              >
                <Code
                  size={22}
                  className="text-cyan-300 hover:text-violet-300"
                />
              </a>

            </div>

            {/* Resume Button */}
            <a
              href="/Kandarp_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl bg-gradient-to-r
                from-cyan-400 to-violet-500
                px-5 py-3 text-sm font-semibold text-slate-950
                transition hover:scale-105
                shadow-[0_0_25px_rgba(56,189,248,0.5)]
              "
            >
              View Resume
            </a>

          </div>
        </div>

        {/* Divider */}
        <div
          className="
            mt-10 h-[1px] w-full
            bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent
          "
        />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-center md:flex-row">

          <p className="text-xs tracking-wide text-slate-400">
            © {new Date().getFullYear()} Kandarp Dubey. Built with React,
            Tailwind CSS & FastAPI mindset ⚡
          </p>

          {/* Scroll To Top */}
          <a
            href="#home"
            className="
              flex items-center gap-2 rounded-full
              border border-cyan-400/20
              bg-slate-900/40 px-4 py-2
              text-xs text-slate-300
              transition-all duration-300
              hover:-translate-y-1
              hover:border-violet-400
              hover:text-cyan-300
              hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]
            "
          >
            <ArrowUp size={14} />
            Back to Top
          </a>

        </div>
      </div>
    </footer>
  );
}
