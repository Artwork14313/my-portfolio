import { useEffect, useState } from "react";
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
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-blue-500/15 blur-3xl" />
            <img
              src="/programmer-vector4.png"
              alt=""
              className="relative z-10 mx-auto w-full drop-shadow-2xl"
            />
            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#1e2749]/80 px-4 py-2 text-xs font-medium text-slate-200 shadow-xl backdrop-blur sm:bottom-8 sm:left-4 sm:translate-x-0 sm:text-sm">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Based in Negros Occidental, PH
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
