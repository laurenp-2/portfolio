import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 ml-20 lg:ml-64">
        {activeSection === "home" && (
          <Hero setActiveSection={setActiveSection} />
        )}
        {activeSection === "about" && <About />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
}