import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { saveAs } from "file-saver";

const About = () => {
  const downloadResume = () => {
    saveAs(process.env.PUBLIC_URL + "/resume.pdf", "resume.pdf");
  };
  return (
    <section id="about" className="bg-slate-100 body-font shadow-xl">
      <div className="container flex flex-col items-center max-w-5xl px-8 py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="object-cover object-center rounded-md shadow-md"
            alt="profile of garon wearing a mask"
            src="./images/about_profile.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed text-slate-700">
            My name is Garon Fok, and I'm a software engineer based in the San
            Francisco Bay Area. My primary interests are in full-stack
            development, as well as working with RESTful APIs and databases.
            When I'm not coding, I'm also a musician who teaches lessons in my
            free time. I am currently looking for roles where I can continue to
            develop my abilities and learn about and work with the latest
            frameworks and tools.
          </p>
            <div className="grid-cols-2 gap-8 sm:grid">
            <button onClick={downloadResume} className="px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-100 text-cyan-900 hover:bg-slate-200">
              Resume
              <FontAwesomeIcon className="pl-3" icon={solid("download")} />
            </button>
            <button
              type="button"
              onClick={() =>
                (window.location.href = "mailto:fokgaron@gmail.com")
              }
              className="text-white px-3 py-1.5 rounded-lg bg-cyan-700 hover:bg-cyan-900 shadow-md"
            >
              Contact Me
              <FontAwesomeIcon className="pl-3" icon={solid("chevron-right")} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
