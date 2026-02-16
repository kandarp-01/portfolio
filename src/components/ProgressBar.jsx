import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ width: `${scroll}%` }}
      className="fixed top-0 left-0 h-[3px] z-[9999]
                 bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_15px_rgba(56,189,248,0.8)]
                 transition-all duration-150 rounded-full"
    />
  );
}
