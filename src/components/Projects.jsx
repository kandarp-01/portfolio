import {
  Github,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
  title: "Interactive SQL Playground",

  category: "Full Stack",

  short:
    "Interactive web platform for practicing and executing SQL queries in real time.",

  description:
    "Developed a responsive SQL playground that allows users to write, execute and test SQL queries through an interactive web interface with real-time database interaction and schema exploration.",

  highlights: [
    "Built full-stack application using React and FastAPI",
    "Implemented real-time SQL query execution workflow",
    "Added schema visualization and database exploration support",
    "Integrated backend APIs for query processing and result handling",
    "Implemented input sanitization for safer query execution",
    "Designed responsive developer-focused UI for SQL practice and learning",
  ],

  tech: [
    "React",
    "FastAPI",
    "MySQL",
    "REST APIs",
  ],

  metrics: [
    "Real-time query execution",
    "REST API integration",
    "Responsive full-stack application",
  ],

  github:
    "https://github.com/kandarp-01/interactive-sql-playground",

  demo:
    "https://sql-play-front.vercel.app/",
},

    {
  title: "Toxic Comment Classifier",

  category: "Machine Learning",

  short:
    "Multi-label toxic comment classification system using NLP preprocessing and machine learning models.",

  description:
    "Built a toxic comment classification pipeline using TF-IDF vectorization and traditional machine learning techniques to identify toxic, obscene and abusive comments from online discussions.",

  highlights: [
    "Worked with Jigsaw Toxic Comment dataset containing 150k+ comments",
    "Implemented preprocessing pipeline using regex cleaning and TF-IDF vectorization",
    "Handled severe class imbalance using SMOTE and back-translation augmentation",
    "Benchmarked Logistic Regression, Naive Bayes and LinearSVC models",
    "Achieved best performance using LinearSVC with 97% accuracy",
    "Designed multi-label classification workflow for toxicity detection",
  ],

  tech: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "NLP",
  ],

  metrics: [
    "150k+ comments dataset",
    "97% model accuracy",
    "Multi-label classification",
  ],

  github:
    "https://github.com/kandarp-01/toxic-comment-classifier",

  demo:
    "https://toxicguard.vercel.app/",
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

        <div
          className="
            mt-2 h-1 w-24 rounded-full
            bg-gradient-to-r from-cyan-400 to-violet-500
            shadow-[0_0_20px_rgba(56,189,248,0.7)]
            mx-auto md:ml-0
          "
        />

      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 lg:grid-cols-2">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group relative overflow-hidden rounded-2xl
              border border-cyan-400/20
              bg-slate-900/40 p-6
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]
            "
          >

            {/* Glow */}
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-cyan-400/10 to-violet-500/10
                opacity-0 blur-2xl
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10 space-y-5">

              {/* Top */}
              <div className="space-y-3">

                {/* Category */}
                <span
                  className="
                    inline-block rounded-full
                    border border-cyan-400/20
                    bg-slate-950/50 px-3 py-1
                    text-xs text-cyan-300
                  "
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-slate-100">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-slate-400">
                  {project.description}
                </p>

              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3">

                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="
                      rounded-xl border border-cyan-400/20
                      bg-slate-950/40 px-3 py-2
                      text-sm text-slate-200
                    "
                  >
                    {metric}
                  </div>
                ))}

              </div>

              {/* Highlights */}
              <div className="space-y-3">

                <h4 className="text-sm font-semibold tracking-wide text-cyan-300">
                  Key Highlights
                </h4>

                <div className="space-y-2">

                  {project.highlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >

                      <ChevronRight
                        size={16}
                        className="mt-[2px] text-cyan-300"
                      />

                      <span>{point}</span>

                    </div>
                  ))}

                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-xl border border-cyan-400/20
                      bg-slate-950/50 px-3 py-2
                      text-sm text-cyan-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">

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
                    hover:scale-105
                  "
                >
                  <Github size={18} />
                  GitHub
                </a>

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
                    shadow-[0_0_25px_rgba(56,189,248,0.3)]
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

      {/* Bottom Note */}
      <div className="text-center">

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400">
          I enjoy building practical software projects that combine clean UI,
          strong backend fundamentals and problem-solving oriented development.
        </p>

      </div>
    </section>
  );
}
