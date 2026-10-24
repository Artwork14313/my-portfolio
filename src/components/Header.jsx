import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";

const sections = ["home", "projects", "about", "contact"];

export default function Header({ onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isPortfolioPage = location.pathname === "/graphic-design-portfolio";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isPortfolioPage) return undefined;

    const observedSections = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isPortfolioPage]);

  const handleNavClick = (section) => {
    onScrollTo?.[section]?.();
    setMenuOpen(false);
  };

  const navItems = sections.map((section) => (
    <button
      key={section}
      type="button"
      onClick={() => handleNavClick(section)}
      aria-current={activeSection === section ? "location" : undefined}
      className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 ${
        activeSection === section
          ? "bg-white/10 text-yellow-300"
          : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
      }`}
    >
      {section}
    </button>
  ));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#11182f]/90 text-white backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-lg shadow-black/10" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <button
          type="button"
          onClick={() =>
            isPortfolioPage ? navigate("/") : handleNavClick("home")
          }
          aria-label="Dionisio Miñano — home"
          className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-sm font-extrabold tracking-tight text-[#11182f]">
            DM
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
            DIONISIO MIÑANO
          </span>
        </button>

        {!isPortfolioPage && (
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navItems}
          </nav>
        )}

        {isPortfolioPage ? (
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-yellow-400 hover:text-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {!isPortfolioPage && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`absolute inset-x-0 top-full border-b border-white/10 bg-[#11182f]/95 px-6 py-4 shadow-xl backdrop-blur-xl transition-all duration-200 md:hidden ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems}
          </div>
        </nav>
      )}
    </header>
  );
}
