import { projects } from "../../data/personal";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="flex flex-col w-full mb-20">
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Personal Projects
          </h1>
          <p className="mx-auto text-base leading-relaxed text-slate-700 lg:w-2/3">
            Here's some of the things I've built in my spare time!
          </p>
        </div>
        <div className="flex flex-wrap justify-center m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center p-4 sm:w-1/2"
            >
              <div className="max-w-sm duration-100 ease-out bg-white rounded-md shadow-md hover:-translate-y-2 hover:bg-slate-100 hover:shadow-lg">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h5>
                  <p className="mb-3 text-sm text-slate-500">
                    {project.builtWith}
                  </p>
                  <p className="mb-3 text-slate-700">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
