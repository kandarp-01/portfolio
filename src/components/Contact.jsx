import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="space-y-10 relative">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
        <p className="mt-3 text-sm text-slate-300/90">
          Feel free to reach out for opportunities, collaboration or work inquiries.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 md:grid-cols-2">

        {/* LEFT SIDE INFO BOX */}
        <div
          className="
            group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-6
            shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-500
            hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(56,189,248,1)]
          "
        >
          {/* Glow overlay */}
          <div
            className="
              absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25
              blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
            "
          />

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
              Contact Information
            </h3>

            <div className="space-y-5 mt-6 text-sm">
              <p className="flex items-center gap-3 text-slate-200">
                <Mail size={18} className="text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                <a href="mailto:kandarp1415@gmail.com" className="hover:text-cyan-300 transition">
                  kandarp1415@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3 text-slate-200">
                <MapPin size={18} className="text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                Lucknow, India
              </p>

              <p className="flex items-center gap-3 text-slate-200">
                <Phone size={18} className="text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                +91 — Available on request
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM BOX */}
        <form
          className="
            group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-6 space-y-5
            shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-500
            hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(56,189,248,1)]
          "
        >
          {/* Glow overlay */}
          <div
            className="
              absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25
              blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
            "
          />

          <div className="relative z-10 space-y-5">

            {/* NAME FIELD */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-slate-300">Your Name</label>
              <input
                type="text"
                className="
                  rounded-xl border border-cyan-400/30 bg-slate-950/40 px-4 py-3 text-sm text-slate-200 outline-none transition
                  focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(56,189,248,0.7)]
                "
                placeholder="Enter name"
              />
            </div>

            {/* EMAIL FIELD */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-slate-300">Your Email</label>
              <input
                type="email"
                className="
                  rounded-xl border border-cyan-400/30 bg-slate-950/40 px-4 py-3 text-sm text-slate-200 outline-none transition
                  focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(56,189,248,0.7)]
                "
                placeholder="Enter email"
              />
            </div>

            {/* MESSAGE FIELD */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-slate-300">Message</label>
              <textarea
                rows="4"
                className="
                  rounded-xl border border-cyan-400/30 bg-slate-950/40 px-4 py-3 text-sm text-slate-200 outline-none resize-none transition
                  focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(56,189,248,0.7)]
                "
                placeholder="Type your message"
              />
            </div>

            {/* BUTTON */}
            <button
              type="button"
              className="
                flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3
                text-sm font-semibold text-slate-900 shadow-[0_0_30px_rgba(56,189,248,0.8)] transition hover:scale-110 active:scale-95
              "
            >
              Send Message <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
