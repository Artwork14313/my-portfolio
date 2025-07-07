import React, { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight } from "lucide-react";
import AnimatedWrapper from "./AnimatedWrapper";

const Landing = () => {
  const roles = [
    "Web Developer.",
    "Graphic Designer.",
    "Virtual Assistant.",
    "Tech Support.",
  ];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // trigger animation
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setAnimate(false); // reset animation
      }, 700); // duration must match the animation below
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-[#1e2749] text-white px-6 md:px-16 lg:px-32 2xl:px-105">
      <div class="grid md:grid-cols-2 md:gap-10 items-start pb-10">
        <div className="md:hidden block">
          <AnimatedWrapper direction="left">
            <img
              src="/programmer-vector3.png"
              alt="Programmer Vector"
              className="w-full max-w-sm"
            />
          </AnimatedWrapper>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl md:mt-10">
            <p className="text-base text-white mb-2">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              Dionisio Miñano<span className="text-transparent">.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6 h-8">
              I'm a Freelance{" "}
              <span
                className={`inline-block text-yellow-400 transform transition-transform duration-700 ease-in-out ${
                  animate
                    ? "-translate-y-3 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {roles[index]}
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              I'm currently focused on expanding my experience
              <br />
              designing and developing high performing websites.
            </p>

            <div className="flex flex-row gap-2">
              <div className="hover:inset-shadow-sm hover:inset-shadow-indigo-500 mt-5 w-auto px-3 h-auto transition duration-700 ease-in-out hover:bg-white hover:text-[#1e2749] border-2 border-white rounded-r-xl hover:rounded-full flex items-center justify-center group">
                <div
                  onClick={() => {
                    const offset = -64; // Adjust this value based on your header height
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      const elementPosition =
                        contactSection.getBoundingClientRect().top +
                        window.pageYOffset;
                      const offsetPosition = elementPosition + offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-3xl cursor-pointer -translate-x-1 group-hover:translate-x-3 transition duration-300 ease-in-out flex-row"
                >
                  Contact
                </div>
                <span className="group-hover:invisible transition duration-300 ease-in-out">
                  <ArrowRight />
                </span>
              </div>

              <div className="mt-5 w-10 h-10 bg-blue-900 hover:bg-white hover:text-[#1e2749] border-2 border-white rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:inset-shadow-sm hover:inset-shadow-indigo-500">
                <a
                  href="https://www.facebook.com/profile.php?id=100008790690017"
                  target="_blank"
                  className="text-4xl font-bold"
                >
                  f
                </a>
              </div>

              <div className="mt-5 w-10 h-10 bg-blue-600 hover:bg-white hover:text-[#1e2749] border-2 border-white rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:inset-shadow-sm hover:inset-shadow-indigo-500">
                <a
                  href="https://www.linkedin.com/in/dionisio-mi%C3%B1ano-96081227b"
                  target="_blank"
                  className="text-3xl font-bold"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="hidden md:block ml-40">
          <AnimatedWrapper direction="right">
            <img
              src="/programmer-vector4.png"
              alt="Programmer Vector"
              className="w-full max-w-sm"
            />
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default Landing;
