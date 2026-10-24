import {
  ArrowDownToLine,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedWrapper from "./AnimatedWrapper";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "PHP",
  "Laravel",
  "Blade",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "GitHub",
  "Figma",
  "Photoshop",
  "Premiere Pro",
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#1e2749] px-6 py-20 text-white md:px-16 md:py-28 lg:px-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            <span className="h-px w-8 bg-yellow-400" />
            About me
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Thoughtful design.
            <span className="block text-yellow-400">Practical technology.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            I’m a web developer who enjoys turning ideas into useful, polished
            digital experiences. I bring together development, design, and
            hands-on IT experience to build for people and the way they work.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <AnimatedWrapper direction="left">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
              <div className="group relative aspect-[4/4.2] overflow-hidden">
                <img
                  src="/Me.jpg"
                  alt="Dionisio Miñano"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11182f] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#1e2749]/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Open to freelance opportunities
                  </span>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Dionisio Miñano
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Web Developer · Graphic Designer
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
                <p className="flex items-center gap-2 text-sm text-slate-300">
                  <MapPin size={16} className="shrink-0 text-yellow-400" />
                  Negros Occidental, Philippines
                </p>
                <a
                  href="/Mi%C3%B1ano_Resume.pdf"
                  download="Miñano_Resume.pdf"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-[#1e2749] transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                >
                  <ArrowDownToLine size={16} />
                  Download resume
                </a>
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper direction="right">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <BriefcaseBusiness size={19} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Experience
                    </p>
                    <p className="text-sm text-slate-300">2019 – Present</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  IT Specialist
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Lopez District Farmers Hospital Inc.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm leading-6 text-slate-300">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                    Developed the hospital website
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                    Manage IT infrastructure and employee support
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                    Create graphics for advertisements
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Education
                    </p>
                    <p className="text-sm text-slate-300">2014 – 2018</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  Bachelor of Science
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Information Technology
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">
                  Northern Negros State College of Science &amp; Technology
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:col-span-2 md:p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Tools of the trade
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">
                      Technologies &amp; creative tools
                    </h3>
                  </div>
                  <span className="hidden h-px flex-1 bg-white/10 sm:block" />
                </div>
                <ul className="flex flex-wrap gap-2" aria-label="Skills">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-yellow-400/50 hover:text-yellow-300 sm:text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
