export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-4">

      {/* Modal Container */}
      <div
        className="
          group relative w-full max-w-lg rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6
          shadow-[0_0_60px_rgba(56,189,248,0.9)] transition-all duration-500
          hover:shadow-[0_0_80px_rgba(56,189,248,1)]
        "
      >
        {/* Neon glow overlay */}
        <div
          className="
            absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25
            blur-2xl opacity-80
          "
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute right-4 top-3 text-lg text-slate-300 transition
            hover:text-cyan-300 hover:scale-110 z-20
          "
        >
          ✕
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
            {project.title}
          </h3>

          {/* Short description */}
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            {project.short}
          </p>

          {/* Divider */}
          <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-400/30 to-violet-500/30 shadow-[0_0_15px_rgba(56,189,248,0.6)]" />

          {/* Details Section */}
          <h4 className="mt-4 text-sm font-semibold text-cyan-300 tracking-wide">
            What I did
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            {project.details.map((line, idx) => (
              <li key={idx}>• {line}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          <h4 className="mt-5 text-sm font-semibold text-cyan-300 tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-lg border border-cyan-400/40 bg-slate-950/40 px-2 py-[3px] text-[11px]
                  text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.5)]
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 text-xs
                  font-semibold text-slate-900 transition hover:scale-110
                  shadow-[0_0_25px_rgba(56,189,248,0.8)]
                "
              >
                View on GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl border border-cyan-400/60 px-5 py-2 text-xs font-semibold text-cyan-300
                  transition hover:scale-110 hover:border-violet-400 hover:text-violet-300
                  shadow-[0_0_15px_rgba(56,189,248,0.5)]
                "
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
