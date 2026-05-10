import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      setScrolled(window.scrollY > 20);

      links.forEach((link) => {
        const section = document.querySelector(link.href);

        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-full max-w-6xl -translate-x-1/2 px-4">

      <nav
        className={`
          relative flex items-center justify-between rounded-2xl
          border border-cyan-400/20
          backdrop-blur-xl
          transition-all duration-300
          ${
            scrolled
              ? "bg-slate-900/80 shadow-[0_0_35px_rgba(56,189,248,0.25)]"
              : "bg-slate-900/50"
          }
          px-5 py-4
        `}
      >

        {/* Logo */}
        <a
          href="#home"
          className="
            text-lg font-semibold tracking-wide
            transition hover:opacity-90
          "
        >
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            KD.
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative text-sm font-medium transition-all duration-300
                ${
                  active === link.href
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-200"
                }
              `}
            >
              {link.label}

              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px]
                  rounded-full bg-gradient-to-r
                  from-cyan-400 to-violet-500
                  transition-all duration-300
                  ${
                    active === link.href
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }
                `}
              />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Kandarp_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              ml-2 flex items-center gap-2 rounded-xl
              bg-gradient-to-r from-cyan-400 to-violet-500
              px-4 py-2 text-sm font-semibold text-slate-950
              transition hover:scale-105
              shadow-[0_0_20px_rgba(56,189,248,0.35)]
            "
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex items-center justify-center rounded-lg
            border border-cyan-400/20
            p-2 text-cyan-300
            transition hover:bg-cyan-400/10
            md:hidden
          "
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            absolute left-0 top-[110%] w-full overflow-hidden rounded-2xl
            border border-cyan-400/20
            bg-slate-900/95 backdrop-blur-xl
            transition-all duration-300 md:hidden
            ${
              menuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 border-transparent"
            }
          `}
        >

          <div className="flex flex-col p-4">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  rounded-xl px-4 py-3 text-sm font-medium transition
                  ${
                    active === link.href
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-slate-800/60"
                  }
                `}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href="/Kandarp_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                mt-3 flex items-center justify-center gap-2 rounded-xl
                bg-gradient-to-r from-cyan-400 to-violet-500
                px-4 py-3 text-sm font-semibold text-slate-950
              "
            >
              <FileText size={16} />
              View Resume
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
}
