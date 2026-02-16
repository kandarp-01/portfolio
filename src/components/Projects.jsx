import { Github, ExternalLink, X } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Interactive SQL Playground",
      short:
        "A web-based interactive SQL learning platform supporting live query execution & database visualization.",
      description:
        "Interactive SQL Playground enables users to write and execute SQL queries in real time, visualize table structures, explore database schema and practice structured SQL challenges.",
      features: [
        "Live SQL query execution",
        "Database visualization panel",
        "Schema exploration",
        "Interactive practice mode",
      ],
      tech: ["React", "FastAPI", "MySQL"],
      github: "https://github.com/kandarp-01/interactive-sql-playground",
      demo: "https://sql-play-front.vercel.app/",
    },
    {
      title: "Toxic Comment Classifier (ML)",
      short:
        "ML model for detecting toxic, abusive & hate content using NLP.",
      description:
        "A machine learning multi-label classifier to detect and categorize toxic comments using TF-IDF vectorization and Logistic Regression. Helps improve online community moderation.",
      features: [
        "Multi-label model",
        "TF-IDF preprocessing",
        "Training & evaluation pipeline",
        "Dataset augmentation",
      ],
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      github: "https://github.com/kandarp-01/toxic-comment-classifier",
      demo: "https://toxicguard.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="space-y-10">

      {/* Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="mt-2 h-1 w-24 mx-auto md:ml-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="
              group relative cursor-pointer rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-6
              shadow-[0_0_35px_rgba(56,189,248,0.6)]
              transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(56,189,248,1)]
            "
          >
            {/* Glow Frame */}
            <div
              className="
                absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl
                opacity-0 group-hover:opacity-100 transition-opacity duration-700
              "
            />

            <div className="relative z-10">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {project.short}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-cyan-400/40 bg-slate-950/40 px-2 py-[3px] text-[10px] text-cyan-300 font-medium tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="
                    flex items-center gap-1 rounded-lg border border-cyan-400/40 px-4 py-2 text-xs text-cyan-300
                    transition hover:scale-110 hover:text-violet-300 hover:border-violet-400
                    shadow-[0_0_25px_rgba(56,189,248,0.5)]
                  "
                >
                  <Github size={14} /> Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="
                    flex items-center gap-1 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-xs
                    font-semibold text-slate-900 transition hover:scale-110 shadow-[0_0_25px_rgba(56,189,248,0.8)]
                  "
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overview */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center z-50 p-4">
          <div className="relative max-w-2xl w-full rounded-2xl border border-cyan-400/40 bg-slate-900/80 p-8 shadow-[0_0_60px_rgba(56,189,248,1)]">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-violet-600/20 blur-3xl"></div>

            <button
              className="absolute top-4 right-4 text-slate-300 hover:text-cyan-300 transition z-20"
              onClick={() => setSelectedProject(null)}
            >
              <X size={22} />
            </button>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <h4 className="mt-5 text-sm font-semibold text-cyan-300">Key Features</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                {selectedProject.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <h4 className="mt-5 text-sm font-semibold text-cyan-300">Tech Used</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="rounded-lg border border-cyan-400/40 bg-slate-950/40 px-2 py-[3px] text-[10px] text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
