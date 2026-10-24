import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Facebook, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedWrapper from "./AnimatedWrapper";

const roles = [
  "Web Developer",
  "Graphic Designer",
  "IT Specialist",
  "Freelancer",
];

export default function Landing() {
  const [roleIndex, setRoleIndex] = useState(0);
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    const card = cardRef.current;
    if (!card || event.pointerType !== "mouse") return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(x * 8).toFixed(2)}deg`);
    card.style.setProperty("--shift-x", `${(-x * 14).toFixed(1)}px`);
    card.style.setProperty("--shift-y", `${(-y * 14).toFixed(1)}px`);
    card.style.setProperty("--glare-x", `${((x + 0.5) * 100).toFixed(0)}%`);
    card.style.setProperty("--glare-y", `${((y + 0.5) * 100).toFixed(0)}%`);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;

    ["tilt-x", "tilt-y", "shift-x", "shift-y", "glare-x", "glare-y"].forEach(
      (name) => card.style.removeProperty(`--${name}`)
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#11182f] px-6 pb-16 pt-28 text-white md:px-16 lg:px-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-blue-500/15 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-yellow-400/[0.07] blur-[90px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              <span className="h-px w-8 bg-yellow-400" />
              Hello, I’m
            </p>
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Dionisio
              <span className="block text-yellow-400">Miñano.</span>
            </h1>
            <p className="mt-6 min-h-8 text-xl font-medium text-slate-300 sm:text-2xl">
              {roles[roleIndex]}
              <span className="ml-1 inline-block h-6 w-px animate-pulse bg-yellow-400 align-middle" />
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I design and build thoughtful digital experiences—bringing
              together clean code, considered visuals, and practical problem
              solving.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-[#11182f] transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              >
                Let’s work together
                <ArrowRight size={17} />
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore my work
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <span className="mr-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Find me
              </span>
              <a
                href="https://www.facebook.com/profile.php?id=100008790690017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-yellow-400 hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dionisio-mi%C3%B1ano-96081227b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-yellow-400 hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedWrapper direction="right">
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-blue-500/20 blur-3xl"
            />
            <div className="[perspective:1000px]">
              <div
                ref={cardRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={resetTilt}
                className="portrait-card group relative aspect-[10/11] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#1e2749] shadow-2xl shadow-black/30 will-change-transform motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:[transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-blue-500/20"
              >
                <img
                  src="/Me%20New.png"
                  alt="Portrait of Dionisio Miñano"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-[48%_30%] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:[transform:translate3d(var(--shift-x,0px),var(--shift-y,0px),0)_scale(1.1)] motion-safe:group-hover:[transform:translate3d(var(--shift-x,0px),var(--shift-y,0px),0)_scale(1.16)]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_var(--glare-x,50%)_var(--glare-y,30%),rgba(255,255,255,0.55),transparent_55%)]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#11182f]/95 via-[#11182f]/45 to-transparent px-5 pb-5 pt-20 text-sm font-medium text-slate-200 sm:px-6 sm:pb-6">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-yellow-300">
                    Web Developer · Designer
                  </span>
                  <span className="mt-1 block">Building thoughtful digital work.</span>
                </span>
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#11182f]/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Negros Occidental, PH
                </span>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
