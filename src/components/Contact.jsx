import {
  Mail,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="space-y-10">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-3xl font-semibold tracking-wide">

          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Contact
          </span>

        </h2>

        <div
          className="
            mx-auto mt-2 h-[3px] w-28 rounded-full
            bg-gradient-to-r from-cyan-400 to-violet-500
            shadow-[0_0_20px_rgba(56,189,248,0.7)]
          "
        />

      </div>

      {/* Main Container */}
      <div
        className="
          group relative overflow-hidden rounded-3xl
          border border-cyan-400/20
          bg-slate-900/40 p-8
          backdrop-blur-xl
          transition-all duration-300
          hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
        "
      >

        {/* Glow */}
        <div
          className="
            absolute inset-0 rounded-3xl
            bg-gradient-to-r from-cyan-400/10 to-violet-500/10
            opacity-0 blur-2xl
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="space-y-3">

              <h3 className="text-2xl font-semibold text-slate-100">
                Let’s Connect
              </h3>

              <p className="max-w-md leading-relaxed text-slate-400">
                I’m open to discussing software development opportunities,
                internships and collaborative projects related to Python,
                web development and problem solving.
              </p>

            </div>

            {/* Contact Info */}
            <div className="space-y-4">

              <a
                href="mailto:kandarp1415@gmail.com"
                className="
                  flex items-center gap-4 rounded-2xl
                  border border-cyan-400/20
                  bg-slate-950/40 p-4
                  transition-all duration-300
                  hover:border-violet-400
                "
              >

                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl bg-cyan-400/10
                  "
                >
                  <Mail size={20} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <p className="text-sm text-slate-200">
                    kandarp1415@gmail.com
                  </p>
                </div>

              </a>

              <div
                className="
                  flex items-center gap-4 rounded-2xl
                  border border-cyan-400/20
                  bg-slate-950/40 p-4
                "
              >

                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl bg-cyan-400/10
                  "
                >
                  <MapPin size={20} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Location
                  </p>

                  <p className="text-sm text-slate-200">
                    Lucknow, India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">

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

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              rounded-3xl border border-cyan-400/20
              bg-slate-950/40 p-6
            "
          >

            <form className="space-y-5">

              {/* Name */}
              <div className="space-y-2">

                <label className="text-sm text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full rounded-xl border border-cyan-400/20
                    bg-slate-900/60 px-4 py-3
                    text-sm text-slate-200 outline-none
                    transition-all duration-300
                    focus:border-cyan-300
                  "
                />

              </div>

              {/* Email */}
              <div className="space-y-2">

                <label className="text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full rounded-xl border border-cyan-400/20
                    bg-slate-900/60 px-4 py-3
                    text-sm text-slate-200 outline-none
                    transition-all duration-300
                    focus:border-cyan-300
                  "
                />

              </div>

              {/* Message */}
              <div className="space-y-2">

                <label className="text-sm text-slate-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full resize-none rounded-xl
                    border border-cyan-400/20
                    bg-slate-900/60 px-4 py-3
                    text-sm text-slate-200 outline-none
                    transition-all duration-300
                    focus:border-cyan-300
                  "
                />

              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full rounded-xl
                  bg-gradient-to-r from-cyan-400 to-violet-500
                  px-6 py-3 text-sm font-semibold text-slate-950
                  transition-all duration-300
                  hover:scale-[1.02]
                  shadow-[0_0_25px_rgba(56,189,248,0.3)]
                "
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
