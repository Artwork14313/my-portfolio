import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const designs = [
  { src: "/Ultrasound.jpg", alt: "Ultrasound service promotional design" },
  { src: "/Men's Health Check.jpg", alt: "Men's health check promotional design" },
  { src: "/Pharmacy.jpg", alt: "Pharmacy promotional design" },
  { src: "/Tuli2025.jpg", alt: "Tuli 2025 event design" },
  { src: "/X-mas.jpg", alt: "Christmas campaign design" },
  {
    src: "/Blood Letting CORAZON 2025.jpg",
    alt: "Blood letting event design for Corazon 2025",
  },
  { src: "/XRAYads.jpg", alt: "X-ray service promotional design" },
  { src: "/fluevaccine2024.jpg", alt: "Flu vaccine 2024 promotional design" },
];

export default function GraphicDesignPortfolio() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] px-6 pb-20 pt-28 text-[#11182f] md:px-16 md:pb-28 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              <span className="h-px w-8 bg-blue-700" />
              Selected creative work
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Graphic design
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A collection of promotional graphics, event posters, and visual
              communication created for local organizations and campaigns.
            </p>
          </div>
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#11182f] transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {designs.map((design) => (
            <figure
              key={design.src}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/[0.08]"
            >
              <img
                src={design.src}
                alt={design.alt}
                loading="lazy"
                className="h-auto w-full rounded-xl"
              />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
