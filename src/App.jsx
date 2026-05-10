import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div
      className="
        relative min-h-screen overflow-x-hidden
        bg-slate-950 text-slate-100
      "
    >

      {/* Scroll Progress */}
      <ProgressBar />

      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Top Glow */}
        <div
          className="
            absolute left-1/2 top-0 h-[28rem] w-[28rem]
            -translate-x-1/2 rounded-full
            bg-cyan-400/15 blur-[140px]
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute bottom-0 right-0 h-[24rem] w-[24rem]
            rounded-full bg-violet-500/15 blur-[140px]
          "
        />

        {/* Side Accent */}
        <div
          className="
            absolute left-0 top-1/3 h-[18rem] w-[18rem]
            rounded-full bg-cyan-500/10 blur-[120px]
          "
        />

      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main
          className="
            space-y-28 pt-24
            md:space-y-36
          "
        >

          <Hero />

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Achievements />

          <Contact />

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}

export default App;
