import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedWrapper from "./AnimatedWrapper";

const projects = [
  {
    title: "LODiFHI Hospital Website",
    description:
      "A welcoming, responsive website that helps patients explore hospital services and find essential information.",
    image: "/lodifhiWebsite.png",
    alt: "Preview of the LODiFHI hospital website",
    technologies: ["React", "Tailwind CSS", "Netlify"],
    href: "https://lodifhisagay.netlify.app",
    action: "Visit website",
  },
  {
    title: "Disaster Response Management System",
    description:
      "A disaster response management system with decision-support tools, developed for the Escalante City DRRMO.",
    image: "/cdrrmoHome.png",
    alt: "Preview of the disaster response management system",
    technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    gallery: [
      "/cdrrmoHome.png",
      "/cdrrmoHome2.png",
      "/cdrrmoMedical.png",
      "/cdrrmoDSS.png",
    ],
  },
  {
    title: "AIDMAN",
    description:
      "A relief-goods management system designed to support faster, more organized distribution to residents.",
    image: "/AIDMANHome.png",
    alt: "Preview of the AIDMAN relief-goods management system",
    technologies: ["HTML", "PHP", "Bootstrap", "MySQL"],
    gallery: [
      "/AIDMAN.png",
      "/AIDMANHome.png",
      "/AIDMANInventory.png",
      "/AIDMANCalamity.png",
    ],
  },
];

function ProjectCard({ project, index, onShowGallery }) {
  return (
    <AnimatedWrapper direction={index % 2 === 0 ? "left" : "right"}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/[0.08]">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          {project.gallery && (
            <button
              type="button"
              onClick={onShowGallery}
              aria-label={`View ${project.title} screenshots`}
              className="absolute inset-0 flex items-center justify-center bg-[#11182f]/0 transition group-hover:bg-[#11182f]/50 focus-visible:bg-[#11182f]/50 focus-visible:outline-none"
            >
              <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#11182f] opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                View screenshots
              </span>
            </button>
          )}
          <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-xs font-semibold text-[#11182f] backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-xl font-semibold tracking-tight text-[#11182f]">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
            {project.description}
          </p>
          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label={`${project.title} technologies`}
          >
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {technology}
              </li>
            ))}
          </ul>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              {project.action}
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.gallery && (
            <button
              type="button"
              onClick={onShowGallery}
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              Explore project
              <ArrowUpRight size={16} />
            </button>
          )}
        </div>
      </article>
    </AnimatedWrapper>
  );
}

export default function Projects() {
  const [gallery, setGallery] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const activeImage = gallery?.images[imageIndex];

  useEffect(() => {
    if (!gallery) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setGallery(null);
      if (event.key === "ArrowRight") {
        setImageIndex((index) => (index + 1) % gallery.images.length);
      }
      if (event.key === "ArrowLeft") {
        setImageIndex(
          (index) => (index - 1 + gallery.images.length) % gallery.images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gallery]);

  const openGallery = (project) => {
    setImageIndex(0);
    setGallery({ title: project.title, images: project.gallery });
  };

  return (
    <section className="bg-[#f7f8fc] px-6 py-20 text-[#11182f] md:px-16 md:py-28 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              <span className="h-px w-8 bg-blue-700" />
              Selected work
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A few things I’ve built.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 md:text-base">
            A mix of web development and creative work, made to solve real
            problems and serve real people.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onShowGallery={() => openGallery(project)}
            />
          ))}

          <AnimatedWrapper direction="right">
            <article className="group flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-3xl bg-[#11182f] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                  Beyond the browser
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Visual design &amp; creative work
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Promotional graphics, event posters, and visual work made for
                  local organizations and campaigns.
                </p>
              </div>
              <Link
                to="/graphic-design-portfolio"
                onClick={() => window.scrollTo(0, 0)}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-[#11182f] transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              >
                Browse design work
                <ArrowRight size={16} />
              </Link>
            </article>
          </AnimatedWrapper>
        </div>
      </div>

      {gallery && activeImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#090d1c]/90 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setGallery(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${gallery.title} screenshots`}
            className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-[#11182f] p-4 shadow-2xl sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">{gallery.title}</h3>
                <p className="mt-1 text-xs text-slate-400">
                  Screenshot {imageIndex + 1} of {gallery.images.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setGallery(null)}
                aria-label="Close project screenshots"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <X size={19} />
              </button>
            </div>
            <img
              src={activeImage}
              alt={`${gallery.title}, screenshot ${imageIndex + 1}`}
              className="max-h-[68vh] w-full rounded-xl bg-white object-contain"
            />
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setImageIndex(
                    (index) =>
                      (index - 1 + gallery.images.length) % gallery.images.length
                  )
                }
                className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <ArrowLeft size={16} />
                Previous
              </button>
              <button
                type="button"
                onClick={() =>
                  setImageIndex((index) => (index + 1) % gallery.images.length)
                }
                className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
