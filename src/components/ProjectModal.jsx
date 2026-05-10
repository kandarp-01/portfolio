import {
  X,
  Github,
  ExternalLink,
} from "lucide-react";

export default function ProjectModal({
  project,
  onClose,
}) {
  if (!project) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70 px-4
        backdrop-blur-md
      "
    >

      {/* Modal */}
      <div
        className="
          relative w-full max-w-2xl
          overflow-hidden rounded-3xl
          border border-cyan-400/20
          bg-slate-900/90 p-8
          shadow-[0_0_60px_rgba(56,189,248,0.18)]
          animate-in fade-in zoom-in duration-300
        "
      >

        {/* Glow */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-cyan-400/10 to-violet-500/10
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative z-10 space-y-7">

          {/* Top */}
          <div className="flex items-start justify-between gap-4">

            <div className="space-y-4">

              {/* Category */}
              <span
                className="
                  inline-block rounded-full
                  border border-cyan-400/20
                  px-3 py-1 text-xs
                  tracking-wide text-cyan-300
                "
              >
                {project.category}
              </span>

              {/* Title */}
              <h2 className="text-4xl font-bold text-slate-100">
                {project.title}
              </h2>

            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="
                rounded-xl border border-cyan-400/20
                p-2 text-slate-300
                transition-all duration-300
                hover:border-violet-400
                hover:text-cyan-300
              "
            >
              <X size={20} />
            </button>

          </div>

          {/* Description */}
          <div className="space-y-3">

            <h3 className="text-sm font-semibold tracking-wide text-cyan-300">
              Project Overview
            </h3>

            <p className="leading-relaxed text-slate-400">
              {project.longDescription}
            </p>

          </div>

          {/* Highlights */}
          <div className="space-y-4">

            <h3 className="text-sm font-semibold tracking-wide text-cyan-300">
              Key Highlights
            </h3>

            <div className="space-y-3">

              {project.highlights.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-start gap-3
                    text-sm text-slate-300
                  "
                >

                  <span className="mt-[7px] h-2 w-2 rounded-full bg-cyan-300" />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

          {/* Tech Stack */}
          <div className="space-y-3">

            <h3 className="text-sm font-semibold tracking-wide text-cyan-300">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-3">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-xl border border-cyan-400/20
                    bg-slate-950/50 px-4 py-2
                    text-sm text-cyan-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">

            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2 rounded-xl
                border border-cyan-400/20
                px-5 py-3 text-sm text-cyan-300
                transition-all duration-300
                hover:border-violet-400
                hover:text-violet-300
              "
            >
              <Github size={18} />
              GitHub
            </a>

            {/* Demo */}
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2 rounded-xl
                bg-gradient-to-r from-cyan-400 to-violet-500
                px-5 py-3 text-sm font-semibold text-slate-950
                transition-all duration-300
                hover:scale-105
              "
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}
