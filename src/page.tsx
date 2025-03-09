import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Education from "./components/Education";
import FloatingNav from "./components/Floating-nav";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}
