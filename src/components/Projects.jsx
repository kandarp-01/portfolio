import {
  Github,
  ExternalLink,
} from "lucide-react";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Interactive SQL Playground",

      category: "Full Stack",

      description:
        "Interactive platform for writing and executing SQL queries in real time using React and FastAPI.",

      longDescription:
        "Developed a responsive SQL playground that allows users to write, execute and test SQL queries through an interactive interface with real-time database interaction and schema exploration support.",

      highlights: [
        "Built full-stack application using React and FastAPI",
        "Implemented real-time SQL query execution workflow",
        "Added schema visualization and database exploration support",
        "Integrated backend APIs for query processing and result handling",
        "Implemented safer query handling and sanitization",
      ],

      tech: ["React", "FastAPI", "MySQL"],

      github:
        "https://github.com/kandarp-01/interactive-sql-playground",

      demo:
        "https://sql-play-front.vercel.app/",
    },

    {
      title: "Toxic Comment Classifier",

      category: "Machine Learning",

      description:
        "Multi-label toxic comment classification system using TF-IDF and traditional machine learning models.",

      longDescription:
        "Built a toxic comment classification pipeline using NLP preprocessing, TF-IDF vectorization and machine learning algorithms to identify toxic and abusive comments from online discussions.",

      highlights: [
        "Worked with 150k+ toxic comment dataset",
        "Implemented preprocessing pipeline using regex cleaning and TF-IDF",
        "Benchmarked Logistic Regression, Naive Bayes and LinearSVC",
        "Achieved best performance using LinearSVC with 97% accuracy",
        "Handled class imbalance using augmentation techniques",
      ],

      tech: [
        "Python",
        "Scikit-learn",
        "Pandas",
      ],

      github:
        "https://github.com/kandarp-01/toxic-comment-classifier",

      demo:
        "https://toxicguard.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="space-y-12">

      {/* Heading */}
      <div className="text-center md:text-left">

        <h2 className="text-4xl font-bold tracking-wide">

          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Projects
          </span>

        </h2>

        <div
          className="
            mt-3 h-[4px] w-28 rounded-full
            bg-gradient-to-r from-cyan-400 to-violet-500
            shadow-[0_0_20px_rgba(56,189,248,0.6)]
            mx-auto md:ml-0
          "
        />

      </div>

      {/* Grid */}
      <div className="grid gap-7 lg:grid-cols-2">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group relative overflow-hidden rounded-3xl
              border border-cyan-400/20
              bg-slate-900/40 p-7
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
              hover:border-cyan-300/40
              hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
            "
          >

            {/* Glow */}
            <div
              className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-br
                from-cyan-400/5 to-violet-500/5
                opacity-0 blur-2xl
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10 space-y-6">

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
              <div className="space-y-3">

                <h3 className="text-3xl font-bold text-slate-100">
                  {project.title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {project.description}
                </p>

              </div>

              {/* Mini Highlights */}
              <div className="flex flex-wrap gap-3">

                {project.highlights.slice(0, 2).map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl border border-cyan-400/15
                      bg-slate-950/40 px-4 py-2
                      text-sm text-slate-300
                    "
                  >
                    {item}
                  </div>
                ))}

              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-4">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-cyan-300/90"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">

                {/* Details */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="
                    rounded-xl border border-cyan-400/20
                    px-5 py-3 text-sm text-cyan-300
                    transition-all duration-300
                    hover:border-violet-400
                    hover:text-violet-300
                  "
                >
                  View Details
                </button>

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
        ))}

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
