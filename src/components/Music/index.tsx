import { Tabs } from "./Tabs";

export const Music = () => {
  return (
    <section id="music" className="body-font">
      <div className="section-container">
        <div className="flex flex-col w-full mb-20">
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Music
          </h1>
          <p className="mx-auto text-base leading-relaxed text-slate-700 lg:w-2/3">
            Here is a list of musical works that I have either composed or
            arranged. If you'd like a copy of a score for study/academic
            purposes, feel free to contact me!
          </p>
        </div>
        <Tabs />
        <p className="mx-auto text-base leading-relaxed text-slate-700 lg:w-2/3">
          I also offer private lessons in trumpet, trombone, euphonium, tuba, ear training/music theory, and songwriting/composition. Please reach out to schedule your first lesson!
        </p>
      </div>
    </section>
  );
};
