import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Experience } from "./components/pages/Experience";
import { Home } from "./components/pages/Home";
import { Projects } from "./components/pages/Projects";

const titles: Record<string, string> = {
  "/": "Lauren Pothuru",
  "/about": "Lauren Pothuru — About",
  "/experience": "Lauren Pothuru — Experience",
  "/projects": "Lauren Pothuru — Projects",
  "/contact": "Lauren Pothuru — Contact",
};

function RouteShell() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = titles[location.pathname] ?? "Lauren Pothuru";
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header showWordmark={!isHome} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteShell />
    </BrowserRouter>
  );
}
