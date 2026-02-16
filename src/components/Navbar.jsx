import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  // ScrollSpy effect for active highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

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

  return (
    <header className="fixed left-1/2 top-4 z-30 w-full max-w-6xl -translate-x-1/2 px-4">
      <nav
        className="
          group flex items-center justify-between rounded-full
          border border-cyan-400/40 bg-slate-900/40 backdrop-blur-xl
          px-6 py-3 shadow-[0_0_35px_rgba(56,189,248,0.45)]
          transition-all duration-300 hover:shadow-[0_0_55px_rgba(56,189,248,0.9)] hover:-translate-y-1
        "
      >
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide select-none">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
            KANDARP
          </span>
        </div>

        {/* Links */}
        <div className="hidden items-center gap-6 text-xs md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative font-medium tracking-wide transition-all duration-300
                ${active === link.href ? "text-cyan-300" : "text-slate-200/80"}
              `}
            >
              {link.label}
              <span
                className={`
                  absolute left-0 right-0 mx-auto -bottom-1 h-[2px] rounded-full
                  bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]
                  ${active === link.href ? "w-full" : "w-0"}
                `}
              />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
