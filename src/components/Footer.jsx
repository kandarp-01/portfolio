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
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute left-1/4 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-1/4 bottom-0 h-52 w-52 rounded-full bg-violet-500/10 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Main Content */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">

          {/* Left Side */}
          <div className="space-y-4 text-center md:text-left">

            {/* Name */}
            <div>

              <h3 className="text-2xl font-bold tracking-wide">

                <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
                  Kandarp Dubey
                </span>

              </h3>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                Software developer focused on Python, FastAPI,
                React and practical problem-solving oriented development.
              </p>

            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm text-slate-400">

              <a
                href="mailto:kandarp1415@gmail.com"
                className="
                  flex items-center justify-center gap-2
                  transition hover:text-cyan-300
                  md:justify-start
                "
              >
                <Mail size={15} />
                kandarp1415@gmail.com
              </a>

              <p>📍 Lucknow, India</p>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center gap-5">

            {/* Social Icons */}
            <div className="flex gap-4">

              <a
                href="https://linkedin.com/in/kandarp1401/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl border border-cyan-400/20
                  bg-slate-950/40 text-cyan-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400
                  hover:text-violet-300
                "
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://github.com/kandarp-01"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl border border-cyan-400/20
                  bg-slate-950/40 text-cyan-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400
                  hover:text-violet-300
                "
              >
                <Github size={22} />
              </a>

              <a
                href="https://leetcode.com/u/kandarp_14/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl border border-cyan-400/20
                  bg-slate-950/40 text-cyan-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400
                  hover:text-violet-300
                "
              >
                <Code size={22} />
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
                transition-all duration-300
                hover:scale-105
                shadow-[0_0_20px_rgba(56,189,248,0.25)]
              "
            >
              View Resume
            </a>

          </div>

        </div>

        {/* Divider */}
        <div
          className="
            mt-10 h-px w-full
            bg-gradient-to-r
            from-transparent via-cyan-400/30 to-transparent
          "
        />

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-center md:flex-row">

          <p className="text-xs tracking-wide text-slate-500">
            © {new Date().getFullYear()} Kandarp Dubey.
            Built with React and Tailwind CSS.
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            className="
              flex items-center gap-2 rounded-full
              border border-cyan-400/20
              bg-slate-950/40 px-4 py-2
              text-xs text-slate-300
              transition-all duration-300
              hover:-translate-y-1
              hover:border-violet-400
              hover:text-cyan-300
            "
          >
            <ArrowUp size={14} />
            Back to top
          </a>

        </div>

      </div>
    </footer>
  );
}
