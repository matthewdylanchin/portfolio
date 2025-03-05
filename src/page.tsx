import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Services from "./components/services";
import Education from "./components/Education";
import FloatingNav from "./components/Floating-nav";
import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Education />
    </main>
  );
}
