import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedSection from "./AnimatedSection";
import AnimatedWrapper from "./AnimatedWrapper";

const Contact = () => {
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && message) {
      const subject = encodeURIComponent("Let's Connect");
      const body = encodeURIComponent(message + "\n\nFrom: " + name);
      window.location.href = `mailto:dionisiominano@gmail.com?subject=${subject}&body=${body}`;
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div
      className="min-h-screen bg-[#f9f6ee] text-white px-6 md:px-16 lg:px-32 2xl:px-105"
      id="contact"
    >
      <AnimatedSection>
        <h1 className=" font-bold text-3xl text-[#1e2749] py-5">
          Let's Connect
        </h1>
      </AnimatedSection>
      <div class="grid md:grid-cols-2 gap-10 items-start pb-10">
        <AnimatedWrapper direction="left">
          <p class="text-gray-700 mb-6 leading-relaxed">
            I'm open to{" "}
            <span class="font-semibold text-blue-600">
              full-time opportunities
            </span>{" "}
            &{" "}
            <span class="font-semibold text-blue-600">freelance projects</span>
            .
            <br />
            My inbox is always open — whether you have a question,
            <br />
            a project in mind, or just want to say hello,
            <br />
            I'll do my best to get back to you!
          </p>
          <ul className="space-y-4 text-xl sm:w-1/2 ">
            <li>
              <a
                href="tel:+639158713567"
                className="text-[#1e2749] border-[#1e2749] border-2 hover:bg-[#1e2749] flex items-center hover:translate-x-10 hover:text-white px-5 py-1 rounded-lg hover:rounded-full space-x-2 transition duration-500 ease-in-out"
              >
                <FontAwesomeIcon icon="phone" />
                <span>+63 915 871 3567</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100008790690017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e2749] border-[#1e2749] border-2 hover:bg-[#1e2749] flex items-center hover:translate-x-10 hover:text-white px-5 py-1 rounded-lg hover:rounded-full space-x-2 transition duration-500 ease-in-out"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dionisio-mi%C3%B1ano-96081227b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e2749] border-[#1e2749] border-2 hover:bg-[#1e2749] flex items-center hover:translate-x-10 hover:text-white px-5 py-1 rounded-lg hover:rounded-full space-x-2 transition duration-500 ease-in-out"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </AnimatedWrapper>
        <AnimatedWrapper direction="right">
          <div className="mx-auto bg-white rounded-tl-2xl rounded-br-2xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#1e2749]">
              Send a Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus-within:outline-2 focus-within:outline-[#1e2749] transition duration-400 ease-in-out text-[#1e2749]"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus-within:outline-2 focus-within:outline-[#1e2749] transition duration-400 ease-in-out text-[#1e2749]"
                required
              />
              <button
                type="submit"
                className="hover:bg-blue-600 text-white px-5 py-2 rounded-lg bg-[#1e2749] transition duration-300 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Contact;
