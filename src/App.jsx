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
    <div className="bg-slate-950 text-slate-100 min-h-screen transition-colors duration-500">

      {/* 🔥 Scroll Progress Bar */}
      <ProgressBar />

      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12">
        <Navbar />

        <main className="pt-24 space-y-24">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
