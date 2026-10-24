import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#11182f] px-6 py-6 text-white md:px-16 lg:px-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">
          © {year} Dionisio Miñano Jr. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
