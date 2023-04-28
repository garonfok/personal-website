import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => {
  return (
    <section id="about" className="bg-slate-100 body-font shadow-xl">
      <div className="container flex flex-col items-center max-w-5xl px-8 py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="object-cover object-center rounded-md shadow-md"
            alt="profile of garon"
            src="./images/about_profile.png"
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            About Me
          </h1>
          <div className="mb-8 leading-relaxed text-slate-700 gap-y-4 grid">
            <p>My name is Garon Fok, and I'm a software engineer based in the San Francisco Bay Area.
            </p>
            <p>I'm a full stack developer with development experience in TypeScript, ReactJS, NodeJS, PHP, and Laravel.
            </p>
            <p>I'm currently looking for roles and opportunities in which I can grow as a developer. If you're interested, feel free to send me an email!</p>
            <p>In my spare time, I also teach private music lessons in trumpet, trombone, euphonium, and tuba!</p>
            <a target="_blank" rel="noreferrer" href="https://github.com/garonfok" className="inline-block text-center items-center gap-x-4 text-xl justify-center w-full py-2 my-2 mx-auto text-white rounded-lg shadow-md bg-slate-900 hover:bg-slate-700">
              <FontAwesomeIcon icon={brands("github")} /> Follow me on GitHub <FontAwesomeIcon icon={solid("chevron-right")} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
