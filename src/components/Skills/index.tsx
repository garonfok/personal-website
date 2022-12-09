// src/components/Skills.tsx

import { skills } from "../../data/personal";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Technologies
          </h1>
          <p className="mx-auto text-base leading-relaxed text-slate-700 lg:w-3/4 xl:w-2/4">
            Here's some things I know how to use:
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 sm:mx-auto sm:mb-2 lg:w-4/5">
          {skills.map((skill) => (
            <div key={skill} className="w-full p-2 sm:w-1/2">
              <div className="flex items-center h-full p-4 rounded-lg shadow-md bg-cyan-900">
                <span className="font-medium text-white title-font">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
