import { createElement, useState } from "react";
import { ArrowUpRight, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedWrapper from "./AnimatedWrapper";

const contactLinks = [
  {
    label: "Call me",
    detail: "+63 915 871 3567",
    href: "tel:+639158713567",
    Icon: Phone,
  },
  {
    label: "Facebook",
    detail: "Connect on Facebook",
    href: "https://www.facebook.com/profile.php?id=100008790690017",
    Icon: Facebook,
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/dionisio-mi%C3%B1ano-96081227b",
    Icon: Linkedin,
    external: true,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}`);
    window.location.href = `mailto:dionisiominano@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] px-6 py-20 text-[#11182f] md:px-16 md:py-28 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            <span className="h-px w-8 bg-blue-700" />
            Get in touch
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Have a project in mind?
            <span className="mt-2 block text-slate-500">
              Let’s make it happen.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            I’m open to freelance projects and full-time opportunities. Send a
            note about what you’re working on, or reach out through one of my
            profiles.
          </p>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <AnimatedWrapper direction="left">
            <div>
              <h3 className="text-lg font-semibold">Let’s connect</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Whether you have a question, a project in mind, or just want to
                say hello, I’d be glad to hear from you.
              </p>
              <ul className="mt-7 space-y-3">
                {contactLinks.map(({ label, detail, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex min-h-16 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                        {createElement(Icon, { size: 18 })}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium text-slate-500">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-[#11182f]">
                          {detail}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-slate-400 transition group-hover:text-blue-700"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:dionisiominano@gmail.com"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                <Mail size={16} />
                dionisiominano@gmail.com
              </a>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper direction="right">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/[0.04] sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Send me a message</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Your email app will open with your message ready to send.
                </p>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#11182f] outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me a little about what you have in mind..."
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-[#11182f] outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#11182f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Open email
                  <ArrowUpRight size={17} />
                </button>
              </form>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
