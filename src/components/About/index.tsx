import React from "react";

const About = () => {
  return (
    <section id="about" className="body-font">
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
            I'm a musician at heart, but I have a love for discovering the how
            and why of everything around me. I love programming because it's a
            way to solve problems and to create solutions. When I'm not coding,
            I'm usually writing music, playing my euphonium and trombone, or
            playing with my dog.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
