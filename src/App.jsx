import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import GraphicDesignPortfolio from "./components/GraphicDesignPortfolio";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function MainContent() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/graphic-design-portfolio";

  const landingRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref, offset = -64) => {
    if (!ref.current) return;

    window.scrollTo({
      top: ref.current.getBoundingClientRect().top + window.scrollY + offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header
        onScrollTo={{
          home: () => scrollToSection(landingRef),
          projects: () => scrollToSection(projectsRef),
          about: () => scrollToSection(aboutRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      {!isPortfolioPage && (
        <main>
          <div ref={landingRef} id="home" className="scroll-mt-16">
            <Landing />
          </div>
          <div ref={projectsRef} id="projects" className="scroll-mt-16">
            <Projects />
          </div>
          <div ref={aboutRef} id="about" className="scroll-mt-16">
            <About />
          </div>
          <div ref={contactRef} id="contact" className="scroll-mt-16">
            <Contact />
          </div>
        </main>
      )}

      <Routes>
        <Route path="/" element={null} />
        <Route
          path="/graphic-design-portfolio"
          element={<GraphicDesignPortfolio />}
        />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
